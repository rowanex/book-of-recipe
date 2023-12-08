import { createRouter, createWebHistory } from "vue-router";

import MainPage from '../views/MainPage.vue';
import MealsByName from '../views/MealsByName.vue';
import MealsByLetter from '../views/MealsByLetter.vue';
import Ingredients from '../views/Ingredients.vue';
import MealsByIngredient from '../views/MealsByIngredient.vue';
import MealDetails from '../views/MealDetails.vue';


const routes = [
    {
        path: '/',
        name: 'Home',
        component: MainPage
    },
    {
        path: '/meal/:id',
        name: 'mealDetails',
        component: MealDetails
    },
    {
        path: '/by-name/:name?',
        name: 'byName',
        component: MealsByName
    },
    {
        path: '/by-letter/:letter?',
        name: 'byLetter',
        component: MealsByLetter
    },
    {
        path: '/ingridients',
        name: 'ingridients',
        component: Ingredients
    },
    {
        path: '/by-ingridient/:ingredient',
        name: 'byIngridient',
        component: MealsByIngredient
    },
];

const router = createRouter({
    routes,
    history: createWebHistory(),
});

export default router;