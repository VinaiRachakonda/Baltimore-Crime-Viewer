<template>
    <div id="landing">
        <div class="front-area-table">
            <div class="front-area-tablecell">
                <div class="container-fluid bg-1 text-center">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="front-text">
                                <h1>Keep Baltimore safe</h1>
                                <br>
                                <h4> Visualize crime like never before</h4>
                                <div v-on:click="click()">
                                    <icon name="arrow-circle-down" scale="3"
                                          style="color: yellow"></icon>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import {EventBus} from '.././event-bus.js';
  export default {
    name: 'landing',
    methods: {
      click() {
        console.log('here');
        EventBus.$emit('landing:click', false);
      }
    }
  }

</script>

<style>

    #landing {
        background: url(../assets/dowtown.jpg) no-repeat scroll 0 0 / cover;
        position: relative;
        height: 100%;
        background-position: center center;
    }

    .front-area-table {
        display: table;
        width: 100%;
        height: 100%;
    }

    .front-area-tablecell {
        display: table-cell;
        vertical-align: middle;
    }

    .front-text {
        position: relative;
        text-align: center;
    }

    .front-text h1 {
        position: relative;
        color: yellow;
        text-decoration: underline;
    }

    .front-text h4 {
        color: yellow;
    }

</style>