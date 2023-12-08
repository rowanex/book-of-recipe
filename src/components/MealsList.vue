<template>
    <div class="meals">
        <meal-card
          v-for="meal in meals"
          :meal="meal"
          :key="meal.id"
        />
    </div>
</template>
<script>
import MealCard from './MealCard.vue';
export default {
    components: {
        MealCard
    },
    props: {
        meals: {
            type: Array,
            required: true
        }
    }
}
</script>
<style scoped>
    .meals{
        display: flex;
        flex-wrap: wrap;
        gap: 40px;
        align-items: stretch;
        justify-content: center;
    }    
</style>