'use client'

//import { Metadata } from 'next'
import { Links } from '@/app/components/links'
import { useRouter } from 'next/navigation'

// export const metadata: Metadata = {
//   title: 'Dashboard',
// }

export default function Page() {

  const router = useRouter() 

  return <div>
     <h1>Hello, Dashboard Page!</h1>     
     <Links></Links> 
     <button type="button" onClick={() => router.push('/dashboard/about')}>
      About
    </button>

  </div>
}