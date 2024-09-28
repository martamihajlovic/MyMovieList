<template>
  <footer>
    <div class="myFooter">
      <a href="/" class="logo">MyMovieList.</a>
      © 2021 WTOB Team
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.myFooter {
  font-family: Arial, Helvetica, sans-serif;
  text-align: left;
  margin-left: 20px;
  color: white;
  -webkit-text-stroke-width: 0.2px;
  -webkit-text-stroke-color: rgb(116, 116, 116);
  font-weight: 400;
  font-size: 15px;
  letter-spacing: 1px;
  line-height: 80px;
  text-shadow: 1px 0.5px 1px #945d5d;
}

.logo {
  color: white;
}
</style>