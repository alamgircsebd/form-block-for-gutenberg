/**
* BLOCK: Forms - Radio - Save Block
*/

import classnames from "classnames"

import { __ } from '@wordpress/i18n'; 
const { RichText } = wp.blockEditor
const {	Fragment } = wp.element

export default function save( props ) {
	
	const { attributes } = props
	
	const {
		block_id,
		radioRequired,
		options,
		radioName
	} = attributes
	
	const isRequired = (radioRequired) ? __("required" , 'form-block-for-gutenberg') : "";
	
	return (
		<div className={ classnames(
			"fbfg-forms-radio-wrap",
			"fbfg-forms-field-set",
			`fbfg-block-${ block_id }`,
			) }>
			<RichText.Content
			tagName="div"
			value={ radioName }
			className={`fbfg-forms-radio-label ${isRequired} fbfg-forms-input-label`}
			id={ block_id }		
			/>
			
			{options.map((o, index) => {
				var optionvalue = o.optionvalue;
				var value = optionvalue.replace(/\s+/g, '-').toLowerCase();
				return (
					<Fragment>
					<input type="radio" id={ `radio-${value}-${block_id}` } name={ block_id } value={ optionvalue } required={ radioRequired } />
					<label htmlFor={ `radio-${value}-${block_id}` }>{o.optiontitle}</label><br/>						
					</Fragment>
				);
			})}
								
		</div>
	)
}