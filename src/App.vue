<template>
  <div>
    <sideNav />
    <div class="content-right">
      <router-view />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import sideNav from "@/components/side-nav/sideNav.vue";

export default defineComponent({
  components: {
    sideNav,
  },
});
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
  .content-right {
    margin-left: 220px;
  }
}
</style>
