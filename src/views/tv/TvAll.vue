<template>
   <div class="container">
      <div class="mt-10">
         <h4 class="text-3xl text-center mb-5">List of Tv Show</h4>
      </div>
      <loading-component v-if="loading" />
      <div v-else>
         <div class="mx-auto">
            <all-tv :televisions="televisions" />
         </div>
         <div class="flex justify-center items-center mt-5">
            <v-pagination
               v-model="page"
               :pages="pageCount"
               :range-size="1"
               active-color="#DCEDFF"
               @update:modelValue="getTvShow" />
         </div>
      </div>
   </div>
</template>

<script>
import AllTv from "@/components/AllTv.vue";
import axios from "axios";
import VPagination from "@hennge/vue3-pagination";
import "@hennge/vue3-pagination/dist/vue3-pagination.css";
import LoadingComponent from "@/components/LoadingComponent.vue";

export default {
   components: { AllTv, VPagination, LoadingComponent },
   data() {
      return {
         televisions: [],
         page: 1,
         pageCount: null,
         loading: false,
      };
   },
   methods: {
      async getTvShow() {
         let api_key = "937a8f8fe24d7a3a8f333f0fcaecb491";
         this.loading = true;
         await axios
            .get(
               `https://api.themoviedb.org/3/tv/popular?api_key=${api_key}&page=${this.page}`
            )
            .then((res) => {
               this.televisions = res.data.results;
               this.pageCount = res.data.total_pages;
               this.loading = false;
            })
            .catch((e) => (console.log(e), (this.loading = true)));
      },
   },
   mounted() {
      this.getTvShow();
   },
};
</script>

<style></style>
