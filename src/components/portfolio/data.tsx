export type Project = {
  id: string
  name: string
  src: string
}

const projects: Project[] = [
  {
    id: 'db7f444a-86d1-4351-8b46-817c19087f43',
    name: 'Front-End',
    src: '/hikeit-app-full.jpg'
  },
  {
    id: '1480b6a7-3582-45b7-9a9c-464db1fef357',
    name: 'Ruby on Rails',
    src: '/shear-madness.jpg'
  },
  {
    id: '0d588fc9-f621-4921-9ec5-df9e894f656f',
    name: 'Ruby',
    src: '/damico-auctions.jpg'
  }
]

export default projects
