/**
 * BLOCK: Forms - Name - Edit
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

class FBFGFormsNameEdit extends Component {

	constructor() {
		super( ...arguments )
	}

	componentDidMount() {

		const { setAttributes } = this.props

		// Assigning block_id in the attribute.
		setAttributes( { block_id: this.props.clientId.substr( 0, 8 ) } )

		// Pushing Style tag for this block css.
		const $style = document.createElement( "style" )
		$style.setAttribute( "id", "fbfg-style-forms-name-" + this.props.clientId.substr( 0, 8 ) )
		document.head.appendChild( $style )
		
	}

	
	
	render() {

		const { attributes, setAttributes,isSelected } = this.props

        const {
			block_id,
			nameRequired,
			name,
			placeholder
		} = attributes
		
		const nameInspectorControls = () => {

			return (
				<PanelBody
					title={ __( "General" , 'form-block-for-gutenberg') }
					initialOpen={ true }
					className="fbfg__url-panel-body"
				>
					<ToggleControl
						label={ __( "Required" , 'form-block-for-gutenberg') }
						checked={ nameRequired }
						onChange={ ( value ) => setAttributes( { nameRequired: ! nameRequired } ) }
					/>
					<TextControl
					 	label="Placeholder"
						value={ placeholder }
						onChange={ ( value ) => setAttributes( { placeholder: value } ) }
						placeholder={__( "Placeholder" , 'form-block-for-gutenberg' )}
					/>
				</PanelBody>
			)
		}

		const isRequired = (nameRequired) ? __("required" , 'form-block-for-gutenberg') : "";
		return (
			<Fragment>
				<InspectorControls>
					{ nameInspectorControls() }
				</InspectorControls>
				<div className={ classnames(
					"fbfg-forms-name-wrap",
					"fbfg-forms-field-set",
					`fbfg-block-${ block_id }`,
					
				) }>
					{isSelected && (
						<div className="fbfg-forms-required-wrap">
							<ToggleControl
								label={ __( "Required" , 'form-block-for-gutenberg') }
								checked={ nameRequired }
								onChange={ ( value ) => setAttributes( { nameRequired: ! nameRequired } ) }
							/>
						</div>
					)}
					<RichText
						tagName="div"
						placeholder={ __( "Name" , 'form-block-for-gutenberg') }
						value={ name }
						onChange={ ( value ) => setAttributes( { name: value } ) }
						className={`fbfg-forms-name-label ${isRequired} fbfg-forms-input-label`}
						multiline={ false }
						id={ block_id }
					/>					
					<input type="text" placeholder={placeholder} required={ nameRequired } className="fbfg-forms-name-input fbfg-forms-input" name={ block_id } />
				</div>
			</Fragment>
		)
	}
}

export default FBFGFormsNameEdit
