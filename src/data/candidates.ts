export type CandidateStatus = 'Pending' | 'Review' | 'Approved' | 'Rejected'

export type Candidate = {
  id: number
  firstName: string
  middleName?: string
  lastName: string
  gender: string
  dateOfBirth: string
  mobile: string
  email: string
  category: string
  education: string
  applicationStatus: CandidateStatus
}

export const candidateSeedData: Candidate[] = [
  {
    id: 1,
    firstName: 'Riya',
    middleName: 'Kumari',
    lastName: 'Sharma',
    gender: 'Female',
    dateOfBirth: '1998-04-11',
    mobile: '+91 98765 43210',
    email: 'riya.sharma@example.com',
    category: 'General',
    education: 'B.Tech',
    applicationStatus: 'Review',
  },
  {
    id: 2,
    firstName: 'Aman',
    middleName: '',
    lastName: 'Verma',
    gender: 'Male',
    dateOfBirth: '1995-09-02',
    mobile: '+91 99876 54321',
    email: 'aman.verma@example.com',
    category: 'OBC',
    education: 'MBA',
    applicationStatus: 'Pending',
  },
  {
    id: 3,
    firstName: 'Nisha',
    middleName: 'Rani',
    lastName: 'Rao',
    gender: 'Female',
    dateOfBirth: '1997-01-21',
    mobile: '+91 91234 56789',
    email: 'nisha.rao@example.com',
    category: 'SC',
    education: 'MCA',
    applicationStatus: 'Approved',
  },
]
