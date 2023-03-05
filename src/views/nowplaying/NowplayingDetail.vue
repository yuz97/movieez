<template>
   <div class="container">
      <div class="mx-auto mt-12">
         <div class="now-playing-detail lg:flex lg:justify-between">
            <img
               class="w-[300px] h-[400px] rounded-lg"
               :src="
                  `https://image.tmdb.org/t/p/w500/${movie.poster_path}` ||
                  `https://image.tmdb.org/t/p/w500/${item.backdrop_path}`
               "
               :alt="`${movie.poster_path}`" />
            <div class="list-detail lg:ml-10 mt-3">
               <h4 class="font-bold text-2xl mb-5">{{ movie.title }}</h4>
               <ul>
                  <li>Description : {{ movie.overview }}</li>
                  <li>Popularity : {{ movie.popularity }}</li>
                  <li>Vote Average : {{ Math.round(movie.vote_average) }}</li>
                  <li v-if="movie.release_date">
                     Release :
                     {{
                        new Date(movie.release_date).toLocaleString("id-ID", {
                           month: "long",
                           year: "numeric",
                           day: "numeric",
                        })
                     }}
                  </li>
                  <li v-else>
                     Release :
                     {{
                        new Date(movie.first_air_date).toLocaleString("id-ID", {
                           month: "long",
                           year: "numeric",
                           day: "numeric",
                        })
                     }}
                  </li>
               </ul>
            </div>
         </div>
         <div v-if="similar != ''">
         <h4 class="text-xl font-bold mt-10">Similar movie</h4>
         <div class="flex mx-auto my-5">
            <slide-scroll :similar="similar" />
         </div>
       </div>
         <button
            @click="$router.push({ path: '/playing' })"
            class="px-4 py-1 bg-pink-600 shadow-sm rounded-full">
            back
         </button>
      </div>
   </div>
</template>

<script>
import axios from "axios";
import SlideScroll from "@/components/SlideScroll.vue";
export default {
   components: { SlideScroll },
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
