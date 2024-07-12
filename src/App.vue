<script>
import HeaderNavbar from './components/HeaderNavbar.vue';
export default {
  name: 'App',
  components: {
    HeaderNavbar,
  },
};
</script>

<template>
  <div id="app">
    <HeaderNavbar />
    <main>
      <router-view />
    </main>
  </div>
</template>

<style>

</style>
