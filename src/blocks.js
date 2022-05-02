/**
 * Gutenberg Blocks
 *
 * All blocks related JavaScript files should be imported here.
 * You can create a new block folder in this dir and include code
 * for that block here as well.
 *
 * All blocks should be included here since this is the file that
 * Webpack is compiling as the input file.
 */
import "./blocks/forms/block.js"
import "./blocks/forms/child-blocks/name/block.js"
import "./blocks/forms/child-blocks/email/block.js"
import "./blocks/forms/child-blocks/hidden/block.js"
import "./blocks/forms/child-blocks/phone/block.js"
import "./blocks/forms/child-blocks/textarea/block.js"
import "./blocks/forms/child-blocks/checkbox/block.js"
import "./blocks/forms/child-blocks/radio/block.js"
import "./blocks/forms/child-blocks/url/block.js"
import "./blocks/forms/child-blocks/select/block.js"
import "./blocks/forms/child-blocks/toggle/block.js"
import "./blocks/forms/child-blocks/date/block.js"
import "./blocks/forms/child-blocks/accept/block.js"

import FBFG_Block_Icons from "@Controls/block-icons"

const { updateCategory } = wp.blocks

updateCategory( "fbfg", {
	icon: FBFG_Block_Icons.logo,
}, )
