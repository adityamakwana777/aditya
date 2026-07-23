import { useForm } from 'react-hook-form'
import type { Candidate } from '../../data/candidates'

type CandidateFormProps = {
  defaultValues?: Partial<Candidate>
  onSubmit: (values: Candidate) => void
}

const CandidateForm = ({ defaultValues, onSubmit }: CandidateFormProps) => {
  const { register, handleSubmit } = useForm<Candidate>({ defaultValues })

  return (
    <form className="candidate-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="candidate-form__grid">
        <label>
          <span>First Name</span>
          <input {...register('firstName')} />
        </label>
        <label>
          <span>Middle Name</span>
          <input {...register('middleName')} />
        </label>
        <label>
          <span>Last Name</span>
          <input {...register('lastName')} />
        </label>
        <label>
          <span>Gender</span>
          <input {...register('gender')} />
        </label>
        <label>
          <span>Date of Birth</span>
          <input type="date" {...register('dateOfBirth')} />
        </label>
        <label>
          <span>Mobile</span>
          <input {...register('mobile')} />
        </label>
        <label>
          <span>Email</span>
          <input type="email" {...register('email')} />
        </label>
        <label>
          <span>Category</span>
          <input {...register('category')} />
        </label>
        <label>
          <span>Education</span>
          <input {...register('education')} />
        </label>
        <label>
          <span>Application Status</span>
          <select {...register('applicationStatus')}>
            <option value="Pending">Pending</option>
            <option value="Review">Review</option>
            <option value="Approved">Approved</option>
            <option value="Rejected">Rejected</option>
          </select>
        </label>
      </div>
      <button type="submit" className="action-button">Save Candidate</button>
    </form>
  )
}

export default CandidateForm
