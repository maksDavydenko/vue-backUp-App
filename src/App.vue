<template>
  <div id="app">
  <Files/>
  </div>
</template>

<script>

import Files from './components/Files';
export default {
  name: 'App',
  components: {
    Files

  }
}
</script>

<style>
#app {
  max-width: 800px;
  display: flex;
  justify-content: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto;
}
.vue-treeselect__menu{
  max-height: 100vw !important;
}
</style>
