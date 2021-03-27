# See vega repo, blockchain/command.go
import enum


class CommandByte(enum.Enum):
    SubmitOrder = b"\x40"
    CancelOrder = b"\x41"
    AmendOrder = b"\x42"
    Withdraw = b"\x44"
    Propose = b"\x45"
    Vote = b"\x46"
    RegisterNode = b"\x47"
    NodeVote = b"\x48"
    NodeSignature = b"\x49"

    ChainEvent = b"\x50"


class CommandString(enum.Enum):
    SubmitOrder = "Submit Order"
    CancelOrder = "Cancel Order"
    AmendOrder = "Amend Order"
    Withdraw = "Withdraw"
    Propose = "Proposal"
    Vote = "Vote on Proposal"
    RegisterNode = "Register new Node"
    NodeVote = "Node Vote"
    NodeSignature = "Node Signature"

    ChainEvent = "Chain Event"
