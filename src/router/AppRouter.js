import {HashRouter , Navigate, Outlet, Route, Routes, useLocation} from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Main from "../pages/Main";
import Navbar from "../components/Navbar";
import {AuthContext} from "../context/AuthContext";
import CreatePost from "../pages/CreatePost";
import {useContext} from "react";
import EditPost from "../pages/EditPost";
import DetailPage from "../pages/DetailPage";
import Profile from "../pages/Profile";
import AuthorProfile from "../pages/AuthorProfile";

function AppRouter() {
    const {currentUser} = useContext(AuthContext);


    function LoggedInRouter() {
        let location = useLocation();


        if (!currentUser) {
            return <Navigate to="/login" state={{from: location}} replace/>;
        } else {
            return <Outlet/>;
        }
    }

    function LoggedOutRouter() {
        let location = useLocation();


        if (currentUser) {
            return <Navigate to="/" state={{from: location}} replace/>;
        } else {
            return <Outlet/>;
        }
    }

    return (
        <HashRouter>
            <Navbar/>
            <Routes>

                <Route path="/" element={<Main/>}/>


                <Route element={<LoggedOutRouter/>}>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/login" element={<Login/>}/>
                </Route>


                <Route element={<LoggedInRouter/>}>
                    <Route path="/create-post" element={<CreatePost/>}/>
                    <Route path="/detail-page/:id" element={<DetailPage/>}/>
                    <Route path= "/edit-post/:id" element={<EditPost/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/author-profile/:authorName" element={<AuthorProfile/>}/>

                </Route>
            </Routes>

        </HashRouter>
    );
}

export default AppRouter;