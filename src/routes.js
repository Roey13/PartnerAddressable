import { Home } from './pages/Home.jsx'
import { Main } from './pages/Main.jsx'

export const routes = [{
    path: '/',
    component: Home
}, 
{
    path: '/:channelId?',
    component: Main
}
]