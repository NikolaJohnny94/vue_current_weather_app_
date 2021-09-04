module.exports = {
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = "Current Weather App ☀ ❄ 🌧 🌪"
                args[0].meta = {description: 'Current Weather Web App made with Vue.js &#10003; Consuming data from OpenWeatherMap API &#10003;'}
                return args
            })
    }
}