#!/bin/bash
set -x

# Set ownership for all folders
chown -R ec2-user:ec2-user /home/ec2-user/app/

# set files to 644 [except *.sh]
find /home/ec2-user/app/ -type f -not -name "*.sh" -print0 | xargs -0 chmod 0644

# set folders to 755
find /home/ec2-user/app/ -type d -print0 | xargs -0 chmod 0755
