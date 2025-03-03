import { createBrowserRouter} from 'react-router-dom';

// Pages
import Home from './pages/home/Home';
import Sobre from './pages/sobre/Sobre';
import Barracas from './pages/barracas/Barracas';
import Contato from './pages/contato/Contato'
import Layout from './components/layout/Layout';
import Notfound from './pages/notfound/Notfound';

const router = createBrowserRouter ([
    {
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/sobre',
                element: <Sobre />
            },
            {
                path: '/barracas',
                element: <Barracas />
            },
            {
                path: '/contato',
                element: <Contato />
            },
            {
                path: '*',
                element: <Notfound />
            }
        ]
    }
])

export { router }