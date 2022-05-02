/**
 * BLOCK: Forms - Save Block
 */

import classnames from "classnames"
import { Fragment } from "react"

const {
	InnerBlocks,
	RichText
} = wp.blockEditor


export default function save( props ) {

	const { attributes } = props
	
	const {
		block_id,
		formLabel,
		submitButtonText,
		confirmationType,
		confirmationMessage,
		failedMessage,
		reCaptchaEnable,
		reCaptchaType,			
		reCaptchaSiteKeyV2,
		reCaptchaSecretKeyV2,	
		reCaptchaSiteKeyV3,
		reCaptchaSecretKeyV3,
		buttonSize	
	} = attributes

	const renderButtonHtml = () => {
		
				return (
					<button className="fbfg-forms-main-submit-button" >
								<RichText.Content
									tagName='div'
									value={ submitButtonText }
									className='fbfg-forms-main-submit-button-text'
								/>
					</button>
				);
			}
		


	return (
		<div className={ classnames(
			"fbfg-forms__outer-wrap",
			`fbfg-block-${ block_id }`,
			`fbfg-forms__${buttonSize}-btn`
		) }
		>
			<form className="fbfg-forms-main-form" method="post" name={ `fbfg-form-${ block_id }` } >			
				<InnerBlocks.Content />
				<div className="fbfg-forms-form-hidden-data">
					{ reCaptchaEnable && (					
						<input type="hidden" id="g-recaptcha-response" className="fbfg-forms-recaptcha"/>
					) }
					<input type="hidden" className="fbfg_forms_form_label" value={ formLabel }/>
					<input type="hidden" className="fbfg_forms_form_id" value= { `fbfg-form-${ block_id }` }/>
				</div>
				{ reCaptchaEnable && "v2" === reCaptchaType && reCaptchaSiteKeyV2 && reCaptchaSecretKeyV2 && (
					<Fragment>
						<div className="g-recaptcha fbfg-forms-field-set" data-sitekey={reCaptchaSiteKeyV2}></div>
						<div className={`fbfg-form-reacaptcha-error-${ block_id }`}></div>
					</Fragment>
				) }
				<div className="fbfg-forms-main-submit-button-wrap">
					{renderButtonHtml()}						
				</div>
			</form>
				{ 'message' === confirmationType && (
					<Fragment>
						<div className={ classnames(						
							`fbfg-forms-success-message-${ block_id }`,
							'fbfg-forms-submit-message-hide',
						) }>
							<span>
								{ confirmationMessage }
							</span>
						</div>
						<div className={ classnames(						
							`fbfg-forms-failed-message-${ block_id }`,
							'fbfg-forms-submit-message-hide',
						) }>
							<span>
								{ failedMessage }
							</span>
						</div>
					</Fragment>
				)}
				
		</div>
	)
}