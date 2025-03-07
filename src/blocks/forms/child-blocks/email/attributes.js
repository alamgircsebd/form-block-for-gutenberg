
/**
 * BLOCK: FBFG Form - Email Attributes
 */
 import { __ } from '@wordpress/i18n';

const attributes = {
	block_id: {
		type: "string"
	},
	name: {
        type: "string",
        default: __("Email" , 'form-block-for-gutenberg' )
	},
	required : {
        type: "boolean",
        default: true
	},
	placeholder: {
        type: "string",
        default: __( "example@mail.com" , 'form-block-for-gutenberg')
    },
}
export default attributes
