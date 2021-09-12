import Footer from '../components/common/Footer'
import Top from '../components/common/Top'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className="app">
      <Top/>
      <Component {...pageProps} />
      <Footer/>
    </div>
  )
}

export default MyApp
