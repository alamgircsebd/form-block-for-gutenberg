
/**
 * BLOCK: FBFG Form - Name Attributes
 */
 import { __ } from '@wordpress/i18n';

const attributes = {
    block_id: {
		type: "string"
	},
	nameRequired : {
        type: "boolean",
        default: false
    },
    name: {
        type: "string",
        default:__( "Name" , 'form-block-for-gutenberg')
    },
    placeholder: {
        type: "string",
        default: __( "John Doe" , 'form-block-for-gutenberg' )
    },
}
export default attributes
