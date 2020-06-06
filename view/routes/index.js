
import Index from '@/pages/index'
import Add from '@/pages/add'
import Blog from '@/pages/blog'
import Demo from '@/pages/demo'
import About from '@/pages/about'

export default [
    {
        path: '/',
        name: 'home',
        component: Index
    },
    {
        path: '/blog',
        name: 'blog',
        component: Blog
    },
    {
        path: '/demo',
        name: 'demo',
        component: Demo
    },
    {
        path: '/about',
        name: 'about',
        component: About
    },
    {
        path: '/add',
        name: 'add',
        component: Add
    }
]