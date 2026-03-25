<template>
    <div class="sectionHeader">
        <h2>Logged in: Austin Wilson</h2>
        <div>
            <p>Completed Repairs: 14/<strong>15</strong></p>
        </div>
        <div>
            <p>Today's Date: <strong>{{ serverDate }}</strong></p>
            <p>Current Time: <strong>{{ serverTime }}</strong></p>
            
        </div>
    </div>

</template>

<script setup lang="ts">
import { ref } from 'vue';
const now = new Date();
const serverTime = ref(now.toLocaleTimeString())
const serverDate = ref(now.toLocaleDateString())

</script>

<style scoped>
.sectionHeader{
    display: flex;
    justify-content: space-around;
    border-bottom: 3px solid ;
    background-color: #DEA47E;
}
p{
    font-size: large;
    
}


</style>