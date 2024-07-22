'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  
  const handleProduct = ()=>{
  router.push('products')
  }

  const handleAccounts = () => {
    router.push('accounts')
  }
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
     <h1>Welcome to FoodApp!</h1>
     <Link href={'products'}>Products Page</Link>
     <Link href={'/accounts'}>Accounts Page</Link>

     <h2 className="font-bold mt-3 text-lg">Alternative way of useRouter</h2>
     <button onClick={handleProduct} className="bg-green-500 text-black border border-blue-500 hover:bg-blue-600 px-4 py-2 rounded">Products</button>
     <button onClick={handleAccounts} className="bg-blue-500 text-black border border-blue-500 hover:bg-green-600 px-4 py-2 rounded">Accounts</button>
    </main>
  );
}
