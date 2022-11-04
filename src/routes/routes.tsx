import { createRef } from 'react';
import { Page404 } from '../pages/404';
import { CharPage } from '../pages/CharPage';
import { ComicPage } from '../pages/ComicPage';
import { MainPage } from '../pages/MainPage';

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
