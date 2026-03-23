import './BurgerMenu.css'
import { BurgerMenuMedia } from './BurgerMenuMedia'

export function BurgerMenu({ isOpen, onLinkClick }) {
	return (
		<div className={`burger-menu ${isOpen ? 'burger-menu--active' : ''}`}>
			<ul className='burger-menu__list'>
				<li className='burger-menu__item'>
					<a className='burger-menu__link' href='#hero' onClick={onLinkClick}>
						Главная
					</a>
				</li>
				<li className='burger-menu__item'>
					<a
						className='burger-menu__link'
						href='#projects'
						onClick={onLinkClick}
					>
						Проекты
					</a>
				</li>
				<li className='burger-menu__item'>
					<a
						className='burger-menu__link'
						href='#about-me'
						onClick={onLinkClick}
					>
						О-себе
					</a>
				</li>
				<li className='burger-menu__item'>
					<a
						className='burger-menu__link'
						href='#contacts'
						onClick={onLinkClick}
					>
						Контакты
					</a>
				</li>
			</ul>
			<BurgerMenuMedia />
		</div>
	)
}
