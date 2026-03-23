import './App.css'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { AboutMe } from './sections/AboutMe/AboutMe'
import { Contacts } from './sections/Contacts/Contacts'
import { Hero } from './sections/Hero/Hero'
import { Projects } from './sections/Projects/Projects'
import { Skills } from './sections/Skills/Skills'

function App() {
	return (
		<>
			<Header />

			<main className='app-main'>
				<Hero />
				<Projects />
				<Skills />
				<AboutMe />
				<Contacts />
			</main>

			<Footer />
		</>
	)
}

export default App
