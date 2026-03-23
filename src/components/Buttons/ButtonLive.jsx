import './ButtonLive.css'

export function ButtonLive({ href }) {
	return (
		<a className='button-live' href={href} target='_blank'>
			Live ↗
		</a>
	)
}
