<template>
<div class="main-container">
<main class="main-area">
  <div>This is the main Area</div>  
</main>
<div class="job-board">
  <JobBoard />
</div>
</div>

</template>
<script setup lang="ts">
import JobBoard from './components/JobBoard.vue';

</script>
<style scoped>
.main-container{
  margin: 0;
  display: flex;
  flex-direction: row;
  min-height: 100vh;
}

.main-area{
  flex: 2 1 ;
  
}

.job-board{
  flex:1 1 1;

}
</style>
