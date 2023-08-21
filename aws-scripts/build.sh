#!/bin/bash
source /home/ec2-user/.bash_profile
set -x

npm run build --prefix /home/ec2-user/app/backend
#npm run build --prefix /home/ec2-user/app/frontend
