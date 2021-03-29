import json
import sys


# https://stackoverflow.com/questions/7204805
def merge(a, b):
    """Merge b into a"""
    for key in b:
        if key in a:
            if isinstance(a[key], dict) and isinstance(b[key], dict):
                merge(a[key], b[key])
            else:
                a[key] = b[key]
        else:
            a[key] = b[key]
    return a


def main():
    o = dict()
    for arg in sys.argv[1:]:
        merge(o, json.load(open(arg)))

    print(json.dumps(o, indent=2, sort_keys=True))


if __name__ == "__main__":
    main()
