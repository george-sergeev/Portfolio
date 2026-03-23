import './AboutMeIllustration.css'

export function AboutMeIllustration() {
	return (
		<div className='about-me-illustration'>
			<img className='about-me-illustration__dots' src='./images/dots.png' />

			<img
				className='about-me-illustration__image'
				src='./images/about-me.png'
				alt='Моя фотография'
			/>
		</div>
	)
}
