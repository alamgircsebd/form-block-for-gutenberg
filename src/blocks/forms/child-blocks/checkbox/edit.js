/**
 * BLOCK: Forms - Checkbox - Edit
 */

import classnames from "classnames"
import { __ } from '@wordpress/i18n';

const {
	Component,
	Fragment
} = wp.element

const {
	PanelBody,
	Button,
	ToggleControl,
	
} = wp.components
const {
	InspectorControls,
	RichText,
} = wp.blockEditor

class FBFGFormsCheckboxEdit extends Component {

	constructor() {
		super( ...arguments )
		this.state = { optionsstate:  [ { "optiontitle": __("Option Name 1" , 'form-block-for-gutenberg') } ] };
	}

	componentDidMount() {

		const { attributes, setAttributes } = this.props

		// Assigning block_id in the attribute.
		setAttributes( { block_id: this.props.clientId.substr( 0, 8 ) } )

		// Pushing Style tag for this block css.
		const $style = document.createElement( "style" )
		$style.setAttribute( "id", "fbfg-style-forms-checkbox-" + this.props.clientId.substr( 0, 8 ) )
		document.head.appendChild( $style )
		
	}

	render() {

		const { attributes, setAttributes, isSelected } = this.props

        const {
			block_id,
			checkboxRequired,
			options,
			checkboxName
		} = attributes
		const checkboxInspectorControls = () => {

			return (
				<PanelBody
					title={ __( "General" , 'form-block-for-gutenberg' ) }
					initialOpen={ true }
					className="fbfg__url-panel-body"
				>
					<ToggleControl
						label={ __( "Required" , 'form-block-for-gutenberg') }
						checked={ checkboxRequired }
						onChange={ ( value ) => setAttributes( { checkboxRequired: ! checkboxRequired } ) }
					/>
				</PanelBody>
			)
		}

		const addOption = () => {
			const newOption ={ "optiontitle": __(`Option Name ${options.length + 1}`, 'form-block-for-gutenberg'),"optionvalue": __(`Option Value ${options.length + 1}`, 'form-block-for-gutenberg') }
			options[options.length] = newOption; 
			const addnewOptions = options.map( ( item, thisIndex ) => {				
				return item
			} )

			setAttributes({ options:addnewOptions });
			this.setState({optionsstate : addnewOptions});
		};

		const changeOption = (e, index) => {			
			const editOptions = options.map( ( item, thisIndex ) => {
				if ( index === thisIndex ) {
					item = { ...item, ...e }
				}
				return item
			} )
			
			setAttributes({ options: editOptions });
			this.setState({ optionsstate : editOptions });
			
		};

		const deleteOption = index => {
			const deleteOptions = options.map( ( item, thisIndex ) => {
				if ( index === thisIndex ) {
					 options.splice(index, 1)
					item = { options }
				}
				return item
			} )
		
			this.setState({optionsstate : deleteOptions});
			setAttributes({ deleteOptions });			

		};
		
		
		const editView = options.map((option, index) => {
			
			return (
				<div className="fbfg-form-checkbox-option">
					<input												
						type="checkbox"
						name={`checkbox-${block_id}`}
						value={option.optiontitle}	
						id={option.optiontitle}		
					/>	
					<label for={option.optiontitle}></label>
					<input
						className="fbfg-inner-input-view"
						aria-label={option.optiontitle}
						onChange={e => changeOption( { optiontitle: e.target.value,optionvalue: e.target.value }, index)}
						type="text"
						value={option.optiontitle}						
					/>
					<input
						className="fbfg-inner-input-view"
						aria-label={option.optionvalue}
						onChange={e => changeOption( { optionvalue: e.target.value }, index)}
						type="text"
						value={option.optionvalue}						
					/>					
					<Button 
						className="fbfg-form-checkbox-option-delete"
        				icon="trash"
        				label="Remove" onClick={ () => deleteOption(index) }
    				/>
				</div>
			);
		});

		const CheckboxView = () => {

			return  (	
					
				options.map((option, index) => {
					var optionvalue = option.optionvalue;
					var value = optionvalue.replace(/\s+/g, '-').toLowerCase();
					return (
						<Fragment>
						<input type="checkbox" className="fbfg-forms-checkbox" id={`checkbox-${value}-${block_id}`} name={ `${checkboxName}[]` } value={value} required={checkboxRequired}  />
						<label htmlFor={`checkbox-${value}-${block_id}`}>{option.optiontitle}</label><br/>						
						</Fragment>
					);
				})
			)			
		};
		

		const isRequired = (checkboxRequired) ? __("required", 'form-block-for-gutenberg') : "";

		return (
			<Fragment>
				<InspectorControls>
					{ checkboxInspectorControls() }
				</InspectorControls>
				<div className={ classnames(
					"fbfg-forms-checkbox-wrap",
					"fbfg-forms-field-set",
					`fbfg-block-${ block_id }`,
				) }>
					{isSelected && (
					<div className="fbfg-forms-required-wrap">
						<ToggleControl
							label={ __( "Required" , 'form-block-for-gutenberg' ) }
							checked={ checkboxRequired }
							onChange={ ( value ) => setAttributes( { checkboxRequired: ! checkboxRequired } ) }
						/>
					</div>
					)}
					<RichText
						tagName="div"
						placeholder={ __( "Checkbox Title" , 'form-block-for-gutenberg') }
						value={ checkboxName }
						onChange={ ( value ) => setAttributes( { checkboxName: value } ) }
						className={`fbfg-forms-checkbox-label ${isRequired} fbfg-forms-input-label`}
						multiline={ false }
						id={ block_id }
					/>
					{isSelected && (
						<Fragment>														
							{editView}
							<div className="fbfg-forms-checkbox-controls">
								<div>
									<Button isSecondary onClick={addOption}>{ __(" + Add Option " , 'form-block-for-gutenberg') }</Button>									
								</div>								
							</div>
						</Fragment>
						)}
					
					{!isSelected && (<CheckboxView/>)}
					</div>
			</Fragment>
		)
	}
}

export default FBFGFormsCheckboxEdit