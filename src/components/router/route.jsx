import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'
import Login from '../../pages/login/loginPage'
import SearchingPage from "../../pages/dashboard/searchSong"

function RouterApp(){
    const isLogIn = localStorage.getItem("isLogIn")

    console.log(isLogIn)
    return (
        <Router>
            <Routes>
                <Route path="/dashboard" element={<SearchingPage />} />
                <Route exact path="/" element={<Login />}/>
            </Routes>
        </Router>
    )
}

export default RouterApp