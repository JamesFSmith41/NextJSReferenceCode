import Link from 'next/link'
import { signOut } from '@/auth';

const Sidebar = () => {

  return (
    <div className="p-1 m-1 h-90">
        <p className="font-bold"> Sidebar</p>
        <div className='flex flex-col h-90 p-1 bg-slate-400 rounded-md space-y-2'>
            <Link href="/dynamicTestPage" className="border-1 border-slate-300 rounded-md hover:bg-slate-500 p-1">
                Dynamic Test Page
            </Link>
            <Link href="/users" className="border-1 border-slate-300 rounded-md hover:bg-slate-500 p-1">
                User Profile
            </Link>
            <Link href="/users" className="border-1 border-slate-300 rounded-md hover:bg-slate-500 p-1">
                User Profile
            </Link>
            <form className=''
                action={async () => {
                    'use server';
                    await signOut();
                }}
                >
                <button className="min-w-full border-1 border-slate-300 rounded-md hover:bg-slate-500 p-1">
                    Logout
                </button>
            </form>
        </div>
    </div>
  )
}

export default Sidebar