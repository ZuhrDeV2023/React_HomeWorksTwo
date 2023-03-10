import React from 'react'
import './bootstrap-5.0.2-dist/js/bootstrap.min.js'
import Header from './components/header'
import Filter from './components/Filter'
import AddStudent from './components/AddStudent'
import Template from './components/Template'

// import './js/data'
// import './js/main'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  return (
    <div className="App container pt-3">
      <Header />
      <Filter />
      <AddStudent />
      <Template />
    </div>
  )
}

export default App
