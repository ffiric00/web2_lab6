import { createRouter, createWebHistory } from "vue-router";
import ChatRoom1 from "../views/ChatRoom1.vue";
import ChatRoom2 from "../views/ChatRoom2.vue";
import NotFound from "../views/NotFound.vue";
   
const router = createRouter({ 
    history: createWebHistory(process.env.BASE_URL), 
    routes: [ 
        {   path: "/ChatRoom1", 
            name: "chatroom1", 
            component: ChatRoom1, 
        }, 
    {   path: "/ChatRoom2",
        name: "chatroom2", 
        component: ChatRoom2, 
    },
    {
        path: "/CatchAll(.*)",
        name: "NotFound", 
        component: NotFound,
    },
 ], 
}
); 
    export default router;