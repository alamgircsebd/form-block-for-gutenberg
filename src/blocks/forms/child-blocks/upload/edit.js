/**
 * BLOCK: Forms - Upload - Edit
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
	FormTokenField
} = wp.components
const {
	InspectorControls,
	RichText,
} = wp.blockEditor

class FBFGFormsUploadEdit extends Component {

	constructor() {
		super( ...arguments )
	}

	componentDidMount() {

		const { setAttributes } = this.props

		// Assigning block_id in the attribute.
		setAttributes( { block_id: this.props.clientId.substr( 0, 8 ) } )

		// Pushing Style tag for this block css.
		const $style = document.createElement( "style" )
		$style.setAttribute( "id", "fbfg-style-forms-upload-" + this.props.clientId.substr( 0, 8 ) )
		document.head.appendChild( $style )
		
	}
	
	render() {

		const { attributes, setAttributes,isSelected } = this.props

        const {
			block_id,
			uploadRequired,
			name,
			formats
		} = attributes
		
		
		const uploadInspectorControls = () => {

			return (
				<PanelBody
					title={ __( "General"  , 'form-block-for-gutenberg') }
					initialOpen={ true }
					className="fbfg__url-panel-body"
				>
					<ToggleControl
						label={ __( "Required"  , 'form-block-for-gutenberg') }
						checked={ uploadRequired }
						onChange={ ( value ) => setAttributes( { uploadRequired: ! uploadRequired } ) }
					/>
					<h2>Allowed Formats</h2>
					<FormTokenField 
					value={ formats } 					
					onChange={ ( value ) => setAttributes( { formats: value } ) }
					placeholder={__("Type allowed formats" , 'form-block-for-gutenberg')}
					/>
				</PanelBody>
			)
		}

		const isRequired = (uploadRequired) ? __("required" , 'form-block-for-gutenberg') : "";

		return (
			<Fragment>
				<InspectorControls>
					{ uploadInspectorControls() }
				</InspectorControls>
				<div className={ classnames(
					"fbfg-forms-upload-wrap",
					"fbfg-forms-field-set",
					`fbfg-block-${ block_id }`,
					
				) }>
					{isSelected && (
						<div className="fbfg-forms-required-wrap">
							<ToggleControl
								label={ __( "Required" , 'form-block-for-gutenberg' ) }
								checked={ uploadRequired }
								onChange={ ( value ) => setAttributes( { uploadRequired: ! uploadRequired } ) }
							/>
						</div>
					)}
					<RichText
						tagName="div"
						placeholder={ __( "Name" , 'form-block-for-gutenberg') }
						value={ name }
						onChange={ ( value ) => setAttributes( { name: value } ) }
						className={`fbfg-forms-upload-label ${isRequired} fbfg-forms-input-label`}
						multiline={ false }
						id={ block_id }
					/>					
					<input type="file" name={ block_id } className="fbfg-forms-upload-input" disabled required={uploadRequired} />
				</div>
			</Fragment>
		)
	}
}

export default FBFGFormsUploadEdit
