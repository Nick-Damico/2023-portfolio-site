export type Event = {
  id: string
  startDate: string
  endDate: string
  company: string
  title: string
  imgSrc: string
}

const data: Event[] = [
  {
    id: '3aef4737-b3b5-43f8-b13b-4285b8869297',
    startDate: 'Apr 2019',
    endDate: 'June 2023',
    company: 'Tiltworks, Inc',
    title: 'Software Engineer',
    imgSrc: '/briefcase-solid.svg'
  },
  {
    id: 'dda3c993-48f2-4aa1-b58a-ace486485b72',
    startDate: 'Mar 2017',
    endDate: 'Jan 2018',
    company: 'Flatiron Bootcamp',
    title: 'Software Engineering Graduate',
    imgSrc: '/book-solid.svg'
  },
  {
    id: '3cd5a2a5-2b1a-4a49-a5a1-dd20bddc612c',
    startDate: 'Sept 2016',
    endDate: 'Apr 2017',
    company: 'Teamtreehouse.com',
    title: 'Front-End Techdegree',
    imgSrc: '/book-solid.svg'
  },
  {
    id: '4e94f331-6b97-4ddd-8cbf-ef71f71ee54a',
    startDate: 'Jan 2008',
    endDate: 'Mar 2019',
    company: 'Damicoauctions.com',
    title: 'Licensed Auctioneer',
    imgSrc: '/briefcase-solid.svg'
  },
  {
    id: '2a27b422-42e1-4a78-a374-820cfcae37c5',
    startDate: 'Sept 2006',
    endDate: 'May 2007',
    company: 'Walters State CC',
    title: 'Technical Certification EMT-IV',
    imgSrc: '/book-solid.svg'
  }
]

export default data
