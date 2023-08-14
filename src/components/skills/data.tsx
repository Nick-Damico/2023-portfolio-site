type Skill = {
  id: string
  filename: string
  altText: string
}
type Skills = {
  /*
      NOTE: Skills is using an index signature,
            which means you can use any string
            as a key to access an array of skills */
  [category: string]: Skill[]
}

const skills: Skills = {
  languages: [
    {
      filename: 'html5-original.svg',
      altText: 'Hyper Text Markup lanugage 5'
    },
    {
      filename: 'ruby-plain.svg',
      altText: 'Ruby programming language'
    },
    {
      filename: 'javascript-original.svg',
      altText: 'Javascript programming language'
    },
    {
      filename: 'typescript-plain.svg',
      altText: 'Typescript programming language'
    }
  ],
  frameworks: [
    {
      filename: 'rails-plain.svg',
      altText: 'Ruby on Rails'
    },
    {
      filename: 'nextjs-original.svg',
      altText: 'Next js'
    },
    {
      filename: 'react-original.svg',
      altText: 'React js'
    }
  ],
  styling: [
    {
      filename: 'css3-original.svg',
      altText: 'Cascading Style Sheets 3'
    },
    {
      filename: 'bootstrap-plain.svg',
      altText: 'Bootstrap'
    },
    {
      filename: 'tailwindcss-plain.svg',
      altText: 'Tailwindcss'
    }
  ],
  misc: [
    {
      filename: 'rspec-original.svg',
      altText: 'RSpec testing framework'
    },
    {
      filename: 'docker-original.svg',
      altText: 'Docker'
    },
    {
      filename: 'github-original.svg',
      altText: 'Github'
    },
    {
      filename: 'gitlab-original.svg',
      altText: 'Gitlab'
    }
  ]
}

export default skills
