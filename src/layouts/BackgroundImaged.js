import React from 'react';
import styled from 'styled-components';
import { color } from 'styled-system';
import { Absolute, ImageText } from '../components';

const BackgroundImagedBase = styled.div(
	[],
	{
		width: '100vw',
		height: '100vh',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		position: 'relative',
		flexDirection: 'column',
	},
	color
);

const BackgroundImaged = ({ children, ...rest }) => {
	const [image, title, text] = React.Children.toArray(children.props.children);
	const resolvedTitle = text ? title : null;
	const resolvedText = text ? text : title;

	return (
		<BackgroundImagedBase {...rest}>
			<Absolute zIndex={-1} top="0" left="0">
				{image}
			</Absolute>
			{resolvedTitle && resolvedTitle}
			{resolvedText && <ImageText>{resolvedText.props.children}</ImageText>}
		</BackgroundImagedBase>
	);
};

BackgroundImaged.defaultProps = {};

export default BackgroundImaged;
