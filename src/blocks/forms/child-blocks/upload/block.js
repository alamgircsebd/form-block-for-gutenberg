/**
 * BLOCK: Forms - Upload
 */

import FBFG_Block_Icons from "@Controls/block-icons"
import attributes from "./attributes"
import edit from "./edit"
import save from "./save"

const {
	registerBlockType
} = wp.blocks

registerBlockType( "fbfg/forms-upload", {
	title: fbfg_blocks_info.blocks["fbfg/forms-upload"]["title"],
	description: fbfg_blocks_info.blocks["fbfg/forms-upload"]["description"],
	icon: FBFG_Block_Icons.faq,
	category: fbfg_blocks_info.category,
	parent: [ "fbfg/forms" ],
	attributes,
	edit,
	supports: {
		anchor: true,
	},
	example:{},
	save
} )