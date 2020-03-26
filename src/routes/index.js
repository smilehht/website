
import Index from '@/views/index'
import Add from '@/views/add'
import Blog from '@/views/blog'
import Demo from '@/views/demo'
import About from '@/views/about'

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