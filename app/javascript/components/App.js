import React from 'react'
import { Link } from 'react-router-dom'
import Breeds from '../components/Breeds'
 
class App extends React.Component {
  render() {
    return (
        <div>
            <div className="text-lg text-white text-center">
                He took a dusty book off the shelf..."Nekonomicon" in old carved letters into the leather. The book appeared to breathe and shift of its own accord, a living tome. Turn the page and take a look...
            </div>
            <div className="flex-1 flex justify-center items-center p-4">
                <Link to="/breeds">
                    <button className="btn btn-yellow">Breeds</button>
                </Link>
                <Link to="/cats">
                    <button className="btn btn-purple">Cats</button>
                </Link>
            </div>
        </div>
    )
  }
}
 
export default App