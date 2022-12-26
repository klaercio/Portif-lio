import { Routes, Route, BrowserRouter} from 'react-router-dom'
import Header from './components/Header'
<<<<<<< HEAD
import AboutMe from './pages/AboutMe'
=======
>>>>>>> ba3fdbf07a88ab8317ec278a038a745061bf76da
import Home from './pages/Home'

export default function Router() {
    return (
        <Routes>
            <Route path='/' element={<Header/>}>
                <Route index element={<Home/>}/>
<<<<<<< HEAD
                <Route path='/AboutMe' element={<AboutMe/>}/>
=======
                <Route path='/AboutMe' element={<Home/>}/>
>>>>>>> ba3fdbf07a88ab8317ec278a038a745061bf76da
                <Route path='/Projects' element={<Home/>}/>
            </Route>
        </Routes>
    )
}