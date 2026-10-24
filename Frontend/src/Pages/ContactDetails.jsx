import { ArrowLeft, ArrowRight, Code2, Phone } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import Layout from '../Components/Layout'

const ContactDetails = ({ formData, updateForm }) => {
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    navigate('/success')
  }

  const inputStyle =
    'mt-2 w-full border border-gray-700 bg-[#171e18] px-3 py-2.5 text-sm text-white outline-none transition focus:border-green-500'

  const labelStyle = 'text-xs font-medium text-gray-400'

  return (
    <Layout step={2}>
      <div className='mx-auto w-full max-w-2xl border border-gray-800 bg-[#141b15] p-5 sm:p-8'>
        <div className='mb-6 flex items-center gap-3'>
          <div className='flex h-10 w-10 items-center justify-center bg-green-950 text-green-400'>
            <Phone size={21} />
          </div>

          <div>
            <h2 className='text-xl font-bold text-white'>Contact Details</h2>
            <p className='mt-1 text-xs text-gray-500'>
              A few more details before you're in.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className='grid gap-5 sm:grid-cols-2'>
            <label className={labelStyle}>
              PHONE NUMBER
              <input
                className={inputStyle}
                type='tel'
                placeholder='Enter phone number'
                value={formData.phone}
                onChange={(e) => updateForm({ phone: e.target.value })}
                pattern='[0-9]{10}'
                maxLength={10}
                title='Enter a 10-digit phone number'
                required
              />
            </label>

            <label className={labelStyle}>
              GITHUB USERNAME
              <div className='relative'>
                <Code2
                size={17}
                 className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-500'
                />
                <input
                  className={`${inputStyle} pl-9`}
                  type='text'
                  placeholder='Your GitHub username'
                  value={formData.github}
                  onChange={(e) => updateForm({ github: e.target.value })}
                  required
                />
              </div>
            </label>

            <label className={labelStyle}>
              RESIDENCE
              <select
                className={inputStyle}
                value={formData.residence}
                onChange={(e) => updateForm({ residence: e.target.value })}
                required
              >
                <option value=''>Residence</option>
                <option value='Hosteller'>Hosteller</option>
                <option value='Day Scholar'>Day Scholar</option>
                
              </select>
            </label>

            <label className={labelStyle}>
              DO YOU HAVE A LAPTOP?
              <select
                className={inputStyle}
                value={formData.laptop}
                onChange={(e) => updateForm({ laptop: e.target.value })}
                required
              >
                <option value=''>Select an option</option>
                <option value='Yes'>Yes</option>
                <option value='No'>No</option>
              </select>
            </label>
          </div>

          <div className='mt-6 border border-gray-800 bg-[#101510] p-3 text-xs leading-5 text-gray-400'>
            <span className='mr-2 text-green-400'>◆</span>
            Check your details before submitting.
          </div>

          <div className='mt-6 flex flex-col-reverse gap-3 sm:flex-row'>
            <button
              type='button'
              onClick={() => navigate('/')}
              className='flex flex-1 items-center justify-center gap-2 border border-gray-700 px-4 py-3 text-sm text-gray-300 transition hover:border-green-500 hover:text-white'
            >
              <ArrowLeft size={17} />
              BACK
            </button>

            <button
              type='submit'
              className='flex flex-1 items-center justify-center gap-2 bg-green-500 px-4 py-3 text-sm font-bold text-black transition hover:bg-green-400'
            >
              COMPLETE REGISTRATION
              <ArrowRight size={17} />
            </button>
          </div>
        </form>
      </div>
    </Layout>
  )
}

export default ContactDetails