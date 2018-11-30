import React from 'react';
import styled from 'styled-components';
import { color } from 'styled-system';
import { Absolute, ImageText, H1 } from '../components';

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
	const [image, title, text, ...restChildren] = React.Children.toArray(children.props.children);
	const resolvedTitle = text ? title : null;
	const resolvedText = text ? text : title;
	console.log(resolvedTitle);

	return (
		<BackgroundImagedBase {...rest}>
			<Absolute zIndex={-1} top="0" left="0">
				{image}
			</Absolute>
			{resolvedTitle && (
				<H1>
					<ImageText>{resolvedTitle.props.children}</ImageText>
				</H1>
			)}
			{resolvedText && <ImageText>{resolvedText.props.children}</ImageText>}
			{restChildren}
		</BackgroundImagedBase>
	);
};

BackgroundImaged.defaultProps = {};

export default BackgroundImaged;
