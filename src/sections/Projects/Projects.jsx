import { ProjectsCard } from '../../components/Projects/ProjectsCard'
import { SectionTitle } from '../../components/SectionTitle/SectionTitle'
import projects from '../../data/projects.json'
import './Projects.css'

export function Projects() {
	return (
		<section id='projects' className='project'>
			<SectionTitle text={'Проекты'} />
			<div className='projects__inner'>
				{projects.map(project => (
					<ProjectsCard key={project.id} project={project} />
				))}
			</div>
		</section>
	)
}
