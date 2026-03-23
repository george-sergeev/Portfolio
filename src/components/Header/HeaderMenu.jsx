import './HeaderMenu.css'

export function HeaderMenu() {
	return (
		<nav className='header-menu'>
			<ul className='header-menu__list'>
				<li className='header-menu__item'>
					<a className='header-menu__link' href='#hero'>
						Главная
					</a>
				</li>
				<li className='header-menu__item'>
					<a className='header-menu__link' href='#projects'>
						Проекты
					</a>
				</li>
				<li className='header-menu__item'>
					<a className='header-menu__link' href='#about-me'>
						О-себе
					</a>
				</li>
				<li className='header-menu__item'>
					<a className='header-menu__link' href='#contacts'>
						Контакты
					</a>
				</li>
			</ul>
		</nav>
	)
}
