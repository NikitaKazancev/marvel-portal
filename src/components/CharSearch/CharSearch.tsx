import { Formik, Field, ErrorMessage } from 'formik';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Link } from 'react-router-dom';
import { useGetByNameQuery } from '../../api/heroesApi';
import { getCharacter } from '../../api/MarvelService';
import { setSearchName } from '../../state/heroesSlice';
import { IState } from '../../state/store';
import './charSearch.scss';

export const CharSearch: React.FC = () => {
	const dispatch = useDispatch();
	const searchName = useSelector(
		(state: IState) => state.heroesState.searchName
	);

	const { data, isFetching, isLoading, isError, refetch } =
		useGetByNameQuery(searchName);

	const onSubmit = (name: string): void => {
		// setSearchName(name);

		console.log(1);

		dispatch(setSearchName(name));
		console.log(searchName);

		refetch();
	};

	return (
		<div className='char-search block'>
			<Formik
				initialValues={{
					name: '',
				}}
				validate={(values): { name?: string } => {
					const errors: { name?: string } = {};
					if (!values.name) {
						errors.name = 'This field is required';
					}
					return errors;
				}}
				onSubmit={async ({ name }): Promise<void> => await onSubmit(name)}
			>
				{(props): JSX.Element => {
					const { handleSubmit } = props;
					return (
						<Form className='char-search__form' onSubmit={handleSubmit}>
							<label
								className='char-search__text'
								htmlFor='char-search__name-id'
							>
								Or find a character by name:
							</label>
							<div className='char-search__wrapper'>
								<Field
									name='name'
									type='text'
									id='char-search__name-id'
									placeholder='Enter name'
								/>
								<button className='btn btn_main' type='submit'>
									find
								</button>
							</div>
							<ErrorMessage
								name='name'
								component='div'
								className='char-search__form char-search__form_error'
							/>
						</Form>
					);
				}}
			</Formik>
			<CharSearchRes data={data} isFetching={isFetching} />
		</div>
	);
};

const CharSearchRes: React.FC<{
	data: any;
	isFetching: boolean;
}> = ({ data, isFetching }) => {
	if (!data) {
		return <></>;
	}

	let content = <></>;
	if (!isFetching) {
		if (data.data.results.length) {
			const { name, id } = getCharacter(data);

			content = (
				<div className='char-search__wrapper'>
					<div className='char-search__form char-search__form_success'>
						There it is! Wanna visit {name}'s page?
					</div>
					<Link to={`/characters/${id}`} className='btn btn_secondary'>
						to page
					</Link>
				</div>
			);
		} else {
			return (
				<div className='char-search__form char-search__form_error'>
					The character was not found. Check the name and try again
				</div>
			);
		}
	}

	return content;
};
