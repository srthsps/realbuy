
#!/bin/bash
cd /home/ubuntu/realbuy
npm run build
mkdir /var/www/realbuy
cp -r build/* /var/www/realbuy
systemctl restart nginx