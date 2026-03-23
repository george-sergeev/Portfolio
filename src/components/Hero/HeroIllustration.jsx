import './HeroIllustration.css'

export function HeroIllustration() {
	return (
		<div className='hero-illustration'>
			<img className='hero-illustration__dots' src='./images/dots.png' />
			<img className='hero-illustration__figure' src='./images/figure.png' />
			<img
				className='hero-illustration__image'
				src='./images/hero.png'
				alt='Моя фотография'
			/>
		</div>
	)
}
