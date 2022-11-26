import { Page404 } from '../pages/404/Page404';
import { AboutPage } from '../pages/AboutPage/AboutPage';
import { ComicsPage } from '../pages/ComicsPage/ComicsPage';
import { EventsPage } from '../pages/EventsPage/EventsPage';
import { MainPage } from '../pages/Main/MainPage';
import { SinglePage } from '../pages/SinglePage/SinglePage';

export const routes = [
	{
		path: '/',
		element: <MainPage />,
	},
	{
		path: '/comics',
		element: <ComicsPage />,
	},
	{
		path: '/comics/:id',
		element: <SinglePage pageType='comic' />,
	},
	{
		path: '/characters/:id',
		element: <SinglePage pageType='character' />,
	},
	{
		path: '/events',
		element: <EventsPage />,
	},
	{
		path: '/events/:id',
		element: <SinglePage pageType='event' />,
	},
	{
		path: '/about',
		element: <AboutPage />,
	},
	{
		path: '*',
		element: <Page404 />,
	},
];
