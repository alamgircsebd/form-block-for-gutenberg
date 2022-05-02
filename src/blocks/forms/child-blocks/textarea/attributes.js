/**
 * BLOCK: FBFG Form - TextArea Attributes
 */

 import { __ } from '@wordpress/i18n';

const attributes = {
    block_id: {
		type: "string"
    },
    textareaName: {
        type: "string",
        default: __("Message" , 'form-block-for-gutenberg')
    },
	textareaRequired : {
        type: "boolean",
        default: false
    },
    rows : {
        type: "number",
        default: 4
    },
    placeholder: {
        type: "string",
        default: __( "Enter your message" , 'form-block-for-gutenberg' )
    },
}
export default attributes
