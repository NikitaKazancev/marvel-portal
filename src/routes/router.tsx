import { createBrowserRouter } from 'react-router-dom';
import { App } from '../components/App/App';
import { routes } from './routes';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: routes.map(route => ({
			index: route.path === '/',
			path: route.path === '/' ? undefined : route.path,
			element: route.element,
		})),
	},
]);
