<template lang="html">
    <div class="full">
        <v-map :zoom="zoom" :center="center">
            <v-tilelayer :url="url" :attribution="attribution"></v-tilelayer>
            <v-polygon v-for="item in polygons" :key="item.coordinates" :lat-lngs="item.latlngs" :color = "item.color" v-on:l-click="click()">'
                <v-popup :content="item.properties.csa2010"></v-popup>
                <v-tooltip :content="item.properties.csa2010"></v-tooltip>
            </v-polygon>
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
      };
    },
    methods: {
      zoomend() {
        console.log(1)
      },
      getGeojson() {
        axios.get('../src/assets/baltimoreFeatures.json').then(response => {
          for (let i = 0; i < response.data.features.length; i++) {
            const newObj = {};
            const curr = response.data.features[i];
            newObj['latlngs'] = curr.geometry.coordinates;
            newObj['color'] = '#ff00ff';
            newObj['properties'] = curr.properties;
            console.log(curr.properties);
            this.polygons.push(newObj);
          }
        })
      },
      click() {
        console.log('Hello!');
      }
    },
    mounted: function () {
      this.getGeojson();
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