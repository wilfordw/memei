ssh root@106.14.148.86 'rm -r /usr/share/nginx/html/memei'

npm run build

scp -r dist/ root@106.14.148.86:/usr/share/nginx/html/memei
