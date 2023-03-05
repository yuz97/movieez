<template>
   <div class="card grid lg:grid-cols-4 grid-cols-2 lg:gap-8 gap-4">
      <div
         class="bg-transparent rounded-lg relative"
         v-for="tv in televisions.slice(0, 4)"
         :key="tv.id">
         <div
            class="rating bg-gradient-to-tr from-pink-800 to-pink-600 shadow-md">
            <div class="text-xl font-bold">
               {{ Math.round(tv.vote_average) }}
            </div>
         </div>

         <img
            v-if="tv.poster_path"
            :src="`https://image.tmdb.org/t/p/w500/${tv.poster_path}`"
            alt="poster"
            class="rounded-lg h-[300px] min-h-[300px] w-full" />
         <img
            v-else
            :src="`https://image.tmdb.org/t/p/w500/${tv.backdrop_path}`"
            alt="poster"
            class="rounded-lg h-[300px] min-h-[300px] w-full" />

         <div class="font-bold text-md uppercase">
            {{ tv.title || tv.name }}
         </div>
         <div class="font-medium text-sm">
            {{
               new Date(tv.release_date || tv.first_air_date).toLocaleString(
                  "id-ID",
                  {
                     month: "long",
                     day: "numeric",
                     year: "numeric",
                  }
               )
            }}
         </div>
         <router-link
            :to="`/tv/${tv.id}`"
            class="px-4 py-1 bg-pink-600 block shadow-sm rounded-full btn-movie text-center mt-3 hover:text-white hover:bg-white/70 backdrop-blur-md">
            Detail
         </router-link>
      </div>
   </div>
</template>

<script>
export default {
   name: "TvComponent",
   props: ["televisions"],
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
