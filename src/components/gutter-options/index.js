import { __ } from '@wordpress/i18n';

const gutterOptions = [
	{
		value: '0',
		label: __( 'None','form-block-for-gutenberg' ),
		shortName: __( 'None','form-block-for-gutenberg' ),
	},
	{
		value: '5',
		/* translators: abbreviation for small size */
		label: __( 'S','form-block-for-gutenberg' ),
		tooltip: __( 'Small','form-block-for-gutenberg' ),
	},
	{
		value: '10',
		/* translators: abbreviation for medium size */
		label: __( 'M','form-block-for-gutenberg' ),
		tooltip: __( 'Medium','form-block-for-gutenberg' ),
	},
	{
		value: '15',
		/* translators: abbreviation for large size */
		label: __( 'L','form-block-for-gutenberg' ),
		tooltip: __( 'Large','form-block-for-gutenberg' ),
	},
	{
		value: '20',
		/* translators: abbreviation for largest size */
		label: __( 'XL','form-block-for-gutenberg' ),
		tooltip: __( 'Huge','form-block-for-gutenberg' ),
	},
];

export default gutterOptions;