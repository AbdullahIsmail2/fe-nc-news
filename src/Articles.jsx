import React, { useEffect, useState } from "react";

import TopicCard from "./TopicCard";

const Articles = () => {
	return (
		<div>
			<h2>Browse Articles By Topic</h2>

			<section className="topic-cards-container">
				<TopicCard topic="Cooking" />
				<TopicCard topic="Football" />
				<TopicCard topic="Coding" />
				<TopicCard topic="All" />
			</section>
		</div>
	);
};

export default Articles;
