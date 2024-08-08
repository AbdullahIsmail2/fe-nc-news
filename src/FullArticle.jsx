import React from "react";
import { useParams } from "react-router-dom";
import { getArticlesById, getCommentsByArticleId, voteOnArticle } from "../Api";
import { useEffect, useState } from "react";
import BackButton from "./BackButton";
import CommentCard from "./CommentCard";

const FullArticle = () => {
	const [singleArticle, setSingleArticle] = useState([]);
	const [comments, setComments] = useState([]);
	const [hasVoted, setHasVoted] = useState(false);
	const [formattedDate, setFormattedDate] = useState("");
	const { article_id } = useParams();

	useEffect(() => {
		getArticlesById(article_id).then((article) => {
			setSingleArticle(article);
			const date = article.created_at;
			const formattedDate = date.slice(0, date.indexOf("T"));
			setFormattedDate(formattedDate);
		});
	}, [article_id]);

	useEffect(() => {
		if (Object.keys(singleArticle).length > 0) {
			getCommentsByArticleId(singleArticle.article_id).then((comments) => {
				setComments(comments);
			});
		}
	}, [singleArticle]);

	const handleVote = () => {
		console.log(singleArticle.article_id);
		if (!hasVoted) {
			voteOnArticle(singleArticle.article_id, 1).then((article) => {
				setSingleArticle(article);
				setHasVoted(true)
			});
		} else {
			voteOnArticle(singleArticle.article_id, -1).then((article) => {
				setSingleArticle(article);
				setHasVoted(false)
			});
		}

		// }
	};

	return (
		<>
			<BackButton />
			<article className="full-article-container">
				<div className="full-article-img-container">
					<img src={singleArticle.article_img_url} alt="" />
				</div>
				<div className="full-article-text-container">
					<p className="full-article-topic">{`Articles > ${singleArticle.topic}`}</p>
					<h4 className="full-article-title">{singleArticle.title}</h4>
					<p className="full-article-author">{singleArticle.author}</p>
					<div>
						<p>{formattedDate}</p>
						<div style={{ display: "flex", gap: "20px" }}>
							<p>{`Votes : ${singleArticle.votes}`}</p>
							<button style={{ cursor: "pointer" }} onClick={handleVote}>
								{!hasVoted ? 'Vote' : 'Unvote'}
							</button>
						</div>
					</div>
					<p className="full-article-body">{singleArticle.body}</p>
				</div>
				<div
					className="full-article-comments-container"
					style={{ width: "85%", margin: "0 auto", marginTop: "2rem" }}
				>
					<h4 style={{ marginBottom: "2rem" }}>Comments</h4>
					{comments.map((comment) => (
						<CommentCard comment={comment} />
					))}
				</div>
			</article>
		</>
	);
};

export default FullArticle;
