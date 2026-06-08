import socket

import urllib3.util.connection


def _use_ipv4() -> socket.AddressFamily:
    return socket.AF_INET


# skip ipv6 and force ipv4
urllib3.util.connection.allowed_gai_family = _use_ipv4
