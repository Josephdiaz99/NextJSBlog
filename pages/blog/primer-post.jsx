import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../../components/Layout'

const primer = () => {
  return (
    <Layout>
      <h1>Primer Post</h1>
      <Image src="/images/1.jpg" alt="imagen" width={600} height={600} >
      
      </Image>
      {/* con link va rapido entre la misma pagina, solo hay que importarlo */}
      {/* <Link href="/" >
        <a>Volver al inicio</a>
      </Link> */}
    </Layout>
  )
}

export default primer