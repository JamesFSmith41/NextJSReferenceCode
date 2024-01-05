import Image from 'next/image'
import Link from 'next/link'
import { ProductCard } from './components/ProductCard/ProductCard'
import { Counter } from './components/Counter/Counter';
import { AddUser } from './components/AddUser/AddUser';

export default function Home() {
  return (
    <main>
      <h1>Hello World</h1>
      <Link href="/users">Users</Link>   
      <ProductCard/>
      <Counter/>
      <AddUser/>
    </main>
  )
}
