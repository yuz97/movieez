<template>
   <div class="slider flex item-center gap-8 overflow-x-scroll w-[100vw]">
      <div v-for="item in similar" :key="item">
         <img
            class="w-[200px] h-[200px] min-w-[200px] max-w-[200px] rounded-lg"
            :src="
               `https://image.tmdb.org/t/p/w500/${item.poster_path}` ||
               `https://image.tmdb.org/t/p/w500/${item.backdrop_path}`
            "
            :alt="`${item.poster_path}`" />
         <div class="px-6 py-4">
            <div class="font-bold text-sm mb-2">
               {{ item.title || item.name }}
            </div>
         </div>
      </div>
      <div class="flex gap-x-8">
         <button @click="prev" class="text-white"></button>
         <button @click="next" class="text-white"></button>
      </div>
   </div>
</template>

<script>
export default {
   name: "SlideScroll",
   props: ["similar"],
   methods: {
      prev() {
         document.querySelector(".slider").scrollLeft -= 232;
      },
      next() {
         document.querySelector(".slider").scrollLeft += 232;
      },
   },
};
</script>

<style scoped>
.slider {
   scrollbar-width: none;
   -moz-overflow-style: none;
}
.slider::-webkit-scrollbar {
   width: 0;
   background: transparent;
}
</style>
