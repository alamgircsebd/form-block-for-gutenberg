/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from "@Controls/generateCSS"
import generateCSSUnit from "@Controls/generateCSSUnit"

function styling( props ) {

    const {
        block_id,
        buttonAlign,
        submitColor,
        submitColorHover,
        submitBgColor,
        submitBgColorHover,
        toggleWidthSize,
        toggleHeightSize,
        submitborderStyle,
        submitborderWidth,
        submitborderRadius,
        submitborderColor,
        submitborderHoverColor,
        vPaddingSubmit,
        hPaddingSubmit,
        submitTextFontFamily,
        submitTextFontWeight,
        submitTextFontSubset,
        submitTextFontSize,
        submitTextFontSizeType,
        submitTextFontSizeTablet,
        submitTextFontSizeMobile,
        submitTextLineHeightType,
        submitTextLineHeight,
        submitTextLineHeightTablet,
        submitTextLineHeightMobile,
        labelloadGoogleFonts,
        labelFontFamily,
        labelFontWeight,
        labelFontSubset,
        labelFontSize,
        labelFontSizeType,
        labelFontSizeTablet,
        labelFontSizeMobile,
        labelLineHeightType,
        labelLineHeight,
        labelLineHeightTablet,
        labelLineHeightMobile,
        inputloadGoogleFonts,
        inputFontFamily,
        inputFontWeight,
        inputFontSubset,
        inputFontSize,
        inputFontSizeType,
        inputFontSizeTablet,
        inputFontSizeMobile,
        inputLineHeightType,
        inputLineHeight,
        inputLineHeightTablet,
        inputLineHeightMobile,
        toggleActiveColor,
        labelColor,
        inputColor,
        bgColor,
        inputplaceholderColor,
        inputactiveColor,
        inputborderStyle,
        inputborderWidth,
        inputborderRadius,
        inputborderColor,
        inputborderHoverColor,
        vPaddingField,
        hPaddingField,
        fieldGap,
        formStyle,
        overallAlignment,
        toggleSize
    } = props.attributes

    var selectors = {}
    var tablet_selectors = {}
    var mobile_selectors = {}
    
    selectors = {
        
        " form.fbfg-forms-main-form, form.fbfg-forms-main-form .fbfg-forms-input, form.fbfg-forms-main-form textarea" : {
            'text-align' : overallAlignment
        },

        " .fbfg-forms-main-form .fbfg-forms-field-set" : {
            'margin-bottom' : generateCSSUnit( fieldGap, "px" ),
        },
        " .fbfg-forms-main-form .fbfg-forms-input-label" : {            
            "font-size" : generateCSSUnit( labelFontSize, labelFontSizeType ),
            "line-height" : generateCSSUnit( labelLineHeight, labelLineHeightType ),
            "font-family": labelFontFamily,
            "font-weight": labelFontWeight,
            'color' : labelColor,            
        },
        " .fbfg-forms-main-form  .fbfg-forms-input::placeholder" : {            
            "font-size" : generateCSSUnit( inputFontSize, inputFontSizeType ),
			"line-height" : generateCSSUnit( inputLineHeight, inputLineHeightType ),
			"font-family": inputFontFamily,
            "font-weight": inputFontWeight,
            'color' : inputplaceholderColor,          
            
        },
        " .fbfg-forms-main-form input" : {            
            "font-size" : generateCSSUnit( inputFontSize, inputFontSizeType ),
			"line-height" : generateCSSUnit( inputLineHeight, inputLineHeightType ),
			"font-family": inputFontFamily,
            "font-weight": inputFontWeight,
            'color' : inputplaceholderColor,            
        },
        " .fbfg-forms-main-form select" : {            
            "font-size" : generateCSSUnit( inputFontSize, inputFontSizeType ),
			"line-height" : generateCSSUnit( inputLineHeight, inputLineHeightType ),
			"font-family": inputFontFamily,
            "font-weight": inputFontWeight,
            'color' : inputplaceholderColor,            
        },
        ' .fbfg-forms-main-form .fbfg-forms-input:focus': {
            'outline' : ' none !important',
            'border'  : '2px solid ' + inputactiveColor,
        },
        
        " .fbfg-forms-main-form .fbfg-forms-main-submit-button-wrap" : {
            'text-align' : buttonAlign
        },
        " .fbfg-forms-main-form .fbfg-forms-main-submit-button" : {
            'color' : submitColor,
            "font-size" : generateCSSUnit( submitTextFontSize, submitTextFontSizeType ),
			"line-height" : generateCSSUnit( submitTextLineHeight, submitTextLineHeightType ),
			"font-family": submitTextFontFamily,
			"font-weight": submitTextFontWeight,
            'background-color' : submitBgColor,
            'border' : generateCSSUnit( submitborderWidth, "px" ) + " " + submitborderStyle + " " + submitborderColor,
            'border-radius' : generateCSSUnit( submitborderRadius, "px" ),
            'padding' : generateCSSUnit( vPaddingSubmit, "px" ) + " " + generateCSSUnit( hPaddingSubmit, "px" ),
        },
        " .fbfg-forms-main-form .fbfg-forms-main-submit-button:hover" : {
            'color' : submitColorHover,
            'background-color' : submitBgColorHover,
            'border-color' : submitborderHoverColor,
        },  
        " .fbfg-switch ": {
            'height' : generateCSSUnit( 25  + toggleHeightSize + inputborderWidth, "px" ),
            'width' : generateCSSUnit( 50 + toggleWidthSize + inputborderWidth, "px" )
        }, 
        " .fbfg-switch input:checked + .fbfg-slider" : {
            'background-color' : toggleActiveColor
        },
        " .fbfg-switch input:focus + .fbfg-slider" : {
            "box-shadow": "0 0 1px" + toggleActiveColor
        },     
        " .fbfg-slider:before ": {
            'height' : generateCSSUnit( 20 + toggleHeightSize - inputborderWidth, "px" ),
            'width' : generateCSSUnit( 20 + toggleWidthSize - inputborderWidth/2, "px")
        },  
        " .fbfg-switch input:checked + .fbfg-slider:before ": {
            'transform' : 'translateX('+ generateCSSUnit( 26 + toggleWidthSize , "px" )/2+")",
        },
        ' .fbfg-forms-radio-wrap input[type=radio]:checked + label:before' :{
            'background-color'         : inputColor,
            'font-size' : 'calc(' + toggleSize + 'px / 1.2 )',	
        },
        ' .fbfg-forms-radio-wrap input[type=radio] + label:before'        :{
            'background-color' : bgColor,
            'width'      : generateCSSUnit( toggleSize, 'px' ),
            'height'     : generateCSSUnit( toggleSize, 'px' ),
        },
        ' .fbfg-forms-radio-wrap > label'        :{
            'color'         : inputColor,
        },
        ' .fbfg-forms-checkbox-wrap input[type=checkbox]:checked + label:before' :{
            'color'         : inputColor,
            'font-size' : 'calc(' + toggleSize + 'px / 1.2 )',	
        },
        ' .fbfg-forms-checkbox-wrap input[type=checkbox] + label:before'        :{
            'background-color' : bgColor,
            'border-radius' : generateCSSUnit( inputborderRadius, "px" ),
            'width'      : generateCSSUnit( toggleSize, 'px' ),
            'height'     : generateCSSUnit( toggleSize, 'px' ),
        },
        ' .fbfg-forms-checkbox-wrap > label'        :{
            'color'         : inputColor,
        },
        ' .fbfg-forms-accept-wrap input[type=checkbox]:checked + label:before' :{
            'color'         : inputColor,
            'font-size' : 'calc(' + toggleSize + 'px / 1.2 )',	
        },
        ' .fbfg-forms-accept-wrap input[type=checkbox] + label:before'        :{
            'border-radius' : generateCSSUnit( inputborderRadius, "px" ),
            'background-color' : bgColor,
            'width'      : generateCSSUnit( toggleSize, 'px' ),
            'height'     : generateCSSUnit( toggleSize, 'px' ),
        },
        ' .fbfg-forms-accept-wrap > label'        :{
            'color'         : inputColor,
        },
    }
    
    if ( "boxed" == formStyle ) {		
        selectors[" .fbfg-forms-main-form  .fbfg-forms-input"] = {
            'border' : generateCSSUnit( inputborderWidth, "px" ) + " " + inputborderStyle + " " + inputborderColor,
            'border-radius' : generateCSSUnit( inputborderRadius, "px" ),
            'background-color' : bgColor,
            'color' : inputColor,
            'padding' : generateCSSUnit( vPaddingField, "px" ) + " " + generateCSSUnit( hPaddingField, "px" ),
        }
        selectors[" .fbfg-forms-main-form .fbfg-forms-checkbox-wrap input[type=checkbox] + label:before"] = {
            'border' : generateCSSUnit( inputborderWidth, "px" ) + " " + inputborderStyle + " " + inputborderColor,
            'border-radius' : generateCSSUnit( inputborderRadius, "px" ),
        }
        selectors[" .fbfg-forms-main-form .fbfg-forms-accept-wrap input[type=checkbox] + label:before"] = {
            'border' : generateCSSUnit( inputborderWidth, "px" ) + " " + inputborderStyle + " " + inputborderColor,
            'border-radius' : generateCSSUnit( inputborderRadius, "px" ),
        }
        selectors[" .fbfg-forms-main-form .fbfg-forms-radio-wrap input[type=radio] + label:before"] = {
            'border' : generateCSSUnit( inputborderWidth, "px" ) + " " + inputborderStyle + " " + inputborderColor,
        }
        selectors[" .fbfg-slider "] = {
            'border' : generateCSSUnit( inputborderWidth, "px" ) + " " + inputborderStyle + " " + inputborderColor,
            'background-color' : bgColor,
        }
        selectors[" .fbfg-forms-main-form  .fbfg-forms-input:hover"] = {
            'border-color' : inputborderHoverColor,            
        }
        
	}else if( "underlined" == formStyle ){
        selectors[" .fbfg-forms-main-form  .fbfg-forms-input"] = {
            'border': 0,
            'outline': 0,
            'border-radius' :0,
            'background': 'transparent',
            'border-bottom':  generateCSSUnit( inputborderWidth, "px" ) + " " + inputborderStyle + " " + inputborderColor,
            'color' : inputColor,
            'padding' : generateCSSUnit( vPaddingField, "px" ) + " " + generateCSSUnit( hPaddingField, "px" ),
        }
        selectors[" .fbfg-forms-main-form .fbfg-forms-checkbox-wrap input[type=checkbox] + label:before"] = {
           'border-bottom':  generateCSSUnit( inputborderWidth, "px" ) + " " + inputborderStyle + " " + inputborderColor,
         }
        selectors[" .fbfg-forms-main-form .fbfg-forms-accept-wrap input[type=checkbox] + label:before"] = {
           'border-bottom':  generateCSSUnit( inputborderWidth, "px" ) + " " + inputborderStyle + " " + inputborderColor,
        }
        selectors[" .fbfg-forms-main-form .fbfg-forms-radio-wrap input[type=radio] + label:before"] = {
           'border-bottom':  generateCSSUnit( inputborderWidth, "px" ) + " " + inputborderStyle + " " + inputborderColor,
        }
        selectors[" .fbfg-slider "] = {
            'background-color' : bgColor,
            'border-bottom':  generateCSSUnit( inputborderWidth, "px" ) + " " + inputborderStyle + " " + inputborderColor,
        }
        selectors[" .fbfg-forms-main-form  .fbfg-forms-input:hover"] = {
            'border-color' : inputborderHoverColor,            
        }
       
    }
   
    tablet_selectors = {
        " .fbfg-forms-main-form .fbfg-forms-main-submit-button" : {            
            "font-size" : generateCSSUnit( submitTextFontSizeTablet, submitTextFontSizeType ),
			"line-height" : generateCSSUnit( submitTextLineHeightTablet, submitTextLineHeightType ),			
        },
        " .fbfg-forms-main-form .fbfg-forms-input-label" : {            
            "font-size" : generateCSSUnit( labelFontSizeTablet, labelFontSizeType ),
			"line-height" : generateCSSUnit( labelLineHeightTablet, labelLineHeightType ),			            
        },
        " .fbfg-forms-main-form  .fbfg-forms-input::placeholder" : {         
            "font-size" : generateCSSUnit( inputFontSizeTablet, inputFontSizeType ),
			"line-height" : generateCSSUnit( inputLineHeightTablet, inputLineHeightType ),			
        },
    }

    mobile_selectors = {
        " .fbfg-forms-main-form .fbfg-forms-main-submit-button" : {            
            "font-size" : generateCSSUnit( submitTextFontSizeMobile, submitTextFontSizeType ),
			"line-height" : generateCSSUnit( submitTextLineHeightMobile, submitTextLineHeightType ),			
        },
        " .fbfg-forms-main-form .fbfg-forms-input-label" : {            
            "font-size" : generateCSSUnit( labelFontSizeMobile, labelFontSizeType ),
			"line-height" : generateCSSUnit( labelLineHeightMobile, labelLineHeightType ),			            
        },
        " .fbfg-forms-main-form  .fbfg-forms-input::placeholder" : {         
            "font-size" : generateCSSUnit( inputFontSizeMobile, inputFontSizeType ),
			"line-height" : generateCSSUnit( inputLineHeightMobile, inputLineHeightType ),			
        },
    }

    var styling_css = '';
    var id = `.fbfg-block-${ block_id }`

    styling_css = generateCSS( selectors, id )
    
    styling_css += generateCSS( tablet_selectors, id, true, "tablet" )

	styling_css += generateCSS( mobile_selectors, id, true, "mobile" )

    return styling_css
}

export default styling
