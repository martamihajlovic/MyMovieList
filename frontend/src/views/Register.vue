<template>
  <article>
    <div class="container">
      <div class="box">
        <form class="sign-up">
          <h2>Let's get started.</h2>
          Fill out the form with the required information.
          <br /><input type="text" placeholder="First Name" /> <br /><input
            type="text"
            placeholder="Last Name"
          />
          <br /><input required type="email" placeholder="Email" /> <br /><input
            required
            type="text"
            placeholder="Username"
          />
          <br /><input required type="password" placeholder="Password" />

          <button class="controls" input type="submit">Create Account</button>
          <p>
            <b>Oh,</b> do you already have an account? <br /><router-link
              to="/login"
              ><button class="controls" id="mobileBtn">
                Log In
              </button></router-link
            >
          </p>
          <router-link to="/"
            ><button id="closeBtn">Cancel</button></router-link
          >
        </form>
      </div>
    </div>
    <Footer />
  </article>
</template>


<script>
import Footer from "@/components/Footer";
export default {
  name: "Register",
  components: {
    Footer,
  },
};
</script>

<style scoped>
.container {
  position: relative;
  margin-top: 10px;
  width: 600px;
  height: 550px;
  border-radius: 10px;
  font-family: "Segoe UI", sans-serif;
  line-height: 20px;
  overflow: hidden;
  box-shadow: 0 5px 5px #474747, 1px 5px 5px #474747;
  background: linear-gradient(to bottom, #ffffff, #ccc);
}

.box {
  position: absolute;
  top: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 97%;
  text-align: center;
  color: rgb(155, 96, 96);
  margin-left: -10px;
}

h2 {
  margin: 15px;
}

p {
  margin: 8px 30px;
  margin-top: 30px;
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

button:hover {
  text-decoration: none;
  background-color: rgb(221, 178, 152);
  transition: background-color 0.3s linear;
}

.controls {
  padding: 10px 30px;
  width: auto;
  margin-top: 10px;
}

#closeBtn {
  margin: 0px 0px;
  width: 110px;
  height: 40px;
  font-size: 12px;
  color: rgb(167, 63, 63);
  background-color: rgb(221, 203, 203);
}

#closeBtn:hover {
  background-color: rgb(221, 178, 152);
  transition: background-color 0.3s linear;
}

input {
  margin-top: 10px;
  padding: 7px 15px;
  background-color: white;
  border: none;
  width: calc(100% - 130px);
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

  .box {
    width: 100%;
    left: 10px;
  }
}
</style>