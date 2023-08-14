export type Event = {
  id: string
  company: string
  title: string
  description?: string
  startDate: string
  endDate: string
  imgSrc: string
}

const data: Event[] = [
  {
    id: '3aef4737-b3b5-43f8-b13b-4285b8869297',
    company: 'Tiltworks, Inc',
    title: 'Software Engineer',
    startDate: 'Apr 2019',
    endDate: 'June 2023',
    imgSrc: '/briefcase-solid.svg'
  },
  {
    id: 'dda3c993-48f2-4aa1-b58a-ace486485b72',
    company: 'Flatiron Bootcamp',
    title: 'Software Engineering Graduate',
    startDate: 'Mar 2017',
    endDate: 'Jan 2018',
    imgSrc: '/book-solid.svg'
  },
  {
    id: '3cd5a2a5-2b1a-4a49-a5a1-dd20bddc612c',
    company: 'Teamtreehouse.com',
    title: 'Front-End Techdegree',
    startDate: 'Sept 2016',
    endDate: 'Apr 2017',
    imgSrc: '/book-solid.svg'
  },
  {
    id: '4e94f331-6b97-4ddd-8cbf-ef71f71ee54a',
    company: 'Damicoauctions.com',
    title: 'Licensed Auctioneer',
    startDate: 'Jan 2008',
    endDate: 'Mar 2019',
    imgSrc: '/briefcase-solid.svg'
  },
  {
    id: '2a27b422-42e1-4a78-a374-820cfcae37c5',
    company: 'Walters State CC',
    title: 'Technical Certification EMT-IV',
    startDate: 'Sept 2006',
    endDate: 'May 2007',
    imgSrc: '/book-solid.svg'
  }
]

export default data
