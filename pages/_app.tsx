import '../styles/globals.css'
import Navbar from '../components/Navbar';
import { Toaster } from 'react-hot-toast';
import { UserContext } from '../lib/context';
import { GetServerSideProps } from "next";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <UserContext.Provider value={{ user: {}, username: "josh" }}>
        <Navbar />
        <Component {...pageProps} />
        <Toaster />
      </UserContext.Provider>
    </>
  )
}

export default MyApp
