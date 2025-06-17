#!/usr/bin/env python3
# Simple HTTP server with CORS support for local development

import http.server
import socketserver
import os

PORT = 8000

class CORSHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
        return super().end_headers()
    
    def log_message(self, format, *args):
        print(f"{self.address_string()} - {args[0]} {self.path}")

print(f"Starting server at http://localhost:{PORT}")
print("Use Ctrl+C to stop")

with socketserver.TCPServer(("", PORT), CORSHTTPRequestHandler) as httpd:
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nServer stopped.")
