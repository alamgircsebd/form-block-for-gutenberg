<?php
/**
 * FBFG Forms.
 *
 * @package FBFG
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

if ( ! class_exists( 'FBFG_Forms' ) ) {

	/**
	 * Class FBFG_Forms.
	 */
	class FBFG_Forms {

		/**
		 * Member Variable
		 *
		 * @since 1.0.0
		 * @var instance
		 */
		private static $instance;

		/**
		 * Member Variable
		 *
		 * @since 1.0.0
		 * @var settings
		 */
		private static $settings;

		/**
		 *  Initiator
		 *
		 * @since 1.0.0
		 */
		public static function get_instance() {
			if ( ! isset( self::$instance ) ) {
				self::$instance = new self();
			}
			return self::$instance;
		}

		/**
		 * Constructor
		 *
		 * @since 1.0.0
		 */
		public function __construct() {
			add_action( 'wp_ajax_fbfg_process_forms', array( $this, 'process_forms' ) );
			add_action( 'wp_ajax_nopriv_fbfg_process_forms', array( $this, 'process_forms' ) );
		}

		/**
		 * Form Process Initiated.
		 *
		 * @since 1.0.0
		 */
		public function process_forms() {
			check_ajax_referer( 'fbfg_forms_ajax_nonce', 'nonce' );
			// Google recaptcha secret key verification starts.
			$fbfg_google_recaptcha_verify = isset( $_POST['fbfg_captcha_keys'] ) ? 1 : 0;

			if ( $fbfg_google_recaptcha_verify ) {

				$google_recaptcha     = isset( $_POST['captcha_response'] ) ? $_POST['captcha_response'] : '';
				$google_recaptcha_key = $_POST['fbfg_captcha_keys']['secret'];
				$google_url           = 'https://www.google.com/recaptcha/api/siteverify';
				$google_response      = add_query_arg(
					array(
						'secret'   => $google_recaptcha_key,
						'response' => $google_recaptcha,
						'remoteip' => $_SERVER['REMOTE_ADDR'],
					),
					$google_url
				);
				$google_response        = wp_remote_get( $google_response );
				$decode_google_response = json_decode( $google_response['body'] );

				if ( false === $decode_google_response->success ) {
					wp_send_json_error( 400 );
				}
			}

			$form_data = $_POST['form_data'];

			$body  = '';
			$body .= '<div style="border: 50px solid #f6f6f6;">';
			$body .= '<div style="padding: 15px;">';

			foreach ( $form_data as $key => $value ) {
				if ( $key ) {
					if ( is_array( $value ) && stripos( wp_json_encode( $value ), '+' ) !== false ) {

						$val   = implode( '', $value );
						$body .= '<p><strong>' . str_replace( '_', ' ', ucwords( $key ) ) . '</strong> - ' . esc_html( $val ) . '</p>';

					} elseif ( is_array( $value ) ) {

						$val   = implode( ', ', $value );
						$body .= '<p><strong>' . str_replace( '_', ' ', ucwords( $key ) ) . '</strong> - ' . esc_html( $val ) . '</p>';

					} else {
						$body .= '<p><strong>' . str_replace( '_', ' ', ucwords( $key ) ) . '</strong> - ' . esc_html( $value ) . '</p>';
					}
				}
			}
			$body .= '<p style="text-align:center;">This e-mail was sent from a ' . get_bloginfo( 'name' ) . ' ( ' . site_url() . ' )</p>';
			$body .= '</div>';
			$body .= '</div>';

			$curent_time = time();
			$page_slug   = 'form-entry-' . $curent_time; // Slug of the Post
			
			$add_entry_data = array(
				'post_type'     => 'fbfg_entries',
				'post_title'    => 'Form Entry ' . $curent_time,
				'post_content'  => $body,
				'post_status'   => 'publish',
				'post_name'     => $page_slug,
				'author'        => 1,
			);
			
			if ( ! get_page_by_path( $page_slug, OBJECT, 'fbfg_entries' ) ) {
				wp_insert_post( $add_entry_data );
			}

			$this->send_email( $body );
		}

		/**
		 * Trigger Mail.
		 *
		 * @param object $body Email Body.
		 * @since 1.0.0
		 */
		public function send_email( $body ) {
			check_ajax_referer( 'fbfg_forms_ajax_nonce', 'nonce' );
			$after_submit_data = isset( $_POST['after_submit_data'] ) ? $_POST['after_submit_data'] : '';

			$to      = isset( $after_submit_data['to'] ) ? sanitize_email( $after_submit_data['to'] ) : sanitize_email( get_option( 'admin_email' ) );
			$cc      = isset( $after_submit_data['cc'] ) ? sanitize_email( $after_submit_data['cc'] ) : '';
			$bcc     = isset( $after_submit_data['bcc'] ) ? sanitize_email( $after_submit_data['bcc'] ) : '';
			$subject = isset( $after_submit_data['subject'] ) ? $after_submit_data['subject'] : 'Form Submission';
			$headers = array(
				'Reply-To-: ' . get_bloginfo( 'name' ) . ' <' . $to . '>',
				'Content-Type: text/html; charset=UTF-8',
				'cc: ' . get_bloginfo( 'name' ) . ' <' . $cc . '>',
			);

			$succefull_mail = wp_mail( $to, $subject, $body, $headers );

			if ( $bcc && ! empty( $bcc ) ) {
				$bcc_emails = explode( ',', $after_submit_data['bcc'] );
				foreach ( $bcc_emails as $bcc_email ) {
					wp_mail( sanitize_email( trim( $bcc_email ) ), $subject, $body, $headers );
				}
			}

			if ( $succefull_mail ) {
				wp_send_json_success( 200 );
			} else {
				wp_send_json_success( 400 );
			}
		}
	}

	/**
	 *  Prepare if class 'FBFG_Forms' exist.
	 *  Kicking this off by calling 'get_instance()' method
	 */
	FBFG_Forms::get_instance();
}
