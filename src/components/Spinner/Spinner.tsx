import './spinner.scss';

const Spinner: React.FC<{ absolute?: boolean }> = (
	{ absolute } = { absolute: false }
) => (
	<div className={`spinner-wrapper ${absolute ? 'absolute' : ''}`}>
		<div className='spinner'>
			<div className='spinner__inner'>
				<div />
				<div />
				<div>
					<div />
				</div>
				<div>
					<div />
				</div>
			</div>
		</div>
	</div>
);

export default Spinner;
