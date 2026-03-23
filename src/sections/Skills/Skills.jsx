import { SkillsBlock } from '../../components/Skills/SkillsBlock'
import { SkillsIllustrations } from '../../components/Skills/SkillsIllustrations'
import skills from '../../data/skills.json'
import './Skills.css'

export function Skills() {
	return (
		<section id='about-me' className='skills'>
			<h2 className='section-title'>Скилы</h2>
			<div className='skills__inner'>
				<SkillsIllustrations />
				<div className='skills__list'>
					{skills.map(skill => (
						<SkillsBlock key={skill.name} skill={skill} />
					))}
				</div>
			</div>
		</section>
	)
}
