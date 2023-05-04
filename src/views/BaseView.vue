<template>
  <section>
    <!-- Sidebar, se houver -->
    <Navbar />
    <BaseTransition />
    <RodapeComponent />
  </section>
</template>

<script>
import Navbar from "@/components/layouts/navbar/Navbar.vue";
import BaseTransition from "@/components/layouts/transitions/BaseTransition.vue";
import RodapeComponent from '@/components/RodapeComponent.vue'

export default {
  name: "HomeView",
  components: {
    Navbar,
    BaseTransition,
    RodapeComponent
  },
};
</script>
