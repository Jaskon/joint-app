#!/bin/bash
set -x
source /home/ec2-user/.bash_profile


pm2 stop /home/ec2-user/app/backend/dist/index.js || true
