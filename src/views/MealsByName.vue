<template>
    <div class="content">
        <page-title>Search Meals by Name</page-title>
        <input class="search-input" v-model="searchQuery" @input="fetchMeals" placeholder="Search..." type="text"
            name="search">
        <meals-list v-if="searchedMeals && searchQuery" :meals="searchedMeals"></meals-list>
        <empty-meals v-else />
    </div>
</template>
<script>
import PageTitle from '../components/PageTitle.vue';
import MealsList from '../components/MealsList.vue';
import EmptyMeals from '../components/EmptyMeals.vue';
import axiosClient from '../API/AxiosClient';
import { useRoute } from 'vue-router';
import { ref, onMounted, watch} from 'vue';
export default {
    components: {
        PageTitle,
        MealsList,
        EmptyMeals
    },
    setup() {
        const searchedMeals = ref([]);
        const searchQuery = ref('');
        const route = useRoute();

        const fetchMeals = async () => {
            try {
                const response = await axiosClient.get(`search.php?s=${searchQuery.value}`)
                searchedMeals.value = response.data.meals;
            } catch( error) {
                console.error('Error fetching meals:', error);
            }
        }

        const updateSearchFromRoute = () => {
            searchQuery.value = route.query.name || '';
            fetchMeals();
        };

        onMounted(updateSearchFromRoute)

        watch(() => route.query.name, updateSearchFromRoute);

        return { searchQuery, fetchMeals, searchedMeals }
    }
}
</script>
<style>
.content {
    margin-bottom: 30px;
}

.search-input {
    width: 100%;
    border: 2px solid cadetblue;
    margin-bottom: 30px;
    font-size: 18px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
</style>