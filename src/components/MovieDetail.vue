<template>
   <div class="movie-detail lg:flex lg:justify-between">
      <img
         class="w-[300px] h-[400px] rounded-lg"
         :src="
            `https://image.tmdb.org/t/p/w500/${movie.poster_path}` ||
            `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`
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
</template>

<script>
export default {
   props: ["movie"],
};
</script>

<style></style>
