import numpy as np
import pandas as pd

def OneWeek(fpath, weekStart):
    df = pd.read_csv(fpath)
    return df.loc[weekStart:(weekStart+6)]

out = OneWeek('/home/nic/Desktop/Renewable-Energy-Farm/WeatherData/LondonBirmingham.csv', 2)

print(out.to_string())
print(type(out))