import './charSearch.scss';

export const CharSearch: React.FC = () => {
	return (
		<div className='char-search block'>
			<form action='' method='get'>
				<label className='char-search__text' htmlFor='char-search'>
					Or find a character by name:
				</label>
				<div>
					<input type='text' id='char-search' placeholder='Enter name' />
					<button className='btn btn_main'>find</button>
				</div>
			</form>
		</div>
	);
};
