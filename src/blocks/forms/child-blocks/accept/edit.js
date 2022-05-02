/**
 * BLOCK: Forms - Accept - Edit
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
	TextControl,
	TextareaControl,
} = wp.components

const {
	InspectorControls
} = wp.blockEditor

class FBFGFormsAcceptEdit extends Component {

	constructor() {
		super( ...arguments )
	}

	componentDidMount() {

		const { setAttributes } = this.props

		// Assigning block_id in the attribute.
		setAttributes( { block_id: this.props.clientId.substr( 0, 8 ) } )

		// Pushing Style tag for this block css.
		const $style = document.createElement( "style" )
		$style.setAttribute( "id", "fbfg-style-forms-accept-" + this.props.clientId.substr( 0, 8 ) )
		document.head.appendChild( $style )
		
	}

	render() {

		const { attributes, setAttributes } = this.props

        const {
			block_id,
			acceptRequired,
			acceptText,
			showLink,
			linkLabel,
			link,
			linkInNewTab
		} = attributes
		
		const acceptInspectorControls = () => {

			return (
				<PanelBody
					title={ __( "General" , 'form-block-for-gutenberg' ) }
					initialOpen={ true }
					className="fbfg__url-panel-body"
				>
					<ToggleControl
						label={ __( "Required" , 'form-block-for-gutenberg') }
						checked={ acceptRequired }
						onChange={ ( value ) => setAttributes( { acceptRequired: ! acceptRequired } ) }
					/>					
					<TextareaControl
						label={ __( "Acceptance Text" , 'form-block-for-gutenberg') }
						help="Label to display as acceptance message."
						value={ acceptText }
						onChange={ ( value ) => setAttributes( { acceptText: value } ) }
					/>
					<ToggleControl
						label={ __( "Enable Privacy Link" , 'form-block-for-gutenberg' ) }
						checked={ showLink }
						onChange={ ( value ) => setAttributes( { showLink: ! showLink } ) }
					/>
					
					{ showLink &&(
						<Fragment>
							<hr className="fbfg-editor__separator" />
							<TextControl
								label={ __( "Link Label" , 'form-block-for-gutenberg') }								
								value={ linkLabel }
								onChange={ ( value ) => setAttributes( { linkLabel: value } ) }
							/>
							<TextControl
								className="fbfg-forms-editor-privacy-link"
								label={ __( "Link" , 'form-block-for-gutenberg') }								
								value={ link }
								onChange={ ( value ) => setAttributes( { link: value } ) }
								help= { ("" === link)  ?  __( "Enter a valid link." , 'form-block-for-gutenberg' ) : ""}
							/>
							<ToggleControl
								label={ __( "Open in new tab" , 'form-block-for-gutenberg' ) }
								checked={ linkInNewTab }
								onChange={ ( value ) => setAttributes( { linkInNewTab: ! linkInNewTab } ) }
							/>	
						</Fragment>
					)}
				</PanelBody>
			)
		}

		const isRequired = (acceptRequired) ? __("required"  , 'form-block-for-gutenberg' ) : "";
		const target = (linkInNewTab) ? __("_blank"  , 'form-block-for-gutenberg' ) : __("_self"  , 'form-block-for-gutenberg' ) ;
		return (
			<Fragment>
				<InspectorControls>
					{ acceptInspectorControls() }
				</InspectorControls>
				<div className={ classnames(
					"fbfg-forms-accept-wrap",
					"fbfg-forms-field-set",
					`fbfg-block-${ block_id }`,
					
				) }>
					{ showLink && (
						<div className="fbfg-forms-accept-privacy-link">
							<a href={ link } target={target} rel="noopener noreferrer" > { linkLabel }  </a>		
						</div>
					)}							
					<input type="checkbox" id={`fbfg-forms-accept-${block_id}`} className="fbfg-forms-checkbox" name={ block_id } required={ acceptRequired } value="Agree"/>
 					<label name={ block_id } htmlFor={`fbfg-forms-accept-${block_id}`} className={`fbfg-forms-accept-label ${isRequired}`} >{ acceptText }</label><br></br>
				</div>
			</Fragment>
		)
	}
}

export default FBFGFormsAcceptEdit
