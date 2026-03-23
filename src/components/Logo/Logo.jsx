import { RaccoonIcon } from '../../icons/RaccoonIcon.jsx'
import './Logo.css'

export function Logo() {
	return (
		<a className='header-logo' href='/'>
			<RaccoonIcon className='header-logo__icon' />
		</a>
	)
}
