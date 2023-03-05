<template>
   <div class="flex flex-col min-h-screen bg-slate-900 text-slate-200">
      <navigation-component />
      <router-view />
      <footer-component />
   </div>
</template>

<script>
import FooterComponent from "./components/FooterComponent.vue";
import NavigationComponent from "./components/NavigationComponent.vue";
export default {
   components: { NavigationComponent, FooterComponent },
};
</script>

<style></style>
