import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faCodepen, faLinkedinIn,faTwitter } from '@fortawesome/free-brands-svg-icons'
import { 
    faThermometerThreeQuarters,
    faUserAlt,faTachometerAlt,
    faTint, faWind,
    faArrowCircleRight,
    faArrowCircleDown,
    faCloud,
    faGlobe,
    faEye, 
    faSun, 
    faMoon,
    faExclamationCircle } from '@fortawesome/free-solid-svg-icons'

library.add(
      faThermometerThreeQuarters,
      faUserAlt,faTachometerAlt,
      faTint,
      faWind,
      faArrowCircleRight,
      faArrowCircleDown,
      faCloud,
      faGlobe,
      faEye,
      faSun,
      faMoon,
      faExclamationCircle,
      faGithub,
      faCodepen,
      faLinkedinIn,
      faTwitter)

createApp(App).use(store).component("font-awesome-icon", FontAwesomeIcon).mount('#app')
