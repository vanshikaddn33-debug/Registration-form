import { Check, Code2, Home, Trophy } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import Layout from '../Components/Layout'

const Success = ({ name }) => {
  const navigate = useNavigate()

  return (
    <Layout step={3}>
      <div className='mx-auto w-full max-w-xl border border-gray-800 bg-[#141b15] px-6 py-10 text-center sm:px-10'>
        <div className='mx-auto flex h-16 w-16 items-center justify-center border border-green-700 bg-green-950 text-green-400'>
          <Check size={34} strokeWidth={3} />
        </div>

        <div className='mt-6 flex items-center justify-center gap-2 text-xs font-semibold tracking-widest text-green-400'>
          <Trophy size={16} />
          ACHIEVEMENT UNLOCKED
        </div>

        <h2 className='mt-4 text-3xl font-extrabold text-white sm:text-4xl'>
          YOU'RE IN!
        </h2>

        <p className='mt-4 text-sm leading-6 text-gray-400'>
          {name ? `Hey ${name}, ` : ''}
          you've completed the Hour of Code registration . Get ready to
          explore, experiment, and create.
        </p>

        <div className='my-7 flex items-center gap-3 border border-gray-800 bg-[#101510] p-4 text-left'>
          <div className='flex h-10 w-10 shrink-0 items-center justify-center bg-green-950 text-green-400'>
            <Code2 size={22} />
          </div>

          <div>
            <p className='text-sm font-semibold text-white'>Hour of Code</p>
            <p className='mt-1 text-xs text-gray-500'>
              Think. Code. Create.
            </p>
          </div>

          <span className='ml-auto text-xl text-green-400'>✔️</span>
        </div>

        <button
          onClick={() => navigate('/')}
          className='flex w-full items-center justify-center gap-2 bg-green-500 px-4 py-3 text-sm font-bold text-black transition hover:bg-green-400'
        >
          <Home size={17} />
          BACK TO HOME
        </button>

        
      </div>
    </Layout>
  )
}

export default Success