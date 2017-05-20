<template>
    <div class="row">
        <div class="col-md-8">
            <test></test>
        </div>
        <div class="col-md-4">
            <filters></filters>
        </div>
    </div>
</template>

<script>
  import Test from './test.vue'
  import Filters from './filters.vue'
  export default {
    name: 'app',
    components: {Test, Filters},
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
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
