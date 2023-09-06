import SkillList from '@/components/skills/SkillList'
import data from '@/components/skills/data'

export default function Skill({
  title,
  activeSkills
}: {
  title: string
  activeSkills: string[]
}) {
  return (
    <section className='flex flex-col'>
      <h2 className='section-title'>{title}</h2>
      <SkillList data={data} activeSkills={activeSkills} />
    </section>
  )
}
