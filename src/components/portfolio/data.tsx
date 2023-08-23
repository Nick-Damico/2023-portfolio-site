export type Project = {
  id: string
  name: string
  src: string
  info: string
  techList: string[] //Display order
}

type TechIconMap = {
  [tech: string]: string
}

export const techIcons: TechIconMap = {
  bootstrap:
    'https://img.shields.io/badge/Bootstrap-834899?style=flat-square&logo=bootstrap&logoColor=white',
  ruby: 'https://img.shields.io/badge/Ruby-2356752?style=flat-square&logo=ruby&color=c93c32',
  rails:
    'https://img.shields.io/badge/Ruby_on_Rails-d13232?style=flat-square&logo=rubyonrails&color=d13232',
  javascript:
    'https://img.shields.io/badge/JavaScript-2e2d2d?style=flat-square&logo=javascript&color=2e2d2d'
}

const projects: Project[] = [
  {
    id: 'db7f444a-86d1-4351-8b46-817c19087f43',
    name: 'HikeIt - Social Hiking Meetup App',
    src: '/hikeit-app-full.jpg',
    techList: ['ruby', 'rails', 'javascript', 'bootstrap'],
    info: `
      HikeIt is a social meetup application for organizing
      hikes witin the Smoky Mountain Naitonal Park. This application
      was built as my final project in the Ruby on Rails module at
      Flatiron. It was to show my understanding of the Rails framework.
    `
  },
  {
    id: '1480b6a7-3582-45b7-9a9c-464db1fef357',
    name: 'Gatsby JS',
    src: '/shear-madness.jpg',
    techList: ['ruby', 'javascript', 'rails'],
    info: ``
  },
  {
    id: '0d588fc9-f621-4921-9ec5-df9e894f656f',
    name: 'Wordpress',
    src: '/damico-auctions.jpg',
    techList: ['ruby', 'javascript', 'rails'],
    info: ``
  }
]

export default projects
