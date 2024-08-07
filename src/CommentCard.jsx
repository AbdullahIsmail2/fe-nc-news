import React from "react";

const CommentCard = ({comment}) => {
  const date = comment.created_at;
  const formattedDate = date.slice(0, date.indexOf("T"));
	
	return (
		<div className="commment-card" style={{marginBottom: '2.5rem'}}>
			<div style={{display: "flex", justifyContent: 'space-between', marginBottom: '0.5rem'}}>
				<p style={{fontWeight: '600'}}>{comment.author}</p>
				<p>{formattedDate}</p>
			</div>
			<p>{comment.body}</p>
		</div>
	);
};

export default CommentCard;
