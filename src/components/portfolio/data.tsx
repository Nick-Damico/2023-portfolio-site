type TechBadgeMap = {
  [techName: string]: string
export type Project = {
  id: string
  name: string
  imgSrc: string
  info: string
  techList: string[] //Display order
  youtubeSrc?: string
  githubSrc?: string
}

export const techIcons: TechBadgeMap = {
  bootstrap:
    'https://img.shields.io/badge/Bootstrap-834899?style=flat-square&logo=bootstrap&logoColor=white',
  css: 'https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white',
  gatsby:
    'https://img.shields.io/badge/Gatsby-663399?style=flat-square&logo=gatsby&logoColor=white',
  javascript:
    'https://img.shields.io/badge/JavaScript-2e2d2d?style=flat-square&logo=javascript&color=2e2d2d',
  netlify:
    'https://img.shields.io/badge/Netlify-00C7B7?style=flat-square&logo=netlify&logoColor=white',
  php: 'https://img.shields.io/badge/PHP-777BB4?style=flat-square&logo=php&logoColor=white',
  ruby: 'https://img.shields.io/badge/Ruby-2356752?style=flat-square&logo=ruby&color=c93c32',
  rails:
    'https://img.shields.io/badge/Ruby_on_Rails-d13232?style=flat-square&logo=rubyonrails&color=d13232',
  javascript:
    'https://img.shields.io/badge/JavaScript-2e2d2d?style=flat-square&logo=javascript&color=2e2d2d',
  php: 'https://img.shields.io/badge/PHP-777BB4?style=flat-square&logo=php&logoColor=white',
  wordpress:
    'https://img.shields.io/badge/Wordpress-21759B?style=flat-square&logo=wordpress'
}

const projects: Project[] = [
  {
    id: 'db7f444a-86d1-4351-8b46-817c19087f43',
    name: 'HikeIt - Social Hiking Meetup App',
    imgSrc: '/hikeit-app-full.jpg',
    techList: ['ruby', 'rails', 'javascript', 'bootstrap'],
    info: `
      HikeIt is a social meetup application for organizing
      hikes witin the Smoky Mountain Naitonal Park. This application
      was built as my final project in the Ruby on Rails module at
      Flatiron. It was to show my understanding of the Rails framework.
    `,
    githubSrc: 'https://github.com/Nick-Damico/HikeIt',
    youtubeSrc: 'https://youtu.be/oosxvn8fQUo'
  },
  {
    id: '1480b6a7-3582-45b7-9a9c-464db1fef357',
    name: 'Gatsby JS',
    imgSrc: '/shear-madness.jpg',
    techList: ['gatsby', 'javascript', 'css'],
    info: `I was contracted by a local hair salon in Sevier County Shear Madness to
    build a website to attract more clientele. The owners had an outdated Wordpress website
    that was not ranking well on Google, and they feared the outdated site hurt business.
    I worked closely to build a site that matched their style, displayed their talent, and drive 
    new business.`
  },
  {
    id: '0d588fc9-f621-4921-9ec5-df9e894f656f',
    name: 'Wordpress',
    imgSrc: '/damico-auctions.jpg',
    techList: ['wordpress', 'php', 'javascript', 'css'],
    info: `
      DamicoAuctions.com is the offical website for my families auction company.
      We specialize in the appraisal and liquidation of automotive equipment and new car dealerships.
      This is a fully custom Wordpress website with custom auction events. It was built using PHP, JavaScript, and CSS. The 
    `,
    githubSrc: ''
  }
]

export default projects
