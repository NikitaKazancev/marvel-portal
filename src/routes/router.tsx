import { createBrowserRouter } from 'react-router-dom';
import { App } from '../components/App/App';
import { routes } from './routes';

export const router = createBrowserRouter([
	{
		element: <App />,
		children: routes,
	},
]);
