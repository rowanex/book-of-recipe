<template>
    <div class="content">
        <PageTitle>Search Meals By Main Ingredient</PageTitle>
        <input class="search-input" v-model="searchQuery" placeholder="Search ingredient..." type="text"
            name="search">
        <ingridients-list v-if="!isIngridientsLoading" :ingridients="computedIngredients"></ingridients-list>
        <loading-screen v-else/>
    </div>
</template>
<script>
import PageTitle from '../components/PageTitle.vue';
import IngridientsList from '../components/IngredientsList.vue';
import LoadingScreen from '../components/LoadingScreen.vue';
import axiosClient from '../API/AxiosClient';
import { ref, onMounted, computed } from 'vue';
export default {
    components: {
        PageTitle,
        IngridientsList,
        LoadingScreen
    },
    setup() {
        const ingridients = ref([]);
        const isIngridientsLoading = ref(true);
        const searchQuery = ref("");

        const fetchIngridients = async () => {
            try {
                const response = await axiosClient.get(`list.php?i=list`);
                ingridients.value = response.data.meals;
            } catch (error){
                console.error('Error fetching meal details:', error);
            } finally {
                isIngridientsLoading.value = false;
            }
        }

        const computedIngredients = computed(() => {
            if (!computedIngredients) return ingridients;
            return ingridients.value.filter((i) =>
                i.strIngredient.toLowerCase().includes(searchQuery.value.toLowerCase())
            );
        });

        onMounted(fetchIngridients)

        return { ingridients, computedIngredients, searchQuery, isIngridientsLoading}
    }
}
</script>
<style>
.content {
    margin-bottom: 30px;
}
</style>