# from BaseHTTPServer import BaseHTTPRequestHandler, HTTPServer # python2
from http.server import BaseHTTPRequestHandler, HTTPServer # python3
import socketserver
import simplejson
import random
import pickle
import requests
import json

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
        print("in post method")
        print(type(self.headers['Content-Length']))
        self.data_string = self.headers['Content-Length']
        print(self.data_string)

        newaimodel = pickle.load(open('AI_MOD', 'rb'))
        #APIkey = 'd3ac75ca0f59c9b9d3f6960f7e2adba8';
        url = 'http://api.openweathermap.org/data/2.5/onecall/timemachine?lat=35&lon=139&dt=1649890549&appid=d3ac75ca0f59c9b9d3f6960f7e2adba8'
        json_response = json.loads(requests.get(url).text)
        url = 'http://api.openweathermap.org/data/2.5/onecall/timemachine?lat=35&lon=139&dt=1649804149&appid=d3ac75ca0f59c9b9d3f6960f7e2adba8'
        json_response2 = json.loads(requests.get(url).text)
        url = 'http://api.openweathermap.org/data/2.5/onecall/timemachine?lat=35&lon=139&dt=1649717749&appid=d3ac75ca0f59c9b9d3f6960f7e2adba8'
        json_response3 = json.loads(requests.get(url).text)
        url = 'http://api.openweathermap.org/data/2.5/onecall/timemachine?lat=35&lon=139&dt=1649631349&appid=d3ac75ca0f59c9b9d3f6960f7e2adba8'
        json_response4 = json.loads(requests.get(url).text)
        f = open("jsonfile.txt", "w")
        f.write(json.dumps(json_response))
        #overallJson = [json_response, json_response2, json_response3, json_response4]
        #f = open("jsonfile.txt", "w")
        #f.write(str(overallJson))
        self.send_response(200)
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
