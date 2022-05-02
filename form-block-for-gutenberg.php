<?php
/**
 * Plugin Name: Form Block for Gutenberg
 * Plugin URI: https://github.com/alamgircsebd/form-block-for-gutenberg
 * Author: Alamgir
 * Author URI: https://github.com/alamgircsebd/
 * Version: 1.0.0
 * Description: Easy way a form build with gutenberg editor.
 * Text Domain: form-block-for-gutenberg
 *
 * @package FBFG
 */

define( 'FBFG_FILE', __FILE__ );
define( 'FBFG_ROOT', dirname( plugin_basename( FBFG_FILE ) ) );
define( 'FBFG_PLUGIN_NAME', 'Form Block for Gutenberg' );
define( 'FBFG_PLUGIN_SHORT_NAME', 'FBFG' );

if ( ! version_compare( PHP_VERSION, '5.6', '>=' ) ) {
	add_action( 'admin_notices', 'fbfg_fail_php_version' );
} elseif ( ! version_compare( get_bloginfo( 'version' ), '4.7', '>=' ) ) {
	add_action( 'admin_notices', 'fbfg_fail_wp_version' );
} else {
	require_once 'classes/class-fbfg-loader.php';
}

/**
 * Form Block for Gutenberg admin notice for minimum PHP version.
 *
 * Warning when the site doesn't have the minimum required PHP version.
 *
 * @since 1.0.0
 *
 * @return void
 */
function fbfg_fail_php_version() {
	/* translators: %s: PHP version */
	$message      = sprintf( esc_html__( 'Form Block for Gutenberg requires PHP version %s+, plugin is currently NOT RUNNING.', 'form-block-for-gutenberg' ), '5.6' );
	$html_message = sprintf( '<div class="error">%s</div>', wpautop( $message ) );
	echo wp_kses_post( $html_message );
}


/**
 * Form Block for Gutenberg admin notice for minimum WordPress version.
 *
 * Warning when the site doesn't have the minimum required WordPress version.
 *
 * @since 1.0.0
 *
 * @return void
 */
function fbfg_fail_wp_version() {
	/* translators: %s: WordPress version */
	$message      = sprintf( esc_html__( 'Form Block for Gutenberg requires WordPress version %s+. Because you are using an earlier version, the plugin is currently NOT RUNNING.', 'form-block-for-gutenberg' ), '4.7' );
	$html_message = sprintf( '<div class="error">%s</div>', wpautop( $message ) );
	echo wp_kses_post( $html_message );
}
