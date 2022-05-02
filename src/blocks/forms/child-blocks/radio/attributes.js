/**
 * BLOCK: FBFG Form - Radio Attributes
 */
 import { __ } from '@wordpress/i18n';

const attributes = {
    block_id: {
		type: "string"
    },
    radioName:{
        type: "string",
        default: __( "RadioBox Title" , 'form-block-for-gutenberg' )
    },
	radioRequired : {
        type: "boolean",
        default: false
    },
    options: {
        type: "array",
        default: [ { "optiontitle": __( "Option Name 1" , 'form-block-for-gutenberg'),"optionvalue": __( "Option Value 1" , 'form-block-for-gutenberg') }],
        
    },
    
}
export default attributes