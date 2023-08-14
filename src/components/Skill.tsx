import SkillList from '@/components/skills/SkillList'

export default function Skill({ title }: { title: string }) {
  return (
    <section className='flex flex-col'>
      <h2 className='section-title'>{title}</h2>
      <SkillList />
    </section>
  )
}
