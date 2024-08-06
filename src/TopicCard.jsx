import React from "react";
import { Link } from "react-router-dom";
const TopicCard = ({ topic }) => {
	return (
		<Link to={`/articles/${topic.toLowerCase()}`} className="topic-card">
			<h4>{topic} Articles</h4>
		</Link>
	);
};

export default TopicCard;
