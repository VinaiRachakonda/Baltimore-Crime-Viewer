import Vue from 'vue'
import App from './vue/App.vue'
import Vue2Leaflet from '../node_modules/vue2-leaflet'

Vue.component('v-map', Vue2Leaflet.Map);
Vue.component('v-tilelayer', Vue2Leaflet.TileLayer);
Vue.component('v-marker', Vue2Leaflet.Marker);
Vue.component('v-polygon', Vue2Leaflet.Polygon);
Vue.component('v-geojson', Vue2Leaflet.GeoJSON);


new Vue({
  el: '#demo',
  template: '<App/>',
  components: { App}
});