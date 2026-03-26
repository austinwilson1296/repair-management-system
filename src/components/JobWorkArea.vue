<template>
    <SessionHeader />
    <div class="work-area">
    <div v-if="storedJob === null" >
        <h1>Please select a job from the Job Board to load Job!</h1>
    </div>
    <div v-else>
        <p>{{ storedJob?.jobId }}</p>
        <p>{{ storedJob?.product.skuNumber }}</p>
        <img :src="storedJob.damagePhoto" alt="">
    </div>
    </div>
</template>



<script setup lang="ts">
import { storeToRefs } from 'pinia';
import SessionHeader from './SessionHeader.vue';
import { useJobStore } from '@/stores/job';

const store = useJobStore()
const {storedJob} = storeToRefs(store)

</script>

<style scoped>
p {
    color: green;
}
.work-area{
    margin: 25px ;
}
</style>