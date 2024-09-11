import React from 'react'
import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'

import NotFound from './pages/NotFound'
import RootLayOut from './components/RootLayOut'
import CategoryMovie from './pages/CategoryMovie'





const App = () => {


  return (
    <>
      <Routes>
        <Route path='/' element={<RootLayOut />} >
         <Route index element={<HomePage />} />
         <Route path = 'movie/:category' element={<CategoryMovie />} />

          <Route path='*' element={<NotFound />} />
     

        </Route>

      </Routes>
    </>
  )
}

export default App
