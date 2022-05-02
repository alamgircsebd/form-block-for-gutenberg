/**
 * BLOCK: Forms - hidden - Save Block
 */

import classnames from "classnames"


export default function save( props ) {
	
	const { attributes } = props

	const {
		block_id,
		hidden_field_value
	} = attributes
		
	return (
		<div className={ classnames(
			"fbfg-forms-hidden-wrap",
			`fbfg-block-${ block_id }`,
		) }>			
			<input type="hidden"  className="fbfg-forms-hidden-input" value={hidden_field_value} />
		</div>
	)
}