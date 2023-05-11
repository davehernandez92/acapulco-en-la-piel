import Layout from '@/components/layout'
import Link from 'next/link'

export default function Page404() {
  return (
    <Layout title='Pagina no encontrada'>
        <h1>
            Algo salio mal primo
        </h1>
        <Link href="/">Vuelve al inicio</Link>
    </Layout>

  )
}
