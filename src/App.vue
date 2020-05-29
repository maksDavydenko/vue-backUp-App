<template>
  <div id="app">
   <nav>
        <router-view class="content"></router-view>
       </nav>
  </div>
</template>

<script>
// import background from 'g../src/assets/img/backup-dados.png'

// import Files from './components/Files';
// import Devices from './components/Devices';
export default {
  name: 'App',
  components: {
    // Devices,
    // Files

  }
}
</script>

<style>
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    #app{
        background: url(../src/assets/img/backup-dados.png);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
min-height: 100vh;
        margin: auto;
    }
    .content {
        padding-top: 70px;
  max-width: 800px;
        margin: 0px auto;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.vue-treeselect__menu{
  max-height: 100vw !important;
}
    .btn{
        padding: 10px 30px;
        border: dodgerblue;
        border-radius: 20px;
        cursor: pointer;
        text-transform: uppercase;
        color: dodgerblue;
        font-weight: bold;
    }
</style>
