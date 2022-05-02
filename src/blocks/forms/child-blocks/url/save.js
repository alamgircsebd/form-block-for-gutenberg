/**
 * BLOCK: Forms - URL - Save Block
 */

import classnames from "classnames"

import { __ } from '@wordpress/i18n';
const {	RichText } = wp.blockEditor
export default function save( props ) {
	
	const { attributes } = props

	const {
		block_id,
		required,
		name,
		placeholder
	} = attributes

	
	const isRequired = (required) ? __("required", 'form-block-for-gutenberg') : "";
	
	return (
		<div className={ classnames(
			"fbfg-forms-url-wrap",
			"fbfg-forms-field-set",
			`fbfg-block-${ block_id }`,
		) }>
				<RichText.Content
			tagName="div"
			value={ name }
			className={`fbfg-forms-url-label ${isRequired} fbfg-forms-input-label`}
			id={ block_id }			
			/>
			<input type="url" name={ block_id } required={ required } placeholder={placeholder}  className="fbfg-forms-url-input fbfg-forms-input"/>					

		</div>
	)
}