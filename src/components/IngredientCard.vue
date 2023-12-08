<template>
    <router-link :to="{name: 'byIngridient', params: {ingredient: ingridient.strIngredient}}" class="ingridient">
        <p class="ingridient__name">{{ingridient.strIngredient}}</p>
    </router-link>
</template>
<script>
export default {
    props: {
        ingridient: {
            type: Object,
            required: true
        }
    }
}
</script>
<style>

    .ingridient {
        width: 30%;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #fff;
        border: 2px solid cadetblue;
        margin-bottom: 20px;
        transition: all 0.2s;
    }

    .ingridient__name {
        color: cadetblue;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: 18px;
    }

    .ingridient:hover{
        transform: scale(1.1);
    }
    
</style>