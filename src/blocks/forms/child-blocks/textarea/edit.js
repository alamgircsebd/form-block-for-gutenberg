/**
 * BLOCK: Forms - Textarea - Edit
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
	RangeControl,
	TextControl
} = wp.components
const {
	InspectorControls,
	RichText,
} = wp.blockEditor

class FBFGFormsTextareaEdit extends Component {

	constructor() {
		super( ...arguments )
	}

	componentDidMount() {

		const { setAttributes } = this.props

		// Assigning block_id in the attribute.
		setAttributes( { block_id: this.props.clientId.substr( 0, 8 ) } )

		// Pushing Style tag for this block css.
		const $style = document.createElement( "style" )
		$style.setAttribute( "id", "fbfg-style-forms-textarea-" + this.props.clientId.substr( 0, 8 ) )
		document.head.appendChild( $style )
		
	}

	render() {

		const { attributes, setAttributes, isSelected } = this.props

        const {
			block_id,
			textareaRequired,
			textareaName,
			rows,
			placeholder
		} = attributes
		
		const textareaInspectorControls = () => {

			return (
				<PanelBody
					title={ __( "General" , 'form-block-for-gutenberg' ) }
					initialOpen={ true }
					className="fbfg__url-panel-body"
				>
					<ToggleControl
						label={ __( "Required" , 'form-block-for-gutenberg') }
						checked={ textareaRequired }
						onChange={ ( value ) => setAttributes( { textareaRequired: ! textareaRequired } ) }
					/>
					<TextControl
					 	label={__("Placeholder", 'form-block-for-gutenberg')}
						value={ placeholder }
						onChange={ ( value ) => setAttributes( { placeholder: value } ) }
					/>
					<RangeControl
						label={ __( "Number of lines" , 'form-block-for-gutenberg') }
						value={ rows }
						onChange={ ( value ) => setAttributes( { rows: value } ) }
						min={ 2 }
						max={ 10 }
						allowReset
					/>
				</PanelBody>
			)
		}

		const isRequired = (textareaRequired) ? __("required", 'form-block-for-gutenberg') : "";

		return (
			<Fragment>
				<InspectorControls>
					{ textareaInspectorControls() }
				</InspectorControls>
				<div className={ classnames(
					"fbfg-forms-textarea-wrap",
					"fbfg-forms-field-set",
					`fbfg-block-${ block_id }`,
				) }>
					{isSelected && (
					<div className="fbfg-forms-required-wrap">
						<ToggleControl
							label={ __( "Required" , 'form-block-for-gutenberg') }
							checked={ textareaRequired }
							onChange={ ( value ) => setAttributes( { textareaRequired: ! textareaRequired } ) }
						/>
					</div>
					)}
					<RichText
						tagName="div"
						placeholder={ __( "Textarea Name" , 'form-block-for-gutenberg') }
						value={ textareaName }
						onChange={ ( value ) => setAttributes( { textareaName: value } ) }
						className={`fbfg-forms-textarea-label ${isRequired} fbfg-forms-input-label`}
						multiline={ false }
						id={ block_id }
					/>					
					<textarea required={ textareaRequired } className="fbfg-forms-textarea-input fbfg-forms-input" rows={rows} placeholder={placeholder} name={ block_id }></textarea>
					
				</div>
			</Fragment>
		)
	}
}

export default FBFGFormsTextareaEdit
