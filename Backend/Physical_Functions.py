
CUTOFF_LO = 1 # [m/s]
CUTOFF_HIGH = 25 # [m/s]
CP_MAX = 0.593 # [unitless]
STABILITY = 0.143 # [unitless]

# Convert from miles per hour to meters per second
def MPHtoMPS(mph):
    return mph * 0.44704

# Convert from meters per second to miles per hour
def MPStoMPH(mps):
    return mps / 0.44704

# Calculate the area of a circle (in meters^2)
def CircleArea(diameter):
    return 3.1416/4 * diameter**2

# Wind power (kinetic energy stored in the wind, in Watts)
def WindPower(density, area, velocity):
    if velocity < CUTOFF_LO or velocity > CUTOFF_HIGH:
        return 0
    else:
        return 1/2 * density * area * velocity**3

# Turbine power output (in Watts)
def TurbinePower(windPower, coefficientOfPower):
    if coefficientOfPower > CP_MAX:
        raise Exception('Cp cannot be larger than ' + str(CP_MAX))
    else:
        return windPower * coefficientOfPower

# Compute the air density adjustment based on the elevation (in meters) and the temperature (in Celsius)
def AirDensity(elevation, temperature):
    return (1.225 - 1.194e-4 * elevation) * (273.15 + 15) / (273.15 + temperature)

# Compute the hub height adjustment using the wind profile power law
def HubHeightAdjustment(velocity, measuredElevation, targetElevation):
    return velocity * (targetElevation / measuredElevation) ** STABILITY
