/**
 * BLOCK: Forms - Phone - Save Block
 */

import classnames from "classnames"

import countryOptions from "./country-option"

import { __ } from '@wordpress/i18n';
const {	RichText } = wp.blockEditor

export default function save( props ) {
	
	const { attributes } = props

	const {
		block_id,
		phoneRequired,
		phoneName,
		pattern
	} = attributes

	var placeholder = "";
	if(pattern == "[0-9]{3}-[0-9]{2}-[0-9]{3}"){
		placeholder = __("123-45-678", 'form-block-for-gutenberg')
	}else if(pattern == "[0-9]{3}-[0-9]{3}-[0-9]{4}"){
		placeholder = __("123-456-6789", 'form-block-for-gutenberg')
	}
	
	var phone_html = "";
	if(pattern != ""){
		phone_html = <input type="tel" placeholder={ placeholder }  pattern={pattern} required={ phoneRequired } className="fbfg-forms-phone-input fbfg-forms-input" name={ `${phoneName}[]` }/>
	}else{
		phone_html =  <input type="tel" required={ phoneRequired } className="fbfg-forms-phone-input fbfg-forms-input" name={ `${phoneName}[]` }/>
	}
	
	const isRequired = (phoneRequired) ? __("required" , 'form-block-for-gutenberg'): "";
	return (
		<div className={ classnames(
			"fbfg-forms-phone-wrap",
			"fbfg-forms-field-set",
			`fbfg-block-${ block_id }`,
		) }>
			<RichText.Content
				tagName="div"
				value={ phoneName }
				className={`fbfg-forms-phone-label ${isRequired} fbfg-forms-input-label`}	
				id={ block_id }
			/>

			<select className="fbfg-forms-input fbfg-form-phone-country" id={`fbfg-form-country-${block_id}`} name={ `${phoneName}[]` }>
				{ countryOptions.map( ( o, index ) => 
					<option value={o.props.value} key={index}>{o.props.children}</option>	
				)}				
			</select>
			{phone_html}
		</div>
	)
}