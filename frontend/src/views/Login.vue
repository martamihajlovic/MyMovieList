<template>
  <article>
    <div class="container">
      <router-link to="/"><button id="closeBtn">×</button></router-link>
      <div class="overlay-container">
        <div class="overlay">
          <div class="rightBox">
            <h2>Don't have an account?</h2>
            <p>
              Create an account and join us now by clicking on the button below!
            </p>
            <router-link to="/register"
              ><button class="controls">Register</button></router-link
            >
            <router-link to="/"
              ><button class="controls">No thanks</button></router-link
            >
          </div>
        </div>
      </div>
      <div class="leftBox">
        <form class="sign-in">
          <h2>Welcome back!</h2>
          <p>Enter your information to log back in.</p>
          <input required type="text" placeholder="Username" />
          <input required type="password" placeholder="Password" />
          <p>
            <button class="controls" input type="submit">Log in</button>
            <br /><router-link to="/register"
              ><button class="controls" id="mobileBtn">
                Register
              </button></router-link
            >
          </p>
        </form>
      </div>
    </div>
    <Footer />
  </article>
</template>

<script>
import Footer from "@/components/Footer";

export default {
  name: "Login",
  components: {
    Footer,
  },
};
</script>

<style scoped>
#mobileBtn {
  display: none;
}
.container {
  position: relative;
  margin-top: 20px;
  width: 768px;
  height: 480px;
  border-radius: 10px;
  font-family: "Segoe UI", sans-serif;
  line-height: 20px;
  overflow: hidden;
  box-shadow: 0 5px 5px #474747, 1px 5px 5px #474747;
  background: linear-gradient(to bottom, #ffffff, #ccc);
}

.overlay-container {
  position: absolute;
  top: 0px;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  z-index: 100;
}

.overlay {
  position: relative;
  left: -100%;
  height: 90%;
  width: 200%;
  color: rgb(155, 96, 96);
}

.leftBox {
  position: absolute;
  top: 30px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  padding: 80px 40px;
  width: 50%;
  height: 100%;
  text-align: center;
  color: rgb(155, 96, 96);
}

.rightBox {
  position: absolute;
  top: 30px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  padding: 80px 40px;
  width: 50%;
  height: 100%;
  text-align: center;
  right: 0;
}

h2 {
  margin: 0;
}

p {
  margin: 22px 40px;
}

button {
  border-radius: 20px;
  border: 1px solid #a7a7a7;
  background-color: rgb(167, 63, 63);
  color: whitesmoke;
  font-size: 0.8rem;
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.controls {
  padding: 10px 30px;
  width: 147px;
  margin-top: 20px;
}

#closeBtn {
  margin: 10px 0px;
  padding-bottom: 4px;
  width: 50px;
  height: 40px;
  font-size: 25px;
  color: whitesmoke;
  background-color: rgb(167, 63, 63);
}

#closeBtn:hover {
  background-color: rgb(221, 178, 152);
  transition: background-color 0.3s linear;
}

button:hover {
  text-decoration: none;
  background-color: rgb(221, 178, 152);
  transition: background-color 0.3s linear;
}
input {
  margin-top: 10px;
  padding: 8px 15px;
  background-color: white;
  border: none;
  width: calc(100% - 30px);
  border-radius: 15px;
  border-bottom: 1px solid #ddd;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.4), 0 -1px 1px #fff, 0 1px 0 #fff;
  overflow: hidden;
  font-size: 12px;
}

input:focus {
  outline: none;
  background-color: white;
}

@media only screen and (max-width: 700px) {
  .container {
    margin-top: 10px;
    width: 90%;
    height: relative;
  }

  .leftBox {
    width: 100%;
    left: 0;
  }

  .rightBox {
    display: none;
  }

  #mobileBtn {
    display: inline-block;
  }
}
</style>