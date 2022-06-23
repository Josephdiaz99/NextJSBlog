import Layout from "../../components/Layout"

const primer = ({data}) => {
  return (
    <Layout>
      <h1>{data.id} - {data.title} </h1>
        <p>{data.body}</p>
    </Layout>
  )
}

export default primer

export async function getStaticPaths(){
  try {
    const res=await fetch('https://jsonplaceholder.typicode.com/posts/')
    const data=await res.json()
    const paths= data.map(({id})=>({params:{id:`${id}`}}))
    return{
      paths,
      fallback:false,
    }
  } catch (error) {
    console.log(error)
  }
}

export async function getStaticProps({params}){
  try {
    const res= await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    const data= await res.json()
    console.log(data)
    return {
      props:{
        data
      }
    }

  } catch (error) {
    console.log(error)
  }
}
