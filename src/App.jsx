import { useState, useEffect } from "react";
import Header from "./Header";
import Articles from "./Articles";
import { Route, Routes } from "react-router-dom";
import Topic from "./Topic";
import { getArticles } from "../Api";

function App() {
	const [articles, setArticles] = useState([]);
	useEffect(() => {
		getArticles().then((articles) => {
			setArticles(articles);
		});
	}, []);
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Articles />} />
				<Route path="/articles/:topic" element={<Topic articles={articles} />} />
			</Routes>
		</>
	);
}

export default App;
