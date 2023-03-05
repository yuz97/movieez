<template>
   <div class="flex my-3 container">
      <div class="w-[960px] h-[400px] overflow-hidden rounded-lg">
         <div class="flex items-center justify-content">
            <div
               v-for="image in 3"
               :key="`image-${image}`"
               class="w-[960px] h-[400px] min-w-[960px] max-w-[960px]"
               :style="{
                  transform: `translateX(${-960 * (currentSlide - 1)}px)`,
               }">
               <img
                  :src="`../../../assets/movies/movie${image}.jpg`"
                  :alt="`movies-${image}`"
                  class="transition-smooth" />
            </div>
         </div>
      </div>
   </div>

   <div class="flex items-center justify-center gap-x-4 py-4">
      <button
         v-for="num in 3"
         :key="`slider-${num}`"
         class="h-4 rounded-full"
         :class="{
            'bg-white w-4': currentSlide != num,
            'bg-pink-700 w-12': currentSlide == num,
         }"
         @click="currentSlide = num"></button>
   </div>
</template>

<script>
export default {
   name: "CarouselComponent",
   data() {
      return {
         currentSlide: 1,
         timeInterval: null,
      };
   },
   mounted() {
      this.timeInterval = setInterval(this.nextSlide, 5000);
   },
   beforeUnmount() {
      clearInterval(this.timeInterval);
   },
   methods: {
      nextSlide() {
         this.currentSlide == 3 ? (this.currentSlide = 1) : this.currentSlide++;
      },
   },
};
</script>

<style></style>
