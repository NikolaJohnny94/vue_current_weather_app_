module.exports = {
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = "Current Weather App ☀ ❄ 🌧 🌪"
                args[0].meta = {
                'http-equiv': {'http-equiv': 'X-UA-Compatible', content: 'IE=edge'},
                viewport: 'width=device-width,initial-scale=1.0',
                description: 'Current Weather Web App made with Vue.js &#10003; Consuming data from OpenWeatherMap API &#10003;',
                'og:image': { property: 'og:image', content: 'https://images.unsplash.com/photo-1516912481808-3406841bd33c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1366&q=80'}}
                return args
            })
    }
}