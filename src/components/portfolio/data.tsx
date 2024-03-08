type linkMap = {
  [techName: string]: string
}

type TechBadgeMap = {
  [techName: string]: string
}

export type LinkIconMap = {
  [techName: string]: string
}

export type Project = {
  id: string
  name: string
  imgSrc: string
  info: string
  techList: string[]
  links?: linkMap[]
}

export const techIcons: TechBadgeMap = {
  bootstrap:
    'https://img.shields.io/badge/Bootstrap-834899?style=flat-square&logo=bootstrap&logoColor=white',
  css: 'https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white',
  docker:
    'https://img.shields.io/badge/docker-00000?style=flat-square&logo=docker&color=1f1e1e',

  gatsby:
    'https://img.shields.io/badge/Gatsby-663399?style=flat-square&logo=gatsby&logoColor=white',
  javascript:
    'https://img.shields.io/badge/JavaScript-2e2d2d?style=flat-square&logo=javascript&color=2e2d2d',
  netlify:
    'https://img.shields.io/badge/Netlify-00C7B7?style=flat-square&logo=netlify&logoColor=white',
  php: 'https://img.shields.io/badge/PHP-777BB4?style=flat-square&logo=php&logoColor=white',
  ruby: 'https://img.shields.io/badge/Ruby-2356752?style=flat-square&logo=ruby&color=c93c32',
  rspec: 'https://img.shields.io/badge/RSpec-3bb8ed?logo=ruby&logoColor=ed3b59',
  rails:
    'https://img.shields.io/badge/Ruby_on_Rails-d13232?style=flat-square&logo=rubyonrails&color=d13232',
  wordpress:
    'https://img.shields.io/badge/Wordpress-21759B?style=flat-square&logo=wordpress',
  tailwindcss:
    'https://img.shields.io/badge/Tailwind_CSS-0F172A?style=flat-square&logo=tailwind-css&logoColor=38BDF8'
}

const projects: Project[] = [
  {
    id: crypto.randomUUID(),
    name: 'HikeIt - Social Hiking Meetup App',
    imgSrc: '/hikeit-app-full.jpg',
    techList: [
      'ruby',
      'rails',
      'javascript',
      'bootstrap',
      'rspec',
      'github',
      'html'
    ],
    info: `
      <p class='max-w-prose mb-2'>
        <span class='font-bold'>HikeIt</span> is a social meetup application for organizing
        hikes witin the Smoky Mountain Naitonal Park.
        This application was built as my final project in the Ruby on Rails module at
        Flatiron.
      </p>

      <p class='max-w-prose'>
        <span class='font-bold'>HikeIt</span> was built with Ruby on Rails 5.2. It utilizes Devise and OAuth
        for user authentication, RSpec for following TDD best practices, and jQuery and JavaScript for user 
        interactions. This app is no longer online, but the YouTube link below provides a brief walk-through.
      </p>
    `,
    links: [
      { type: 'github', href: 'https://github.com/Nick-Damico/HikeIt' },
      { type: 'youtube', href: 'https://youtu.be/oosxvn8fQUo' }
    ]
  },
  // {
  //   id: crypto.randomUUID(),
  //   name: 'Responsive Image Gallery',
  //   imgSrc: '/inter-photo-full.jpg',
  //   techList: ['html', 'css', 'javascript', 'github'],
  //   info: `
  //     <p class='max-w-prose'>
  //       This project was part of the Treehouse Front End Techdegree program.
  //       The objective of this project was to use HTML5 and CSS to build a responsive photo gallery.
  //       JavaScript was utilitized to add a modal pop-up and image carousel with text search filtering.
  //     </p>
  //   `,
  //   links: [
  //     {
  //       type: 'github',
  //       href: 'https://github.com/Nick-Damico/Proj.-4-Interactive-Photo-Gallery'
  //     },
  //     {
  //       type: 'live',
  //       href: 'https://nick-damico.github.io/Proj.-4-Interactive-Photo-Gallery/'
  //     }
  //   ]
  // },
  {
    id: crypto.randomUUID(),
    name: 'TruckingNexus',
    imgSrc: '/trucking-nexus-thumb.png',
    techList: [
      'rails',
      'ruby',
      'javascript',
      'html',
      'css',
      'tailwindcss',
      'rspec',
      'docker',
      'github'
    ],
    info: `
      <p class='max-w-prose mb-2'>
      <b>TruckingNexus</b> is a Ruby on Rails application developed while attending CDL school in October 2024.
      It was primarily designed as a testing solution that prepares students for taking the state CDL written exams. In addtion to testing, TruckingNexus also provides
      users with the ability to review companies and CDL schools.
      </p>
      <p class='max-w-prose'>
      Built with Ruby on Rails 7, Active Storage with AWS, RSpec, and Stimulus, while taking full advantage of Turbo's features. Deployment is
      handled using Fly.io and Docker.
      </p>
    `,
    links: [
      {
        type: 'github',
        href: 'https://github.com/Nick-Damico/truckingnexus'
      },
      {
        type: 'live',
        href: 'https://trucking-nexus.fly.dev/'
      }
    ]
  },
  {
    id: crypto.randomUUID(),
    name: 'Interactive Video Player',
    imgSrc: '/video-player-full.jpg',
    techList: ['html', 'css', 'javascript', 'github'],
    info: `
      <p class='max-w-prose'>
        This project showcases an HTML5 video player built using JavaScript and the 
        HTML5 Video API. The goal of this project was to create an interactive video 
        player with custom controls that synchronizes the video playback with a transcript.
      </p>
    `,
    links: [
      {
        type: 'github',
        href: 'https://github.com/Nick-Damico/Proj.-7-Interactive-Video-Player'
      },
      {
        type: 'live',
        href: 'https://nick-damico.github.io/Proj.-7-Interactive-Video-Player'
      }
    ]
  },
  {
    id: crypto.randomUUID(),
    name: 'MasterMind CLI Game',
    imgSrc: '/master_mind_cli.png',
    techList: ['ruby', 'rspec', 'docker'],
    info: ` 
      <p class='max-w-prose mb-2'>
        <span class='font-bold'>Master Mind CLI</span> is a command-line interface implementation of the popular
        game Master Mind. Developed following a strict TDD approach using Ruby and RSpec.
      </p>
        
      <p class='max-w-prose'>
        Test your code-breaking skills by attempting to guess the
        secret pattern within the specified number of attempts. Have fun playing and mastering
        the code-breaking challenge with Master Mind CLI!
      </p>
    `,
    links: [
      {
        type: 'github',
        href: 'https://github.com/Nick-Damico/ruby-master-mind'
      }
    ]
  }
]

export default projects
