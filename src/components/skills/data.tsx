export type Skill = {
  id: string
  filename: string
  altText: string
}

export type Skills = {
  /*
      NOTE: Skills is using an index signature,
            which means you can use any string
            as a key to access an array of skills */
  [category: string]: Skill[]
}

/* Keys generated with crypto.randomUUID() per React Dev docs */
const skills: Skills = {
  languages: [
    {
      id: 'd32772f3-3b44-41cd-b1e5-70d05e9e44bb',
      filename: 'html5-original.svg',
      altText: 'Hyper Text Markup lanugage 5'
    },
    {
      id: '5ad7abeb-d636-4ef1-8d34-80d4a9601635',
      filename: 'ruby-plain.svg',
      altText: 'Ruby programming language'
    },
    {
      id: '9ee3567b-41ca-4ca1-b600-6706abd455d4',
      filename: 'javascript-original.svg',
      altText: 'Javascript programming language'
    },
    {
      id: '32d291ca-4fac-40e5-a5ad-c003a7a70dff',
      filename: 'typescript-plain.svg',
      altText: 'Typescript programming language'
    }
  ],
  frameworks: [
    {
      id: 'a8435d88-6eef-4524-b99e-a92eb9d3cc86',
      filename: 'rails-plain.svg',
      altText: 'Ruby on Rails'
    },
    {
      id: '076aa827-496e-4896-bc81-15f987d2aea1',
      filename: 'nextjs-original.svg',
      altText: 'Next js'
    },
    {
      id: '84f6df94-11ec-4213-8a58-254f52bd22a9',
      filename: 'react-original.svg',
      altText: 'React js'
    }
  ],
  styling: [
    {
      id: 'f459322d-e207-4397-a224-defe1a8ef152',
      filename: 'css3-original.svg',
      altText: 'Cascading Style Sheets 3'
    },
    {
      id: '980ee523-e16c-48f3-b9a2-2ae2c3c375a2',
      filename: 'bootstrap-plain.svg',
      altText: 'Bootstrap'
    },
    {
      id: '41467907-5e53-45d8-843c-0efa1c9a4071',
      filename: 'tailwindcss-plain.svg',
      altText: 'Tailwindcss'
    }
  ],
  misc: [
    {
      id: '254a95c2-f7a4-4c06-b9c3-31a8cd922de8',
      filename: 'rspec-original.svg',
      altText: 'RSpec testing framework'
    },
    {
      id: '99dea193-2c44-4a32-947b-3edc23644739',
      filename: 'docker-original.svg',
      altText: 'Docker'
    },
    {
      id: '3cd901f5-da47-43cc-88cb-0742a3499a21',
      filename: 'github-original.svg',
      altText: 'Github'
    },
    {
      id: '2b8ba0a1-abdb-4a7f-8f65-70868d97e9f8',
      filename: 'gitlab-original.svg',
      altText: 'Gitlab'
    }
  ]
}

export default skills
