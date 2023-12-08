<template>
    <div class="content">
        <page-title>Random 9 meals for you</page-title>
        <meals-list v-if="!isMealsLoading" :meals="meals"></meals-list>
        <loading-screen v-else />
    </div>
</template>
<script>
import PageTitle from '../components/PageTitle.vue';
import MealsList from '../components/MealsList.vue';
import LoadingScreen from '../components/LoadingScreen.vue';
import axiosClient from '../API/AxiosClient.js';
import { ref, onMounted } from 'vue';
export default {
    components: {
        PageTitle,
        MealsList,
        LoadingScreen
    },
    setup() {
        const meals = ref([]);
        const isMealsLoading = ref(true);

        const createRandomMealRequests = () => {
            const requests = [];
            for (let i = 0; i < 9; i++) {
                requests.push(axiosClient.get(`random.php`));
            }
            return requests;
        };

        const fetchMeals = async () => {
            try {
                const requests = createRandomMealRequests();
                const responses = await Promise.all(requests);
                meals.value = responses.map(response => response.data.meals && response.data.meals[0]).filter(Boolean);
            } catch (error) {
                console.error('Error fetching meals:', error);
            } finally {
                isMealsLoading.value = false;
            }
        }

        onMounted(fetchMeals);

        return { meals, isMealsLoading };
    }
}
</script>
<style scoped>
.content {
    margin-bottom: 30px;
}
</style>