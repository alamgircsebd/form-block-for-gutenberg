<?php
/**
 * FBFG Twenty Seventeen Compatibility.
 *
 * @package FBFG
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

if ( ! class_exists( 'FBFG_Twenty_Seventeen_Compatibility' ) ) {

	/**
	 * Class FBFG_Twenty_Seventeen_Compatibility.
	 */
	final class FBFG_Twenty_Seventeen_Compatibility {

		/**
		 * Member Variable
		 *
		 * @var instance
		 */
		private static $instance;

		/**
		 *  Initiator
		 */
		public static function get_instance() {
			if ( ! isset( self::$instance ) ) {
				self::$instance = new self();
			}
			return self::$instance;
		}

		/**
		 * Constructor
		 */
		public function __construct() {
			add_action( 'wp', array( $this, 'generate_stylesheet' ), 101 );
		}
		/**
		 * Generates stylesheet and appends in head tag.
		 *
		 * @since 1.0.0
		 */
		public function generate_stylesheet() {
			if ( ! function_exists( 'twentyseventeen_panel_count' ) ) {
				return;
			}
			
			$panel_count     = twentyseventeen_panel_count();
			$post_assets_obj = fbfg_get_front_post_assets();
			$all_posts       = array();

			for ( $i = 1; $i <= $panel_count; $i++ ) {
				$mod_key = 'panel_' . $i;
				$post_id = get_theme_mod( $mod_key );
				$post    = get_post( $post_id );
				array_push( $all_posts, $post );
			}

			if ( ! is_object( $post_assets_obj ) ) {
				return;
			}

			foreach ( $all_posts as $post ) {
				$post_assets_obj->prepare_assets( $post );
			}
		}
	}
}
FBFG_Twenty_Seventeen_Compatibility::get_instance();
