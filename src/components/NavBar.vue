<template lang="">
    <header class="header">
        <ul class="menu">
            <router-link 
              :to="{name: 'Home'}"
              class="menu__item menu__item_left"
            >
                Home
            </router-link>
            <router-link
              :to="{name: 'byName'}"
              class="menu__item"
            >
                Search meals
            </router-link>
            <router-link 
              :to="{name: 'byLetter'}"
              class="menu__item"
            >
                Meals by letter
            </router-link>
            <router-link 
              :to="{name: 'ingridients'}" 
              class="menu__item"
            >
                Meals by ingredient
            </router-link>
        </ul>
    </header>
</template>
<script>
export default {
    
}
</script>
<style scoped>
  @import url(../assets/styles/nullstyle.css);
    .header {
        background-color: #fff;
        padding: 20px;
    }
    .menu{
        display: flex;
        gap:20px;
    }

    .menu__item{
        color: black;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    .menu__item:hover{
        color: cadetblue;
        transition: all 0.3s;
    }

    .menu__item_left {
        color: cadetblue;
        margin-right: auto;
    }

    .menu__item_left:hover {
        color: black;
    }



</style>