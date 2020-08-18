import Head from 'next/head'
import styles from '../styles/Home.module.css'
import fetch from 'node-fetch'


const Home = ({posts}) => {
  return (
    <div>
      <p>Welcome to Home page</p>
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch('http://hometoos.com/kidsrctoys/wp-json/menus/v1/menus/mainMenu')
  const posts = await res.json()

  return {
    props: {
      posts,
    },
  }
}


export default Home;
