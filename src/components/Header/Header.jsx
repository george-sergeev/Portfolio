import { useEffect, useState } from 'react'
import { Logo } from '../Logo/Logo'
import { BurgerMenu } from './BurgerMenu'
import './Header.css'
import { HeaderButton } from './HeaderButton'
import { HeaderMedia } from './HeaderMedia'
import { HeaderMenu } from './HeaderMenu'

export function Header() {
	const [menuOpen, setMenuOpen] = useState(false)

	useEffect(() => {
		if (menuOpen) {
			document.body.classList.add('no-scroll')
		} else {
			document.body.classList.remove('no-scroll')
		}

		return () => {
			document.body.classList.remove('no-scroll')
		}
	}, [menuOpen])

	return (
		<>
			<header className='header'>
				<HeaderMedia />
				<div className='header__container'>
					<Logo />
					<HeaderMenu />
					<HeaderButton
						active={menuOpen}
						onClick={() => setMenuOpen(!menuOpen)}
					/>
				</div>
			</header>{' '}
			<BurgerMenu isOpen={menuOpen} onLinkClick={() => setMenuOpen(false)} />
		</>
	)
}
