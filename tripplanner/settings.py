# Set all common settings

from settings.common import *


# Get either local or production settings

try:
    from settings.local import *
except ImportError:
    from settings.production import *