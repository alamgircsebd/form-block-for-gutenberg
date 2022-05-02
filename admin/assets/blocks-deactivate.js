let fbfg_deactivated_blocks = fbfg_deactivate_blocks.deactivated_blocks
// If we are recieving an object, let's convert it into an array.
if ( fbfg_deactivated_blocks.length ) {
	if ( typeof wp.blocks.unregisterBlockType !== "undefined" ) {
		for( block_index in fbfg_deactivated_blocks ) {
			wp.blocks.unregisterBlockType( fbfg_deactivated_blocks[block_index] );
		}
	}

}
