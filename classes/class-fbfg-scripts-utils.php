<?php
/**
 * FBFG Scripts Utils.
 *
 * @package FBFG
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Class FBFG_Scripts_Utils.
 */
final class FBFG_Scripts_Utils {

	/**
	 * Enqueue Gutenberg block assets for both frontend + backend.
	 *
	 * @since 1.0.0
	 */
	public static function enqueue_blocks_dependency_both() {
		$blocks       = FBFG_Config::get_block_attributes();
		$saved_blocks = FBFG_Admin_Helper::get_admin_settings_option( '_fbfg_blocks', array() );
		$block_assets = FBFG_Config::get_block_assets();

		foreach ( $blocks as $slug => $value ) {
			$_slug = str_replace( 'fbfg/', '', $slug );

			if ( ! ( isset( $saved_blocks[ $_slug ] ) && 'disabled' === $saved_blocks[ $_slug ] ) ) {

				$js_assets = ( isset( $blocks[ $slug ]['js_assets'] ) ) ? $blocks[ $slug ]['js_assets'] : array();

				$css_assets = ( isset( $blocks[ $slug ]['css_assets'] ) ) ? $blocks[ $slug ]['css_assets'] : array();

				if ( 'cf7-styler' === $_slug ) {
					if ( ! wp_script_is( 'contact-form-7', 'enqueued' ) ) {
						wp_enqueue_script( 'contact-form-7' );
					}

					if ( ! wp_script_is( ' wpcf7-admin', 'enqueued' ) ) {
						wp_enqueue_script( ' wpcf7-admin' );
					}
				}

				foreach ( $js_assets as $asset_handle => $val ) {
					// Scripts.
					wp_register_script(
						$val, // Handle.
						$block_assets[ $val ]['src'],
						$block_assets[ $val ]['dep'],
						FBFG_VER,
						true
					);

					$skip_editor = isset( $block_assets[ $val ]['skipEditor'] ) ? $block_assets[ $val ]['skipEditor'] : false;

					if ( is_admin() && false === $skip_editor ) {
						wp_enqueue_script( $val );
					}
				}

				foreach ( $css_assets as $asset_handle => $val ) {
					// Styles.
					wp_register_style(
						$val, // Handle.
						$block_assets[ $val ]['src'],
						$block_assets[ $val ]['dep'],
						FBFG_VER
					);

					if ( is_admin() ) {
						wp_enqueue_style( $val );
					}
				}
			}
		}

		$fbfg_masonry_ajax_nonce = wp_create_nonce( 'fbfg_masonry_ajax_nonce' );
		wp_localize_script(
			'fbfg-post-js',
			'fbfg_data',
			array(
				'ajax_url'                => admin_url( 'admin-ajax.php' ),
				'fbfg_masonry_ajax_nonce' => $fbfg_masonry_ajax_nonce,
			)
		);

		$fbfg_forms_ajax_nonce = wp_create_nonce( 'fbfg_forms_ajax_nonce' );
		wp_localize_script(
			'fbfg-forms-js',
			'fbfg_forms_data',
			array(
				'ajax_url'              => admin_url( 'admin-ajax.php' ),
				'fbfg_forms_ajax_nonce' => $fbfg_forms_ajax_nonce,
			)
		);

	}

	/**
	 * Enqueue block styles.
	 *
	 * @since 1.0.0
	 */
	public static function enqueue_blocks_styles() {
		$wp_upload_dir = FBFG_Helper::get_fbfg_upload_dir_path();

		if ( file_exists( $wp_upload_dir . 'custom-style-blocks.css' ) ) {

			$wp_upload_url = FBFG_Helper::get_fbfg_upload_url_path();

			wp_enqueue_style(
				'fbfg-block-css', // Handle.
				$wp_upload_url . 'custom-style-blocks.css', // Block style CSS.
				array(),
				FBFG_VER
			);
		} else {
			wp_enqueue_style(
				'fbfg-block-css', // Handle.
				FBFG_URL . 'dist/style-blocks.css', // Block style CSS.
				array(),
				FBFG_VER
			);
		}
	}

	/**
	 * Enqueue block rtl styles.
	 *
	 * @since 1.0.0
	 */
	public static function enqueue_blocks_rtl_styles() {
		if ( is_rtl() ) {
			wp_enqueue_style(
				'fbfg-style-rtl', // Handle.
				FBFG_URL . 'assets/css/style-blocks.rtl.css', // RTL style CSS.
				array(),
				FBFG_VER
			);
		}
	}

	/**
	 * Returns an array of paths for the CSS and JS assets
	 * of the current post.
	 *
	 * @param  var $type    Gets the CSS\JS type.
	 * @param  var $post_id Post ID.
	 * @since 1.0.0
	 * @return array
	 */
	public static function get_asset_info( $type, $post_id ) {
		$uploads_dir = FBFG_Helper::get_upload_dir();
		$file_name   = get_post_meta( $post_id, '_fbfg_' . $type . '_file_name', true );
		$path        = $type;
		$url         = $type . '_url';

		$info = array(
			$path => '',
			$url  => '',
		);

		if ( ! empty( $file_name ) ) {
			$info[ $path ] = $uploads_dir['path'] . $file_name;
			$info[ $url ]  = $uploads_dir['url'] . $file_name;
		}

		return $info;
	}
}
