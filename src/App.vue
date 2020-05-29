<template>
  <div id="app">
   <nav>
        <router-view class="content"></router-view>
       </nav>
  </div>
</template>

<script>

export default {
  name: 'App',
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
        background-attachment: fixed;
    }
    .content {
        padding-top: 70px;
  max-width:80vw;
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
