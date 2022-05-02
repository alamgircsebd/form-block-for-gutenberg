/**
 * BLOCK: FBFG Form - Phone Attributes
 */
 import { __ } from '@wordpress/i18n';
const attributes = {
    block_id: {
		type: "string"
    },
    phoneName: {
        type: "string",
        default: __("Phone" , 'form-block-for-gutenberg' )
    },
	phoneRequired : {
        type: "boolean",
        default: false
    },
    pattern: {
        type: "string",
        default: __("[0-9]{3}-[0-9]{3}-[0-9]{4}" , 'form-block-for-gutenberg'),
    }
}
export default attributes
