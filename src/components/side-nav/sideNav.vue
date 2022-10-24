<template>
  <div class="side-nav">
    <el-menu
      default-active="'1'"
      class="el-menu-vertical-demo"
      @select="handleSelect"
    >
      <sideNavItem
        v-for="(item, index) in navData"
        :navData="item"
        :index="item.index"
        :key="index"
      />
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import route from "@/router";
import { navInfo } from "@/utils/interface";
import sideNavItem from "./sideNavItem.vue";
export default defineComponent({
  name: "sideNav",
  components: {
    sideNavItem,
  },
  setup() {
    let navData = route.routes;
    (function initNavData(arr: navInfo[], path: string) {
      arr.forEach((item) => {
        if (/^\//.test(item.path)) {
          item.index = item.path;
        } else if (path !== "/") {
          item.index = path + "/" + item.path;
        } else {
          item.index = "/" + item.path;
        }
        if (item.children && item.children.length) {
          return initNavData(item.children, item.index);
        }
      });
    })(navData, "");
    return {
      navData,
    };
  },
  methods: {
    handleSelect(path: string): void {
      this.$router.push({
        path: path,
      });
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" scpoed>
a {
  color: #42b983;
}
.side-nav {
  position: absolute;
  width: 220px;
}
:deep(.el-sub-menu) {
  position: relative;
}

:deep(.el-sub-menu .el-sub-menu__icon-arrow) {
  right: calc(100% - 10px);
}
:deep(.is-active) {
  color: red;
}
:deep(.el-sub-menu__title:hover) {
  color: red;
  background-color: #fff;
}
</style>
