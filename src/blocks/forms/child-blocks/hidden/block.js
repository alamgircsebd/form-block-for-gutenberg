/**
 * BLOCK: Forms - Hidden
 */

import FBFG_Block_Icons from "@Controls/block-icons"
import attributes from "./attributes"
import edit from "./edit"
import save from "./save"

const {
	registerBlockType
} = wp.blocks

registerBlockType( "fbfg/forms-hidden", {
	title: fbfg_blocks_info.blocks["fbfg/forms-hidden"]["title"],
	description: fbfg_blocks_info.blocks["fbfg/forms-hidden"]["description"],
	icon: FBFG_Block_Icons.hidden,
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