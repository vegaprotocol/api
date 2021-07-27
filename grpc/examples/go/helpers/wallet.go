package helpers

import (
	"bufio"
	"bytes"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"os"
	"strings"
	"syscall"

	"code.vegaprotocol.io/go-wallet/service"

	"golang.org/x/term"
)

var token string
var pubkey string
var headers string
var tokenFile = "token.temp"
var ciArgs = "--ci"

func GetFromEnv(envVar string) string {
	ev := os.Getenv(envVar)
	if len(ev) == 0 {
		panic(fmt.Sprintf("%s is null or empty", envVar))
	}
	return ev
}

func existsInArgs(argVal string) bool {
	for i, a := range os.Args[1:] {
		fmt.Printf("Arg %d is %s\n", i+1, a)
		if a == argVal {
			return true
		}
	}
	return false
}

func getWalletServerUrl() string {
	return checkWalletUrl(GetFromEnv("WALLETSERVER_URL"))
}

func GetToken() string {
	if len(token) == 0 {
		return LoadToken()
	}
	return token
}

func LoadToken() string {
	if existsInArgs(ciArgs) {
		return PerformLogin()
	}
	if _, err := os.Stat(tokenFile); os.IsNotExist(err) {
		log.Fatal("Error: No token file found: try running \"go run login.go\"")
	}
	tokenData, err := ioutil.ReadFile(tokenFile)
	if err != nil {
		log.Fatal("Error: Could not read token from token file", err)
	}
	token = string(tokenData)
	return token
}

func GetPubKey() string {
	url := getWalletServerUrl() + "/api/v1/keys"
	req, err := http.NewRequest(http.MethodGet, url, nil)
	req.Header.Set("Authorization", "Bearer " + GetToken())

	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		log.Fatal("Error: Could not load public keys from wallet", err)
	}
	defer resp.Body.Close()

	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		log.Fatal("Error: Could not read public keys", err)
	}
	var keypair service.KeysResponse
	err = json.Unmarshal([]byte(body), &keypair)
	if err != nil {
		log.Fatal("Error: Could not convert public keys", err)
	}
	if len(keypair.Keys) == 0 {
		log.Fatal("No public keys found, do you need to create one?")
	}

	pk := keypair.Keys[0].Key
	fmt.Println("pubkey: ", pk)
	pubkey = pk
	return pubkey
}

func PerformLogin() string {
	walletServerUrl := getWalletServerUrl()
	walletName := os.Getenv("WALLET_NAME")
	walletPassphrase := os.Getenv("WALLET_PASSPHRASE")
	validUser := checkVar(walletName)
	validPass := checkVar(walletPassphrase)
	if existsInArgs(ciArgs) && !validUser {
		log.Fatal("Error: Missing environment variable WALLET_NAME")
	}
	if existsInArgs(ciArgs) && !validPass {
		log.Fatal("Error: Missing environment variable WALLET_PASSPHRASE")
	}
	if !validUser || !validPass {
		reader := bufio.NewReader(os.Stdin)

		fmt.Print("Enter Vega wallet username: ")
		username, err := reader.ReadString('\n')
		if err != nil {
			log.Fatal("Error: Could not read username from command line", err)
		}
		walletName = username

		fmt.Print("Vega wallet passphrase: ")
		bytePassword, err := term.ReadPassword(syscall.Stdin)
		if err != nil {
			log.Fatal("Error: Could not read password from command line", err)
		}
		fmt.Println()

		walletPassphrase = string(bytePassword)

		walletName = strings.TrimRightFunc(walletName, func(c rune) bool {
			//In windows newline is \r\n
			return c == '\r' || c == '\n'
		})
	}

	walletReq :=  &service.CreateLoginWalletRequest{Wallet: walletName, Passphrase: walletPassphrase}
	payload, err := json.Marshal(walletReq)
	if err != nil {
		log.Fatal(err)
	}
	req, err := http.NewRequest(
		http.MethodPost,
		walletServerUrl + "/api/v1/auth/token",
		bytes.NewBuffer(payload),
	)

	cli := &http.Client{}
	resp, err := cli.Do(req)
	if err != nil {
		log.Fatal("Error logging in (1): " + err.Error())
	}
	defer resp.Body.Close()

	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		log.Fatal("Error logging in (2): " + err.Error())
	}

	if resp.StatusCode != 200 {
		log.Fatal("Error logging in (3): ", string(body))
	}

	var res service.TokenResponse
	err = json.Unmarshal([]byte(body), &res)
	if err != nil {
		log.Fatal("Error logging in (4): " + err.Error())
	}

	if !existsInArgs(ciArgs) {
		f, err := os.Create(tokenFile)
		if err != nil {
			log.Fatal("Error: Could not write token file to disk (1). " + err.Error())
		}
		//err = f.Truncate(0)
		//_, err = f.Seek(0, 0)
		_, err = f.WriteString(res.Token)
		if err != nil {
			log.Fatal("Error: Could not write token file to disk (2). " + err.Error())
		}
		fmt.Println("GetToken saved to \"token.temp\", done.")
	}

	token = res.Token
	return token
}

func SignTransactionCommand(json string) ([]byte, error) {
	token := LoadToken()
	walletServerUrl := getWalletServerUrl()
	req, err := http.NewRequest(
		http.MethodPost,
		walletServerUrl + "/api/v1/command/sync",
		bytes.NewBufferString(json),
	)
	req.Header.Add("Authorization", "Bearer " + token)

	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		log.Fatal("Error: Sign Transaction command failed (1). " + err.Error())
	}
	defer resp.Body.Close()

	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		log.Fatal("Error: Sign Transaction command failed (2). " + err.Error())
	}

	if resp.StatusCode != 200 {
		log.Fatal("Error: Sign Transaction command failed (3). " + string(body))
	}

	return body, nil
}

func SignTransactionDeprecated(json string) ([]byte, error) {
	token := LoadToken()
	walletServerUrl := getWalletServerUrl()
	req, err := http.NewRequest(
		http.MethodPost,
		walletServerUrl + "/api/v1/messages",
		bytes.NewBufferString(json),
	)
	req.Header.Add("Authorization", "Bearer " + token)

	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		log.Fatal("Error: Sign Transaction command failed (1). " + err.Error())
	}
	defer resp.Body.Close()

	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		log.Fatal("Error: Sign Transaction command failed (2). " + err.Error())
	}

	if resp.StatusCode != 200 {
		log.Fatal("Error: Sign Transaction command failed (3). " + string(body))
	}

	return body, nil
}


func checkWalletUrl(url string) string {
	suffix := []string{"/api/v1/", "/api/v1", "/"}
	for _, s := range suffix {
		if strings.HasSuffix(url, s) {
			fmt.Println("There's no need to add ", s, " to WALLETSERVER_URL. Removing it.")
			return url[0 : len(url)-len(s)]
		}
	}
	return url
}

func checkVar(val string) bool {
	return val != "" && val != "example" && val != ">>" && val != "e.g."
}