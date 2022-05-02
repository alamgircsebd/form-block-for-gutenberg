/**
 * BLOCK: Forms - Email - Save Block
 */

import classnames from "classnames"

import { __ } from '@wordpress/i18n';
const {	RichText } = wp.blockEditor


export default function save( props ) {
	
	const { attributes } = props

	const {
		block_id,
		name,
		required,
		placeholder
	} = attributes
	
	const isRequired = (required) ? __("required", 'form-block-for-gutenberg' ): "";

	return (
		<div className={ classnames(
			"fbfg-forms-email-wrap",
			"fbfg-forms-field-set",
			`fbfg-block-${ block_id }`,
		) }>
			<RichText.Content
				tagName="div"
				value={ name }
				className={`fbfg-forms-email-label ${isRequired} fbfg-forms-input-label`}	
				id={ block_id }		
			/>			
			<input type="email" className="fbfg-forms-email-input fbfg-forms-input" placeholder={placeholder} required={ required } name={ block_id }/>
		</div>
	)
}