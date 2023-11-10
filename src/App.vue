<template>
  <div class="page">
    <recursive-menu :menu-tree="menuTree"/>
    <div class="page__content">
      <router-view></router-view>
    </div>
  </div>
</template>


<script>
import RecursiveMenu from '@/components/RecursiveMenu';
import {menuTree} from '@/data/menuTree';

export default {
  name: 'App',
  components: { RecursiveMenu },
  data: () => ({
    menuTree
  })
}
</script>


<style lang="scss">
@import "./App.scss";

.page {
  display: flex;

  &__content {
    padding: 30px;
    flex: 1 1 100%;
    
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>