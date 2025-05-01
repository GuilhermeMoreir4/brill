import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Contact from '../components/Contact.vue'
import ReportBug from '../components/ReportBug.vue'
import Download from '../components/Download.vue'

const router = createRouter({
  history: createWebHistory('/brill/'),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/report-bug',
      name: 'ReportBug',
      component: ReportBug
    },
    {
      path: '/download',
      name: 'Download',
      component: Download
    }
  ]
})

export default router 