/**
 * BLOCK: Forms - Select - Save Block
 */

import classnames from "classnames"

import { __ } from '@wordpress/i18n';
const { RichText } = wp.blockEditor

export default function save( props ) {
	
	const { attributes } = props

	const {
		block_id,
		selectRequired,
		options,
		selectName
	} = attributes
	
	const isRequired = (selectRequired) ? __("required", 'form-block-for-gutenberg') : "";
	
	return (
		<div className={ classnames(
			"fbfg-forms-select-wrap",
			"fbfg-forms-field-set",
			`fbfg-block-${ block_id }`,
		) }>
			<RichText.Content
				tagName="div"
				value={ selectName }
				className={`fbfg-forms-select-label ${isRequired} fbfg-forms-input-label`}	
				id={ block_id }	
			/>
				<select className="fbfg-forms-select-box fbfg-forms-input"  required={ selectRequired } name={ block_id }>
					<option value="" disabled selected>
						Select your option
					</option>
					{options.map((o, index) => {
						var optionvalue = o.optionvalue;
						var value = optionvalue.replace(/\s+/g, '-').toLowerCase();
						return <option value={optionvalue}>{o.optiontitle}</option>;
					})}
					
				</select>
		</div>
	)
}
