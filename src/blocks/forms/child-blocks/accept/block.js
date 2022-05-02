/**
 * BLOCK: Forms - Accept
 */

import FBFG_Block_Icons from "@Controls/block-icons"
import attributes from "./attributes"
import edit from "./edit"
import save from "./save"
import "./editor.scss"

const {
	registerBlockType
} = wp.blocks

registerBlockType( "fbfg/forms-accept", {
	title: fbfg_blocks_info.blocks["fbfg/forms-accept"]["title"],
	description: fbfg_blocks_info.blocks["fbfg/forms-accept"]["description"],
	icon: FBFG_Block_Icons.accept,
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