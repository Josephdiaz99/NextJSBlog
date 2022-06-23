import Layout from '../components/Layout'
import utilStyles from '../styles/utils.module.css'
const home = () => {
  return (
 <Layout title="Home | Next.js" description="Este es el home" home >
  <section className={utilStyles.headingMd}>
        <p>Soy Josephmar Diaz, este es mi nuevo Blog</p>
        <p>
          (Es un sitio Web simple, pero sirve para mi practica!{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>

 </Layout>
  )
}

export default home