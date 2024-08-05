import React from "react";
import { Link } from "react-router-dom";
const TopicCard = ({ topic }) => {
	topic = topic.toLowerCase();
	return (
		<Link to={`/articles/${topic}`} className="topic-card">
			<h4>{topic} Articles</h4>
		</Link>
	);
};

export default TopicCard;
