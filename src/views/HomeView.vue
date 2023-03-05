<template>
   <div class="container">
      <div class="mt-10">
         <h4 class="text-3xl">
            Find your
            <span class="font-bold">favorite</span>
         </h4>
      </div>
   </div>
   <div class="lg:mx-auto mb-5">
      <carousel-component />
   </div>
   <div class="my-4">
      <div class="search flex items-center justify-center">
         <input
            @keyup.enter="getSearch"
            type="text"
            name="search"
            v-model="searchInput"
            placeholder="Search movie here..."
            class="lg:w-1/2 w-3/4 rounded-full lg:p-3 p-2 focus:outline-none focus:ring transition ease-in-out text-black px-3 ring-pink-600 text-xl" />
      </div>
   </div>
   <loading-component v-if="loading" />
   <div v-else>
      <search-component :cari-movie="cariMovie" v-if="searchInput != ''" />
      <div class="content" v-else>
         <div class="my-4">
            <most-popular />
         </div>
         <div class="my-4">
            <now-playing />
         </div>
         <div class="my-4">
            <tv-show />
         </div>
      </div>
   </div>
</template>

<script>
import CarouselComponent from "@/components/CarouselComponent.vue";
import LoadingComponent from "@/components/LoadingComponent.vue";
import SearchComponent from "@/components/SearchComponent.vue";
import MostPopular from "@/views/popular/MostPopular.vue";
import TvShow from "@/views/tv/TvShow.vue";
import NowPlaying from "@/views/nowplaying/NowPlaying.vue";
import axios from "axios";
export default {
   components: {
      CarouselComponent,
      LoadingComponent,
      MostPopular,
      TvShow,
      NowPlaying,
      SearchComponent,
   },

   data() {
      return {
         searchInput: "",
         cariMovie: [],
         loading: false,
      };
   },
   methods: {
      async getSearch() {
         this.loading = true;
         await axios
            .get(
               `https://api.themoviedb.org/3/search/movie?api_key=937a8f8fe24d7a3a8f333f0fcaecb491&query=${this.searchInput}`
            )
            .then(
               (res) => (
                  (this.cariMovie = res.data.results), (this.loading = false)
               )
            )
            .catch((e) => {
               console.log(e.message);
               this.loading = true;
            });
      },
   },
   mounted() {
      this.getSearch();
   },
};
</script>

<style scoped lang="scss">
.rating {
   position: absolute;
   top: 0px;
   left: 0px;
   align-items: center;
   display: flex;
   justify-content: center;
   background-color: #be185d;
   color: white;
   border-top-left-radius: 0;
   border-top-right-radius: 50%;
   border-bottom-left-radius: 0;
   border-bottom-right-radius: 50%;
   width: 35px;
   height: 35px;
   padding: 20px;
}
</style>
