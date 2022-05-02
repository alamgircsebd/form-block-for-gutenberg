/**
 * BLOCK: Forms - Radio - Edit
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

class FBFGFormsRadioEdit extends Component {

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
		$style.setAttribute( "id", "fbfg-style-forms-radio-" + this.props.clientId.substr( 0, 8 ) )
		document.head.appendChild( $style )
		
	}
	
	render() {

		const { attributes, setAttributes, isSelected } = this.props

        const {
			block_id,
			radioRequired,
			options,
			radioName
		} = attributes
		const radioInspectorControls = () => {

			return (
				<PanelBody
					title={ __( "General" , 'form-block-for-gutenberg') }
					initialOpen={ true }
					className="fbfg__url-panel-body"
				>
					<ToggleControl
						label={ __( "Required" , 'form-block-for-gutenberg') }
						checked={ radioRequired }
						onChange={ ( value ) => setAttributes( { radioRequired: ! radioRequired } ) }
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
				<div className="fbfg-form-radio-option">
					<input												
						type="radio"
						name={`radio-${block_id}`}
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
						className="fbfg-form-radio-option-delete"
        				icon="trash"
        				label="Remove" onClick={ () => deleteOption(index) }
    				/>
				</div>
			);
		});

		const RadioView = () => {

			return  (	
					
				options.map((option, index) => {
					var optionvalue = option.optionvalue;
					var value = optionvalue.replace(/\s+/g, '-').toLowerCase();
					return (
						<Fragment>
						<input type="radio" id={value} name={ block_id } value={optionvalue} required={radioRequired}/>
						<label htmlfor={value}>{option.optiontitle}</label><br/>						
						</Fragment>
					);
				})
			)			
		};
		
		const isRequired = (radioRequired) ?__( "required",'form-block-for-gutenberg') : "";

		return (
			<Fragment>
				<InspectorControls>
					{ radioInspectorControls() }
				</InspectorControls>
				<div className={ classnames(
					"fbfg-forms-radio-wrap",
					"fbfg-forms-field-set",
					`fbfg-block-${ block_id }`,
				) }>
					{isSelected && (
					<div className="fbfg-forms-required-wrap">
						<ToggleControl
							label={ __( "Required" , 'form-block-for-gutenberg') }
							checked={ radioRequired }
							onChange={ ( value ) => setAttributes( { radioRequired: ! radioRequired } ) }
						/>
					</div>
					)}
					<RichText
						tagName="div"
						placeholder={ __( "Radio Title" , 'form-block-for-gutenberg') }
						value={ radioName }
						onChange={ ( value ) => setAttributes( { radioName: value } ) }
						className={`fbfg-forms-radio-label ${isRequired} fbfg-forms-input-label`}
						multiline={ false }
						id={ block_id }
					/>
					{isSelected && (
						<Fragment>														
							<div className="fbfg-forms-radio-controls">
								{editView}
								<div>
									<Button isSecondary onClick={addOption}>{ __(" + Add Option " , 'form-block-for-gutenberg') }</Button>									
								</div>								
							</div>
						</Fragment>
						)}
					
					{!isSelected && (<RadioView/>)}
					</div>
			</Fragment>
		)
	}
}

export default FBFGFormsRadioEdit