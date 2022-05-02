/**
 * BLOCK: Forms - Date - Edit
 */

import classnames from "classnames"

import { __ } from '@wordpress/i18n';

const {
	Component,
	Fragment
} = wp.element

const {
	PanelBody,
	SelectControl,
	ToggleControl
} = wp.components
const {
	InspectorControls,
	RichText,
} = wp.blockEditor

class FBFGFormsDateEdit extends Component {

	constructor() {
		super( ...arguments )
	}

	componentDidMount() {

		const { setAttributes } = this.props

		// Assigning block_id in the attribute.
		setAttributes( { block_id: this.props.clientId.substr( 0, 8 ) } )

		// Pushing Style tag for this block css.
		const $style = document.createElement( "style" )
		$style.setAttribute( "id", "fbfg-style-forms-date-" + this.props.clientId.substr( 0, 8 ) )
		document.head.appendChild( $style )
		
	}
	
	render() {

		const { attributes, setAttributes,isSelected } = this.props

        const {
			block_id,
			dateRequired,
			name,
			additonalVal,
			minYear,
			minMonth,
			minDay,
			maxYear,
			maxMonth,
			maxDay,			
		} = attributes

		var validation_min_value = "";
		var validation_max_value = "";

		if( minYear && minMonth && minDay ){
			validation_min_value = minYear+"-"+minMonth+"-"+minDay;			
		}

		if( maxYear && maxMonth && maxDay ){	
			validation_max_value = maxYear+"-"+maxMonth+"-"+maxDay;	
		}

		var invalidDateErrorMsg = "";
		var start = Date.parse(validation_min_value);
		var end = Date.parse(validation_max_value);

		if (start > end) {
			invalidDateErrorMsg = <p className="fbfg-forms-date-invalidate">Invalid date range selected</p>			
		}

		

		var YearDefaults = [{ label: 'YYYY', value: '' }];

		for ( var i = 1930; i <= 2030; i++ ) {
			YearDefaults.push({ label: `${i}`, value: `${i}` });
		}	
				 
		
		var MonthsDefaults = [{ label: 'MM', value: '' }];

		for ( var i = 1; i <= 12; i++ ) {
			var twoDigitMonth = ( i < 10 ) ? `0${i}` : `${i}` ;
			MonthsDefaults.push({ label: twoDigitMonth, value: twoDigitMonth });
		}
		
		var dateDefaults = [{ label: 'DD', value: '' }];

		for ( var i = 1; i <= 31; i++ ) {
			var twoDigitDate = ( i < 10 ) ? `0${i}` : `${i}` ;
			dateDefaults.push({ label: twoDigitDate, value: twoDigitDate });
		}
		

		const dateInspectorControls = () => {

			return (
				<PanelBody
					title={ __( "General" , 'form-block-for-gutenberg') }
					initialOpen={ true }
					className="fbfg__url-panel-body"
				>
					<ToggleControl
						label={ __( "Required" , 'form-block-for-gutenberg') }
						checked={ dateRequired }
						onChange={ ( value ) => setAttributes( { dateRequired: ! dateRequired } ) }
					/>
					<ToggleControl
						label={ __( "Additional Validation" , 'form-block-for-gutenberg' ) }
						checked={ additonalVal }
						onChange={ ( value ) => setAttributes( { additonalVal: ! additonalVal } ) }
						help={ __( "Helps to set range of calender" , 'form-block-for-gutenberg')}
					/>
					{ additonalVal && (
						<Fragment>
							<p>From :</p>
							<SelectControl
								className={"minDate"}		
								label="Year"
								value={ minYear }
								options={ YearDefaults }
								onChange={ ( minYear ) => setAttributes( { minYear } ) }
							/>
							<b> - </b>
							<SelectControl
								className={"minDate"}		
								label="Month"
								value={ minMonth }
								options={ MonthsDefaults }
								onChange={ ( minMonth ) => setAttributes( { minMonth } ) }
							/>
							<b> - </b>							
							<SelectControl
								className={"minDate"}		
								label="Date"
								value={ minDay }
								options={ dateDefaults }
								onChange={ ( minDay ) => setAttributes( { minDay } ) }
							/>
							<p>To :</p>
							<SelectControl
								className={"maxDate"}		
								label="Year"
								value={ maxYear }
								options={ YearDefaults }
								onChange={ ( maxYear ) => setAttributes( { maxYear } ) }
							/>
							<b> - </b>
							<SelectControl
								className={"maxDate"}		
								label="Month"
								value={ maxMonth }
								options={ MonthsDefaults }
								onChange={ ( maxMonth ) => setAttributes( { maxMonth } ) }
							/>
							<b> - </b>							
							<SelectControl
								className={"maxDate"}		
								label="Date"
								value={ maxDay }
								options={ dateDefaults }
								onChange={ ( maxDay ) => setAttributes( { maxDay } ) }
							/>
							{ invalidDateErrorMsg }
						</Fragment>
					)}				
				</PanelBody>
			)
		}
		
	

	var date_html = "";
	if( additonalVal ){
		date_html = <input type="date" className="fbfg-forms-date-input fbfg-forms-input" required={ dateRequired } min={validation_min_value} max={validation_max_value} name={ block_id }/>		
	}else{
		date_html = <input type="date" className="fbfg-forms-date-input fbfg-forms-input" required={ dateRequired } name={ block_id }/>
	}

	 
	const isRequired = (dateRequired) ? __("required", 'form-block-for-gutenberg') : "";
	
		return (
			<Fragment>
				<InspectorControls>
					{ dateInspectorControls() }					
				</InspectorControls>
				<div className={ classnames(
					"fbfg-forms-date-wrap",
					"fbfg-forms-field-set",
					`fbfg-block-${ block_id }`,
					
				) }>
					{isSelected && (
						<div className="fbfg-forms-required-wrap">
							<ToggleControl
								label={ __( "Required" , 'form-block-for-gutenberg') }
								checked={ dateRequired }
								onChange={ ( value ) => setAttributes( { dateRequired: ! dateRequired } ) }
							/>
						</div>
					)}
					<RichText
						tagName="div"
						placeholder={ __( "Date" , 'form-block-for-gutenberg') }
						value={ name }
						onChange={ ( value ) => setAttributes( { name: value } ) }						
						className={`fbfg-forms-date-label ${isRequired} fbfg-forms-input-label`}
						multiline={ false }
						id={ block_id }
					/>	
					{date_html}									
				</div>
			</Fragment>
		)
	}
}

export default FBFGFormsDateEdit
