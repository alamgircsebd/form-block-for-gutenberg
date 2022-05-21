/**
 * BLOCK: Forms - Block
 */

import FBFG_Block_Icons from "@Controls/block-icons"
import attributes from "./attributes"
import edit from "./edit"
import save from "./save"
import "./style.scss"
import "./editor.scss"
import variations from './variations';
import { __ } from '@wordpress/i18n';

const {
	registerBlockType
} = wp.blocks

registerBlockType( "fbfg/forms", {
	title: fbfg_blocks_info.blocks["fbfg/forms"]["title"],
	description: fbfg_blocks_info.blocks["fbfg/forms"]["description"],
	icon: FBFG_Block_Icons.forms,
	category: fbfg_blocks_info.category,
	keywords: [
		__( "forms" , "form-block-for-gutenberg" ),
		__( "fbfg" , "form-block-for-gutenberg" ),
	],
	example:{},
	attributes,
	variations,
	edit,
	supports: {
		anchor: true,
	},
	save,
} )
