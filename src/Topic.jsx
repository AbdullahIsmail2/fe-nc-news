import React, { useEffect, useState } from "react";
import ArticlePreview from "./ArticlePreview";
import { getArticlesByTopic } from "../Api";
import { useSearchParams } from "react-router-dom";
import BackButton from "./BackButton";

const Topic = ({ articles }) => {
	const [currentArticles, setCurrentArticles] = useState([]);

	const [searchParams] = useSearchParams();
	const topic = searchParams.get("topic");

	useEffect(() => {
		if (topic) {
			getArticlesByTopic(topic).then((articles) => {
				setCurrentArticles(articles);
			});
		} else setCurrentArticles(articles);
	}, [topic]);

	return (
		<>
			<BackButton />
			<main className="topic-page-container">
				{currentArticles.map((article) => {
					return <ArticlePreview article={article} key={article.article_id} />;
				})}
			</main>
		</>
	);
};

export default Topic;
