<template>
   <div class="content">
      {{ title }}
   </div>
</template>


<script>
export default {
   name: 'page-content',
   props: {
      title: String,
   }
}
</script>


<style lang="scss" scoped>
.content {
   width: 100%;
   height: 100%;

   text-align: center;
   font-size: 24px;
}
</style>