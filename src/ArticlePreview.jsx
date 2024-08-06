import React from "react";
import { Link } from "react-router-dom";

const ArticlePreview = ({ article, setSingleArticle }) => {
	const date = article.created_at;
	const formattedDate = date.slice(0, date.indexOf("T"));

	return (
		<Link
			key={article.article_id}
			className="article-preview-container"
			to={`/articles/${article.article_id}`}
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
				<p>Read More</p>
			</div>
		</Link>
	);
};

export default ArticlePreview;
