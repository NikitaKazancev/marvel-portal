import { createRef } from 'react';
import { Page404 } from '../pages/404/Page404';
import { AboutPage } from '../pages/AboutPage/AboutPage';
import { CharPage } from '../pages/CharPage/CharPage';
import { ComicPage } from '../pages/ComicPage/ComicPage';
import { ComicsPage } from '../pages/ComicsPage/ComicsPage';
import { EventsPage } from '../pages/EventsPage/EventsPage';
import { MainPage } from '../pages/Main/MainPage';
import { SinglePage } from '../pages/SinglePage/SinglePage';

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
		element: <SinglePage pageType='comic' />,
		nodeRef: createRef(),
	},
	{
		path: '/characters/:id',
		name: 'Char',
		element: <SinglePage pageType='character' />,
		nodeRef: createRef(),
	},
	{
		path: '/events',
		name: 'Events',
		element: <EventsPage />,
		nodeRef: createRef(),
	},
	{
		path: '/events/:id',
		name: 'Event',
		element: <SinglePage pageType='event' />,
		nodeRef: createRef(),
	},
	{
		path: '/about',
		name: 'About',
		element: <AboutPage />,
		nodeRef: createRef(),
	},
	{
		path: '*',
		name: '404',
		element: <Page404 />,
		nodeRef: createRef(),
	},
];
