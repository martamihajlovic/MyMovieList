<template>
  <div class="home">
    <navbar text1="Browse" text2="Sign in" text3="Create Account" />
    <div id="main-section">
      <header>
        <div class="intro">
          <h1>
            Stay updated with the latest
            <br />releases, share your thoughts, <br />explore.
          </h1>
          <router-link to="/register">
            <button class="btn">JOIN US NOW</button></router-link
          >
          <p>
            Join us today and find movies specifically designed for you, make
            your lists, share with friends, and
            <b>more</b>. Register as soon as today!
          </p>
        </div>
      </header>
    </div>
    <div class="newlyAdded">
      <div class="sectionTitle">
        <h2>NEWLY ADDED</h2>
        <router-link to="/browse" class="btnRed">View more</router-link>
      </div>
      <ul>
        <li>
          <a href="#"
            ><img
              class="poster"
              src="../assets/demoPoster.png"
              alt="movie poster"
          /></a>
        </li>
        <li>
          <a href="#"
            ><img
              class="poster"
              src="../assets/demoPoster.png"
              alt="movie poster"
          /></a>
        </li>
        <li>
          <a href="#"
            ><img
              class="poster"
              src="../assets/demoPoster.png"
              alt="movie poster"
          /></a>
        </li>
        <li>
          <a href="#"
            ><img
              class="poster"
              src="../assets/demoPoster.png"
              alt="movie poster"
          /></a>
        </li>
        <li>
          <a href="#"
            ><img
              class="poster"
              src="../assets/demoPoster.png"
              alt="movie poster"
          /></a>
        </li>
        <li>
          <a href="#"
            ><img
              class="poster"
              src="../assets/demoPoster.png"
              alt="movie poster"
          /></a>
        </li>
        <li>
          <a href="#"
            ><img
              class="poster"
              src="../assets/demoPoster.png"
              alt="movie poster"
          /></a>
        </li>
        <li>
          <a href="#"
            ><img
              class="poster"
              src="../assets/demoPoster.png"
              alt="movie poster"
          /></a>
        </li>
        <li>
          <a href="#"
            ><img
              class="poster"
              src="../assets/demoPoster.png"
              alt="movie poster"
          /></a>
        </li>
        <li>
          <a href="#"
            ><img
              class="poster"
              src="../assets/demoPoster.png"
              alt="movie poster"
          /></a>
        </li>
      </ul>
    </div>
    <div class="searchMore">
      <h2>Didn't find what <br />you're looking for?</h2>
      <input class="searchBar" type="text" placeholder="Type here.." />
      <br /><button type="submit" class="btnRed">Search</button>
    </div>
    <Footer />
  </div>
</template>



<script>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default {
  name: "WelcomePage",
  components: {
    Navbar,
    Footer,
  },
};
</script>




<style scoped>
.home {
  display: flex;
  flex-direction: column;
}

.home #main-section {
  display: flex;
  margin-top: 79px;
  font-family: Arial, Helvetica, sans-serif;
}

/******************** MAIN TEXT & HEADER ******************/
h1 {
  font-size: 30px;
  font-weight: 600;
  color: white;
  float: left;
  text-align: center;
  position: absolute;
}

header {
  background-image: url(../assets/headerBIG.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 90vh;
  min-height: 700px;
  width: 100%;
  padding: 0 5%;
  position: relative;
}

.btn {
  width: 200px;
  height: auto;
  line-height: 45px;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  margin: 150px 0 50px 115px;
  position: relative;
  background-color: white;
  float: left;
  border-radius: 30px;
  color: rgb(153, 68, 68);
}

.btn:hover {
  text-decoration: underline;
}

.intro {
  width: 40%;
  float: left;
  margin: 100px 0px 0px 30px;
}

header p {
  color: white;
  font-size: 16px;
  opacity: 0.8;
  width: 430px;
  text-align: justify;
  text-justify: inter-word;
  float: left;
}

/* View More & Search buttons*/
.btnRed {
  text-decoration: none;
  color: #9a3232;
  font-size: 15px;
  font-weight: 650;
  letter-spacing: 1px;
  border-radius: 10px;
}

.sectionTitle .btnRed:hover {
  text-decoration: underline;
}

.sectionTitle .btnRed {
  margin-left: 10px;
}

/***************************** NEWLY ADDED *****************/
.newlyAdded {
  width: 100%;
  padding: 30px;
  margin-bottom: 150px;
  background-color: white;
  display: flex;
  flex-direction: column;
}

.sectionTitle h2,
.sectionTitle router-link {
  display: inline-block;
  vertical-align: middle;
}

.sectionTitle h2 {
  color: rgb(95, 95, 95);
}

.sectionTitle router-link {
  margin-left: 20px;
}

.sectionTitle {
  margin: -20px 0 20px 20px;
}

.newlyAdded ul {
  width: 98%;
  text-align: left;
  display: flex;
  justify-content: center;
  list-style: none;
  flex-wrap: wrap;
}

.newlyAdded ul li img {
  width: 200px;
  height: 300px;
  margin: 5px;
  border: 1px solid rgb(95, 95, 95);
  border-radius: 10px;
}

.newlyAdded ul li img:hover {
  -webkit-box-shadow: 10px 3px 10px 0px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.2);
}

/************* END NOTE, SEARCH BAR *****************/

.searchMore {
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  margin-bottom: 80px;
}

.searchMore .btnRed {
  border-radius: 20px;
  border: 1px solid #a7a7a7;
  background-color: rgb(167, 63, 63);
  color: whitesmoke;
  font-size: 0.7rem;
  font-weight: lighter;
  letter-spacing: 1px;
  text-transform: uppercase;
  width: 70px;
}
.searchMore .btnRed:hover {
  text-decoration: none;
  background-color: rgb(221, 178, 152);
  transition: background-color 0.3s linear;
}

.searchBar {
  margin: 10px 10px;
  padding: 8px 15px;
  background-color: white;
  border: none;
  height: 25px;
  width: calc(100% - 40px);
  border-radius: 15px;
  border-bottom: 1px solid #ddd;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.4), 0 -1px 1px #fff, 0 1px 0 #fff;
  overflow: hidden;
  font-size: 12px;
}

.searchBar:focus {
  outline: none;
  background-color: white;
}

h2 {
  font-size: 30px;
  font-weight: 600;
  color: rgb(151, 50, 50);
  -webkit-text-stroke-width: 0.1px;
  -webkit-text-stroke-color: rgb(133, 133, 133);
}

/********************** RESPONSIVE *****************/

@media only screen and (max-width: 1280px) {
  header {
    height: 80vh;
    min-height: 600px;
  }

  .searchMore h2 {
    font-size: 25px;
  }

  .searchBar {
    width: 270px;
  }
}

@media only screen and (max-width: 900px) {
  header {
    height: 70vh;
    min-height: 500px;
  }

  .btn {
    width: 170px;
    line-height: 37px;
    font-size: 17px;
    margin: 130px 0 30px 100px;
  }

  .intro {
    width: 30%;
  }

  header p {
    font-size: 13px;
    width: 370px;
  }

  h1 {
    font-size: 26px;
  }
}

@media only screen and (max-width: 700px) {
  

  header {
    background-position: left;
    height: 70vh;
    min-height: 400px;
  }

  h1 {
    text-align: left;
    position: relative;
    width: 100%;
    margin: 0;
    top: 80px;
    font-size: 22px;
  }

  .btn {
    width: 150px;
    line-height: 32px;
    font-size: 17px;
    position: relative;
    margin: 100px 0 30px 10px;
  }

  .intro {
    width: 90%;
    float: center;
    margin: 30px 0px 0px 30px;
    text-align: center;
  }

  header p {
    display: none;
  }

  .searchMore h2 {
    font-size: 20px;
  }

  .searchBar {
    width: 200px;
  }
}
</style>