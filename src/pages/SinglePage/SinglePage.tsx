import { useParams } from 'react-router-dom';
import { Banner } from '../../components/Banner/Banner';
import Spinner from '../../components/Spinner/Spinner';
import { Page404 } from '../404/Page404';
import { useGetByIdQuery } from '../../api/heroesApi';
import React from 'react';
import { Type } from '../../api/ApiService';
import { singlePages } from '../singlePages';

export const SinglePage: React.FC<{ pageType: Type }> = ({ pageType }) => {
	const { id } = useParams();

	if (!id) return <Page404 />;

	const { isFetching, isLoading, data } = useGetByIdQuery({
		type: pageType,
		id,
	});

	let content;
	if (isLoading || isFetching) {
		content = <Spinner />;
	} else {
		content = singlePages(data)[pageType];
	}

	return (
		<>
			<Banner />
			{content}
		</>
	);
};
