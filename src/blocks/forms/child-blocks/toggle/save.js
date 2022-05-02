/**
 * BLOCK: Forms - Toggle - Save Block
 */

import classnames from "classnames"

import { __ } from '@wordpress/i18n';
const {	RichText } = wp.blockEditor

export default function save( props ) {
	
	const { attributes } = props

	const {
		block_id,
		toggleRequired,
		name,
		toggleStatus,
		layout,
		trueValue,
		falseValue
	} = attributes
	
	const isRequired = (toggleRequired) ? __("required", 'form-block-for-gutenberg') : "";
	
	return (
		<div className={ classnames(
			"fbfg-forms-toggle-wrap",
			"fbfg-forms-field-set",
			`fbfg-block-${ block_id }`,
		) }>
				<RichText.Content
				tagName="div"
				value={ name }
				className={`fbfg-forms-toggle-label ${isRequired} fbfg-forms-input-label`}	
				id={ block_id }	
				/>
				<label class="fbfg-switch">
					<input 
						type="hidden"
						className="fbfg-forms-toggle-input"
						checked={toggleStatus}
						data-truestate  = {trueValue}
						data-falsestate = {falseValue}
						value={ toggleStatus ? trueValue : falseValue }
						required={toggleRequired}	
						name={ block_id }				
					/>
					<input 
						type="checkbox"
						className="fbfg-forms-toggle-input"
						checked={toggleStatus}
						data-truestate  = {trueValue}
						data-falsestate = {falseValue}
						value={ toggleStatus ? trueValue : falseValue }
						required={toggleRequired}	
						name={ block_id }			
					/>
					<span class={`fbfg-slider ${layout}`}></span>
				</label>
		</div>
	)
}