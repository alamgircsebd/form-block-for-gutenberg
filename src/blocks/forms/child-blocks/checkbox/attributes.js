
/**
 * BLOCK: Forms - Checkbox - Attribute
 */
 import { __ } from '@wordpress/i18n';

const attributes = {
    block_id: {
		type: "string"
    },
    checkboxName:{
        type: "string",
        default: __( "Checkbox Title" , 'form-block-for-gutenberg' )
    },
	checkboxRequired : {
        type: "boolean",
        default: false
    },
    options: {
        type: "array",
        default: [ { "optiontitle": __( "Option Name 1" , 'form-block-for-gutenberg'),"optionvalue": __( "Option Value 1", 'form-block-for-gutenberg' ) } ],
        
    },
    
}
export default attributes