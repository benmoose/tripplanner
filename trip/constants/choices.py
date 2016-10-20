"""
Travel Constants.
NEVER EVER CHANGE THE NUMERIC VALUES!!
"""

WALK = 0
TRAIN = 1
FLIGHT = 2
BOAT = 3
CYCLE = 4
BUS = 5
DRIVE = 6
TAXI = 7

TRAVEL_TYPES = (
    (WALK, 'Walk'),
    (TRAIN, 'Train'),
    (FLIGHT, 'Flight'),
    (BOAT, 'Boat'),
    (CYCLE, 'Cycle'),
    (BUS, 'Bus'),
    (DRIVE, 'Drive'),
    (TAXI, 'Taxi'),
)

TRAVEL_TO_FONTAWEOME = {
    'default': 'fa-street-view',
    WALK: 'fa-blind',
    TRAIN: 'fa-train',
    FLIGHT: 'fa-plane',
    BOAT: 'fa-ship',
    CYCLE: 'fa-bicycle',
    BUS: 'fa-bus',
    DRIVE: 'fa-car',
    TAXI: 'fa-taxi',
}
