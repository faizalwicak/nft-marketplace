import { FunctionComponent, ReactNode } from 'react'
import Navbar from '../navbar'

interface Children {
  children: ReactNode
}

const BaseLayout: FunctionComponent<Children> = ({children}: Children) => {
  return (
    <>
      <Navbar />
      <div className='py-16 bg-gray-50 overflow-hidden min-h-screen'>
        <div className='max-w-7xl mx-auto space-y-8 sm:px-6 lg:px-8'>{children}</div>
      </div>
    </>
  )
}

export default BaseLayout