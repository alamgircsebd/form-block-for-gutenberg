/**
 * BLOCK: Forms - Toggle - Edit
 */

import classnames from "classnames"
import { __ } from '@wordpress/i18n';

const {
	Component,
	Fragment
} = wp.element

const {
	PanelBody,
	ToggleControl,
	SelectControl,
	TextControl
} = wp.components
const {
	InspectorControls,
	RichText,
	ColorPalette       
} = wp.blockEditor

class FBFGFormsToggleEdit extends Component {

	constructor() {
		super( ...arguments )
	}

	componentDidMount() {

		const { attributes, setAttributes } = this.props

		// Assigning block_id in the attribute.
		setAttributes( { block_id: this.props.clientId.substr( 0, 8 ) } )
		
	}
	
	
	render() {
		
		const { attributes, setAttributes,isSelected } = this.props
		
        const {
			block_id,
			toggleRequired,
			name,
			toggleStatus,
			layout,
			trueValue,
			falseValue
		} = attributes
		
		const toggleInspectorControls = () => {
			
			return (
				<PanelBody
				title={ __( "General" , 'form-block-for-gutenberg') }
				initialOpen={ true }
				className="fbfg__url-panel-body"
				>
				<p className="fbfg-settings-notice">{ __( "Leaving the toggle in On/Off state will set it as a default value on page load for the user." , 'form-block-for-gutenberg') }</p>

				<ToggleControl
					label={ __( "Required" , 'form-block-for-gutenberg') }
					checked={ toggleRequired }
					onChange={ ( value ) => setAttributes( { toggleRequired: ! toggleRequired } ) }
				/>
				<ToggleControl
					label={ __( "Default State" , 'form-block-for-gutenberg') }
					checked={ toggleStatus }
					help={ toggleStatus ? __('ON State', 'form-block-for-gutenberg') : __('OFF State', 'form-block-for-gutenberg') }
					onChange={ ( value ) => setAttributes( { toggleStatus: ! toggleStatus } ) }
				/>
				<TextControl
					label={__("True State", 'form-block-for-gutenberg')}
					value={ trueValue }
					onChange={ ( value ) => setAttributes( { trueValue: value } ) }					
				/>
				<TextControl
					label={__("False State" , 'form-block-for-gutenberg')}
					value={ falseValue }
					onChange={ ( value ) => setAttributes( { falseValue: value } ) }					
				/>
				<SelectControl
					label={ __( "Layout" , 'form-block-for-gutenberg') }
					value={ layout }
					onChange={ ( value ) => setAttributes( { layout: value } ) }
					options={ [
						{ value: "", label: __( "Square" , 'form-block-for-gutenberg') },
						{ value: "round", label: __( "Round" , 'form-block-for-gutenberg') },								
					] }
				/>
				</PanelBody>
			)
		}
		
		const isRequired = (toggleRequired) ? __("required",'form-block-for-gutenberg') : "";

		return (
			<Fragment>
				<InspectorControls>
					{ toggleInspectorControls() }
				</InspectorControls>
				<div className={ classnames(
					"fbfg-forms-toggle-wrap",
					"fbfg-forms-field-set",
					`fbfg-block-${ block_id }`,
					
					) }>
					{isSelected && (
						<div className="fbfg-forms-required-wrap">
							<ToggleControl
								label={ __( "Required", 'form-block-for-gutenberg') }
								checked={ toggleRequired }
								onChange={ ( value ) => setAttributes( { toggleRequired: ! toggleRequired } ) }
							/>														
						</div>
					)}
					<RichText
						tagName="div"
						placeholder={ __( "Name" , 'form-block-for-gutenberg' ) }
						value={ name }
						onChange={ ( value ) => setAttributes( { name: value } ) }
						className={`fbfg-forms-toggle-label ${isRequired} fbfg-forms-input-label`}
						multiline={ false }
						id={ block_id }
					/>
					<label className="fbfg-switch">						
						<input 
							type="hidden"
							className="fbfg-forms-toggle-input"
							checked={toggleStatus}
							data-truestate  = {trueValue}
							data-falsestate = {falseValue}
							value={ toggleStatus ? trueValue : falseValue }
							required={toggleRequired}	
							name={ block_id }				
						/>
						<input 
							type="checkbox"
							className="fbfg-forms-toggle-input"
							readOnly
							checked={toggleStatus}
							data-truestate  = {trueValue}
							data-falsestate = {falseValue}
							value={ toggleStatus ? trueValue : falseValue }
							required={toggleRequired}	
							name={ block_id }				
						/>
						<span className={`fbfg-slider ${layout}`}></span>
					</label>	
				</div>
			</Fragment>
		)
	}
}

export default FBFGFormsToggleEdit
