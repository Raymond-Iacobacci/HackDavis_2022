import numpy as np
import pandas as pd
import seaborn as sns
from sklearn import *
import matplotlib.pyplot as plot

data = pd.read_csv('/home/nic/Desktop/Renewable-Energy-Farm/WeatherData/T1.csv')
train, test = model_selection.train_test_split(data, test_size = 0.1)
#wind direction doesn't make much difference, degree 6 is best for fitting polynomial
trainx = train.iloc[:, [2]]
trainy = train.iloc[:, 1]
testx = test.iloc[:, [2]]
testy = test.iloc[:, 1]

model = linear_model.LinearRegression()
model.fit(trainx, trainy)
print(model.score(testx, testy))

from sklearn.preprocessing import PolynomialFeatures
poly = PolynomialFeatures(degree = 2)
xpoly = poly.fit_transform(trainx)
modelpoly = linear_model.LinearRegression().fit(xpoly, trainy)
print(modelpoly.score(poly.fit_transform(testx), testy))

coefs = modelpoly.coef_
print(coefs[0])
print(coefs[1])
print(coefs[2])

input = data['Wind Speed (m/s)']
output = data['LV ActivePower (kW)']

x = np.linspace(1,10,100)
plot.scatter(input, output, s=5)
plot.plot(x, coefs[0] + coefs[1]*x + coefs[2]*x**2)
plot.show()

import pickle
pickle.dump(modelpoly, open('WindAI_ModelPoly', 'wb'))
