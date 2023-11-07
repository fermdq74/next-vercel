import Link from "next/link";
import styles from '@/styles/Home.module.css'
import { MainLayout } from '@/components/layouts/MainLayout';

export default function Contact() {
    return (
        <MainLayout>    
            <div className={styles.center}>
              <h1>Mi App - Contact</h1>
            </div>
            <div>
              Ir a <Link href="/">Home</Link>
            </div>
        </MainLayout>
      )
}
