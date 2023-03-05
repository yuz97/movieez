<template>
   <div class="container">
      <div class="flex mx-auto mt-12">
         <movie-detail :movie="movie" />
      </div>
   <div v-if="similar != ''">
      <h4 class="text-xl font-bold mt-10">Similar movie</h4>
      <div class="flex mx-auto my-5">
         <slide-scroll :similar="similar" />
      </div>
   </div>
      <button
         @click="$router.push({ path: '/all-popular' })"
         class="px-4 py-1 bg-pink-600 shadow-sm rounded-full my-5">
         back
      </button>
   </div>
</template>

<script>
import axios from "axios";
import MovieDetail from "@/components/MovieDetail.vue";
import SlideScroll from "@/components/SlideScroll.vue";

export default {
   components: { MovieDetail, SlideScroll },
   data() {
      return {
         movie: [],
         similar: [],
      };
   },
   methods: {
      async getDetail() {
         let api_key = "937a8f8fe24d7a3a8f333f0fcaecb491";
         await axios
            .get(
               `https://api.themoviedb.org/3/movie/${this.$route.params.id}?api_key=${api_key}`
            )
            .then((res) => {
               this.movie = res.data;
            });
      },
      async getSimilar() {
         let api_key = "937a8f8fe24d7a3a8f333f0fcaecb491";
         await axios
            .get(
               `https://api.themoviedb.org/3/movie/${this.$route.params.id}/similar?api_key=${api_key}`
            )
            .then((res) => {
               this.similar = res.data.results;
            });
      },
   },
   mounted() {
      this.getDetail();
      this.getSimilar();
   },
};
</script>

<style></style>
