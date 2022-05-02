/**
 * BLOCK: Forms - Phone - Edit
 */

import classnames from "classnames"
import countryOptions from "./country-option"

import { __ } from '@wordpress/i18n';

const {
	Component,
	Fragment
} = wp.element

const {
	PanelBody,	
	ToggleControl,
	SelectControl	
} = wp.components
const {
	InspectorControls,
	RichText,
} = wp.blockEditor

class FBFGFormsPhoneEdit extends Component {

	constructor() {
		super( ...arguments )
		
	}

	componentDidMount() {

		const { setAttributes } = this.props

		// Assigning block_id in the attribute.
		setAttributes( { block_id: this.props.clientId.substr( 0, 8 ) } )

		// Pushing Style tag for this block css.
		const $style = document.createElement( "style" )
		$style.setAttribute( "id", "fbfg-style-forms-phone-" + this.props.clientId.substr( 0, 8 ) )
		document.head.appendChild( $style )
		
	}

	render() {

		const { attributes, setAttributes, isSelected } = this.props

        const {
			block_id,
			phoneRequired,
			phoneName,
			pattern
		} = attributes
		
		const phoneInspectorControls = () => {

			return (
				<PanelBody
					title={ __( "General" , 'form-block-for-gutenberg' ) }
					initialOpen={ true }
					className="fbfg__url-panel-body"
				>
					<ToggleControl
						label={ __( "Required" , 'form-block-for-gutenberg') }
						checked={ phoneRequired }
						onChange={ ( value ) => setAttributes( { phoneRequired: ! phoneRequired } ) }
					/>
					<SelectControl
					label={ __( "Pattern" ) }
					value={ pattern }
					options={ [
						{ label: 'None', value: '' },
						{ label: '123-45-678', value: __('[0-9]{3}-[0-9]{2}-[0-9]{3}', 'form-block-for-gutenberg') },
						{ label: '123-456-6789', value: __('[0-9]{3}-[0-9]{3}-[0-9]{4}', 'form-block-for-gutenberg') },

					] }
					onChange={ ( pattern ) => { setAttributes( { pattern } ) } }
					/>
				</PanelBody>
			)
		}	
		var placeholder = "";
		if(pattern == "[0-9]{3}-[0-9]{2}-[0-9]{3}"){
			placeholder = __("123-45-678", 'form-block-for-gutenberg')
		}else if(pattern == "[0-9]{3}-[0-9]{3}-[0-9]{4}"){
			placeholder = __("123-456-6789", 'form-block-for-gutenberg')
		}
	
		var phone_html = "";
		if(pattern != ""){
			phone_html = <input type="tel" placeholder={ placeholder }  pattern={pattern} required={ phoneRequired } className="fbfg-forms-phone-input fbfg-forms-input" name={ block_id }/>
		}else{
			phone_html = <input type="tel"  required={ phoneRequired } className="fbfg-forms-phone-input fbfg-forms-input" name={ block_id }/>
		}
		
		const isRequired = (phoneRequired) ? __("required", 'form-block-for-gutenberg') : "";

		return (
			<Fragment>
				<InspectorControls>
					{ phoneInspectorControls() }
				</InspectorControls>
				<div className={ classnames(
					"fbfg-forms-phone-wrap",
					"fbfg-forms-field-set",
					`fbfg-block-${ block_id }`,
				) }>
					{isSelected && (
					<div className="fbfg-forms-required-wrap">
						<ToggleControl
							label={ __( "Required" , 'form-block-for-gutenberg') }
							checked={ phoneRequired }
							onChange={ ( value ) => setAttributes( { phoneRequired: ! phoneRequired } ) }
						/>
					</div>
					)}
					<RichText
						tagName="div"
						placeholder={ __( "Phone Name" , 'form-block-for-gutenberg') }
						value={ phoneName }
						onChange={ ( value ) => setAttributes( { phoneName: value } ) }
						className={`fbfg-forms-phone-label ${isRequired} fbfg-forms-input-label`}
						multiline={ false }
						id={ block_id }
					/>
					<select className="fbfg-forms-input fbfg-form-phone-country fbfg-form-phone-country-editor" id={`fbfg-form-country-${block_id}`} name={ `${phoneName}[]` }>
						{ countryOptions.map( ( o, index ) => 
							<option value={o.props.value} key={index}>{o.props.children}</option>	
						)}				
					</select>
					{phone_html}
				</div>
			</Fragment>
		)
	}
}

export default FBFGFormsPhoneEdit
