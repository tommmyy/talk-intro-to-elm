import React from 'react';
import styled from 'styled-components';
import { color } from 'styled-system';
import { Head } from 'mdx-deck';
import { Subtitle, MetaList, Text } from '../components';

const FrontedBase = styled.div(
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

const Fronted = ({ children, ...rest }) => {
	const [title, subtitle, meta, footer] = React.Children.toArray(children.props.children);
	const titleText = title.props.children;

	return (
		<FrontedBase {...rest}>
			<Head>
				<title>{titleText}</title>
			</Head>
			{title}
			<Subtitle>{subtitle.props.children}</Subtitle>
			<MetaList>{meta.props.children}</MetaList>
			<p>
				<Text size="sm">{footer.props.children}</Text>
			</p>
		</FrontedBase>
	);
};

Fronted.defaultProps = {
	color: 'text',
	bg: 'link',
};

export default Fronted;
