/**
 * BLOCK: Forms - Date - Save Block
 */

import classnames from "classnames"

import { __ } from '@wordpress/i18n';
const {	RichText } = wp.blockEditor

export default function save( props ) {
	
	const { attributes } = props

	const {
		block_id,
		dateRequired,
		name,
		additonalVal,
		minYear,
		minMonth,
		minDay,
		maxYear,
		maxMonth,
		maxDay
	} = attributes
	
	var validation_min_value = "";
	var validation_max_value = "";
	
	if( minYear && minMonth && minDay ){
		validation_min_value = minYear+"-"+minMonth+"-"+minDay			
	}

	if( maxYear && maxMonth && maxDay ){	
		validation_max_value = maxYear+"-"+maxMonth+"-"+maxDay		
	}

	var date_html = "";
	if( additonalVal ){
		date_html = <input type="date" className="fbfg-forms-date-input fbfg-forms-input"  required={ dateRequired } min={validation_min_value} max={validation_max_value} name={ block_id }/>
		
	}else{
		date_html = <input type="date" className="fbfg-forms-date-input fbfg-forms-input"  required={ dateRequired } name={ block_id }/>

	}
	const isRequired = (dateRequired) ? __("required", 'form-block-for-gutenberg') : "";

	return (
		<div className={ classnames(
			"fbfg-forms-date-wrap",
			"fbfg-forms-field-set",
			`fbfg-block-${ block_id }`,
		) }>
			<RichText.Content
			tagName="div"
			value={ name }
			className={`fbfg-forms-date-label ${isRequired} fbfg-forms-input-label`}	
			id={ block_id }
			/>
			{date_html}
		</div>
	)
}