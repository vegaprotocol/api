#!/usr/bin/python3

"""
Script language: Python3

Talks to:
- Vega node (REST)

Apps/Libraries:
- REST: requests (https://pypi.org/project/requests/)
"""

# Note: this file uses smart-tags in comments to section parts of the code to
# show them as snippets in our documentation. They are not necessary to be
# included when creating your own custom code.
#
# Example of smart-tags:
#  __something:
# some code here
# :something__

import requests
import json
import helpers

# Load REST Vega Node URL, this is set using 'source examples-config'
# located in the root folder of the api repository
node_url_rest = helpers.get_from_env("NODE_URL_REST")

#####################################################################################
#                        N E T W O R K   P A R A M E T E R S                        #
#####################################################################################

# __get_network_params:
# Request a list of network parameters configured on a Vega network
url = "{base}/network/parameters".format(base=node_url_rest)
response = requests.get(url)
helpers.check_response(response)
print("Network Parameters:\n{}".format(
    json.dumps(response.json(), indent=2, sort_keys=True)))
# :get_network_params__
