<template>
  <div id="app" class="container">
    <div class="content">
      <router-view></router-view>
    </div>
    <footer-nav></footer-nav>
  </div>
</template>

<script>
import FooterNav from './components/FooterNav.vue'

export default {
  name: 'app',
  components: {
    FooterNav
  }
}
</script>

<style lang="scss">
@import "assets/sass/common.scss";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.container {
  width: 100%;
  height: 91%;
}

.content {
  /* background: #fafafb; */
  width: 100%;
  height: 100%;
  overflow: scroll;
}
</style>
