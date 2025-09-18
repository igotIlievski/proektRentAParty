// import { createRouter, createWebHistory } from 'vue-router'

// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes: [],
// })

// export default router

import { createRouter, createWebHistory } from 'vue-router'

import Services from '../components/Services.vue'
import Testimonials from '../components/Testimonials.vue'
import Gallery from '../components/Gallery.vue'
import WhyUs from '../components/WhyUs.vue'
import Calculator from '../components/Calculator.vue'
import Contact from '../components/Contact.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'Home', component: Services, meta: { title: 'Дома' } },
    { path: '/services', name: 'Services', component: Services, meta: { title: 'Услуги' } },
    { path: '/why-us', name: 'WhyUs', component: WhyUs, meta: { title: 'Зошто ние?' } },
    { path: '/gallery', name: 'Gallery', component: Gallery, meta: { title: 'Галерија' } },
    { path: '/testimonials', name: 'Testimonials', component: Testimonials, meta: { title: 'Сведоштва' } },
    { path: '/order', name: 'Order', component: Calculator, meta: { title: 'Нарачка' } },
    { path: '/contact', name: 'Contact', component: Contact, meta: { title: 'Контакт' } }
  ]
})

router.afterEach((to) => {
  document.title = to.meta.title ? `${to.meta.title} | Rent A Party` : 'Rent A Party'
})
export default router;