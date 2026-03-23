import { EmailIcon } from '../../icons/EmailIcon'
import { GitHubIcon } from '../../icons/GitHubIcon'
import { TelegramIcon } from '../../icons/TelegramIcon'
import './ContactsMedia.css'

export function ContactsMedia() {
	return (
		<div className='contacts-media'>
			<h3 className='contacts-media__title'>
				Вы можете связаться со мной в этих соц.сетях
			</h3>
			<div className='contacts-media__list'>
				<a
					className='contacts-media__item'
					href='mailto:sergeev.georgy.031@gmail.com'
					target='_blank'
				>
					<EmailIcon size={32} />
					<p className='contacts-media__name'>sergeev.georgy.031@gmail.com</p>
				</a>
				<a
					className='contacts-media__item'
					href='https://t.me/george_sergeev_031'
					target='_blank'
				>
					<TelegramIcon size={32} />
					<p className='contacts-media__name'>@george_sergeev_031</p>
				</a>
				<a
					className='contacts-media__item'
					href='https://github.com/george-sergeev'
					target='_blank'
				>
					<GitHubIcon size={32} />
					<p className='contacts-media__name'>george-sergeev</p>
				</a>
			</div>
		</div>
	)
}
