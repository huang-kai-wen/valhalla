<template>
  <el-sub-menu
    class="nav-title"
    :index="navData.index"
    v-if="navData.children && navData.children.length"
  >
    <template v-slot:title>{{ navData.name }}</template>
    <sideNavItem
      v-for="(item, index) in navData.children"
      :key="index"
      :navData="item"
    />
  </el-sub-menu>
  <el-menu-item v-else :index="navData.index">{{ navData.name }}</el-menu-item>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { navInfo } from "@/utils/interface";

export default defineComponent({
  name: "sideNavItem",
  props: {
    navData: {
      type: Object as PropType<navInfo>,
      default() {
        return {};
      },
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" scpoed>
a {
  color: #42b983;
}
.nav-title {
  min-width: 150px;
  position: relative;
}
</style>
