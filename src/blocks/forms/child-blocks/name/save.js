/**
 * BLOCK: Forms - Name - Save Block
 */

import classnames from "classnames"

import { __ } from '@wordpress/i18n';
const {	RichText } = wp.blockEditor

export default function save( props ) {
	
	const { attributes } = props

	const {
		block_id,
		nameRequired,
		name,
		placeholder
	} = attributes
	
	const isRequired = (nameRequired) ? __("required" , 'form-block-for-gutenberg'): "";
	
	return (
		<div className={ classnames(
			"fbfg-forms-name-wrap",
			"fbfg-forms-field-set",
			`fbfg-block-${ block_id }`,
		) }>
				<RichText.Content
				tagName="div"
				value={ name }
				className={`fbfg-forms-name-label ${isRequired} fbfg-forms-input-label`}	
				id={ block_id }		
				/>
				<input type="text" placeholder={placeholder} required={ nameRequired } className="fbfg-forms-name-input fbfg-forms-input" name= { block_id }  />
		</div>
	)
}