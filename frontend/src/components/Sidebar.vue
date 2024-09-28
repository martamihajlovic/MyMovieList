<template>
  <div id="sidebar">
    <div>
      <filters />
    </div>
    <button>Add Movie</button>
  </div>
</template>

<script>
export default {
  
};
</script>

<style scoped>
#sidebar {
  display: flex;
  flex-direction: column;
  padding: 10px;
  min-height: 100vh;
  min-width: 150px;
  max-width: 150px;
  flex-grow: 1;
  background-color: #ffffff;
  justify-content: left;
}

#sidebar button {
  margin-top: 20px;
  height: 30px;
  background-color: #b77d7d;
  border: 1px solid #9a3232;
  text-transform: none;
  font-weight: 600;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
  color: white;
}

#movie-form {
  display: flex;
  flex-direction: column;
  text-align: left;
}

#movie-form div {
  display: flex;
  flex-direction: column;
}

#movie-form div #actor-input {
  display: flex;
  justify-content: space-between;
}

#movie-form .add-actor {
  background-color: burlywood;
  text-align: center;
  color: white;
  margin-left: 5px;
  height: 100%;
  padding: 2px 10px;
  font-size: 20px;
  padding: 1re;
  align-self: center;
  cursor: pointer;
}

#movie-bar .add-movie {
  background-color: burlywood;
  border: none;
  padding: 5px;
  width: 70px;
  color: white;
  border-radius: 10px;
  cursor: pointer;
  text-transform: uppercase;
  outline: none;
}
</style>
