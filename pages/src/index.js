import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import App from "./App";
import MainGallery from "./components/gallery-page";
import RootBox from "./components/RootBox";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<RootBox>
				<Routes>
					<Route index element={ <App/> }/>
					<Route path="gallery" element={ <MainGallery/> }/>
				</Routes>
				{/* <Footer /> */ }
			</RootBox>
		</BrowserRouter>
	</React.StrictMode>
);

reportWebVitals();
