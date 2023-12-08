<template>
  <NavBar/>
  <main class="main">
    <router-view></router-view>
  </main>
  <Footer></Footer>
</template>
<script>
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue'
export default {
  components: {
    NavBar,
    Footer
  }
}
</script>
<style>
  @import url(./assets/styles/nullstyle.css);

  #app{
    min-height: 100%;
    display: flex;
    flex-direction: column;
  }
  .main{
    background-color: rgb(213, 212, 212);
    min-height: 100%;
    flex: 1 1 auto;
    padding: 40px 140px 0px 140px;
    }
</style>