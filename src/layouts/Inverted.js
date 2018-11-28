import styled from 'styled-components';
import { color } from 'styled-system';

const Inverted = styled.div(
	[],
	{
		width: '100vw',
		height: '100vh',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		'& a': {
			color: 'inherit',
		},
	},
	color
);

Inverted.defaultProps = {
	color: 'text',
	bg: 'link',
};

export default Inverted;
