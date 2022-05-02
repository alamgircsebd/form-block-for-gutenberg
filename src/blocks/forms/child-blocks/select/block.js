/**
 * BLOCK: Forms - Select
 */

import FBFG_Block_Icons from "@Controls/block-icons"
import attributes from "./attributes"
import edit from "./edit"
import save from "./save"
import "./editor.scss"

const {
	registerBlockType
} = wp.blocks

registerBlockType( "fbfg/forms-select", {
	title: fbfg_blocks_info.blocks["fbfg/forms-select"]["title"],
	description: fbfg_blocks_info.blocks["fbfg/forms-select"]["description"],
	icon: FBFG_Block_Icons.select,
	category: fbfg_blocks_info.category,
	parent: [ "fbfg/forms" ],
	attributes,
	edit,
	example:{},	
	save,
} )