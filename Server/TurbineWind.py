import numpy as np
import pandas as pd
import seaborn as sns
from sklearn import *
import matplotlib.pyplot as plot

POWER_MIN = 1
POWER_MAX = 3400
SPEED_MIN = 1
SPEED_MAX = 15

data = pd.read_csv('/home/nic/Desktop/Renewable-Energy-Farm/WeatherData/T1.csv')
filter = (data['LV ActivePower (kW)'] > POWER_MIN) & (data['LV ActivePower (kW)'] < POWER_MAX) & (data['Wind Speed (m/s)'] > SPEED_MIN) & (data['Wind Speed (m/s)'] < SPEED_MAX)
rejected_data = data[~filter]
data = data[filter]
train, test = model_selection.train_test_split(data, test_size = 0.1)
#wind direction doesn't make much difference, degree 6 is best for fitting polynomial
trainx = train.iloc[:, [2]]
trainy = train.iloc[:, 1]
testx = test.iloc[:, [2]]
testy = test.iloc[:, 1]

model = linear_model.LinearRegression()
model.fit(trainx, trainy)
print('Linear R^2:     ' + str(model.score(testx, testy)))

from sklearn.preprocessing import PolynomialFeatures
poly = PolynomialFeatures(degree = 2)
xpoly = poly.fit_transform(trainx)
modelpoly = linear_model.LinearRegression().fit(xpoly, trainy)
print('Polynomial R^2: ' + str(modelpoly.score(poly.fit_transform(testx), testy)))

coefs = modelpoly.coef_
print('Coefficients for modelpoly:')
print(coefs)

input = data['Wind Speed (m/s)']
output = data['LV ActivePower (kW)']

rejected_input = rejected_data['Wind Speed (m/s)']
rejected_output = rejected_data['LV ActivePower (kW)']

x = np.linspace(1,15,100)
plot.scatter(input, output, s=4, color='blue')
plot.scatter(rejected_input, rejected_output, s=2, color='gray')
plot.plot(x, coefs[0] + coefs[1]*x + coefs[2]*x**2, color='red')
plot.show()

import pickle
pickle.dump(modelpoly, open('WindAI_ModelPoly', 'wb'))
