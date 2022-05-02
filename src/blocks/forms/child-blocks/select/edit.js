/**
 * BLOCK: Forms - Select - Edit
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

class FBFGFormsSelectEdit extends Component {

	constructor() {
		super( ...arguments )
		this.state = { optionsstate:  [ { "optiontitle": __("Option Name 1", 'form-block-for-gutenberg') } ] };
	}

	componentDidMount() {

		const { setAttributes } = this.props

		// Assigning block_id in the attribute.
		setAttributes( { block_id: this.props.clientId.substr( 0, 8 ) } )

		// Pushing Style tag for this block css.
		const $style = document.createElement( "style" )
		$style.setAttribute( "id", "fbfg-style-forms-select-" + this.props.clientId.substr( 0, 8 ) )
		document.head.appendChild( $style )
		
	}

	render() {

		const { attributes, setAttributes, isSelected } = this.props

        const {
			block_id,
			selectRequired,
			options,
			selectName
		} = attributes
		const selectInspectorControls = () => {

			return (
				<PanelBody
					title={ __( "General" , 'form-block-for-gutenberg') }
					initialOpen={ true }
					className="fbfg__url-panel-body"
				>
					<ToggleControl
						label={ __( "Required" , 'form-block-for-gutenberg') }
						checked={ selectRequired }
						onChange={ ( value ) => setAttributes( { selectRequired: ! selectRequired } ) }
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
		
			const deleteCurrentOptions = options.map( ( item, thisIndex ) => {
				if ( index === thisIndex ) {
					 options.splice(index, 1)
					item = { options }
				}
				return item
			} )
		
			this.setState({optionsstate : deleteCurrentOptions});
			setAttributes({ deleteCurrentOptions });	

		};
		
		
		const editView = options.map((s, index) => {
			
			return (
				<div className="fbfg-form-select-option">
					<input
						className="fbfg-inner-input-view"
						aria-label={s.optiontitle}
						onChange={e => changeOption( { optiontitle: e.target.value,optionvalue: e.target.value }, index)}
						type="text"
						value={s.optiontitle}						
					/>
					<input
						className="fbfg-inner-input-view"
						aria-label={s.optionvalue}
						onChange={e => changeOption( { optionvalue: e.target.value }, index)}
						type="text"
						value={s.optionvalue}						
					/>					
					<Button 
						className="fbfg-form-select-option-delete"
        				icon="trash"
        				label="Remove" onClick={ () => deleteOption(index) }
    				/>
				</div>
			);
		});

		const SelectView = () => {

			var showoptionsField =  options.map((o, index) => {
				var optionvalue = o.optionvalue;
				var value = optionvalue.replace(/\s+/g, '-').toLowerCase();
				return <option value={optionvalue}>{o.optiontitle}</option>;
			})

			return  (
				<select className="fbfg-forms-select-box fbfg-forms-input" required={ selectRequired } name={ block_id }>
					<option value="" disabled selected>Select your option</option>
					{ showoptionsField }
				</select>
			)			
		};
		
		const isRequired = (selectRequired) ? __("required", 'form-block-for-gutenberg') : "";

		return (
			<Fragment>
				<InspectorControls>
					{ selectInspectorControls() }
				</InspectorControls>
				<div className={ classnames(
					"fbfg-forms-select-wrap",
					"fbfg-forms-field-set",
					`fbfg-block-${ block_id }`,
				) }>
					{isSelected && (
					<div className="fbfg-forms-required-wrap">
						<ToggleControl
							label={ __( "Required" , 'form-block-for-gutenberg') }
							checked={ selectRequired }
							onChange={ ( value ) => setAttributes( { selectRequired: ! selectRequired } ) }
						/>
					</div>
					)}
					<RichText
						tagName="div"
						placeholder={ __( "Select Title" , 'form-block-for-gutenberg') }
						value={ selectName }
						onChange={ ( value ) => setAttributes( { selectName: value } ) }
						className={`fbfg-forms-select-label ${isRequired} fbfg-forms-input-label`}
						multiline={ false }
						id={ block_id }
					/>
					{isSelected && (
						<Fragment>														
							{editView}
							<div className="fbfg-forms-select-controls">
								<div>
									<Button isSecondary onClick={addOption}>{ __(" + Add Option " , 'form-block-for-gutenberg') }</Button>									
								</div>								
							</div>
						</Fragment>
						)}
					
					{!isSelected && (<SelectView/>)}
					</div>
			</Fragment>
		)
	}
}

export default FBFGFormsSelectEdit
