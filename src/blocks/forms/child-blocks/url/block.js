/**
 * BLOCK: Forms - URL
 */

import FBFG_Block_Icons from "@Controls/block-icons"
import attributes from "./attributes"
import edit from "./edit"
import save from "./save"

const {
	registerBlockType
} = wp.blocks

registerBlockType( "fbfg/forms-url", {
	title: fbfg_blocks_info.blocks["fbfg/forms-url"]["title"],
	description: fbfg_blocks_info.blocks["fbfg/forms-url"]["description"],
	icon: FBFG_Block_Icons.url,
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