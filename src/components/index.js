import React, { Fragment } from 'react';
import * as deck from 'mdx-deck';
import styled, { css } from 'styled-components';
import { position, top, right, bottom, left, zIndex } from 'styled-system';
import chroma from 'chroma-js';

/* eslint-disable react/prop-types */

const { components, Image } = deck;

const H1 = components.h1;
const H2 = components.h2;
export const Subtitle = styled(H2)`
	opacity: 1;
	font-size: 1em;
	padding-bottom: 16px;
	margin-bottom: 32px;

	&:after {
		position: absolute;
		bottom: -8px;
		left: 50%;
		transform: translate(-50%, 0);
		height: 1px;
		width: 50px;
		background: #fff;
		content: '';
	}
`;

// eslint-disable-next-line react/display-name
export const codeSurferTitle = children => () => <H2>{children}</H2>;

export const Li = styled(components.li)``;
export const Ul = styled(components.ul)`
	${ps =>
		ps.dense
			? css`
					li {
						font-size: 1em;
						margin-bottom: 0.4em;
					}
			  `
			: ''}
`;
export const Text = styled.span`
	font-size: 0.7em;
`;

const MetaListSeparator = styled.span.attrs({ children: '·' })`
	padding: 0 8px;
`;

export const MetaList = ({ children, ...rest }) => {
	return (
		<section {...rest}>
			{React.Children.map(children, (x, i) => (
				<Fragment>
					{i !== 0 ? <MetaListSeparator /> : null}
					{x.props.children}
				</Fragment>
			))}
		</section>
	);
};

export const Position = styled.div`
	${position}
	${zIndex}
	${top}
	${left}
	${bottom}
	${right}
`;

export const Relative = styled(Position)``;

Relative.defaultProps = { position: 'relative' };

export const Absolute = styled(Position)``;

Absolute.defaultProps = { position: 'absolute' };

export const ImageSlide = ({ title, children, ...rest }) => (
	<div>
		<H1>{title}</H1>
		{children}
		<Image {...rest} />
	</div>
);

export const ImageText = styled.span`
	background-color: ${ps =>
		chroma(ps.theme.blue)
			.alpha(0.5)
			.css()};

	strong {
		color: #fff;
		font-weight: normal;
		background-color: ${ps =>
			chroma(ps.theme.green)
				.alpha(0.5)
				.css()};
	}
`;
