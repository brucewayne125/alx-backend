#!/usr/bin/env python3
#Flask - the core class from the Flask framework that helps set up a web application.
#render_template - function used to render HTML templates
#@app.route('/') - specifies the URL route that will trigger the home function
#home - function that runs when the root route is accessed

from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)
