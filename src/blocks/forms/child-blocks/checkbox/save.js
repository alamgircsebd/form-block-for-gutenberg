/**
* BLOCK: Forms - Checkbox - Save Block
*/

import classnames from "classnames"

import { __ } from '@wordpress/i18n';
const { RichText } = wp.blockEditor
const {	Fragment } = wp.element

export default function save( props ) {
	
	const { attributes } = props
	
	const {
		block_id,
		checkboxRequired,
		options,
		checkboxName
	} = attributes
	
	const isRequired = (checkboxRequired) ? __("required", 'form-block-for-gutenberg') : "";

	return (
		<div className={ classnames(
			"fbfg-forms-checkbox-wrap",
			"fbfg-forms-field-set",
			`fbfg-block-${ block_id }`,
			) }>
			<RichText.Content
			tagName="div"
			value={ checkboxName }
			className={`fbfg-forms-checkbox-label ${isRequired} fbfg-forms-input-label`}
			id={ block_id }		
			/>
			
			{options.map((o, index) => {
				var optionvalue = o.optionvalue;
				var value = optionvalue.replace(/\s+/g, '-').toLowerCase();
				return (
					<Fragment>
					<input type="checkbox" class="fbfg-forms-checkbox" id={`checkbox-${value}-${block_id}`} name={ `${checkboxName}[]` } value={ optionvalue } required={ checkboxRequired }  onInvalid="this.setCustomValidity('Please check this box if you want to proceed.')"/>
					<label htmlFor={ `checkbox-${value}-${block_id}` }>{ o.optiontitle }</label><br/>						
					</Fragment>
				);
			})}
								
		</div>
	)
}