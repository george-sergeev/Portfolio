import { HeroIllustration } from '../../components/Hero/HeroIllustration'
import './Hero.css'

export function Hero() {
	return (
		<section id='hero' className='hero'>
			<div className='hero__inner'>
				<div className='hero__content'>
					<h1 className='hero__title'>
						Георгий Сергеев - <br />
						<span>Фронтенд разработчик</span>
					</h1>
					<p className='hero__description'>Пока только учусь веб-разработке</p>
				</div>
				<HeroIllustration />
			</div>
		</section>
	)
}
