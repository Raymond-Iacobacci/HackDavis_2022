
CUTOFF_LO = 4 # [m/s]
CUTOFF_HIGH = 5 # [m/s]
CP_MAX = 0.593 # [unitless]

# Convert from miles per hour to meters per second
def MPHtoMPS(mph):
    return mph * 0.44704

# Convert from meters per second to miles per hour
def MPStoMPH(mps):
    return mps / 0.44704

# Calculate the area of a circle (in meters^2)
def CircleArea(diam):
    return 3.1416/4 * diam**2

# Wind power (kinetic energy stored in the wind, in Watts)
def WindPower(rho, A, V):
    return 1/2 * rho * A * V**3

# Turbine power output (in Watts)
def TurbinePower(Pw, Cp):
    return Pw * Cp

# Compute the air density adjustment based on the elevation (in meters) and the temperature (in Celsius)
def AirDensity(elevationMeters, temperatureC):
    return (1.225 - 1.194e-4 * elevationMeters) * (273.15 + 15) / (273.15 + temperatureC)