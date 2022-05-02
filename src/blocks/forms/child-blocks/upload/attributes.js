/**
 * BLOCK: FBFG Form - Upload Attributes
 */

 import { __ } from '@wordpress/i18n';
const attributes = {
    block_id: {
		type: "string"
	},
	uploadRequired : {
        type: "boolean",
        default: false
    },
    name: {
        type: "string",
        default: __("Upload" , 'form-block-for-gutenberg')
    },
    formats:{
        type: "array",
        default: [
                __("jpg",  'form-block-for-gutenberg'),
                __("jpeg",  'form-block-for-gutenberg'),
                __("png",  'form-block-for-gutenberg'),
                __("gif",  'form-block-for-gutenberg'),
                __("pdf",  'form-block-for-gutenberg'),
                __("doc",  'form-block-for-gutenberg'),
                __("docx",  'form-block-for-gutenberg'),
                __("ppt",  'form-block-for-gutenberg'),
                __("pptx",  'form-block-for-gutenberg'),
                __("odt",  'form-block-for-gutenberg'),
                __("avi",  'form-block-for-gutenberg'),
                __("ogg",  'form-block-for-gutenberg'),
                __("m4a",  'form-block-for-gutenberg'),
                __("mov",  'form-block-for-gutenberg'),
                __("mp3",  'form-block-for-gutenberg'),
                __("mp4",  'form-block-for-gutenberg'),
                __("mpg",  'form-block-for-gutenberg'),
                __("wav",  'form-block-for-gutenberg'),
                __("wmv", 'form-block-for-gutenberg')
        ]
    }
}
export default attributes
