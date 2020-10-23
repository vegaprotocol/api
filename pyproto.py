import grpc_tools.protoc as gtp
import sys

"""
This script avoids the following warning.
$ python3 -m grpc_tools.protoc ...
RuntimeWarning: 'grpc_tools.protoc' found in sys.modules after import of
package 'grpc_tools', but prior to execution of 'grpc_tools.protoc'; this may
result in unpredictable behaviour
"""

if __name__ == "__main__":
    gtp.main(sys.argv)
