#!/bin/bash
source /home/ec2-user/.bash_profile
set -x


npm cache clean --force

cd /home/ec2-user/app/frontend || exit
npm install
cd /home/ec2-user/app/backend || exit
npm install
