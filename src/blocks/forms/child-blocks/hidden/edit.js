/**
* BLOCK: Forms - hidden - Edit
*/

import classnames from "classnames"

import { __ } from '@wordpress/i18n';

const {
	Component,
	Fragment
} = wp.element
const {
	PanelBody,	
	TextControl,
} = wp.components
const {
	InspectorControls
} = wp.blockEditor

class FBFGFormsHiddenEdit extends Component {
	
	constructor() {
		super( ...arguments )
		this.changeHiddenName 		= this.changeHiddenName.bind( this )
	}
	
	componentDidMount() {
		
		const { attributes, setAttributes } = this.props
		
		// Assigning block_id in the attribute.
		setAttributes( { block_id: this.props.clientId.substr( 0, 8 ) } )
		
		// Pushing Style tag for this block css.
		const $style = document.createElement( "style" )
		$style.setAttribute( "id", "fbfg-style-forms-hidden-" + this.props.clientId.substr( 0, 8 ) )
		document.head.appendChild( $style )
		
	}

	changeHiddenName  (value) {
		const { setAttributes } = this.props
		setAttributes( { hidden_field_name: value.target.value } )
	}

	render() {
		
		const { attributes,setAttributes } = this.props
		
		const {
			block_id,
			hidden_field_name,
			hidden_field_value,
		} = attributes
		
		const hiddenFieldSettings = () => {
			
			return (
				<PanelBody
				title={ __( "General" , 'form-block-for-gutenberg') }
				initialOpen={ true }
				className="fbfg__url-panel-body"
				>

				<TextControl
				label= {__( "Value" , 'form-block-for-gutenberg') }
				value={ hidden_field_value }
				onChange={ ( hidden_field_value ) =>setAttributes( {hidden_field_value} ) }
				/>				
				
				</PanelBody>
				)
			}

			
			var hidden_field_label = hidden_field_name.replace(/\s+/g, '-').toLowerCase();
			return (
				<Fragment>
				<InspectorControls>
				{ hiddenFieldSettings() }
				</InspectorControls>
				<div className={ classnames(
					"fbfg-forms-hidden-wrap",
					`fbfg-block-${ block_id }`,
					) }>
						{/* Edit View */}
					{this.props.isSelected && (
						<input type="text"  className="fbfg-forms-hidden-input"  onChange={ this.changeHiddenName }  value={hidden_field_name}/>
					)}
						{/* Hidden Field View */}
					{!this.props.isSelected && (
						<Fragment>
							<label className={`fbfg-forms-hidden-label fbfg-form-hidden-${hidden_field_label}` }> { __( hidden_field_name , 'form-block-for-gutenberg' ) } </label>
							<input type="hidden"  className="fbfg-forms-hidden-input" value={hidden_field_value} />
						</Fragment>
					)}
					
					</div>
					</Fragment>
					)
				}
			}
			
			export default FBFGFormsHiddenEdit
			