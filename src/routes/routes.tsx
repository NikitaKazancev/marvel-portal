import { createRef } from 'react';
import { Page404 } from '../pages/404/Page404';
import { CharPage } from '../pages/CharPage/CharPage';
import { ComicPage } from '../pages/ComicPage/ComicPage';
import { ComicsPage } from '../pages/comicsPage/ComicsPage';
import { MainPage } from '../pages/Main/MainPage';

export const routes = [
	{ path: '/', name: 'Main', element: <MainPage />, nodeRef: createRef() },
	{
		path: '/comics',
		name: 'Comic',
		element: <ComicsPage />,
		nodeRef: createRef(),
	},
	{
		path: '/comics/:id',
		name: 'Char',
		element: <ComicPage />,
		nodeRef: createRef(),
	},
	{
		path: '/characters/:id',
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
