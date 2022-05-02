/**
 * BLOCK: Forms - Radio
 */

import FBFG_Block_Icons from "@Controls/block-icons"
import attributes from "./attributes"
import edit from "./edit"
import save from "./save"
import "./editor.scss"

const {
	registerBlockType
} = wp.blocks

registerBlockType( "fbfg/forms-radio", {
	title: fbfg_blocks_info.blocks["fbfg/forms-radio"]["title"],
	description: fbfg_blocks_info.blocks["fbfg/forms-radio"]["description"],
	icon: FBFG_Block_Icons.radio,
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