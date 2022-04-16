
CUTOFF_LO = 4 # [m/s]
CUTOFF_HIGH = 5 # [m/s]

def MPHtoMPS(mph):
    return mph * 0.44704

def MPStoMPH(mps):
    return mps / 0.44704

# Test

print(str(MPHtoMPS(65)) + ' mph')

print(str(MPStoMPH(15)) + ' m/s')