## A small project written by Vue + nuxt
#### package.json
```javascript
{
  "name": "primecloud",
  "version": "1.0.0",
  "description": "My neat Nuxt.js project",
  "author": "tiger",
  "private": true,
  "scripts": {
    "dev": "nuxt",
    "build": "nuxt build && npm start",
    "start": "nuxt start",
    "generate": "nuxt generate",
    "pm2": "pm2 start npm --name 'nuxt' -- run build --watch"
  },
  "dependencies": {
    "@nuxtjs/axios": "^5.0.0",
    "@nuxtjs/proxy": "^1.3.1",
    "@nuxtjs/style-resources": "^0.1.1",
    "axios": "^0.18.0",
    "cross-env": "^5.2.0",
    "element-ui": "^2.4.6",
    "nuxt": "^2.0.0",
    "vue-awesome-swiper": "^3.1.3"
  },
  "devDependencies": {
    "babel-plugin-component": "^1.1.1",
    "node-sass": "^4.9.0",
    "nodemon": "^1.11.0",
    "sass-loader": "^7.0.3"
  },
  "browserslist": [
    "> 1%",
    "last 2 versions",
    "not ie <= 8",
    "safari 6"
  ],
  "config": {
    "nuxt": {
      "host": "192.168.1.102",
      "port": "3000"
    }
  }
}

