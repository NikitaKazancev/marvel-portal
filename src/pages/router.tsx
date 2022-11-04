import { createRef } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { App } from '../components/App/App';
import { Page404 } from './404';
import { CharPage } from './CharPage';
import { ComicPage } from './ComicPage';
import { MainPage } from './MainPage';

export const routes = [
	{ path: '/', name: 'Main', element: <MainPage />, nodeRef: createRef() },
	{
		path: '/comics',
		name: 'Comic',
		element: <ComicPage />,
		nodeRef: createRef(),
	},
	{
		path: '/characters',
		name: 'Char',
		element: <CharPage />,
		nodeRef: createRef(),
	},
	{
		path: '*',
		name: '404',
		element: <Page404 />,
		nodeRef: createRef(),
	},
];

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
