<template>
    <div class="content">
        <page-title>Meals by Letter: {{ $route.params.letter }}</page-title>
        <div class="letters">
            <router-link 
              :to="{name: 'byLetter', params: {letter} }"
              v-for="letter in letters"
              :key="letter"
              class="letter"
            >
            {{ letter }}
            </router-link>
        </div>
        <meals-list v-if="searchedMeals" :meals="searchedMeals"></meals-list>
        <empty-meals v-else/>
    </div>
</template>
<script>

import PageTitle from '../components/PageTitle.vue';
import MealsList from '../components/MealsList.vue';
import EmptyMeals from '../components/EmptyMeals.vue';
import axiosClient from '../API/AxiosClient';
import { useRoute } from 'vue-router';
import {ref, onMounted, watch} from 'vue';
export default {
    components: {
        PageTitle,
        MealsList,
        EmptyMeals
    },
    setup(){
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
        const searchedMeals = ref([]);
        const route = useRoute();

        const fetchMeals = async () => {
            try {
                const response = await axiosClient.get(`search.php?f=${route.params.letter}`);
                searchedMeals.value = response.data.meals;
            } catch (error) {
                console.error('Error fetching meal:', error);
            }
        }

        onMounted(fetchMeals)

        watch(() => route.params.letter, fetchMeals);

        return {letters, searchedMeals}
    }
}
</script>
<style>
    .content{
        margin-bottom: 30px;
    }
    .letters{
        display: flex;
        justify-content: center;
        gap: 20px;
        margin-bottom: 30px;
    }
    .letter{
        color: cadetblue;
        font-style: bold;
        font-size: 22px;
        transition: all 0.2s;
    }
    .letter:hover{
        transform: scale(1.5);
        color: black;
    }
</style>