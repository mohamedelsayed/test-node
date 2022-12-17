cd /home/ubuntu/test-node
git pull origin main
git status
npm install --only=prod
pm2 restart test-node
