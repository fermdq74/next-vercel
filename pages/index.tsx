import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import { MainLayout } from '@/components/layouts/MainLayout'

export default function Home() {
  return (
    <MainLayout>
      <div className={styles.center}>
        <h1>Mi App - Home</h1>
      </div>
      <div>
        Ir a <Link href="/about">About</Link>  
      </div>
    </MainLayout>
  )
}
