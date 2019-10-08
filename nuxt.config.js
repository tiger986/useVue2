module.exports = {
    mode: 'universal',
    head: {
        title: '启创课堂',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' },
            { name: 'format-detection', content: 'telephone=no' },
            { name: 'msapplication-tap-highlight', content: 'no' },
            { name: 'apple-mobile-web-app-capable', content: 'yes' }

        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ],
        script: [
            { src: 'https://hm.baidu.com/hm.js?4b868823e288780351ad6ce913cf5322' }
        ]

        // script: [
        //     { src: '/vipService/js/flexible.js', type: 'text/javascript', charset: 'utf-8'}
        //   ],
        // __dangerouslyDisableSanitizers: ['script']
    },
    router: {
        middleware: ["auth"],
        scrollBehavior(to, from, savedPosition) {
            return {
                x: 0,
                y: 0
            }
        }
    },
    // loading: './components/Loading',
    // loading: false,
    // cache: {
    //     max: 1000,
    //     maxAge: 900000
    // },
    css: [
        'element-ui/lib/theme-chalk/index.css',
        './assets/scss/global.scss',
        "swiper/dist/css/swiper.css" 
    ],
    build: {
        babel: {
            plugins: [
                [
                    'component',
                    {
                        libraryName: 'element-ui',
                        styleLibraryName: 'theme-chalk'
                    }
                ]
            ]
        },
        cssSourceMap: false,
        extractCSS: true,
        vendors: ['axios', 'element-ui']
    },
    plugins: [
        { src: '~/plugins/element-ui', ssr: true },
        // { src: '~/plugins/message', ssr: false },
        { src: '~/plugins/icon', ssr: true },
        { src: '~plugins/global.js', ssr: false },
        { src: "./static/font/iconfont.js", ssr: false },
        { src: "~/plugins/swiper.js", ssr: false }
    ],
    modules: ['@nuxtjs/proxy', '@nuxtjs/style-resources'],
    styleResources: {
        scss: ['./assets/scss/variable.scss']
    },
    axios: {
        proxy: true
    },
    proxy: {
        '/website': {
            target: 'http://api.college.issac.top',
            changeOrigin: true,
            pathRewrite: {
                '^/website': '/website'
            }
        }
    },
    
    server: {
        port: 17911,
        host: '127.0.0.1'
    },
    env: {
        baseUrl: 'http://api.college.issac.top'
    }

}