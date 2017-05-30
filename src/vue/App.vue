<template>
    <div id="app" style="height: 100%">
        <div id = "landing" v-if = "isOn">
            <landing ></landing>
        </div>
        <div id = "main-app" v-else >
            <div class="row">
            <filters></filters>
            </div>
            <test></test>
            <stats></stats>
        </div>
    </div>
</template>

<script>
  import Landing from './Landing.vue'
  import Test from './test.vue'
  import Filters from './filters.vue'
  import Stats from './Stats.vue'
  import {EventBus} from '.././event-bus.js';
  export default {
    name: 'app',
    components: {Landing, Test, Filters, Stats, EventBus},
    created() {
      EventBus.$on('landing:click', response => {
        console.log('yooo');
        this.isOn = !this.isOn;
      })
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        isOn: true
      }
    }
  }
</script>

<style>
    @import '../../node_modules/leaflet/dist/leaflet.css';

    /*#app {*/
    /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
    /*-webkit-font-smoothing: antialiased;*/
    /*-moz-osx-font-smoothing: grayscale;*/
    /*text-align: center;*/
    /*color: #2c3e50;*/
    /*margin-top: 60px;*/
    /*}*/

    /*h1, h2 {*/
    /*font-weight: normal;*/
    /*}*/

    /*ul {*/
    /*list-style-type: none;*/
    /*padding: 0;*/
    /*}*/

    /*li {*/
    /*display: inline-block;*/
    /*margin: 0 10px;*/
    /*}*/

    /*a {*/
    /*color: #42b983;*/
    /*}*/
</style>
