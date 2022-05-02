/**
 * BLOCK: FBFG Form - Select Attributes
 */
 import { __ } from '@wordpress/i18n';

const attributes = {
    block_id: {
		type: "string"
    },
    selectName:{
        type: "string",
        default: __( "Select Title" , 'form-block-for-gutenberg' )
    },
	selectRequired : {
        type: "boolean",
        default: false
    },
    options: {
        type: "array",
        default: [ { "optiontitle": __( "Option Name 1" , 'form-block-for-gutenberg' ),"optionvalue": __( "Option Value 1" , 'form-block-for-gutenberg') } ],
        
    },
    
}
export default attributes
