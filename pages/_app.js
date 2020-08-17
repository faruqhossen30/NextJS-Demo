import '../styles/globals.css'
import Layout from '../components/Layout'
import fetch from 'isomorphic-unfetch'

function MyApp({ Component, pageProps, menus }) {
  return (
    <Layout menus={menus}>
      <p>Menu</p>
      <Component {...pageProps} />
    </Layout>
  )
}

// MyApp.getInitialProps = async (context) {

//   const res = await fetch('http://hometoos.com/kidsrctoys/wp-json/menus/v1/menus/mainMenu')
//   const menus = await res.json()

//   return {
//     menus, // will be passed to the page component as props
//   }
// }
MyApp.getInitialProps = async (ctx) => {
  const res = await fetch('http://hometoos.com/kidsrctoys/wp-json/menus/v1/menus/mainMenu')
  const menus = await res.json()
  return { menus: menus.items }
}

export default MyApp
