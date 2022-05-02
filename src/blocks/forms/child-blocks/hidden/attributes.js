/**
 * BLOCK: FBFG Form - Hidden Attributes
 */
 import { __ } from '@wordpress/i18n';

const attributes = {
	block_id: {
		type: "string"
	},
	hidden_field_name : {
		type: "string",
		default: __("Hidden Field Name", 'form-block-for-gutenberg')
	},
	hidden_field_value : {
		type: "string"
	},
	
}
export default attributes
