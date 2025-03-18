#!/bin/bash
echo "After install..."
sudo mkdir -p /home/ec2-user/myapp
sudo cp -r /home/ec2-user/myapp/* /opt/myapp
cd /opt/myapp
sudo npm install