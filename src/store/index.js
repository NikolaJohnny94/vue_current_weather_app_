import { createStore } from 'vuex'

export default createStore({
  state: {
    data: [],
    statusCode: null,
    weather_main: '',
    description: [],
    iconSlug: '',
    flag: '',
    search: '',
    units: 'metric',
    unit: '°C',
    imperial: true,
    sunriseTimeStamp: '',
    sunriseTimeStampUS: '',
    sunsetTimeStamp: '',
    sunsetTimeStampUS: '',
    sunriseAM_PM: false,
    sunsetAM_PM: false,
    sunrise_buttonText: 'AM/PM',
    sunset_buttonText: 'AM/PM',
    show: false,
    button_text_miles_hour: 'miles/hour',
    button_text_km_miles: 'Miles',
    km_miles: false,
    titleArr: [
      'Dark Mode',
      'Default Mode',
      'Celsius',
      'Fahrenheit',
      'Kelvin',
      'Search',
      'Follow Me On Github',
      'Follow Me On Codepen',
      'Let\'s connect on Linkedin',
      'Follow me on Twitter'
    ],
    listOfURLs: [
      'https://github.com/NikolaJohnny94',
      'https://codepen.io/NikolaJohnny/pens/public',
      'https://www.linkedin.com/in/nikola-ivanovi%C4%87-2b6a13179/',
      'https://twitter.com/nikola8794pwd'
    ],
    darkMode: false,
    icons: [
      'sun',
      'moon',
      'thermometer-three-quarters',
      'user-alt',
      'tachometer-alt',
      'tint',
      'wind',
      'arrow-circle-right',
      'arrow-circle-down',
      'cloud',
      'globe',
      'eye',
      'github',
      'codepen',
      'linkedin-in',
      'twitter',
      'exclamation-circle'
    ],
    baseURL: 'https://api.openweathermap.org/data/2.5/weather'
  },
  mutations: {
    SAVE_DATA(state, data) {
      state.data = data
      state.statusCode = data.cod
      state.weather_main = data.weather[0].main
      state.description = data.weather[0].description.split(' ')
      state.iconSlug = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`
      state.flag = `https://www.countryflags.io/${data.sys.country}/shiny/32.png` 
      state.sunriseTimeStamp = new Date(data.sys.sunrise * 1000).toLocaleString('en-GB',{hour:'numeric',minute:'numeric',second:'numeric'})
      state.sunriseTimeStampUS = new Date(data.sys.sunrise * 1000).toLocaleString('en-US',{hour:'numeric',minute:'numeric',second:'numeric'})
      state.sunsetTimeStamp = new Date(data.sys.sunset * 1000).toLocaleString('en-GB',{hour:'numeric',minute:'numeric',second:'numeric'})
      state.sunsetTimeStampUS = new Date(data.sys.sunset * 1000).toLocaleString('en-US',{hour:'numeric',minute:'numeric',second:'numeric'})
    },
  },
  actions: {
     async loadData({commit}) {  
      await fetch(`${this.state.baseURL}?q=${this.state.search}&units=${this.state.units}&appid=${process.env.VUE_APP_API_KEY}`)
      .then(res => res.json())
      .then(payload => {
        commit('SAVE_DATA', payload) 
      }) 
      .catch(error => {
        console.log(error.message)
        if (error.message === 'Failed to fetch') {
          this.state.statusCode = 404
        }
      })
    },
  },
  modules: {
  },
  getters: {
    getData: state => state.data,
    getWeatherMain: state => state.weather_main,
    getDescription: state => state.description,
    getIconSlug: state => state.iconSlug,
    getFlag: state => state.flag,
    getTitles: state => state.titleArr,
    getListOfURLs: state => state.listOfURLs,
    getUnit: state => state.unit,
    getImperialBool: state => state.imperial,
    getSunriseAM_PM: state => state.sunriseAM_PM,
    getSunsetaAM_PM: state => state.sunsetAM_PM,
    getSunriseButtonText: state => state.sunrise_buttonText,
    getSunsetButtonText: state => state.sunset_buttonText,
    getShowBool: state => state.show,
    getButtonTextMilesHour: state => state.button_text_miles_hour,
    getButtonKmMiles: state => state.button_text_km_miles,
    getVisibilityKmMiles: state => state.km_miles,
    getDarkMode: state => state.darkMode,
    getSunriseTimeStamp: state => state.sunriseTimeStamp,
    getSunriseTimeStampUS: state => state.sunriseTimeStampUS,
    getSunsetTimeStamp: state => state.sunsetTimeStamp,
    getSunsetTimeStampUS: state => state.sunsetTimeStampUS,
    getStatus: state => state.statusCode,
    getIcons: state => state.icons
  }
})
