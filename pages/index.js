import Head from 'next/head'
import Header from "../components/Header"
import Banner from "../components/Banner"
import AllProducts from "../components/AllProducts"
export default function Home({ products }) {
  return (
    <>
      <Head>
        <title>Amazon_clone</title>
      </Head>
      <Header />
      <main className="max-screen-2xl mx-auto">
        <Banner />
        <AllProducts products={products} />
      </main>
    </>
  );
}
 
export async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
  return {
    props: {
      products
    }
  }
}