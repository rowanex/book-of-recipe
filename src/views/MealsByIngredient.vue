<template>
    <div class="content">
        <page-title>Meals By Ingredient: {{ $route.params.ingredient }}</page-title>
        <meals-list v-if="!isMealsLoading" :meals="meals" />
        <loading-screen v-else />
    </div>
</template>
<script>

import PageTitle from '../components/PageTitle.vue';
import MealsList from '../components/MealsList.vue';
import LoadingScreen from '../components/LoadingScreen.vue';
import axiosClient from '../API/AxiosClient';
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';
export default {
    components: {
        PageTitle,
        MealsList,
        LoadingScreen
    },

    setup() {
        const route = useRoute();
        const mealsByIngredient = ref([]);
        const isMealsLoading = ref(true);
        const meals = ref([]);

        const fetchMeals = async () => {
            try {
                const response = await axiosClient.get(`filter.php?i=${route.params.ingredient}`);
                mealsByIngredient.value = response.data.meals;

                for (let i = 0; i < mealsByIngredient.value.length; i++) {
                    const mealResponse = await axiosClient.get(`lookup.php?i=${mealsByIngredient.value[i].idMeal}`);
                    meals.value.push(mealResponse.data.meals[0]);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                isMealsLoading.value = false
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