<template>
  <div id="navbar-wrap">
    <div id="navbar">
      <img @click="scrollToTop" class="logo" src="@/assets/slate.png" />
      <router-link tag="ul" to="/"><h2>MyMovieList.</h2></router-link>
      <div class="desktop">
        <ul id="navbar-right">
          <router-link to="/browse">{{ text1 }}</router-link>
          <router-link to="/login">{{ text2 }}</router-link>
          <router-link to="/register">{{ text3 }}</router-link>
        </ul>
      </div>
      <div class="mobile">
        <label for="toggle">&#9776;</label>
        <input type="checkbox" id="toggle" />
        <ul>
          <router-link tag="li" to="/browse">{{ text1 }}</router-link>
          <router-link tag="li" to="/login">{{ text2 }}</router-link>
          <router-link tag="li" to="/register">{{ text3 }}</router-link>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    text1: String,
    text2: String,
    text3: String,
  },

  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
};
</script>



<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
#navbar-wrap {
  position: fixed;
  width: 100%;
  z-index: 9999;
  background-color: #9a3232;
  font-family: Arial, Helvetica, sans-serif;
}

#navbar {
  display: flex;
  padding: 15px;
  justify-content: space-between;
  background-color: #9a3232;
  font-family: Arial, Helvetica, sans-serif;
}

/* NAVIGATION LINKS - browse, sign in, create account */
/* DESKTOP */
#navbar-right a {
  font-family: Arial, Helvetica, sans-serif;
  float: right;
  color: #f2f2f2;
  text-align: center;
  margin-top: 3px;
  padding: 10px;
  font-size: 15px;
  height: 20px;
}

#navbar-right a:hover {
  font-style: italic;
  font-weight: bold;
  color: #ffc5c5;
}


/* MOBILE */
.mobile {
  display: none;
}

label {
  margin: 0px 20px 0 0;
  font-size: 30px;
  color: white;
  cursor: pointer;
  position: fixed;
  top: 15px;
  right: 0;
}

#toggle {
  display: none;
}

.mobile ul {
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 17px;
  text-align: right;
  float: right;;
  display: none;
  margin: 45px 5px 0 0;
  background-color:none;
  text-transform: uppercase;
}

.mobile ul li {
  margin: 0;
  width: 100%;
  border-bottom: 1px solid rgba(255, 145, 145, 0.2);
  color: white;
}
.mobile ul li:hover {
  background-color: white;
  color:#9a3232;
  font-weight: bolder;
  cursor: pointer;
}
#toggle:checked ~ ul {
  display: block;
} 

/* LOGO, MYMOVIELIST */
h2 {
  margin: 0.2rem 1rem 0 0;
  text-shadow: 0px 0px 3px #000000;
  letter-spacing: 0.8px;
  color: white;
  cursor: pointer;
}

.logo {
  cursor: pointer;
  width: 50px;
  height: fit-content;
}

div {
  display: flex;
  flex-grow: 2;
  justify-content: flex-end;
}

input {
  width: 20%;
  border: none;
  margin-top: 9px;
  height: 30px;
  border-radius: 10px;
  box-sizing: border-box;
  outline: none;
}

/************ RESPONSIVE ************/

@media only screen and (max-width: 700px) {
  .desktop {
    display: none;
  }

  .mobile {
    display: block;
  }
  
}
</style>
