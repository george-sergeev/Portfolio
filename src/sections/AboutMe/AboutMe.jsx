import { AboutMeIllustration } from '../../components/AboutMe/AboutMeIllustration'
import { SectionTitle } from '../../components/SectionTitle/SectionTitle'
import './AboutMe.css'

export function AboutMe() {
	return (
		<section className='about-me'>
			<SectionTitle text={'О-себе'} />
			<div className='about-me__inner'>
				<div className='about-me__content'>
					<div className='about-me__text'>
						<div className='about-me__paragraph'>
							Привет, меня зовут Георгий Сергеев!
						</div>
						<div className='about-me__paragraph'>
							Я — самоучка в области фронтенд-разработки, и в настоящее время
							активно совершенствую свои навыки. Постоянно стремлюсь улучшать
							свои знания в веб-разработке, а также создавать качественные и
							удобные интерфейсы.
						</div>
					</div>
				</div>
				<AboutMeIllustration />
			</div>
		</section>
	)
}
