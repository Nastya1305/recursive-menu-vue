<template>
   <div>
      <router-link :to="menuItem.path" 
         class="item" :class="{ item_active: active }"
         :style="{ paddingLeft: menuItem.depth * 20 + 20 + 'px' }"
      >
         <div>{{ menuItem.label }}</div>
         <div 
            v-if="menuItem.children" 
            class="item__arrow" :class="{ item__arrow_opened: opened }" 
            @click.prevent="toggleMenu"
         >
            ᨆ
         </div>
      </router-link>

      <div v-show="opened">
         <menu-item 
            v-for="(item, index) in menuItem.children" 
            :key="index"
            :menuItem="{
               children: item.children,
               label: item.label,
               path: menuItem.path + item.path,
               depth: menuItem.depth + 1,
            }"
         />
      </div>
   </div>
</template>


<script>
export default {
   name: "menu-item",

   data: () => ({
      opened: false,
      active: false,
   }),

   props: {
      menuItem: {
         type: Object,
         required: true,
      },
   },

   methods: {
      toggleMenu() {
         this.opened = !this.opened;
      },
      isActive() {
         if (this.$route) {
            return (
               (this.$route.path).endsWith(this.menuItem.path) || (this.$route.path).endsWith(this.menuItem.path + "/")
            );
         }

         return (
            window.location.href.endsWith(this.menuItem.path) ||
            window.location.href.endsWith(this.menuItem.path + "/")
         );
      },
      isOpen() {
         let currentUrl;
         if (this.$route.path !== '/') {
            currentUrl = this.$route.path;
         } else {
            currentUrl = window.location.href;
         }
      
         if (currentUrl.includes(this.menuItem.path)) {
            return true;
         }
         
         return false;
      },
   },

   mounted() {
      this.active = this.isActive();
      this.opened = this.isOpen();
   },

   watch: {
      $route() {
         this.active = this.isActive();
      },
   },
};
</script>


<style lang="scss" scoped>
   @import "./MenuItem.scss";
</style>