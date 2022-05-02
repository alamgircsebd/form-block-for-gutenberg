/**
 * BLOCK: Forms - URL - Edit
 */

import classnames from "classnames"

import { __ } from '@wordpress/i18n';

const {
	Component,
	Fragment
} = wp.element

const {
	PanelBody,	
	ToggleControl,
	TextControl
} = wp.components
const {
	InspectorControls,
	RichText,
} = wp.blockEditor

class FBFGFormsUrlEdit extends Component {

	constructor() {
		super( ...arguments )
	}

	componentDidMount() {

		const { attributes, setAttributes } = this.props

		// Assigning block_id in the attribute.
		setAttributes( { block_id: this.props.clientId.substr( 0, 8 ) } )

		// Pushing Style tag for this block css.
		const $style = document.createElement( "style" )
		$style.setAttribute( "id", "fbfg-style-forms-url-" + this.props.clientId.substr( 0, 8 ) )
		document.head.appendChild( $style )
		
	}

	render() {

		const { attributes, setAttributes,isSelected } = this.props

        const {
			block_id,
			required,
			name,
			placeholder
		} = attributes
		
		const urlInspectorControls = () => {

			return (
				<PanelBody
					title={ __( "General" , 'form-block-for-gutenberg') }
					initialOpen={ true }
					className="fbfg__url-panel-body"
				>
					<ToggleControl
						label={ __( "Required" , 'form-block-for-gutenberg') }
						checked={ required }
						onChange={ ( value ) => setAttributes( { required: ! required } ) }
					/>
					<TextControl
					 	label={__( "Placeholder" , 'form-block-for-gutenberg')}
						value={ placeholder }
						onChange={ ( value ) => setAttributes( { placeholder: value } ) }
					/>
				</PanelBody>
			)
		}

		const isRequired = (required) ? __("required", 'form-block-for-gutenberg') : "";

		return (
			<Fragment>
				<InspectorControls>
					{ urlInspectorControls() }
				</InspectorControls>
				<div className={ classnames(
					"fbfg-forms-url-wrap",
					"fbfg-forms-field-set",
					`fbfg-block-${ block_id }`,
				) }>
					{isSelected && (
					<div className="fbfg-forms-required-wrap">
						<ToggleControl
							label={ __( "Required" , 'form-block-for-gutenberg') }
							checked={ required }
							onChange={ ( value ) => setAttributes( { required: ! required } ) }
						/>
					</div>
					)}
					<RichText
						tagName="div"
						placeholder={ __( "URL Name" , 'form-block-for-gutenberg') }
						value={ name }
						onChange={ ( value ) => setAttributes( { name: value } ) }
						className={`fbfg-forms-url-label ${isRequired} fbfg-forms-input-label`}
						multiline={ false }
						id={ block_id }
					/>
					<input type="url" name={ block_id } placeholder={placeholder} required={ required } className="fbfg-forms-url-input fbfg-forms-input"/>					
				</div>
			</Fragment>
		)
	}
}

export default FBFGFormsUrlEdit
