# from BaseHTTPServer import BaseHTTPRequestHandler, HTTPServer # python2
from http.server import BaseHTTPRequestHandler, HTTPServer # python3
import socketserver
import simplejson
import random
import pickle
import requests
import json
import pandas as pd
import numpy as np

class S(BaseHTTPRequestHandler):
    def _set_headers(self):
        self.send_response(200)
        self.send_header('Content-type', 'text/html')
        self.end_headers()

    def do_GET(self):
        self._set_headers()
        f = open("index.html", "r")
        self.wfile.write(f.read())

    def do_HEAD(self):
        self._set_headers()

    def do_POST(self):
        self._set_headers()
        beg = self.path.find('=')
        end = self.path.find('&')
        lat = int(self.path[beg+1:end])
        lon = int(self.path.split('=', 2)[2])
        newaimodel = pickle.load(open('AI_MOD', 'rb'))
        url = 'http://api.openweathermap.org/data/2.5/onecall/timemachine?lat='+str(lat)+'&lon='+str(lon)+'&dt=1649890549&appid=d3ac75ca0f59c9b9d3f6960f7e2adba8'
        json_response = json.loads(requests.get(url).text)
        h = json_response['hourly'][:]
        x = []
        for i in range(20):
            x.append(h[len(h)-i-1]['wind_speed'])
        z = []
        for i in range(56):
            z.append(x)
        x = np.array(z)
        y = newaimodel.predict(x)
        self.send_response(200, y[0][0])
        self.end_headers()
        return None


def run(server_class=HTTPServer, handler_class=S, port=8000):
    server_address = ('', port)
    httpd = server_class(server_address, handler_class)
    print('Starting httpd...')
    httpd.serve_forever()

if __name__ == "__main__":
    from sys import argv

if len(argv) == 2:
    run(port=int(argv[1]))
else:
    run()
