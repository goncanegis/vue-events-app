import { createRouter, createWebHistory } from "vue-router"
import EventListView from "../views/EventListView.vue"
import AboutView from "../views/AboutView.vue"
import EventDetailsView from "../views/EventDetailsView.vue"

const routes = [
  {
    path: "/",
    name: "eventList",
    component: EventListView,
  },
  {
    path: "/events/:id",
    name: "eventDetails",
    props: true,
    component: EventDetailsView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
