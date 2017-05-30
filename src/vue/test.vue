<template lang="html">
    <div class="full">
        <v-map id="myMap" :zoom="zoom" :center="center" style="width: inherit; height: 550px">
            <v-tilelayer :url="url" :attribution="attribution"></v-tilelayer>
            <v-polygon v-for="item in polygons" :key="item.name" v-on:l-click = "selectedPolygon(item.name)" :lat-lngs="item.latlngs" :color="item.color"
                       :id="item.name" >
                <v-popup :content="item.name"></v-popup>
            </v-polygon>
            <v-marker  v-for="item in arrests" v-on:l-move="click()" v-if="item.visible" :key="item.arrests" :lat-lng="item.latlngs">
                <v-tooltip :content="item.arrest"></v-tooltip>
            </v-marker>
        </v-map>
    </div>

</template>

<script>
  import axios from 'axios';
  import {EventBus} from '.././event-bus.js';
  export default {
    name: 'test',
    created() {
      EventBus.$on('neighborhood:change', response => {
        this.currentNeighborhood = response;
        this.updateNeighborhood(response);
      });
      EventBus.$on('time:change', response => {
        console.log('AyyLmao');
      });
      EventBus.$on('district:change', response => {
        this.currentDistrict = response;
        this.updateDistrict(response);
      });
    },
    data() {
      return {
        center: [39.299236, -76.609384], //used to be  -76.609383
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
        currentDistrict: 'All',
        currentNeighborhood: 'All'
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
              curr.visible = true;
              curr.neighborhood = curr.name1;
              this.arrests.push(curr); //remember to change
            }

          }
        })
      },
      updateNeighborhood(choice) {
        for (let i = 0; i < this.arrests.length; i++) {
          if (this.arrests[i].neighborhood === choice && this.arrests[i].district === this.currentDistrict) {
            this.arrests[i].visible = true;
          } else {
            this.arrests[i].visible = false;
          }
        }
      },
      updateDistrict(choice) {
        for (let i = 0; i < this.arrests.length; i++) {
            this.arrest[i].visible = this.arrests[i].neighborhood === this.currentNeighborhood && this.arrests[i].district === choice;
        }
      },
      selectedPolygon(choice) {
        //update stats whenever polygon is chosen
        EventBus.$emit('polygon:selected', choice);
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
        width: 100%;
        height: 100%;
    }

</style>

</style>