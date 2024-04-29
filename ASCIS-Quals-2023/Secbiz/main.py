#!/usr/bin/python
# -*- coding: utf-8 -*-

import os
from flask import Flask, render_template_string, abort, request

app = Flask(__name__)


@app.errorhandler(404)
def page_not_found(e):
    if e.description:
        template = \
            '''
		<h1> Secbiz library </h1>
		<div class ="row">
		<div class = "col-md-6 col-md-offset-3 center" >
		Oops! Why you don't look at our <a href="/"> library</a>?
        <p></p>
        <b>%s</b> not found
		</div>
		</div>
		''' % e.description
    else:
        template = \
            '''
		<h1> Secbiz library </h1>
		<div class ="row">
		<div class = "col-md-6 col-md-offset-3 center" >
		Oops! Why you don't look at our <a href="/"> library</a>?
		</div>
		</div>
		'''

    return (render_template_string(template), 404)

app.register_error_handler(404, page_not_found)


@app.route('/', defaults={'req_path': ''})
@app.route('/<path:req_path>')
def dir_listing(req_path):
    debug_mode = request.args.get('DEBUG_MODE_ENABLED', None)
    BASE_DIR = os.environ['BASE_DIR']

    # Joining the base and the requested path
    abs_path = os.path.join(BASE_DIR, req_path.replace('../', ''))

    # Return 404 if path doesn't exist
    if not os.path.exists(abs_path):
        return abort(404, description=(req_path if debug_mode else ''))
    

    # Check if path is a file and serve

    if os.path.isfile(abs_path):
        return open(abs_path, 'rb').read()

    # Show directory contents
    files = os.listdir(abs_path)
    return render_template_string("""
        <h1>Welcome to Secbiz library</h1>
        <ul>
        {% for file in files %}
        <li>
        <a href="{{ (request.path + '/' if request.path != '/' else '') + file }}">
            {{ (request.path + '/' if request.path != '/' else '') + file }}
        </a>
        </li>
        {% endfor %}
        </ul>
        """,files=files)

if __name__ == '__main__':
    app.run(debug=False, host='0.0.0.0', port=5000)
