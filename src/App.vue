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
        background: url(../src/assets/img/backup-dados.png) no-repeat center center fixed;
        background-size: cover;
        min-height: 100vh;
        /*background-attachment: fixed;*/
    }
    .content {
        padding-top: 70px;
        margin: 0px auto;
        max-width: 1800px;
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
    .file-info_name{
        width: 40%;
    }
    .file-info_size{
        width: 25%;
    }
    .file-info_last-modification{
        width: 35%;
    }
    .file-info_size,
    .file-info_last-modification{
        text-align: right;

    }
    @media screen and (max-width: 700px){
        .file-info{
            font-size: 12px;
        }
    }
</style>
