import React, { useDebugValue, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const Topic = ({ articles }) => {
	const { topic } = useParams();

	const [currentArticles, setCurrentArticles] = useState([]);

	useEffect(() => {
		if (topic !== "all") {
			const filteredArticles = articles.filter(
				(article) => article.topic === topic
			);
			console.log(filteredArticles);
			setCurrentArticles(filteredArticles);
		} else {
			setCurrentArticles(articles);
		}
	}, [topic]);

	return (
		<main className="topic-page-container">
			{currentArticles.map((article) => {
				const date = article.created_at;
				const formattedDate = date.slice(0, date.indexOf("T"));
				return (
					<article
						key={article.article_id}
						className="article-preview-container"
					>
						<div className="article-preview-img-container">
							<img src={article.article_img_url} />
						</div>
						<div className="article-preview-info-container">
							<div className="article-preview-author-date-container">
								<p>{article.author}</p>
								<p>{formattedDate}</p>
							</div>
							<h4 className="title">{article.title}</h4>
							<Link>Read More</Link>
						</div>
					</article>
				);
			})}
		</main>
	);
};

export default Topic;
