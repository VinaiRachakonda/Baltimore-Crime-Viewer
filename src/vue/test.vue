<template lang="html">
    <div class="full">
        <v-map id="myMap" :zoom="zoom" :center="center">
            <v-tilelayer :url="url" :attribution="attribution"></v-tilelayer>
            <v-polygon v-for="item in polygons" :key="item.coordinates" :lat-lngs="item.latlngs" :color="item.color"
                       v-on:l-click="click()" :id="item.name">
                <v-popup :content="item.name"></v-popup>
            </v-polygon>
            <v-marker v-for="item in arrests" :key="item.arrests" :lat-lng="item.latlngs">
                <v-tooltip :content="item.arrest"></v-tooltip>
            </v-marker>
            <v-geojson :geojson="polygons"></v-geojson>
        </v-map>
    </div>

</template>

<script>
  import axios from 'axios';

  export default {
    name: 'test',
    data() {
      return {
        center: [39.299236, -76.609383],
        marker: [39.299236, -76.609383],
        lat: 39.299236,
        lng: -76.609383,
        zoom: 12,
        minZoom: 8,
        maxZoom: 15,
        url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
        attribution: 'vue-leaflet',
        title: 'vue-leaflet',
        opacity: 1,
        draggable: true,
        attributionControl: false,
        polygons: [],
        arrests: [],
      };
    },
    methods: {
      zoomend() {
        console.log(1)
      },
      getGeojson() {
        axios.get('../src/assets/baltimoreFeatures.json').then(response => {
//          for (let i = 0; i < response.data.features.length; i++) {
//            const newObj = {};
//            const curr = response.data.features[i];
//            newObj['latlngs'] = curr.geometry.coordinates;
//            newObj['color'] = '#ff00ff';
//            newObj['properties'] = curr.properties;
//            console.log(curr.properties);
//            this.polygons.push(newObj);
//          }
          for (let i = 0; i < response['data'].data.length; i++) {
            const newObj = {};
            newObj['latlngs'] = [response.data.data[i][50][5]['rings']];
            newObj['color'] = '#ff00ff';
            newObj['name'] = response.data.data[i][9];
            this.polygons.push(newObj);
          }
        })
      },
      click() {
        console.log('You just clicked this!');
      },
      getRecentCrimeData() {
        axios.get('http://data.baltimorecity.gov/resource/3i3v-ibrt.json').then(response => {
          for (let j = 0; j < response.data.length; j++) {
            const curr = response.data[j];
            if (curr.hasOwnProperty('location_1')) {
              curr.latlngs = [curr.location_1.latitude, curr.location_1.longitude];
            }
            this.arrests.push(curr);
          }
        })
      }
    },
    mounted: function () {
      this.getGeojson();
      this.getRecentCrimeData();
    },
  };
</script>

<style lang="css">
    @import '../../node_modules/leaflet/dist/leaflet.css';

    .full {
        width: 800px;
        height: 800px;
    }
</style>