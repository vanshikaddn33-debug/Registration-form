import { ArrowRight, UserRound } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import Layout from '../Components/Layout'

const Registration = ({ formData, updateForm }) => {
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    navigate('/contact')
  }

  const inputStyle =
    'mt-2 w-full border border-gray-700 bg-[#171e18] px-3 py-2.5 text-sm text-white outline-none transition focus:border-green-500'

  const labelStyle = 'text-xs font-medium text-gray-400'

  return (
    <Layout step={1}>
      <div className='grid gap-8 md:grid-cols-[0.85fr_1.15fr] md:gap-12'>
        <div className='flex flex-col justify-center'>
          <div className='mb-4 w-fit border border-green-900 bg-green-950/60 px-3 py-1.5 text-xs text-green-400'>
            <span className='mr-2'>●</span>
            REGISTRATIONS OPEN
          </div>

          <p className='mb-2 text-sm text-gray-500'>Your next adventure starts here.</p>

          <h2 className='text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl'>
            HOUR
            <br />
            OF <span className='text-green-400'>CODE.</span>
          </h2>

          <p className='mt-4 max-w-sm text-sm leading-6 text-gray-400'>
            Turn your ideas into code. Meet fellow developers, explore new
            technologies, and build something of your own.
          </p>

          <div className='mt-6 flex items-center gap-3 text-sm text-gray-400'>
            <span className='text-xl'>⛏️</span>
            <span>Think. Code. Create.</span>
          </div>
        </div>

        <div className='border border-gray-800 bg-[#141b15] p-5 sm:p-7'>
          <div className='mb-5 flex items-center gap-3'>
            <div className='flex h-10 w-10 items-center justify-center bg-green-950 text-green-400'>
              <UserRound size={21} />
            </div>

            <div>
              <h3 className='font-semibold text-white'>Player Registration</h3>
              <p className='mt-1 text-xs text-gray-500'>Step 01 / 03</p>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className='grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2'>
              <label className={labelStyle}>
                FULL NAME
                <input
                  className={inputStyle}
                  type='text'
                  placeholder='Enter your name'
                  value={formData.name}
                  onChange={(e) => updateForm({ name: e.target.value })}
                  required
                />
              </label>

              <label className={labelStyle}>
                EMAIL ADDRESS
                <input
                  className={inputStyle}
                  type='email'
                  placeholder='you@akgec.ac.in'
                  value={formData.email}
                  onChange={(e) => updateForm({ email: e.target.value })}
                  required
                />
              </label>

              <label className={labelStyle}>
                STUDENT ID
                <input
                  className={inputStyle}
                  type='text'
                  placeholder='Eg.2512484'
                  value={formData.studentId}
                  onChange={(e) => updateForm({ studentId: e.target.value })}
                  required
                />
              </label>

              <label className={labelStyle}>
                YEAR OF STUDY
                <select
                  className={inputStyle}
                  value={formData.year}
                  onChange={(e) => updateForm({ year: e.target.value })}
                  required
                >
                  <option value=''>Select year</option>
                  <option value='1st Year'>1st Year</option>
                  <option value='2nd Year'>2nd Year</option>
                  <option value='3rd Year'>3rd Year</option>
                  <option value='4th Year'>4th Year</option>
                </select>
              </label>

              <label className={labelStyle}>
                BRANCH
                <select
                  className={inputStyle}
                  value={formData.branch}
                  onChange={(e) => updateForm({ branch: e.target.value })}
                  required
                >
                    <option value=''>Select Branch</option>
                  <option value='CSE'>CSE</option>
                  <option value='CSE AIML'>CSE AIML</option>
                  <option value='CSE DS'>CSE DS</option>
                  <option value='CSE HINDI'>CSE HINDI</option>
                  <option value='CS'>CS</option>
                  <option value='CSIT'>CSIT</option>
                  <option value='IT'>IT</option>
                  <option value='AIML'>AIML</option>
                  <option value='ECE'>ECE</option>
                  
                </select>
              </label>

              <label className={labelStyle}>
                GENDER
                <select
                  className={inputStyle}
                  value={formData.gender}
                  onChange={(e) => updateForm({ gender: e.target.value })}
                  required
                >
                  <option value=''>Select gender</option>
                  <option value='MALE'>MALE</option>
                  <option value='FEMALE'>FEMALE</option>
                  <option value='OTHER'>OTHER</option>
                 
                </select>
              </label>
            </div>


            <button
              type='submit'
              className='mt-6 flex w-full items-center justify-center gap-2 bg-green-500 px-4 py-3 text-sm font-bold text-black transition hover:bg-green-400'
            >
              NEXT: CONTACT DETAILS
              <ArrowRight size={17} />
            </button>

            <p className='mt-4 text-center text-xs text-gray-600'>
              Your journey starts with one line of code.
            </p>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default Registration