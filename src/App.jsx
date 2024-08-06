import { useState, useEffect } from "react";
import Header from "./Header";
import Articles from "./Articles";
import { Route, Routes } from "react-router-dom";
import Topic from "./Topic";
import { getArticles } from "../Api";
import ArticlePreview from "./ArticlePreview";
import FullArticle from "./FullArticle";

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
				<Route
					path="/articles"
					element={
						<Topic articles={articles} />
					}
				/>
				<Route
					path="/articles/:article_id"
					element={<FullArticle />}
				/>
			</Routes>
		</>
	);
}

export default App;
