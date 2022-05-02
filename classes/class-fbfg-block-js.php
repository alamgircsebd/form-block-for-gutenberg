<?php
/**
 * FBFG Block Helper.
 *
 * @package FBFG
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

if ( ! class_exists( 'FBFG_Block_JS' ) ) {

	/**
	 * Class FBFG_Block_JS.
	 */
	class FBFG_Block_JS {

		/**
		 * Get Forms Js
		 *
		 * @since 1.0.0
		 * @param array  $attr The block attributes.
		 * @param string $id The selector ID.
		 */
		public static function get_forms_js( $attr, $id ) {
			$defaults = FBFG_Helper::$block_list['fbfg/forms']['attributes'];
			$attr     = array_merge( $defaults, (array) $attr );
			$selector = '.fbfg-block-' . $id;
			$js_attr  = array(
				'block_id'                => $attr['block_id'],
				'reCaptchaEnable'         => $attr['reCaptchaEnable'],
				'reCaptchaType'           => $attr['reCaptchaType'],
				'reCaptchaSiteKeyV2'      => $attr['reCaptchaSiteKeyV2'],
				'reCaptchaSecretKeyV2'    => $attr['reCaptchaSecretKeyV2'],
				'reCaptchaSiteKeyV3'      => $attr['reCaptchaSiteKeyV3'],
				'reCaptchaSecretKeyV3'    => $attr['reCaptchaSecretKeyV3'],
				'afterSubmitToEmail'      => $attr['afterSubmitToEmail'],
				'afterSubmitCcEmail'      => $attr['afterSubmitCcEmail'],
				'afterSubmitBccEmail'     => $attr['afterSubmitBccEmail'],
				'afterSubmitEmailSubject' => $attr['afterSubmitEmailSubject'],
				'sendAfterSubmitEmail'    => $attr['sendAfterSubmitEmail'],
				'confirmationType'        => $attr['confirmationType'],
				'hidereCaptchaBatch'      => $attr['hidereCaptchaBatch'],
				'captchaMessage'          => $attr['captchaMessage'],
				'confirmationUrl'         => $attr['confirmationUrl'],
			);
			ob_start();
			?>
			jQuery( document ).ready(function() {
				FBFGForms.init( <?php echo wp_json_encode( $js_attr ); ?>, '<?php echo esc_attr( $selector ); ?>' );
			});
			<?php
			return ob_get_clean();
		}

		/**
		 * Adds Google fonts for Forms block.
		 *
		 * @since 1.0.0
		 * @param array $attr the blocks attr.
		 */
		public static function blocks_forms_gfont( $attr ) {
			$submitText_load_google_font = isset( $attr['submitTextloadGoogleFonts'] ) ? $attr['submitTextloadGoogleFonts'] : '';
			$submitText_font_family      = isset( $attr['submitTextFontFamily'] ) ? $attr['submitTextFontFamily'] : '';
			$submitText_font_weight      = isset( $attr['submitTextFontWeight'] ) ? $attr['submitTextFontWeight'] : '';
			$submitText_font_subset      = isset( $attr['submitTextFontSubset'] ) ? $attr['submitTextFontSubset'] : '';
			$label_load_google_font 	 = isset( $attr['labelloadGoogleFonts'] ) ? $attr['labelloadGoogleFonts'] : '';
			$label_font_family      	 = isset( $attr['labelFontFamily'] ) ? $attr['labelFontFamily'] : '';
			$label_font_weight      	 = isset( $attr['labelFontWeight'] ) ? $attr['labelFontWeight'] : '';
			$label_font_subset      	 = isset( $attr['labelFontSubset'] ) ? $attr['labelFontSubset'] : '';
			$input_load_google_font 	 = isset( $attr['inputloadGoogleFonts'] ) ? $attr['inputloadGoogleFonts'] : '';
			$input_font_family      	 = isset( $attr['inputFontFamily'] ) ? $attr['inputFontFamily'] : '';
			$input_font_weight      	 = isset( $attr['inputFontWeight'] ) ? $attr['inputFontWeight'] : '';
			$input_font_subset     	 	 = isset( $attr['inputFontSubset'] ) ? $attr['inputFontSubset'] : '';

			FBFG_Helper::blocks_google_font( $submitText_load_google_font, $submitText_font_family, $submitText_font_weight, $submitText_font_subset );
			FBFG_Helper::blocks_google_font( $label_load_google_font, $label_font_family, $label_font_weight, $label_font_subset );
			FBFG_Helper::blocks_google_font( $input_load_google_font, $input_font_family, $input_font_weight, $input_font_subset );
		}
	}
}
