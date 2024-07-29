import { Link } from 'react-router-dom'
import Navbar from './components/Navbar'


function App() {
  return (
    <>
      <Navbar />
      <h1>Hello React</h1>
      <Link to="/shop">Shop</Link>
    </>
  )
}

export default App
