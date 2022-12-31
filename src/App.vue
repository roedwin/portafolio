<script>
import Menu from "./components/Menu.vue"
import { RouterView } from'vue-router'
export default {
  components: { Menu },
}
</script>
 

<template>
  <Menu></Menu>
  <RouterView />
</template>

<style scoped>

</style>
