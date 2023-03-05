<template>
   <div class="container">
      <div class="mt-10">
         <h4 class="text-3xl text-center mb-5">List of Now Playing</h4>
      </div>
      <loading-component v-if="loading" />
      <div v-else>
         <div class="mx-auto">
            <all-now-playing :movies="movies" />
         </div>
         <div class="flex justify-center items-center mt-5">
            <v-pagination
               v-model="page"
               :pages="pageCount"
               :range-size="1"
               active-color="#DCEDFF"
               @update:modelValue="getMovies" />
         </div>
      </div>
   </div>
</template>

<script>
import axios from "axios";
import AllNowPlaying from "@/components/AllNowPlaying.vue";
import VPagination from "@hennge/vue3-pagination";
import "@hennge/vue3-pagination/dist/vue3-pagination.css";
import LoadingComponent from "@/components/LoadingComponent.vue";
export default {
   components: { AllNowPlaying, VPagination, LoadingComponent },
   data() {
      return {
         movies: [],
         page: 1,
         pageCount: null,
         loading: false,
      };
   },
   methods: {
      async getMovies() {
         let api_key = "937a8f8fe24d7a3a8f333f0fcaecb491";
         this.loading = true;
         await axios
            .get(
               `https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}&page=${this.page}`
            )
            .then((res) => {
               this.movies = res.data.results;
               this.pageCount = res.data.total_pages;
               this.loading = false;
            })
            .catch((e) => (console.log(e.message), (this.loading = true)));
      },
   },
   mounted() {
      this.getMovies();
   },
};
</script>

<style></style>
