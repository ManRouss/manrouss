#!/usr/bin/env python
#
# Copyright 2007 Google Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#
import webapp2
from google.appengine.ext.webapp import util, template
from google.appengine.ext import db

class Post(db.Model):
    title = db.StringProperty()
    image = db.StringProperty()
    description = db.TextProperty()
    video = db.TextProperty()
    created = db.DateTimeProperty(auto_now_add=True)

class MainHandler(webapp2.RequestHandler):
    def get(self):
        self.response.write(template.render("templates/index.html", locals()))

class PostHandler(webapp2.RequestHandler):
    def get(self):
    	#post = db.get(key)
        self.response.write(template.render("templates/post.html",locals()))

class ContactoHandler(webapp2.RequestHandler):
    def get(self):
        self.response.write(template.render("templates/contacto.html", locals()))

class AdminHandler(webapp2.RequestHandler):
    def get(self):
        self.response.write(template.render("templates/admin.html", locals()))

class AdminPostNewHandler(webapp2.RequestHandler):
    def get(self):
        self.response.write(template.render("templates/post-new.html", locals()))

app = webapp2.WSGIApplication([
    ('/', MainHandler),
    ('/contacto', ContactoHandler),
    ('/post', PostHandler),
    ('/admin', AdminHandler),
    ('/admin/post/new', AdminPostNewHandler)
], debug=True)
