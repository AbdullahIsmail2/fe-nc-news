import React from "react";
import { Link } from "react-router-dom";
const TopicCard = ({ topic }) => {
	const url = topic ? `/articles?topic=${topic.toLowerCase()}` : `/articles`;
	return (
		<Link to={url} className="topic-card">
			<h4>{topic} Articles</h4>
		</Link>
	);
};

export default TopicCard;
