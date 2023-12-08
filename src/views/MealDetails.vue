<template>
    <div class="content">
        <div v-if="!isMealLoading" class="meal">
            <div class="meal__name">
                {{ meal.strMeal }}
            </div>
            <div class="meal__img">
                <img :src="meal.strMealThumb" :alt="meal.strMeal">
            </div>
            <div class="meal__short-info">
                <div class="meal__category">
                    <p class="meal_subtitle">Category:</p>
                    <p class="meal__info">{{ meal.strCategory }}</p>
                </div>
                <div class="meal__area">
                    <p class="meal_subtitle">Area:</p>
                    <p class="meal__info">{{ meal.strArea }}</p>
                </div>
                <div class="meal__tags">
                    <p class="meal_subtitle">Tags:</p>
                    <p class="meal__info">{{ meal.strTags }}</p>
                </div>
            </div>
            <div class="meal__recipe">
                {{ meal.strInstructions }}
            </div>
            <div class="meal__ingredients">
                <div class="ingridients__title">
                    Ingridients and Measure:
                </div>
                <div class="ingredients">
                    <div v-for="(index, ind) in new Array(20)" :key="index" class="ingredient">
                        <p v-if="meal['strIngredient' + (ind + 1)]">
                            Ingredient: {{ meal['strIngredient' + (ind + 1)] }}
                        </p>
                        <p v-if="meal['strMeasure' + (ind + 1)] && meal['strMeasure' + (ind + 1)] !== ' '">
                            Measure: {{ meal['strMeasure' + (ind + 1)] }}
                        </p>
                    </div>
                </div>
            </div>
            <div class="meal__btns">
                <a :href="meal.strYoutube" target="_blank" class="meal__btn">YouTube</a>
                <a :href="meal.strSource" target="_blank" class="meal__btn">Source</a>
            </div>
        </div>
        <loading-screen v-else/>
    </div>
</template>
<script>
import LoadingScreen from '../components/LoadingScreen.vue';
import axiosClient from '../API/AxiosClient.js';
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';
export default {
    components: {
        LoadingScreen
    },
    setup() {
        const meal = ref({})
        let isMealLoading = ref(true);
        const route = useRoute();

        const fetchMeal = async () => {
            try {
                const response = await axiosClient.get(`lookup.php?i=${route.params.id}`)
                meal.value = response.data.meals[0] || {};
            } catch (error) {
                console.error('Error fetching meal details:', error);
            } finally {
                isMealLoading.value = false;
            }

        }

        onMounted(fetchMeal);

        return{meal, isMealLoading}
    }
}
</script>
<style scoped>
.content {
    margin-bottom: 30px;
}

.meal {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
}

.meal__name {
    margin-right: auto;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: cadetblue;
    font-size: 20px;
    font-weight: bold;
}

.meal__short-info {
    display: flex;
    gap: 20px;
}

.meal_subtitle {
    display: inline-block;
    margin-right: 5px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: cadetblue;
    font-weight: bold;
    font-size: 18px;
}

.meal__info {
    display: inline-block;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.meal__ingredients {
    margin-right: auto;
}

.ingridients__title {
    margin-bottom: 20px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: cadetblue;
    font-weight: bold;
    font-size: 18px;
}

.meal__btns {
    display: flex;
    gap: 30px;
}

.ingredient {
    margin-bottom: 10px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 16px;
}

.meal__recipe {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 16px;
}

.meal__btn {
    display: inline-block;
    padding: 5px;
    background-color: cadetblue;
    max-width: 80px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 16px;
    color: white;
    border-radius: 15%;
}
</style>