<template>
  <div class="browse">
    <Navbar text1="Browse" text2="Sign in" text3="Create Account" />
    <div class="container">
      <h3>Start searching<br />movies by name:<i class="fa fa-search"></i></h3>
      <form>
        <fieldset class="form-group">
          <input
            v-model="searchTerm"
            type="text"
            class="form-control"
            id="searchTerm"
            placeholder="Type here.."
          />
        </fieldset>
      </form>
    </div>
    <div class="searchResults">
      <div>
        <h2>
          Sort movies:
          <select name="sortBy" id="select" v-model="sortBy">
            <option value="alphabetically">Alphabetically</option>
            <option value="Hrating">Highest rating</option>
            <option value="Lrating">Lowest rating</option>
          </select>
        </h2>
      </div>
      <ul>
        <div v-for="movie in filteredMovies" :key="movie.title">
          <li>
            <div class="poster">
              <img :src="movie.img" />
              <div class="overlay_top">
                <div class="overlay-text">
                  {{ movie.title }} <br /><br />
                  ★{{ movie.rating }}
                </div>
              </div>
            </div>
          </li>
        </div>
      </ul>
    </div>
    <Footer />
  </div>
</template>

<script scoped>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default {
  name: "Browse",
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      sortBy: "alphabetically",
      searchTerm: "",
      maxRating: null,
      movies: [
        {
          title: "Gone Girl",
          description:
            "With his wife's disappearance having become the focus of an intense media circus, a man sees the spotlight turned on him when it's suspected that he may not be innocent.",
          rating: 8.1,
          img:
            "https://m.media-amazon.com/images/M/MV5BMTk0MDQ3MzAzOV5BMl5BanBnXkFtZTgwNzU1NzE3MjE@._V1_.jpg",
        },
        {
          title: "Spirited Away",
          description:
            "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
          rating: 8.6,
          img:
            "https://images-na.ssl-images-amazon.com/images/I/717zisvYwKL._AC_SL1500_.jpg",
        },
        {
          title: "The Fast and the Furious",
          description:
            "Los Angeles police officer Brian O'Conner must decide where his loyalty really lies when he becomes enamored with the street racing world he has been sent undercover to destroy.",
          rating: 6.8,
          img:
            "https://images-na.ssl-images-amazon.com/images/I/51vx0VklkZL._AC_.jpg",
        },
        {
          title: "Inception",
          description:
            "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
          rating: 8.8,
          img:
            "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
        },
        {
          title: "The Godfather",
          description:
            "An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son.",
          rating: 9.2,
          img:
            "https://kenoshasportsextra.com/wp-content/uploads/godfather.jpg",
        },
        {
          title: "Titanic",
          description:
            "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
          rating: 7.8,
          img:
            "https://cdn.shopify.com/s/files/1/1416/8662/products/titanic_1997_original_film_art_dfbd6b72-6ccb-422c-b34f-82c81d2c9d86_1200x.jpg?v=1617659236",
        },
        {
          title: "21 Jump Street",
          description:
            "A pair of underachieving cops are sent back to a local high school to blend in and bring down a synthetic drug ring.",
          rating: 7.2,
          img:
            "https://images-na.ssl-images-amazon.com/images/I/51yD5ArOUiL._AC_.jpg",
        },
        {
          title: "Fight Club",
          description:
            "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
          rating: 8.8,
          img:
            "https://images-na.ssl-images-amazon.com/images/I/713OBFnCXjL._AC_SL1414_.jpg",
        },
        {
          title: "Her",
          description:
            "In a near future, a lonely writer develops an unlikely relationship with an operating system designed to meet his every need.",
          rating: 8.0,
          img:
            "https://images-na.ssl-images-amazon.com/images/I/41Eb7WxmYNL._AC_.jpg",
        },
        {
          title: "Pulp Fiction",
          description:
            "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
          rating: 8.9,
          img: "https://dgeiu3fz282x5.cloudfront.net/g/x/x-7939.jpg",
        },
      ],
    };
  },
  computed: {
    filteredMovies() {
      let tempMovies = this.movies;

      //search input
      if (this.searchTerm != "" && this.searchTerm) {
        tempMovies = tempMovies.filter((item) => {
          return item.title.toUpperCase().match(this.searchTerm.toUpperCase());
        });
      }
      //sort by name
      tempMovies = tempMovies.sort((a, b) => {
        if (this.sortBy == "alphabetically") {
          let fa = a.title.toLowerCase(),
            fb = b.title.toLowerCase();

          if (fa < fb) {
            return -1;
          }
          if (fa > fb) {
            return 1;
          }
          return 0;

          //sort by rating
        } else if (this.sortBy == "Lrating") {
          return a.rating - b.rating;
        } else if (this.sortBy == "Hrating") {
          return b.rating - a.rating;
        }
      });

      return tempMovies;
    },
  },
};
</script>

<style scoped>
.browse {
  display: flex;
  flex-direction: column;
}

/* **************** SEARCH BAR ************** */
.container {
  margin-top: 120px;
  margin-bottom: 30px;
  text-align: center;
  justify-content: center;
  font-family: Arial, Helvetica, sans-serif;
  position: relative;
  width: 100%;
}

h3 {
  font-size: 25px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: rgb(247, 235, 221);
}

input {
  margin: 5px 0px 0px 0px;
  padding: 8px 15px;
  background-color: white;
  border: none;
  width: 300px;
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

fieldset {
  display: flex;
  justify-content: center;
}

/* ***************** SORT BY *************** */
h2 {
  font-size: 15px;
  text-transform: uppercase;
  text-align: left;
  margin-left: 20px;
  margin-bottom: 20px;
  color: #8b3232;
  font-weight: 600;
  font-family: Arial, Helvetica, sans-serif;
}

select {
  margin: 5px 0px 0px 10px;
  padding: 8px 15px;
  background-color: white;
  border: none;
  width: auto;
  border-radius: 15px;
  border-bottom: 1px solid #ddd;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.4), 0 -1px 1px #fff, 0 1px 0 #fff;
  overflow: hidden;
  color: #555555;
  font-size: 12px;
}

select:hover {
  outline: none !important;
  background-color: white;
  color: #555555;
}
select:active {
  outline: none;
  color: #555555;
}

/* ***************** SEARCH RESULTS *************** */
.searchResults {
  width: 100%;
  padding: 30px;
  margin-bottom: 150px;
  background-color: white;
  display: flex;
  flex-direction: column;
}

.searchResults ul {
  width: 98%;
  text-align: left;
  display: flex;
  justify-content: center;
  list-style: none;
  flex-wrap: wrap;
}

.searchResults ul li img {
  width: 200px;
  height: 300px;
  margin: 5px;
  border: 1px solid rgb(95, 95, 95);
  border-radius: 10px;
}

/* ****************** HOVER OVERLAY ***************** */

.poster {
  position: relative;
  display: inline-block;
  overflow: hidden;
  max-width: 100%;
  height: auto;
}

.poster .overlay_top {
  opacity: 0;
  position: absolute;
  top: 5px;
  left: 5px;
  right: 5px;
  bottom: 5px;
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  border-radius: 10px;
  -moz-transition: all 0.4s ease-in-out 0s;
  -webkit-transition: all 0.4s ease-in-out 0s;
  -ms-transition: all 0.4s ease-in-out 0s;
  transition: all 0.4s ease-in-out 0s;
}
.poster:hover .overlay_top,
.poster.active .overlay_top {
  opacity: 1;
}
.poster .overlay-text {
  text-align: center;
  font-size: 21px;
  opacity: 1;
  display: inline-block;
  position: absolute;
  font-family: "Open Sans", sans-serif;
  line-height: 20px;
  top: 50%;
  left: 50%;
  -moz-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
</style>