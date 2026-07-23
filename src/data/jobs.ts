export type JobProfile = {
  id: number
  title: string
  plugin: string
  url: string
}

export const jobSeedData: JobProfile[] = [
  { id: 1, title: 'OJAS Police SI', plugin: 'OJAS', url: 'https://ojas.gov.in/apply' },
  { id: 2, title: 'Rajasthan SI', plugin: 'Portal', url: 'https://raj.gov.in/apply' },
]
