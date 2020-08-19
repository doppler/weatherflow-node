#!/bin/bash

while ! nc -q 1 localhost 5000 </dev/null; do sleep 10; done

/usr/bin/chromium --start-fullscreen http://localhost:5000

