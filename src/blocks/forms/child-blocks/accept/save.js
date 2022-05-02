/**
 * BLOCK: Forms - Accept - Save Block
 */

import classnames from "classnames"
import { __ } from '@wordpress/i18n';

export default function save( props ) {
	
	const { attributes } = props

	const {
		block_id,
		acceptRequired,
		acceptText,
		showLink,
		linkLabel,
		link,
		linkInNewTab
	} = attributes
	
	const isRequired = (acceptRequired) ? __("required", 'form-block-for-gutenberg') : "";
	const target = (linkInNewTab) ? __("_blank", 'form-block-for-gutenberg') : __("_self" , 'form-block-for-gutenberg') ;
	
	return (
		<div className={ classnames(
			"fbfg-forms-accept-wrap",
			"fbfg-forms-field-set",
			`fbfg-block-${ block_id }`,
		) }>
			{ showLink && (
				<div className="fbfg-forms-accept-privacy-link">
					<a href={ link } target={target} rel="noopener noreferrer" > { linkLabel }  </a>		
				</div>
			)}
			<input type="checkbox"  name={ block_id } required={ acceptRequired }  value="Agree" className="fbfg-forms-checkbox" id = {`fbfg-forms-accept-${block_id}`}/>			
			<label name={ block_id } htmlFor={`fbfg-forms-accept-${block_id}`} className={`fbfg-forms-accept-label ${isRequired}`} id={ block_id }>{ acceptText }</label><br></br>
		</div>
	)
}