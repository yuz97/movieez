<template>
   <div class="container">
      <div class="flex justify-between items-center mb-4">
         <h1 class="font-semibold text-xl">TV Show</h1>
         <router-link to="/tv" class="font-bold text-md">View all</router-link>
      </div>
      <tv-component :televisions="televisions" />
   </div>
</template>

<script>
import TvComponent from "@/components/TvComponent.vue";
import axios from "axios";

export default {
   components: { TvComponent },
   data() {
      return {
         televisions: [],
      };
   },
   methods: {
      async getTvShow() {
         let api_key = "937a8f8fe24d7a3a8f333f0fcaecb491";
         await axios
            .get(`https://api.themoviedb.org/3/tv/popular?api_key=${api_key}`)
            .then((res) => {
               res.data.results.forEach((television) => {
                  this.televisions.push(television);
               });
            })
            .catch((e) => console.log(e));
      },
   },
   mounted() {
      this.getTvShow();
   },
};
</script>

<style></style>
