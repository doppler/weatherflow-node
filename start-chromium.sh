#!/bin/bash

while ! nc -q 1 localhost 5000 </dev/null; do sleep 1; done

/usr/bin/env chromium --start-fullscreen http://localhost:5000 & > /dev/null

