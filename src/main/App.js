import React from 'react';

import 'bootswatch/dist/flatly/bootstrap.css'
import '../custom.css'
import 'toastr/build/toastr.css'

import 'toastr/build/toastr.min.js'

import Rotas from './route';
import Navbar from '../components/navbar';

class App extends React.Component {
 
  render(){
    return (
      <>
        <Navbar/>
        <div className="container">
          <Rotas/>
        </div>
      </>
    )
  }
}

export default App
