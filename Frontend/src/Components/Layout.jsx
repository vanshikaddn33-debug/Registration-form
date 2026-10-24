import { Code2, Terminal } from 'lucide-react'

const Layout = ({ children, step }) => {
  const steps = ['Registration', 'Contact Details', 'Complete']

  return (
    <main className='min-h-screen flex flex-col px-4 py-4 sm:px-8 sm:py-5'>
      <header className='mx-auto flex w-full max-w-5xl items-center justify-between'>
        <div className='flex items-center gap-3'>
          <div className='flex h-10 w-10 items-center justify-center border border-green-800 bg-green-950 text-green-400'>
            <Code2 size={23} />
          </div>
          <div>
            <h1 className='font-bold tracking-wide text-white'>HOUR OF CODE</h1>
            <p className='text-xs text-gray-500'>Build something amazing.</p>
          </div>
        </div>

        
      </header>

      <section className='mx-auto my-auto flex w-full max-w-5xl flex-col justify-center py-5'>
        <div className='mb-6 flex items-center justify-between gap-2'>
          {steps.map((label, index) => {
            const number = index + 1
            const active = number === step
            const completed = number < step

            return (
              <div key={label} className='flex flex-1 items-center gap-2'>
                <div
                  className={`flex h-8 w-8 shrink-0 items-center justify-center border text-sm font-semibold ${
                    active || completed
                      ? 'border-green-500 bg-green-500 text-black'
                      : 'border-gray-700 text-gray-500'
                  }`}
                >
                  {completed ? '✓' : `0${number}`}
                </div>

                <span
                  className={`hidden text-xs sm:block ${
                    active ? 'text-green-400' : 'text-gray-500'
                  }`}
                >
                  {label}
                </span>

                {index < steps.length - 1 && (
                  <div className='h-px flex-1 bg-gray-800' />
                )}
              </div>
            )
          })}
        </div>

        {children}
      </section>

      
    </main>
  )
}

export default Layout