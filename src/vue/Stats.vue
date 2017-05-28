<template>
    <div id="container">
        <p>Selected Neighborhood: {{selectedPolygon}}</p>
        <p> Crimes this period: {{crimeThisPeriod}}</p>
        <p> Crimes this year: {{crimeYear}}</p>
    </div>
</template>

<script>
  import axios from 'axios';
  import {EventBus} from '.././event-bus.js';

  export default {
    name: 'stats',
    created() {
      EventBus.$on('polygon:selected', response => {
        this.selectedPolygon = response;
        this.getPeriodCrime();
        this.getYearCrime();
      });
    },
    data() {
      return {
        selectedPolygon: 'Abell',
        crimeThisPeriod: 0,
        crimeYear: 0,
      }
    },
    methods: {
      getPeriodCrime() {
        axios.get('http://data.baltimorecity.gov/resource/3i3v-ibrt.json').then(response => {
          let count = 0;
          for (let i = 0; i < response.data.length; i++) {
            if (response.data[i]['name1'] === this.selectedPolygon) {
             count++;
            }
          }
          this.crimeThisPeriod = count;
        })
      },
      getYearCrime() {
        axios.get('https://data.baltimorecity.gov/resource/4ih5-d5d5.json?Neighborhood=' + this.selectedPolygon).then(response => {
          console.log(response.data);
          this.crimeYear = response.data.length;
        })
      }
    },
    mounted: function () {
      this.getPeriodCrime();
      this.getYearCrime();
    }
  }
</script>

<style>

</style>