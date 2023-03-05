<template>
   <div class="lg:py-3">
      <div class="flex flex-col lg:flex-row justify-between">
         <div class="flex justify-between items-center px-6 py-4 lg:py-0">
            <router-link
               class="block text-slate-200"
               to="/"
               exact-active-class="bg-transparent">
               <h4
                  class="font-bold text-2xl bg-gradient-to-r from-pink-900 to-pink-600 bg-clip-text text-transparent">
                  Movieez
               </h4>
            </router-link>
            <button
               @click="isOn = !isOn"
               class="block lg:hidden focus:outline-none">
               <svg
                  :class="!isOn ? 'block' : 'hidden'"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-menu transition-all duration-100">
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
               </svg>

               <svg
                  :class="isOn ? 'block' : 'hidden'"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-x transition-all duration-100">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
               </svg>
            </button>
         </div>
         <div
            :class="isOn ? 'block' : 'hidden'"
            class="lg:flex flex-col justify-between lg:flex-row lg:items-center px-6 gap-x-12">
            <router-link
               class="text-slate-200 transition flex items-center lg:flex-row"
               to="/">
               All
            </router-link>

            <router-link
               class="text-slate-200 transition flex items-center lg:flex-row"
               to="/all-popular">
               Movies
            </router-link>

            <router-link
               class="text-slate-200 transition flex items-center lg:flex-row"
               to="/playing">
               Now Playing
            </router-link>

            <router-link
               class="text-slate-200 transition flex items-center lg:flex-row"
               to="/tv">
               TV Show
            </router-link>
         </div>
      </div>
   </div>
</template>
<script>
import { ref } from "vue";
export default {
   name: "NavigationComponent",
   setup() {
      const isOn = ref(false);

      return { isOn };
   },
};
</script>
