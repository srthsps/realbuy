
#!/bin/bash
cd /home/realbuy
npm run build
mkdir /var/www/realbuy
cp -r build/* /var/www/realbuy
systemctl restart nginx