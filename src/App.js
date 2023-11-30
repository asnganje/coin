import './App.css'
import CryptoDetails from "./components/details/CryptoDetails";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {getCoins} from './redux/store'


const App = () => {
    const dispatch = useDispatch()
    useEffect(()=> {
        dispatch(getCoins())
    }, [dispatch])

    return(
        <BrowserRouter>
            <main className="App">
                <nav>
                    <Navbar />
                </nav>
                <section className="content">
                    <Routes>
                        <Route path="/" element = {<Home/>} />
                        <Route path="/:id" element = {<CryptoDetails/>}/>
                    </Routes>
                </section>
            </main>
        </BrowserRouter>
    )
}
export default App;