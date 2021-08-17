"""
This file is here as an unexplained hack so that "v1" appears in "wallet".
The hack is not necessary for "commands", "events" or "oracles", despite them
having the same directory layout as "wallet".
"""

from . import v1

__all__ = ["v1"]
