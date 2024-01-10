import Image from 'next/image'
import Link from 'next/link'
import { ProductCard } from '../components/ProductCard/ProductCard'
import { Counter } from '../components/Counter/Counter';
import { AddUser } from '../components/AddUser/AddUser';
import  Sidebar  from '../components/Sidebar/Sidebar';
import { GraphContainer } from '../components/GraphDemo/GraphContainer';

export default function Dashboard() {

  return (
    <main>
      <div className="flex items-stretch bg-grey-lighter min-h-screen">
        <div className="bg-slate-600  px-2 flex ">
          <Sidebar/>
        </div>
        <div className="pl-2" suppressHydrationWarning >
          <Link href="/users">Users</Link>   
          <ProductCard/>
          <Counter/>
          <AddUser/>
          
        </div>
      </div>
    
    </main>
  )
}
