import numpy as np
import pandas as pd
import seaborn as sns
from sklearn import *
data = pd.read_csv('T1.csv')
train, test = model_selection.train_test_split(data, test_size = 0.1)
#wind direction doesn't make much difference, degree 6 is best for fitting polynomial
trainx = train.iloc[:, [2,3,4]]
trainy = train.iloc[:, 1]
testx = test.iloc[:, [2,3,4]]
testy = test.iloc[:, 1]

model = linear_model.LinearRegression()
model.fit(trainx, trainy)
print(model.score(testx, testy))

from sklearn.preprocessing import PolynomialFeatures
poly = PolynomialFeatures(degree = 6)
xpoly = poly.fit_transform(trainx)
modelpoly = linear_model.LinearRegression().fit(xpoly, trainy)
print(modelpoly.score(poly.fit_transform(testx), testy))


import pickle
pickle.dump(modelpoly, open('WindAI_ModelPoly', 'wb'))
