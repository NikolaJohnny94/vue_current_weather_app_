<template>
  <div v-if="(status != 404) & show" id="data_div">
    <img
      class="weather-img"
      :src="iconSlug"
      :title="weatherMain"
      :alt="'Weather: ' + weatherMain"
    />
    <p>
      <span class="description_span" v-for="desc in description">{{
        desc[0].toUpperCase() + desc.substr(1)
      }}</span>
    </p>

    <p><Icon :icon="icons[2]" class="fa-lg temperature" /></p>
    <p>
      {{ labels[0] }}: {{ Math.round(payload.main.temp) }}
      <span>{{ unit }}</span>
    </p>

    <p><Icon :icon="icons[3]" class="fa-lg feels-like" /></p>
    <p>
      {{ labels[1] }}: {{ Math.round(payload.main.feels_like) }}
      <span>{{ unit }}</span>
    </p>

    <p><Icon :icon="icons[4]" class="fa-lg pressure" /></p>
    <p>{{ labels[2] }}: {{ Math.round(payload.main.pressure) }} hPa</p>

    <p><Icon :icon="icons[5]" class="fa-lg humidity" /></p>
    <p>{{ labels[3] }}: {{ Math.round(payload.main.humidity) }} %</p>

    <p><Icon :icon="icons[6]" class="fa-lg wind-speed" /></p>
    <p v-if="unit === '°C' || unit === 'K'">
      {{ labels[4] }}: {{ payload.wind.speed }} {{ wind_speed_meters }}
    </p>
    <p v-if="unit === '°F'">
      {{ labels[4] }}:
      <span v-if="imperial"
        >{{
          Math.round((payload.wind.speed / 2.237 + Number.EPSILON) * 100) / 100
        }}
        {{ wind_speed_meters }}</span
      >
      <span v-else>{{ payload.wind.speed }} {{ wind_speed_miles }}</span>
      <Icon :icon="icons[7]" class="fa-lg img-align arrow-right" />
      <Icon :icon="icons[8]" class="fa-lg arrow-down" />
      <Button
        class="extraButtons"
        v-if="unit === '°F'"
        @click="imperialConvert"
        :title="imperial ? wind_speed_miles : wind_speed_meters"
        >{{ button_text_miles_hour }}</Button
      >
    </p>

    <p><Icon :icon="icons[9]" class="fa-lg clouds" /></p>
    <p>{{ labels[5] }}: {{ payload.clouds.all }} %</p>

    <p><Icon :icon="icons[10]" class="fa-lg globe" /></p>
    <p>
      <span class="span-align">{{ labels[6] }}: </span>
      <img
        class="img-align"
        :src="flag"
        :title="payload.sys.country + ' Flag'"
        :alt="'Country:' + payload.sys.country"
      />
      [{{ payload.sys.country }}]
    </p>

    <p><Icon :icon="icons[11]" class="fa-lg visibility" /></p>
    <p v-if="unit === '°C' || unit === 'K'">
      {{ labels[7] }}: {{ payload.visibility }} meters /
      {{ payload.visibility / 1000 }} Km
    </p>
    <p v-if="unit === '°F'">
      {{ labels[7] }}:
      <span v-if="km_miles"
        >{{ payload.visibility }} meters /
        {{
          Math.round((payload.visibility / 1609 + Number.EPSILON) * 100) / 100
        }}
        Miles</span
      >
      <span v-else
        >{{ payload.visibility }} meters /
        {{ payload.visibility / 1000 }} Km</span
      >
      <Icon :icon="icons[7]" class="fa-lg img-align arrow-right" />
      <Icon :icon="icons[8]" class="fa-lg arrow-down" />
      <Button
        class="extraButtons"
        v-if="unit === '°F'"
        @click="kmToMiles"
        :title="km_miles ? km : mi"
        >{{ button_text_km_miles }}</Button
      >
    </p>

    <p><Icon :icon="icons[0]" class="fa-lg sunrise" /></p>
    <p>
      {{ labels[8] }}:
      <span v-if="!sunriseAM_PM">{{ sunrise }} ({{ time }})</span>
      <span v-else>{{ sunriseUS }}</span>
      <Icon :icon="icons[7]" class="fa-lg img-align arrow-right" />
      <Icon :icon="icons[8]" class="fa-lg arrow-down" />
      <Button
        class="extraButtons"
        @click="sunriseAM_PM_Convert"
        :title="sunriseAM_PM ? time : timeAm"
        >{{ sunrise_buttonText }}
      </Button>
    </p>

    <p><Icon :icon="icons[1]" class="fa-lg sunset" /></p>
    <p>
      {{ labels[9] }}:
      <span v-if="!sunsetAM_PM">{{ sunset }} ({{ time }})</span>
      <span v-else>{{ sunsetUS }} </span>
      <Icon :icon="icons[7]" class="fa-lg img-align arrow-right" />
      <Icon :icon="icons[8]" class="fa-lg arrow-down" />
      <Button
        class="extraButtons"
        @click="sunsetAM_PM_Convert"
        :title="sunriseAM_PM ? time : timeAm"
        >{{ sunset_buttonText }}
      </Button>
    </p>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import Button from './Button'
  import Icon from './Icon'
  import ButtonContainer from './ButtonContainer'
  export default {
    name: 'MainComponent',
    components: {
      Button,
      ButtonContainer,
      Icon,
    },
    data() {
      return {
        search: '',
        placeholder: 'Enter the city name',
        time: 'HH:MM:SS',
        timeAm: 'AM/PM',
        wind_speed_meters: 'meters/seconds',
        wind_speed_miles: 'miles/hour',
        km: 'Kilometres',
        mi: 'Miles',
        labels: [
          'Temperature',
          'Feels like',
          'Pressure',
          'Humidity',
          'Wind Speed',
          'Clouds',
          'Country',
          'Visibility',
          'Sunrise',
          'Sunset',
        ],
      }
    },
    computed: {
      ...mapGetters({
        payload: 'getData',
        weatherMain: 'getWeatherMain',
        description: 'getDescription',
        iconSlug: 'getIconSlug',
        flag: 'getFlag',
        unit: 'getUnit',
        sunrise: 'getSunriseTimeStamp',
        sunriseUS: 'getSunriseTimeStampUS',
        sunset: 'getSunsetTimeStamp',
        sunsetUS: 'getSunsetTimeStampUS',
        imperial: 'getImperialBool',
        sunriseAM_PM: 'getSunriseAM_PM',
        sunsetAM_PM: 'getSunsetaAM_PM',
        sunrise_buttonText: 'getSunriseButtonText',
        sunset_buttonText: 'getSunsetButtonText',
        show: 'getShowBool',
        button_text_miles_hour: 'getButtonTextMilesHour',
        button_text_km_miles: 'getButtonKmMiles',
        km_miles: 'getVisibilityKmMiles',
        status: 'getStatus',
        icons: 'getIcons',
      }),
    },
    methods: {
      ...mapActions(['loadData']),

      searchButton() {
        this.$store.state.search = this.search
        this.loadData()
        this.$store.state.show = true
      },

      imperialConvert() {
        this.$store.state.imperial = !this.$store.state.imperial
        if (this.imperial) {
          this.$store.state.button_text_miles_hour = this.wind_speed_miles
        } else {
          this.$store.state.button_text_miles_hour = this.wind_speed_meters
        }
      },

      kmToMiles() {
        this.$store.state.km_miles = !this.$store.state.km_miles
        if (this.km_miles) {
          this.$store.state.button_text_km_miles = this.km
        } else {
          this.$store.state.button_text_km_miles = this.mi
        }
      },

      sunriseAM_PM_Convert() {
        this.$store.state.sunriseAM_PM = !this.$store.state.sunriseAM_PM
        if (this.sunriseAM_PM) {
          this.$store.state.sunrise_buttonText = this.time
        } else {
          this.$store.state.sunrise_buttonText = this.timeAm
        }
      },
      sunsetAM_PM_Convert() {
        this.$store.state.sunsetAM_PM = !this.$store.state.sunsetAM_PM
        if (this.sunsetAM_PM) {
          this.$store.state.sunset_buttonText = this.time
        } else {
          this.$store.state.sunset_buttonText = this.timeAm
        }
      },
    },
  }
</script>

<style scoped>
  #data_div {
    margin-bottom: 80px !important;
  }

  .description_span {
    display: inline-block;
    margin-right: 5px;
  }

  .span-align {
    vertical-align: baseline;
  }

  img {
    cursor: pointer;
  }

  .img-align {
    vertical-align: middle;
  }

  .weather-img {
    display: block;
    margin: auto;
  }
</style>
