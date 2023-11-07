import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import { MainLayout } from '@/components/layouts/MainLayout'
import { DarkLayout } from '@/components/layouts/DarkLayout'

export default function about() {
    return (
        <MainLayout>
          <DarkLayout>
            <div className={styles.center}>
              <h1>Mi App - About</h1>
            </div>
            <div>
              Ir a <Link href="/">Home</Link>
            </div>
          </DarkLayout>
        </MainLayout>
      )
}
