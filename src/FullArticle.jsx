import React from "react";
import { useParams } from "react-router-dom";
import { getArticlesById } from "../Api";
import { useEffect, useState } from "react";

const FullArticle = () => {
	const [singleArticle, setSingleArticle] = useState([]);
	const [formattedDate, setFormattedDate] = useState("");
	const { article_id } = useParams();
	console.log(article_id);

	useEffect(() => {
		getArticlesById(article_id).then((article) => {
			console.log(article);
			setSingleArticle(article);
			const date = article.created_at;
			const formattedDate = date.slice(0, date.indexOf("T"));
			setFormattedDate(formattedDate);
		});
	}, [article_id]);

	console.log(singleArticle);
	return (
		<article className="full-article-container">
			<div className="full-article-img-container">
				<img src={singleArticle.article_img_url} alt="" />
			</div>
			<div className="full-article-text-container">
				<p className="full-article-topic">{`Articles > ${singleArticle.topic}`}</p>
				<h4 className="full-article-title">{singleArticle.title}</h4>
				<p className="full-article-author">{singleArticle.author}</p>
				<div>
					<p>{`Votes : ${singleArticle.votes}`}</p>
					<p>{formattedDate}</p>
				</div>
				<p className="full-article-body">{singleArticle.body}</p>
			</div>
		</article>
	);
};

export default FullArticle;
