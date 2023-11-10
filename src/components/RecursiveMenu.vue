<template>
  <div class="menu">
    <menu-item 
      v-for="(item, index) in menuTree" 
      :key="index"
      :menuItem="{
        children: item.children,
        label: item.label,
        path: item.path,
        depth: 0,
      }"
    />
  </div>
</template>

<script>
import MenuItem from './MenuItem/MenuItem.vue';

export default {
  name: 'recursive-menu',
  components: { MenuItem },
  props: {
    menuTree: {
      type: Array,
      required: true
    } 
  },
}
</script>

<style lang="scss" scoped>
.menu {
  height: 100vh;
  width: 20%;
  min-width: max-content;
  
  border-right: 1px solid #ececec;
  overflow: auto;
}
</style>