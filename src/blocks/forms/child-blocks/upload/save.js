/**
 * BLOCK: Forms - Upload - Save Block
 */

import classnames from "classnames"

import { __ } from '@wordpress/i18n';
const {	RichText } = wp.blockEditor

export default function save( props ) {
	
	const { attributes } = props

	const {
		block_id,
		uploadRequired,
		name,
		formats
	} = attributes
	
	const allowed_files = formats.map(f => ".".concat(f)).join(",");

	const isRequired = (uploadRequired) ? __("required" , 'form-block-for-gutenberg') : "";

	return (
		<div className={ classnames(
			"fbfg-forms-upload-wrap",
			"fbfg-forms-field-set",
			`fbfg-block-${ block_id }`,
		) }>
			<RichText.Content
			tagName="div"
			value={ name }
			className={`fbfg-forms-upload-label ${isRequired} fbfg-forms-input-label`}	
			id={ block_id }	
			/>
			<input type="file" accept={allowed_files} className="fbfg-forms-upload-input" required={uploadRequired} name={ block_id } />
		</div>
	)
}