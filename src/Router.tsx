import { Routes, Route, BrowserRouter} from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'

export default function Router() {
    return (
        <Routes>
            <Route path='/' element={<Header/>}>
                <Route index element={<Home/>}/>
                <Route path='/AboutMe' element={<Home/>}/>
                <Route path='/Projects' element={<Home/>}/>
            </Route>
        </Routes>
    )
}