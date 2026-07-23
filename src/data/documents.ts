export type DocumentType = {
  id: number
  name: string
  required: boolean
}

export const documentSeedData: DocumentType[] = [
  { id: 1, name: 'Photo', required: true },
  { id: 2, name: 'Signature', required: true },
  { id: 3, name: '10th Marksheet', required: true },
  { id: 4, name: '12th Marksheet', required: true },
  { id: 5, name: 'Degree', required: true },
  { id: 6, name: 'Caste Certificate', required: false },
  { id: 7, name: 'Income Certificate', required: false },
  { id: 8, name: 'EWS Certificate', required: false },
  { id: 9, name: 'PWD Certificate', required: false },
]
