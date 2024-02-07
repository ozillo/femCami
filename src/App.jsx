import { useState } from "react";
import "./App.css";
import { Header, Home, Footer } from "./components";
import { Outlet } from "react-router-dom";
import LayoutFlex from "./components/LayoutMain/LayoutFlex";

function App() {
    return (
        <>
            <Header />
            <main>
                <LayoutFlex>
                    <Outlet />
                </LayoutFlex>
            </main>
            <Footer />
        </>
    );
}

export default App;
