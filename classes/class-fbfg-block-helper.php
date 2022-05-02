<?php
/**
 * FBFG Block Helper.
 *
 * @package FBFG
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

if ( ! class_exists( 'FBFG_Block_Helper' ) ) {

	/**
	 * Class FBFG_Block_Helper.
	 */
	class FBFG_Block_Helper {

		/**
		 * Get Forms Block Parent CSS
		 *
		 * @since 1.0.0
		 * @param array  $attr The block attributes.
		 * @param string $id The selector ID.
		 * @return array The Widget List.
		 */
		public static function get_forms_css( $attr, $id ) {

			$defaults = FBFG_Helper::$block_list['fbfg/forms']['attributes'];

			$attr        = array_merge( $defaults, (array) $attr );
			$selectors   = array();
			$m_selectors = array();
			$t_selectors = array();
			$selectors   = array(
				' form.fbfg-forms-main-form, form.fbfg-forms-main-form .fbfg-forms-input, form.fbfg-forms-main-form textarea' => array(
					'text-align' => $attr['overallAlignment'],
				),
				' .fbfg-forms-main-form .fbfg-forms-field-set' => array(
					'margin-bottom' => FBFG_Helper::get_css_value( $attr['fieldGap'], 'px' ),
				),
				' .fbfg-forms-main-form .fbfg-forms-input-label' => array(
					'color'     => $attr['labelColor'],
					'font-size' => FBFG_Helper::get_css_value( $attr['labelFontSize'], $attr['labelFontSizeType'] ),
				),
				' .fbfg-forms-success-message' => array(
					'border'           => FBFG_Helper::get_css_value( $attr['successMessageBorderWidth'], 'px' ) . ' ' . $attr['successMessageBorderStyle'] . ' ' . $attr['successMessageBorderColor'],
					'background-color' => $attr['successMessageBGColor'],
					'color'            => $attr['successMessageTextColor'],
				),
				' .fbfg-forms-failed-message'  => array(
					'border'           => FBFG_Helper::get_css_value( $attr['failedMessageBorderWidth'], 'px' ) . ' ' . $attr['failedMessageBorderStyle'] . ' ' . $attr['failedMessageBorderColor'],
					'background-color' => $attr['failedMessageBGColor'],
					'color'            => $attr['failedMessageTextColor'],
				),
				' .fbfg-forms-main-form .fbfg-forms-main-submit-button-wrap' => array(
					'text-align' => $attr['buttonAlign'],

				),
				' .fbfg-forms-main-form .fbfg-forms-input:focus' => array(
					'outline'      => ' none !important',
					'border-color' => $attr['inputactiveColor'],
				),
				' .fbfg-forms-main-form .fbfg-forms-main-submit-button' => array(
					'font-size'        => FBFG_Helper::get_css_value( $attr['submitTextFontSize'], $attr['submitTextFontSizeType'] ),
					'color'            => $attr['submitColor'],
					'background-color' => $attr['submitBgColor'],
					'border'           => FBFG_Helper::get_css_value( $attr['submitborderWidth'], 'px' ) . ' ' . $attr['submitborderStyle'] . ' ' . $attr['submitborderColor'],
					'border-radius'    => FBFG_Helper::get_css_value( $attr['submitborderRadius'], 'px' ),
					'padding'          => FBFG_Helper::get_css_value( $attr['vPaddingSubmit'], 'px' ) . ' ' . FBFG_Helper::get_css_value( $attr['hPaddingSubmit'], 'px' ),
				),
				' .fbfg-forms-main-form .fbfg-forms-main-submit-button:hover' => array(
					'color'            => $attr['submitColorHover'],
					'background-color' => $attr['submitBgColorHover'],
					'border-color'     => $attr['submitborderHoverColor'],
				),

			);

			// Checkbox Field css.
			$selectors[' .fbfg-forms-checkbox-wrap input[type=checkbox]:checked + label:before'] = array(
				'color'     => $attr['inputColor'],
				'font-size' => 'calc(' . $attr['toggleSize'] . 'px / 1.2)',
			);
			$selectors[' .fbfg-forms-checkbox-wrap input[type=checkbox] + label:before']         = array(
				'background-color' => $attr['bgColor'],
				'width'            => FBFG_Helper::get_css_value( $attr['toggleSize'], 'px' ),
				'height'           => FBFG_Helper::get_css_value( $attr['toggleSize'], 'px' ),
			);
			$selectors[' .fbfg-forms-checkbox-wrap > label']                                     = array(
				'color' => $attr['inputColor'],
			);

			// Radio Button Field css.
			$selectors[' .fbfg-forms-radio-wrap input[type=radio]:checked + label:before'] = array(
				'background-color' => $attr['inputColor'],
				'font-size'        => 'calc(' . $attr['toggleSize'] . 'px / 1.2)',
			);
			$selectors[' .fbfg-forms-radio-wrap input[type=radio] + label:before']         = array(
				'background-color' => $attr['bgColor'],
				'width'            => FBFG_Helper::get_css_value( $attr['toggleSize'], 'px' ),
				'height'           => FBFG_Helper::get_css_value( $attr['toggleSize'], 'px' ),
			);
			$selectors[' .fbfg-forms-radio-wrap > label']                                  = array(
				'color' => $attr['inputColor'],
			);

			// Toggle Field css.
			$selectors[' .fbfg-slider']                              = array(
				'background-color' => $attr['bgColor'],
			);
			$selectors[' .fbfg-forms-main-form .fbfg-switch']        = array(
				'width'  => FBFG_Helper::get_css_value( '50' + $attr['toggleWidthSize'] + $attr['inputborderWidth'], 'px' ),
				'height' => FBFG_Helper::get_css_value( '25' + $attr['toggleHeightSize'] + $attr['inputborderWidth'], 'px' ),
			);
			$selectors[' .fbfg-forms-main-form .fbfg-slider:before'] = array(
				'width'  => FBFG_Helper::get_css_value( '20' + $attr['toggleWidthSize'] - $attr['inputborderWidth'] / 2, 'px' ),
				'height' => FBFG_Helper::get_css_value( '20' + $attr['toggleHeightSize'] - $attr['inputborderWidth'], 'px' ),
			);
			$selectors[' .fbfg-switch input:checked + .fbfg-slider'] = array(
				'background-color' => $attr['toggleActiveColor'],
			);
			$selectors[' .fbfg-switch input:focus + .fbfg-slider']   = array(
				'box-shadow' => '0 0 1px' . $attr['toggleActiveColor'],
			);

			// Accept Field css.
			$selectors[' .fbfg-forms-accept-wrap input[type=checkbox]:checked + label:before'] = array(
				'color'     => $attr['inputColor'],
				'font-size' => 'calc(' . $attr['toggleSize'] . 'px / 1.2)',
			);
			$selectors[' .fbfg-forms-accept-wrap input[type=checkbox] + label:before']         = array(
				'background-color' => $attr['bgColor'],
				'width'            => FBFG_Helper::get_css_value( $attr['toggleSize'], 'px' ),
				'height'           => FBFG_Helper::get_css_value( $attr['toggleSize'], 'px' ),
			);
			$selectors[' .fbfg-forms-accept-wrap > label']                                     = array(
				'color' => $attr['inputColor'],
			);

			if ( 'boxed' === $attr['formStyle'] ) {
				$selectors[' .fbfg-forms-main-form  .fbfg-forms-checkbox-wrap input[type=checkbox] + label:before'] = array(
					'border'        => FBFG_Helper::get_css_value( $attr['inputborderWidth'], 'px' ) . ' ' . $attr['inputborderStyle'] . ' ' . $attr['inputborderColor'],
					'border-radius' => FBFG_Helper::get_css_value( $attr['inputborderRadius'], 'px' ),
				);
				$selectors[' .fbfg-forms-main-form .fbfg-forms-checkbox-wrap > input']                              = array(
					'color' => $attr['inputColor'],
				);
				$selectors[' .fbfg-forms-main-form  .fbfg-forms-radio-wrap input[type=radio] + label:before']       = array(
					'border' => FBFG_Helper::get_css_value( $attr['inputborderWidth'], 'px' ) . ' ' . $attr['inputborderStyle'] . ' ' . $attr['inputborderColor'],
				);
				$selectors[' .fbfg-forms-main-form .fbfg-forms-radio-wrap > input']                                 = array(
					'color' => $attr['inputColor'],
				);
				$selectors[' .fbfg-forms-main-form .fbfg-slider'] = array(
					'border' => FBFG_Helper::get_css_value( $attr['inputborderWidth'], 'px' ) . ' ' . $attr['inputborderStyle'] . ' ' . $attr['inputborderColor'],
				);
				$selectors[' .fbfg-forms-main-form  .fbfg-forms-accept-wrap input[type=checkbox] + label:before'] = array(
					'border'        => FBFG_Helper::get_css_value( $attr['inputborderWidth'], 'px' ) . ' ' . $attr['inputborderStyle'] . ' ' . $attr['inputborderColor'],
					'border-radius' => FBFG_Helper::get_css_value( $attr['inputborderRadius'], 'px' ),
				);
				$selectors[' .fbfg-forms-main-form .fbfg-forms-accept-wrap > input']                              = array(
					'color' => $attr['inputColor'],
				);

				$selectors[' .fbfg-forms-main-form  .fbfg-forms-input'] = array(
					'background-color' => $attr['bgColor'],
					'border'           => FBFG_Helper::get_css_value( $attr['inputborderWidth'], 'px' ) . ' ' . $attr['inputborderStyle'] . ' ' . $attr['inputborderColor'],
					'border-radius'    => FBFG_Helper::get_css_value( $attr['inputborderRadius'], 'px' ),
					'color'            => $attr['inputColor'],
					'padding'          => FBFG_Helper::get_css_value( $attr['vPaddingField'], 'px' ) . ' ' . FBFG_Helper::get_css_value( $attr['hPaddingField'], 'px' ),

				);
				$selectors[' .fbfg-forms-main-form  .fbfg-forms-input.fbfg-form-phone-country'] = array(
					'padding' => FBFG_Helper::get_css_value( $attr['vPaddingField'] - 1, 'px' ) . ' ' . FBFG_Helper::get_css_value( $attr['hPaddingField'], 'px' ),
				);

				$selectors[' .fbfg-forms-input:hover']        = array(
					'border-color' => $attr['inputborderHoverColor'],
				);
				$selectors[' .fbfg-forms-input::placeholder'] = array(
					'color' => $attr['inputplaceholderColor'],
				);
			}

			if ( 'underlined' === $attr['formStyle'] ) {
				$selectors[' .fbfg-forms-main-form  .fbfg-forms-accept-wrap input[type=checkbox] + label:before']   = array(
					'border-bottom' => FBFG_Helper::get_css_value( $attr['inputborderWidth'], 'px' ) . ' ' . $attr['inputborderStyle'] . ' ' . $attr['inputborderColor'],
				);
				$selectors[' .fbfg-forms-main-form  .fbfg-forms-checkbox-wrap input[type=checkbox] + label:before'] = array(
					'border-bottom' => FBFG_Helper::get_css_value( $attr['inputborderWidth'], 'px' ) . ' ' . $attr['inputborderStyle'] . ' ' . $attr['inputborderColor'],
				);
				$selectors[' .fbfg-forms-main-form .fbfg-slider'] = array(
					'border-bottom' => FBFG_Helper::get_css_value( $attr['inputborderWidth'], 'px' ) . ' ' . $attr['inputborderStyle'] . ' ' . $attr['inputborderColor'],
				);
				$selectors[' .fbfg-forms-main-form  .fbfg-forms-radio-wrap input[type=radio] + label:before'] = array(
					'border-bottom' => FBFG_Helper::get_css_value( $attr['inputborderWidth'], 'px' ) . ' ' . $attr['inputborderStyle'] . ' ' . $attr['inputborderColor'],
				);
				$selectors[' .fbfg-forms-main-form  .fbfg-forms-input']                                       = array(
					'border'        => 0,
					'outline'       => 0,
					'border-radius' => 0,
					'background'    => 'transparent',
					'border-bottom' => FBFG_Helper::get_css_value( $attr['inputborderWidth'], 'px' ) . ' ' . $attr['inputborderStyle'] . ' ' . $attr['inputborderColor'],
					'color'         => $attr['inputColor'],
					'padding'       => FBFG_Helper::get_css_value( $attr['vPaddingField'], 'px' ) . ' ' . FBFG_Helper::get_css_value( $attr['hPaddingField'], 'px' ),

				);
				$selectors[' .fbfg-forms-main-form  .fbfg-forms-input.fbfg-form-phone-country'] = array(
					'padding' => FBFG_Helper::get_css_value( $attr['vPaddingField'] - 1, 'px' ) . ' ' . FBFG_Helper::get_css_value( $attr['hPaddingField'], 'px' ),
				);

				$selectors[' .fbfg-forms-input:hover']        = array(
					'border-color' => $attr['inputborderHoverColor'],
				);
				$selectors[' .fbfg-forms-input::placeholder'] = array(
					'color' => $attr['inputplaceholderColor'],
				);
			}

			$combined_selectors = array(
				'desktop' => $selectors,
				'tablet'  => $t_selectors,
				'mobile'  => $m_selectors,
			);

			$combined_selectors = FBFG_Helper::get_typography_css( $attr, 'submitText', ' .fbfg-forms-main-form .fbfg-forms-main-submit-button', $combined_selectors );

			$combined_selectors = FBFG_Helper::get_typography_css( $attr, 'label', ' .fbfg-forms-main-form .fbfg-forms-input-label', $combined_selectors );

			$combined_selectors = FBFG_Helper::get_typography_css( $attr, 'input', ' .fbfg-forms-main-form  .fbfg-forms-input::placeholder', $combined_selectors );

			$combined_selectors = FBFG_Helper::get_typography_css( $attr, 'input', ' .fbfg-forms-main-form  .fbfg-forms-input', $combined_selectors );

			return FBFG_Helper::generate_all_css( $combined_selectors, '.fbfg-block-' . $id );
		}
		/**
		 * Get Condition block CSS.
		 *
		 * @since 1.0.0
		 */
		public static function get_condition_block_css() {
			return '@media (min-width: 1025px){body .fbfg-hide-desktop.fbfg-google-map__wrap,body .fbfg-hide-desktop{display:none}}@media (min-width: 768px) and (max-width: 1024px){body .fbfg-hide-tab.fbfg-google-map__wrap,body .fbfg-hide-tab{display:none}}@media (max-width: 767px){body .fbfg-hide-mob.fbfg-google-map__wrap,body .fbfg-hide-mob{display:none}}';
		}
	}
}
