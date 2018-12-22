import Vue from 'vue'
import Router from 'vue-router'

const IndexHeader = resolve => require(['@/view/Index.vue'],resolve)
const news = resolve => require(['@/view/News/SpotNews.vue'], resolve)
const letter = resolve => require(['@/view/Duce/RefeRral.vue'], resolve)

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/index',
      name: 'index',
      component: IndexHeader,
      children:[
        {
          path: 'news',
          component: news,
          children:[
            {
              path: '',
              component: resolve => {
                require(['@/components/News'], resolve)
              },
            },
            {
              path: 'News',
              component: resolve => {
                require(['@/components/News'], resolve)
              },
            },
            {
              path: 'InForm',
              component: resolve => {
                require(['@/components/InForm'], resolve)
              },
            }
          ]
        },
        {
          path: 'letter',
          component:letter,
          children:[
            {
              path: '',
              component: resolve =>{
                require(['@/components/InTro'],resolve)
              }
            },
            {
              path: 'intro',
              component: resolve =>{
                require(['@/components/InTro'],resolve)
              }
            },
            {
              path: 'pass',
              component: resolve =>{
                require(['@/components/Pass'],resolve)
              }
            }
          ]
        }
      ]
    }
  ]
})
