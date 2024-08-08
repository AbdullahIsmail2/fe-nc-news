import React from "react";
import { useParams } from "react-router-dom";
import {
	getArticlesById,
	getCommentsByArticleId,
	postNewComment,
	voteOnArticle,
} from "../Api";
import { useEffect, useState } from "react";
import BackButton from "./BackButton";
import CommentCard from "./CommentCard";

const FullArticle = () => {
	const [singleArticle, setSingleArticle] = useState([]);
	const [comments, setComments] = useState([]);
	const [hasVoted, setHasVoted] = useState(false);
	const [showCommentInput, setShowCommentInput] = useState(false);
	const [formattedDate, setFormattedDate] = useState("");
	const [name, setName] = useState("");
	const [newComment, setNewComment] = useState("");
	const [successfulComment, setSuccessfulComment] = useState(false)

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
		if (!hasVoted) {
			voteOnArticle(singleArticle.article_id, 1).then((article) => {
				setSingleArticle(article);
				setHasVoted(true);
			});
		} else {
			voteOnArticle(singleArticle.article_id, -1).then((article) => {
				setSingleArticle(article);
				setHasVoted(false);
			});
		}
	};

	const handleComment = () => {
		setShowCommentInput(true)
		setSuccessfulComment(false)
	};

	const postComment = () => {
		const commentToPost = { author: name, body: newComment };
		postNewComment(commentToPost, singleArticle.article_id).then((comment) => {
			setComments([comment, ...comments]);
			setShowCommentInput(false)
			setSuccessfulComment(true)
			setName('')
			setNewComment('')
		});
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
								{!hasVoted ? "Vote" : "Unvote"}
							</button>
						</div>
					</div>
					<p className="full-article-body">{singleArticle.body}</p>
				</div>
				<div
					className="full-article-comments-container"
					style={{ width: "85%", margin: "0 auto", marginTop: "2rem" }}
				>
					<h4 style={{ marginBottom: "1rem" }}> Comments</h4>
					<button style={{ marginBottom: "2rem" }} onClick={handleComment}>
						New Comment
					</button>

					{showCommentInput && (
						<>
							<div
								style={{
									display: "flex",
									flexDirection: "column",
									width: "250px",
								}}
							>
								<label htmlFor="author" style={{ marginRight: "10px" }}>
									Name:
								</label>
								<input
									type="text"
									value={name}
									onChange={(e) => setName(e.target.value)}
								/>
							</div>
							<div>
								<label
									htmlFor="comment"
									style={{ marginRight: "10px", display: "block" }}
								>
									Comment:
								</label>
								<textarea
									cols="40"
									rows="10"
									style={{ padding: "12px" }}
									name="comment"
									id="comment"
									value={newComment}
									onChange={(e) => setNewComment(e.target.value)}
								></textarea>
							</div>
							<button onClick={postComment}>Comment</button>
						</>
					)}
					{successfulComment && (
						<p>Your comment was added</p>
					)}
					{comments.map((comment) => (
						<CommentCard
							comment={comment}
							singleArticle={singleArticle}
							setSingleArticle={setSingleArticle}
						/>
					))}
				</div>
			</article>
		</>
	);
};

export default FullArticle;
