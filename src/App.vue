<template>
  <div id="app">
    <n-layout>
      <!--Layout布局，相当于一个容器 -->
      <n-layout-header>
        <h1>first project</h1>
        <!-- 按钮组 button group -->
        <n-button-group>
          <n-button type="primary" round @click="toMain"> 主页 </n-button>
          <n-button type="warning" round @click="toArchive"> 归档页 </n-button>
        </n-button-group>
      </n-layout-header>
      <n-layout-content>
        <!-- 内容 -->
        <router-view />
      </n-layout-content>
    </n-layout>
  </div>
</template>

<script setup>
import {
  NLayout,
  // Layout
  NLayoutHeader,
  NLayoutContent,
  NGridItem,
  NGrid,
  NH1,
  NButton,
  NButtonGroup,
} from "naive-ui";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { onMounted, onBeforeUnmount } from "vue";

const router = useRouter();//页面切换
const store = useStore();//store就是一个容器


const toMain = () => {
  router.push({ path: "/" });
};
const toArchive = () => {
  router.push({ path: "/archive" });
};

onMounted(() => {
  let myData = localStorage.getItem("myData");
  if (myData) {
    let list = JSON.parse(myData);
    store.commit("updateTasks", list);
  }
});

window.onbeforeunload = (event) => {
  let list = store.state.list;
  localStorage.setItem("myData", JSON.stringify(list));
};
</script>



<style lang="postcss" scoped>
#app {
  background: #f5f5f5;

  & .n-layout-header {
    text-align: center;
    border-bottom: 1px solid #e6e6e6;
  }

  & .n-layout-content {
    margin: auto;
    padding: 16px;
    max-width: 360px;
  }

  & .n-button {
    margin: 10px;
  }
}
</style>
