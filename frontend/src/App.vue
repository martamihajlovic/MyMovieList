<template>
  <router-view />
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>


<style>
body {
  background-image: linear-gradient(
    to right,
    rgba(246, 241, 182, 1),
    rgba(154, 50, 50, 1)
  );
  margin: 0;
}

.m-0 {
  margin: 0;
}

#app {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}
</style>
