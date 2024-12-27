import { createRoot } from 'react-dom/client';
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/loyout/Layout.jsx";
import {routes} from "./routes/routes.jsx";

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        {/*<App />*/}
        <Routes>
            <Route path={"/"} element={<Layout/>}>
                {routes.map((route) => <Route
                    key={route.path}
                    path={route.path}
                    element={route.element} />)}

                <Route path={"" }>

                </Route>
            </Route>
        </Routes>
    </BrowserRouter>,
);