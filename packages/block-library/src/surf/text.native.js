/**
 * External dependencies
 */
import { Text as NativeText } from 'react-native';

const Text = ( { style, children } ) => {
	return <NativeText style={ style }>{ children }</NativeText>;
};

export default Text;
