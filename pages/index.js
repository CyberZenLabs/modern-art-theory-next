import React from "react";
// import ReactDOM from "react-dom/client";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import App from "./src/App";
import MainGallery from "./src/components/gallery-page";
import RootBox from "./src/components/RootBox";
// import "./index.css";

export default function Home() {
  return (
    <BrowserRouter>
			<RootBox>
				<Routes>
					<Route index element={ <App/> }/>
					<Route path="gallery" element={ <MainGallery/> }/>
				</Routes>
				{/* <Footer /> */ }
			</RootBox>
		</BrowserRouter>
  )
}
