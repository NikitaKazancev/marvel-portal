import React from 'react';

interface IBtnProps {
	type: 'main' | 'secondary';
	href: string;
	children?: string;
	classNames?: string;
}

export const AnchorBtn: React.FC<IBtnProps> = ({
	children,
	classNames,
	href,
	type,
}) => {
	return (
		<a
			className={`btn btn_${type} ${classNames ? classNames : ''}`}
			href={href}
			target='_blank'
		>
			{children ? children : ''}
		</a>
	);
};
