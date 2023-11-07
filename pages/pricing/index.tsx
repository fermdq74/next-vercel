import { MainLayout } from "@/components/layouts/MainLayout"
import Link from "next/link"

export default function Pricing () {
  return (
    <MainLayout>
        <div className={'center'}>
            <h1>Mi App - Pricing</h1>
        </div>
        <div>
            Ir a <Link href="/">Home</Link>
        </div>
    </MainLayout>
  )
}
