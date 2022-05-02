
/**
 * WordPress dependencies
 */

 import { __ } from '@wordpress/i18n';
import FBFG_Block_Icons from "@Controls/block-icons"
/**
 * Template option choices for predefined form layouts.
 *
 * @constant
 * @type {Array}
 */
const variations = [
	{
		name: 'simple-contact-form',
		label: __( 'Simple Contact Form' , 'form-block-for-gutenberg' ),
		icon:  FBFG_Block_Icons.form1,
		title: __( 'Simple Contact Form', 'form-block-for-gutenberg' ),
		attributes: {
		},
		isDefault: true,
		innerBlocks: [
			[ 'fbfg/forms-name', { name:__('First Name', 'form-block-for-gutenberg'),placeholder:__('First name', 'form-block-for-gutenberg'),nameRequired:true } ],
			[ 'fbfg/forms-name', { name:__('Last Name', 'form-block-for-gutenberg'),placeholder:__('Last name', 'form-block-for-gutenberg'),nameRequired:true } ],
			[ 'fbfg/forms-email',{ emailRequired:true } ],
			[ 'fbfg/forms-textarea',{ textareaRequired:true } ],
		],
		scope: [ 'block' ],
	},
	{
		name: 'newsletter-form',
		label: __( 'Newsletter Form' , 'form-block-for-gutenberg' ),
		icon:  FBFG_Block_Icons.form2,
		title: __( 'Newsletter Form' , 'form-block-for-gutenberg' ),
		attributes: {
		},
		innerBlocks: [
			[ 'fbfg/forms-name', { nameRequired:true } ],
			[ 'fbfg/forms-email',{ emailRequired:true } ],
		],
		scope: [ 'block' ],
	},
	{
		name: 'suggestion-form',
		label: __( 'Suggestion Form', 'form-block-for-gutenberg' ),
		icon:  FBFG_Block_Icons.form3,
		title: __( 'Suggestion Form', 'form-block-for-gutenberg' ),
		attributes: {
		}, 
		innerBlocks: [
			[ 'fbfg/forms-name', { nameRequired:true } ],
			[ 'fbfg/forms-email',{ emailRequired:true } ],
			[ 'fbfg/forms-radio',{ 
				radioRequired:true,
				radioName:'Some question with below listed option?',
				options:[ 
					{ "optiontitle": __( "Option Name 1", 'form-block-for-gutenberg' ),"optionvalue": __( "Option Value 1" , 'form-block-for-gutenberg' ) },
					{ "optiontitle": __( "Option Name 2", 'form-block-for-gutenberg' ),"optionvalue": __( "Option Value 2" , 'form-block-for-gutenberg' ) },
					{ "optiontitle": __( "Option Name 3", 'form-block-for-gutenberg' ),"optionvalue": __( "Option Value 3" , 'form-block-for-gutenberg' ) },
					{ "optiontitle": __( "Option Name 4", 'form-block-for-gutenberg' ),"optionvalue": __( "Option Value 4" , 'form-block-for-gutenberg' ) },

				] 
			} ],
			[ 'fbfg/forms-name', { name:__('Subject', 'form-block-for-gutenberg'),placeholder:__('Enter your subject', 'form-block-for-gutenberg'),nameRequired:true } ],
			[ 'fbfg/forms-textarea',{ textareaRequired:true } ],
		],
		scope: [ 'block' ],
	},	
];

export default variations;