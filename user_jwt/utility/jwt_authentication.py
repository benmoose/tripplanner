import os  # TODO: get deets from env
import base64
import jwt

from django.http import JsonResponse


SECRET = 'O4Z8Ch4xU1gBCR7BelSiTd8cpkuxfoq8EeOZmv0l1ph-Uaf6TTHxV3hSQ03DT3nn'
CLIENT_ID = 'ooZNhO7RQ74DOwOMuNHBMxDYc5Z4LCaa'


def authenticate(code, detail):
    resp = JsonResponse({
        'code': code,
        'detail': detail,
    })
    resp.status_code = 401
    return resp


def decode_token(token):
    """Returns payload of token"""
    try:
        return jwt.decode(
            token,
            base64.b64decode(SECRET.replace('_', '/').replace('-', '+')),
            audience=CLIENT_ID
        )
    except jwt.ExpiredSignature:
        return authenticate('token expired', 'token has expired')
    except jwt.InvalidAudienceError:
        return authenticate('invalid audience', 'incorrect audience')
    except jwt.DecodeError:
        return authenticate('decode error', 'token signature is invalid')


def requires_login(f):
    """Checks request has valid HTTP AUTH header"""
    def wrap(request, *args, **kwargs):
        auth = request.META.get('HTTP_AUTHORIZATION', None)
        if not auth:
            return authenticate('invalid header',
                                'Authorization header not present')

        parts = auth.split()
        if parts[0].lower() != 'bearer':
            return authenticate('invalid header', 'Token not found')
        elif len(parts) is 1:
            return authenticate('invalid header', 'Token not found')
        elif len(parts) > 2:
            return authenticate('invalid header',
                                'Malformed Authorization header')

        token = parts[1]
        payload = decode_token(token)

        return f(request, *args, **kwargs)

    wrap.__doc__ = f.__doc__
    wrap.__name__ = f.__name__
    return wrap


def header_to_jwt(auth_header):
    return auth_header.replace('Bearer ', '')


def header_to_sub(auth_header):
    token = header_to_jwt(auth_header)
    payload = decode_token(token)
    return payload.get('sub')
