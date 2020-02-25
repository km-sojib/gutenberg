/**
 * WordPress dependencies
 */
import { RangeControl, PanelBody } from '@wordpress/components';
import { InspectorControls } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
/**
 * Internal dependencies
 */
import Text from './text';

const SurfEdit = ( { attributes, setAttributes } ) => {
	const { waveHeight } = attributes;

	const changeWaveHeight = ( height ) => {
		setAttributes( { waveHeight: height } );
	};

	return (
		<>
			<Text style={ { fontSize: 20 + waveHeight } }>🌊</Text>
			<Text>Wave height: { waveHeight } ft</Text>
			<InspectorControls>
				<PanelBody title={ __( 'Surf settings' ) }>
					<RangeControl
						label={ __( 'Wave height in feet' ) }
						max={ 25 }
						min={ 0 }
						separatorType={ 'none' }
						value={ waveHeight }
						onChange={ changeWaveHeight }
					/>
				</PanelBody>
			</InspectorControls>
		</>
	);
};

export default SurfEdit;
