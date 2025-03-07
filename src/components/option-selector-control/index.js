/**
 * WordPress dependencies
 */
 const {
 	Component,
 	Fragment,
 } = wp.element

 const {
	BaseControl,
	Button,
	ButtonGroup,
	PanelRow,
	RangeControl,
	Tooltip,
} = wp.components

import { __ } from '@wordpress/i18n';

/**
 * Constants
 */
const DEFAULT_OPTIONS = [
	{
		value: "5",
		/* translators: abbreviation for small size */
		label: __( 'S','form-block-for-gutenberg' ),
		tooltip: __( 'Small','form-block-for-gutenberg' ),
	},
	{
		value: "15",
		/* translators: abbreviation for medium size */
		label: __( 'M','form-block-for-gutenberg' ),
		tooltip: __( 'Medium','form-block-for-gutenberg' ),
	},
	{
		value: "20",
		/* translators: abbreviation for large size */
		label: __( 'L','form-block-for-gutenberg' ),
		tooltip: __( 'Large','form-block-for-gutenberg' ),
	},
	{
		value: "30",
		/* translators: abbreviation for extra large size */
		label: __( 'XL','form-block-for-gutenberg' ),
		tooltip: __( 'Extra Large','form-block-for-gutenberg' ),
	},
];

const NONE_OPTION = {
	value: "0",
	label: __( 'None','form-block-for-gutenberg' ),
	tooltip: __( 'None','form-block-for-gutenberg' ),
};

export default class OptionSelectorControl extends Component {
	render() {
		const {
			advancedMaxValue,
			advancedMinValue,
			currentOption,
			label,
			onChange,
			options,
			showAdvancedControls,
			showIcons,
			showNoneOption,
		} = this.props;

		let buttons = options || DEFAULT_OPTIONS;

		if ( showNoneOption ) {
			buttons = [ NONE_OPTION, ...buttons ];
		}

		return ( showAdvancedControls && ( advancedMinValue !== false && advancedMaxValue !== false ) ?

			<RangeControl
				label={ label }
				value={ currentOption }
				onChange={ ( value ) => onChange( value ) }
				min={ advancedMinValue }
				max={ advancedMaxValue }
			/> :

			<BaseControl id={ `fbfg-option-selector-${ label }` } label={ label }>
				<PanelRow>
					<ButtonGroup aria-label={ label }>

						{ buttons.map( ( option ) => (
							<Tooltip
								key={ `option-${ option.value }` }
								text={ option.tooltip }>

								<Button
									isLarge
									isSecondary={ currentOption !== option.value }
									isPrimary={ currentOption === option.value }
									aria-pressed={ currentOption === option.value }
									onClick={ () => onChange( option.value ) }
									aria-label={ option.tooltip }>

									{ showIcons ? option.icon : option.label }

								</Button>

							</Tooltip>
						) ) }

					</ButtonGroup>
				</PanelRow>
			</BaseControl>
		);
	}
}