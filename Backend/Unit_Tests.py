from email.errors import HeaderMissingRequiredValue
from Physical_Functions import *

# Define a function to determine if `a` and `b` are approximately equal.
def ApproxEqual(a, b):
    return abs(a - b) < 1e-3

# Execute unit tests
assert ApproxEqual(MPHtoMPS(1), 0.44704)
assert ApproxEqual(MPStoMPH(25), 55.923407)
assert ApproxEqual(CircleArea(6), 28.27433)
assert ApproxEqual(WindPower(1.2, 10, 5), 750)
assert ApproxEqual(TurbinePower(750, 0.5), 375)
assert ApproxEqual(AirDensity(1000, 15), 1.1056)
assert ApproxEqual(AirDensity(0, 10), 1.24663)
assert ApproxEqual(AirDensity(1000, 10), 1.125123)
assert ApproxEqual(HubHeightAdjustment(5, 2, 10), 6.29394)

# Successful if the program reached this point!
print('Success!')