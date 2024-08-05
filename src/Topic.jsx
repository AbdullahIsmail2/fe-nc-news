import React, { useDebugValue, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
      setCurrentArticles(articles)
    }
	}, [topic]);

	return (
		<div>
			{currentArticles.map(article => (
          <div>
            <h1>{article.title}</h1>
            <p>{article.author}</p>
          </div>
      ))}
		</div>
	);
};

export default Topic;
