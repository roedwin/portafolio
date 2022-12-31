<template>
  <div class="about">
    <div class="about_component">
      <about></about>
    </div>
    <div class="conocimientos">
      <conocimientos></conocimientos>
    </div>  
  </div>    
</template>

<script>
import About from '../components/About.vue'
import Conocimientos from '../components/Conocimientos.vue'
export default {
  components: { About, Conocimientos },  
}
</script>

<style >
.about{
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
}
.about_component{
  width: 100%;
  height: 40%;
}
.conocimientos{
  width: 100%;
  height: 60%;
}
</style>