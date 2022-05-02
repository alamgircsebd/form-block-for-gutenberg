<?php
/**
 * FBFG Config.
 *
 * @package FBFG
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

if ( ! class_exists( 'FBFG_Config' ) ) {

	/**
	 * Class FBFG_Config.
	 */
	class FBFG_Config {

		/**
		 * Block Attributes
		 *
		 * @var block_attributes
		 */
		public static $block_attributes = null;

		/**
		 * Block Assets
		 *
		 * @var block_attributes
		 */
		public static $block_assets = null;


		/**
		 * Block Assets
		 *
		 * @since 1.0.0
		 * @var block_attributes
		 */
		public static $block_assets_css = null;

		/**
		 * Get Widget List.
		 *
		 * @since 1.0.0
		 *
		 * @return array The Widget List.
		 */
		public static function get_block_attributes() {
			if ( null === self::$block_attributes ) {
				self::$block_attributes = array(
					'fbfg/forms'                  => array(
						'slug'        => '',
						'title'       => __( 'Forms', 'form-block-for-gutenberg' ),
						'description' => __( 'This block allow you to create interactive contact form, newsletter, suggestion, etc easily.', 'form-block-for-gutenberg' ),
						'default'     => true,
						'js_assets'   => array( 'fbfg-forms-js' ),
						'attributes'  => array(
							'block_id'                   => '',
							'submitButtonText'           => __( 'Submit', 'form-block-for-gutenberg' ),
							'formLabel'                  => __( 'FBFG Form', 'form-block-for-gutenberg' ),
							'buttonAlign'                => 'left',
							'confirmationType'           => 'message',
							'confirmationMessage'        => __( 'The form has been submitted Successfully!', 'form-block-for-gutenberg' ),
							'confirmationUrl'            => '',
							'buttonSize'                 => 'medium',
							'submitColor'                => '#ffffff',
							'submitColorHover'           => '#000000',
							'submitBgColor'              => '#000000',
							'submitBgColorHover'         => '#ffffff',
							'submitborderStyle'          => '',
							'toggleSize'                 => 15,
							'toggleActiveColor'          => '#000000',
							'toggleWidthSize'            => 0,
							'toggleHeightSize'           => 0,
							'submitborderWidth'          => 0,
							'submitborderRadius'         => 3,
							'submitborderColor'          => '',
							'submitborderHoverColor'     => '',
							'vPaddingSubmit'             => '',
							'hPaddingSubmit'             => '',
							'submitTextloadGoogleFonts'  => false,
							'sendAfterSubmitEmail'       => true,
							'afterSubmitToEmail'         => '',
							'afterSubmitBccEmail'        => '',
							'afterSubmitCcEmail'         => '',
							'afterSubmitEmailSubject'    => __( 'Form Submission', 'form-block-for-gutenberg' ),
							'submitTextFontFamily'       => 'Default',
							'submitTextFontWeight'       => '',
							'submitTextFontSubset'       => '',
							'submitTextFontSize'         => 15,
							'submitTextFontSizeType'     => 'px',
							'submitTextFontSizeTablet'   => 15,
							'submitTextFontSizeMobile'   => 15,
							'submitTextLineHeight'       => '',
							'submitTextLineHeightType'   => 'em',
							'submitTextLineHeightTablet' => '',
							'submitTextLineHeightMobile' => '',
							'labelloadGoogleFonts'       => false,
							'labelFontFamily'            => 'Default',
							'labelFontWeight'            => '',
							'labelFontSubset'            => '',
							'labelFontSize'              => 15,
							'labelFontSizeType'          => 'px',
							'labelFontSizeTablet'        => 15,
							'labelFontSizeMobile'        => 15,
							'labelLineHeight'            => '',
							'labelLineHeightType'        => 'em',
							'labelLineHeightTablet'      => '',
							'labelLineHeightMobile'      => '',
							'inputloadGoogleFonts'       => false,
							'inputFontFamily'            => 'Default',
							'inputFontWeight'            => '',
							'inputFontSubset'            => '',
							'inputFontSize'              => '',
							'inputFontSizeType'          => 'px',
							'inputFontSizeTablet'        => '',
							'inputFontSizeMobile'        => '',
							'inputLineHeight'            => '',
							'inputLineHeightType'        => 'em',
							'inputLineHeightTablet'      => '',
							'inputLineHeightMobile'      => '',
							'labelColor'                 => '#000000',
							'inputColor'                 => '#000000',
							'bgColor'                    => '',
							'inputplaceholderColor'      => '#abb8c3',
							'inputactiveColor'           => '#000000',
							'inputborderStyle'           => 'solid',
							'inputborderWidth'           => 1,
							'inputborderRadius'          => 3,
							'inputborderColor'           => '#BDBDBD',
							'inputborderHoverColor'      => '',
							'vPaddingField'              => 10,
							'hPaddingField'              => 10,
							'fieldGap'                   => 20,
							'formStyle'                  => 'boxed',
							'overallAlignment'           => 'left',
							'successMessageTextColor'    => '#000000',
							'successMessageBGColor'      => '#00800030',
							'successMessageBorderColor'  => 'green',
							'successMessageBorderStyle'  => 'solid',
							'successMessageBorderWidth'  => 2,
							'failedMessage'              => __( 'There has been some error while submitting the form. Please verify all form fields again.', 'form-block-for-gutenberg' ),
							'failedMessageTextColor'     => '#000000',
							'failedMessageBorderColor'   => 'red',
							'failedMessageBGColor'       => '#f5f5f',
							'failedMessageBorderStyle'   => 'solid',
							'failedMessageBorderWidth'   => 2,
							'reCaptchaEnable'            => false,
							'reCaptchaType'              => 'v2',
							'reCaptchaSiteKeyV2'         => '',
							'reCaptchaSecretKeyV2'       => '',
							'reCaptchaSiteKeyV3'         => '',
							'reCaptchaSecretKeyV3'       => '',
							'hidereCaptchaBatch'         => false,
							'captchaMessage'             => __( 'Please fill up the above captcha.', 'form-block-for-gutenberg' ),
						),
					),
					'fbfg/forms-name'             => array(
						'slug'        => '',
						'title'       => __( 'Name', 'form-block-for-gutenberg' ),
						'description' => __( 'This block helps to add Name field.', 'form-block-for-gutenberg' ),
						'default'     => true,
						'is_child'    => true,
						'attributes'  => array(),
					),
					'fbfg/forms-email'            => array(
						'slug'        => '',
						'title'       => __( 'Email', 'form-block-for-gutenberg' ),
						'description' => __( 'This block helps to add Email field.', 'form-block-for-gutenberg' ),
						'default'     => true,
						'is_child'    => true,
						'attributes'  => array(),
					),
					'fbfg/forms-hidden'           => array(
						'slug'        => '',
						'title'       => __( 'Hidden', 'form-block-for-gutenberg' ),
						'description' => __( 'This block helps to add Hidden field.', 'form-block-for-gutenberg' ),
						'default'     => true,
						'is_child'    => true,
						'attributes'  => array(
							'block_id'           => '',
							'hidden_field_name'  => __( 'Hidden Field Name', 'form-block-for-gutenberg' ),
							'hidden_field_value' => '',

						),
					),
					'fbfg/forms-phone'            => array(
						'slug'        => '',
						'title'       => __( 'Phone', 'form-block-for-gutenberg' ),
						'description' => __( 'This block helps to add Phone field.', 'form-block-for-gutenberg' ),
						'default'     => true,
						'is_child'    => true,
						'attributes'  => array(),
					),
					'fbfg/forms-textarea'         => array(
						'slug'        => '',
						'title'       => __( 'Textarea', 'form-block-for-gutenberg' ),
						'description' => __( 'This block helps to add Textarea field.', 'form-block-for-gutenberg' ),
						'default'     => true,
						'is_child'    => true,
						'attributes'  => array(
							'block_id'     => '',
							'textareaName' => __( 'Message', 'form-block-for-gutenberg' ),
							'rows'         => '4',
						),
					),
					'fbfg/forms-checkbox'         => array(
						'slug'        => '',
						'title'       => __( 'Checkbox', 'form-block-for-gutenberg' ),
						'description' => __( 'This block helps to add Checkbox field.', 'form-block-for-gutenberg' ),
						'default'     => true,
						'is_child'    => true,
						'attributes'  => array(),
					),
					'fbfg/forms-radio'            => array(
						'slug'        => '',
						'title'       => __( 'Radio', 'form-block-for-gutenberg' ),
						'description' => __( 'This block helps to add Radio field.', 'form-block-for-gutenberg' ),
						'default'     => true,
						'is_child'    => true,
						'attributes'  => array(),
					),
					'fbfg/forms-url'              => array(
						'slug'        => '',
						'title'       => __( 'URL', 'form-block-for-gutenberg' ),
						'description' => __( 'This block helps to add URL field.', 'form-block-for-gutenberg' ),
						'default'     => true,
						'is_child'    => true,
						'attributes'  => array(
							'block_id' => '',
							'name'     => __( 'URL', 'form-block-for-gutenberg' ),
						),
					),
					'fbfg/forms-select'           => array(
						'slug'        => '',
						'title'       => __( 'Select', 'form-block-for-gutenberg' ),
						'description' => __( 'This block helps to add Select field.', 'form-block-for-gutenberg' ),
						'default'     => true,
						'is_child'    => true,
						'attributes'  => array(),
					),
					'fbfg/forms-toggle'           => array(
						'slug'        => '',
						'title'       => __( 'Toggle', 'form-block-for-gutenberg' ),
						'description' => __( 'This block helps to add Toggle field.', 'form-block-for-gutenberg' ),
						'default'     => true,
						'is_child'    => true,
						'attributes'  => array(),
					),
					'fbfg/forms-date'             => array(
						'slug'        => '',
						'title'       => __( 'Datepicker', 'form-block-for-gutenberg' ),
						'description' => __( 'This block helps to add Datepicker field.', 'form-block-for-gutenberg' ),
						'default'     => true,
						'is_child'    => true,
						'attributes'  => array(),
					),
					'fbfg/forms-accept'           => array(
						'slug'        => '',
						'title'       => __( 'Accept', 'form-block-for-gutenberg' ),
						'description' => __( 'This block helps to add Accept field.', 'form-block-for-gutenberg' ),
						'default'     => true,
						'attributes'  => array(),
					),
				);
			}
			return self::$block_attributes;
		}

		/**
		 * Get Block Assets.
		 *
		 * @since 1.0.0
		 *
		 * @return array The Asset List.
		 */
		public static function get_block_assets() {
			$blocks      = FBFG_Admin_Helper::get_block_options();
			$post_js_dep = ( ( false === $blocks['fbfg/post-carousel']['is_activate'] ) ? array( 'jquery' ) : array( 'jquery', 'fbfg-slick-js' ) );

			if ( null === self::$block_assets ) {
				self::$block_assets = array(
					'fbfg-forms-js'          => array(
						'src' => FBFG_URL . 'assets/js/forms.js',
						'dep' => array( 'jquery' ),
					),
				);
			}
			return self::$block_assets;
		}

		/**
		 * Get Block Assets.
		 *
		 * @since 1.0.0
		 *
		 * @return array The Asset List.
		 */
		public static function get_block_assets_css() {
			if ( null === self::$block_assets_css ) {
				self::$block_assets_css = array(
					'fbfg/forms'                  => array(
						'name' => 'forms',
					),
					'fbfg/google-map'             => array(
						'name' => 'google-map',
					),
				);
			}
			return self::$block_assets_css;
		}
	}
}

