"""
For production use!
Never include sensitive information in this file.
"""

import os


DEBUG = False
SECRET_KEY = os.environ.get('SECRET_KEY')
