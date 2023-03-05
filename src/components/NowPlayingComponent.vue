<template>
   <div class="card grid lg:grid-cols-4 md:grid-cols-2 lg:gap-8 md:gap-4 ">
      <div
         class="bg-transparent rounded-lg relative"
         v-for="movie in movies.slice(0, 4)"
         :key="movie.id">
         <div
            class="rating bg-gradient-to-tr from-pink-800 to-pink-600 shadow-md">
            <div class="text-xl font-bold">
               {{ Math.round(movie.vote_average) }}
            </div>
         </div>

         <img
            v-if="movie.poster_path"
            :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
            alt="poster"
            class="rounded-lg h-[300px] min-h-[300px] w-full" />
         <img
            v-else
            :src="`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`"
            alt="poster"
            class="rounded-lg h-[300px] min-h-[300px] w-full" />

         <div class="font-bold text-md uppercase">
            {{ movie.title || movie.name }}
         </div>
         <div class="font-medium text-sm">
            {{
               new Date(
                  movie.release_date || movie.first_air_date
               ).toLocaleString("id-ID", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
               })
            }}
         </div>
         <router-link
            :to="{ path: `/playing/${movie.id}` }"
            class="px-4 py-1 bg-pink-600 block shadow-sm rounded-full btn-movie text-center my-3 hover:text-white hover:bg-white/70 backdrop-blur-md">
            Detail
         </router-link>
      </div>
   </div>
</template>

<script>
export default {
   name: "NowPlayingComponent",
   props: ["movies"],
};
</script>

<style scoped>
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
