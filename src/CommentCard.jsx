import React, { useContext } from "react";
import { UserContext } from "./contexts/User";
import { deleteCommentByCommentId, getCommentsByArticleId } from "../Api";

const CommentCard = ({ comment, comments, setComments }) => {
	const date = comment.created_at;
	const formattedDate = date.slice(0, date.indexOf("T"));

	const { user } = useContext(UserContext);

	const handleDeleteComment = () => {
		if (user === comment.author) {
			deleteCommentByCommentId(comment.comment_id);
			getCommentsByArticleId(comment.article_id).then((comments) => {
				setComments(comments);
			});
		}
	};

	return (
		<div className="commment-card" style={{ marginBottom: "2.5rem" }}>
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					marginBottom: "0.5rem",
				}}
			>
				<p style={{ fontWeight: "600" }}>{comment.author}</p>
				<div style={{ display: "flex", gap: "20px" }}>
					<p>{formattedDate}</p>
					<button onClick={handleDeleteComment}>Delete</button>
				</div>
			</div>
			<p>{comment.body}</p>
		</div>
	);
};

export default CommentCard;
