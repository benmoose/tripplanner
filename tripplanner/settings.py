# Set all common settings

from _settings.common import *


# Get either local or production settings

try:
    from _settings.local import *
except ImportError:
    from _settings.production import *