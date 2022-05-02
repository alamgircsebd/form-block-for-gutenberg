/**
* BLOCK: Forms - Textarea - Save Block
*/

import classnames from "classnames"

import { __ } from '@wordpress/i18n';
const {	RichText } = wp.blockEditor
export default function save( props ) {
	
	const { attributes } = props
	
	const {
		block_id,
		textareaRequired,
		textareaName,
		rows,
		placeholder
	} = attributes
	
	const isRequired = (textareaRequired) ? __("required", 'form-block-for-gutenberg') : "";
	
	return (
		<div className={ classnames(
			"fbfg-forms-textarea-wrap",
			"fbfg-forms-field-set",
			`fbfg-block-${ block_id }`,
			) }>
			<RichText.Content
			tagName="div"
			value={ textareaName }
			className={`fbfg-forms-textarea-label ${isRequired} fbfg-forms-input-label`}
			id={ block_id }			
			/>
			<textarea required={ textareaRequired } className="fbfg-forms-textarea-input fbfg-forms-input" rows={rows} placeholder={placeholder} name={ block_id } ></textarea>
			</div>
			)
		}