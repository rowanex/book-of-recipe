<template>
    <div class="ingridients">
        <ingridient-card v-for="ingridient in ingridients" :ingridient="ingridient" :key="ingridient.idIngredient"></ingridient-card>
    </div>
</template>
<script>
import IngridientCard from './IngredientCard.vue';
export default {
    components: {
        IngridientCard
    },
    props: {
        ingridients: {
            type: Array,
            required: true,
        }
    }
}
</script>
<style>
    .ingridients {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    
</style>