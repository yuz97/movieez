<template>
   <div class="container">
      <div class="flex justify-between items-center mb-4">
         <h1 class="font-semibold text-xl">Now Playing</h1>
         <router-link to="/playing" class="font-bold text-md"
            >View all</router-link
         >
      </div>
      <now-playing-component :movies="movies" />
   </div>
</template>

<script>
import axios from "axios";
import NowPlayingComponent from "@/components/NowPlayingComponent.vue";
export default {
   components: { NowPlayingComponent },
   data() {
      return {
         movies: [],
      };
   },
   methods: {
      async getMovies() {
         let api_key = "937a8f8fe24d7a3a8f333f0fcaecb491";
         await axios
            .get(
               `https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}`
            )
            .then((res) => {
               res.data.results.forEach((item) => {
                  this.movies.push(item);
               });
            })
            .catch((e) => console.log(e.message));
      },
   },
   mounted() {
      this.getMovies();
   },
};
</script>

<style></style>
