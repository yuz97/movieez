<template>
   <div class="container">
      <div class="flex justify-between items-center mb-4">
         <h1 class="font-semibold text-xl">Most Popular</h1>
         <router-link to="/all-popular" class="font-bold text-md"
            >View all</router-link
         >
      </div>
      <card-component :movies="movies" />
   </div>
</template>

<script>
import CardComponent from "@/components/CardComponent.vue";
import axios from "axios";
export default {
   components: { CardComponent },
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
               `https://api.themoviedb.org/3/trending/all/day?api_key=${api_key}`,
               {
                  params: {
                     media_type: "all",
                  },
               }
            )
            .then((res) => {
               this.movies = res.data.results;
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
