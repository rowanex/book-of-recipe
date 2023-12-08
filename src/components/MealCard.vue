<template>
    <router-link :to="{name: 'mealDetails', params: {id: meal.idMeal} }" class="card">
        <div class="card__img">
            <img :src="meal.strMealThumb" :alt="meal.strMeal">
        </div>
        <div class="card__title">
            <p>{{meal.strMeal}}</p>
        </div>
        <div class="card__recipe">
            <p>{{ truncateString(meal.strInstructions, 110) }}</p>
        </div>
    </router-link>
</template>
<script>
export default {
    props: {
        meal: {
            type: Object,
            required: true
        }
    },
    setup() {
        const truncateString = (str, width) => str.length > width ? str.slice(0, width) + "..." : str;
        return{truncateString}
    }
}
</script>
<style scoped>
    .card {
        display: flex;
        flex-direction: column;
        gap: 20px;
        max-width: 300px;
        background-color: #fff;
        padding: 10px;
        border: 2px solid cadetblue;
        transition: all 0.3s;
    }

    .card:hover{
        transform: scale(1.1);
        cursor: pointer;
    }

    .card__img{
        position: relative;
        width: 290px;
        height: 260px;
        border: 2px solid cadetblue;
        overflow: hidden;
        margin-left: auto;
        margin-right: auto;
    }

    .card__img img{
        width: 100%;
        height: auto;
    }

    .card__title{
        font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: 18px;
        color: black;
    }

    .card__recipe{
        font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: 16px;
        color: black;
    }

    .card__btn{
        margin-top: auto;
    }

    .card__btn a{
        display: inline-block;
        padding: 5px;
        background-color: cadetblue;
        max-width: 80px;
        font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: 16px;
        color: white;
        border-radius: 15%;
    }
</style>