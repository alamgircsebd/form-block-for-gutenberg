/**
 * BLOCK: FBFG Form - URL Attributes
 */
import { __ } from '@wordpress/i18n';

const attributes = {
  block_id: {
    type: "string"
  },
  name: {
    type: "string",
    default: __( "URL" , 'form-block-for-gutenberg' ),
  },
  required : {
    type: "boolean",
    default: false
  },
  placeholder: {
    type: "string",
    default: __( "https://example.com" , 'form-block-for-gutenberg')
  },
}
export default attributes
