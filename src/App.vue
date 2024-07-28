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
  <HeaderNavbar />
  <main>
    <router-view />
  </main>
</template>

<style>

</style>
