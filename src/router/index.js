import { createWebHistory, createRouter } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import SingePage from "@/views/SingePage.vue";
import AddSong from "@/views/AddSong.vue";
import DetailSong from "@/views/DetailSong.vue";
import Edit from "@/views/EditSong.vue";
import NotFound from "@/views/NotFound.vue";
const routes = [
    {
        path: "/",
        component: HomePage,
    },
    {
        path: "/music/:slug",
        component: SingePage
    },
    {
        path: "/music/create/",
        component: AddSong
    },
    {
        path:"/me/stored/music/",
        component: DetailSong
    },
    {
        path:"/music/",
        component: Edit
    },
    {
        path: "/:pathMatch(.*)*",
        component: NotFound
    },
    
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
