import Layout from '@/components/layout'
import Link from 'next/link'

export default function Page404() {
  return (
    <Layout title='Pagina no encontrada'>
        <h1 className='error'>
            Algo salio mal primo!!!
        </h1>
        <Link className='errorLink' href="/">Vuelve al inicio</Link>
    </Layout>

  )
}
