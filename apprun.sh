
#!/bin/bash
cd /home/realbuy
npm run build
cp -r build/* /var/www/bookshelf
systemctl restart nginx