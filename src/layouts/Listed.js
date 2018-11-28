import React from 'react';
import styled from 'styled-components';
import { color } from 'styled-system';
import { Appear } from 'mdx-deck';
import { Li, Ul } from '../components';

const ListedBase = styled.div(
	[],
	{
		width: '100vw',
		height: '100vh',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		position: 'relative',
		flexDirection: 'column',

		'& a': {
			color: 'inherit',
		},
	},
	color
);

const Listed = ({ children, ...rest }) => {
	const [title, list] = React.Children.toArray(children.props.children);

	return (
		<ListedBase {...rest}>
			{title}
			<Ul dense={React.Children.count(list.props.children) > 3}>
				<Appear>
					{React.Children.map(list.props.children, (x, i) =>
						React.createElement(Li, { key: i }, x.props.children)
					)}
				</Appear>
			</Ul>
		</ListedBase>
	);
};

Listed.defaultProps = {};

export default Listed;
