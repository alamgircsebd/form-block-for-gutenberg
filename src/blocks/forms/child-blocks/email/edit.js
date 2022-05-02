/**
 * BLOCK: Forms - Email - Edit
 */

import classnames from "classnames"

import { __ } from '@wordpress/i18n';

const {
	Component,
	Fragment
} = wp.element

const {
	RichText,
	InspectorControls
} = wp.blockEditor

const {	
	ToggleControl,
	TextControl,
	PanelBody
} = wp.components

class FBFGFormsEmailEdit extends Component {

	constructor() {
		super( ...arguments )
	}

	componentDidMount() {

		const { attributes, setAttributes } = this.props

		// Assigning block_id in the attribute.
		setAttributes( { block_id: this.props.clientId.substr( 0, 8 ) } )

		// Pushing Style tag for this block css.
		const $style = document.createElement( "style" )
		$style.setAttribute( "id", "fbfg-style-forms-email-" + this.props.clientId.substr( 0, 8 ) )
		document.head.appendChild( $style )
		
	}
    
	render() {

		const { attributes,setAttributes,isSelected } = this.props

        const {
			block_id,
			name,
			required,
			placeholder
		} = attributes
		
		const nameInspectorControls = () => {

			return (
				<PanelBody
					title={ __( "General", 'form-block-for-gutenberg' ) }
					initialOpen={ true }
					className="fbfg__url-panel-body"
				>
					<ToggleControl
						label={ __( "Required", 'form-block-for-gutenberg' ) }
						checked={ required }
						onChange={ ( value ) => setAttributes( { required: ! required } ) }
					/>
					<TextControl
					 	label="Placeholder"
						value={ placeholder }
						onChange={ ( value ) => setAttributes( { placeholder: value } ) }
						placeholder={__( "Placeholder" , 'form-block-for-gutenberg')}
					/>
				</PanelBody>
			)
		}

		const isRequired = (required) ? __("required" , 'form-block-for-gutenberg') : "";

		return (
			<Fragment>
				<InspectorControls>
					{ nameInspectorControls() }
				</InspectorControls>
				<div className={ classnames(
					"fbfg-forms-email-wrap",
					"fbfg-forms-field-set",
					`fbfg-block-${ block_id }`,
				) }>
					{isSelected && (
						<div className="fbfg-forms-required-wrap">
							<ToggleControl
								label={ __( "Required" , 'form-block-for-gutenberg' ) }
								checked={ required }
								onChange={ ( value ) => setAttributes( { required: ! required } ) }
							/>
						</div>
					)}
					<RichText
							tagName="div"
							placeholder={ __( "Email" , 'form-block-for-gutenberg' ) }
							value={ name }
							onChange={ ( value ) => setAttributes( { name: value } ) }
							className={`fbfg-forms-email-label ${isRequired} fbfg-forms-input-label`}
							multiline={ false }
							id={ block_id }
					/>
					<input type="text" className="fbfg-forms-email-input fbfg-forms-input" placeholder={placeholder} required={ required } name={ block_id }/>
				</div>
			</Fragment>
		)
	}
}

export default FBFGFormsEmailEdit
