import React from 'react'
import {BrowserRouter } from 'react-router-dom'
import { Routes,Route } from 'react-router-dom'
import {Feed} from './pages/Feed'
import Header from './components/Header'
import VideoDetail from './pages/VideoDetail'
import moment from 'moment/moment'
import 'moment/locale/tr'
import SearchResults from './pages/SearchResults'

moment.locale('tr')

const App = () => {
  return (
    <BrowserRouter>
    <Header></Header>
    <Routes>
      <Route path='/' element={<Feed/>}/>
      <Route path='/watch' element={<VideoDetail/>}/>
      <Route path='/results' element={<SearchResults/>}/>
    </Routes>

    </BrowserRouter>
  )
}

export default App