import axios from "axios";

const newsApi = axios.create({
	baseURL: "https://news-application-7i45.onrender.com",
});

export const getArticles = () => {
	return newsApi.get("/api/articles").then(({ data: { articles } }) => {
		return articles;
	});
};

export const getArticlesByTopic = (topic) => {
	return newsApi
		.get(`/api/articles?topic=${topic}`)
		.then(({ data: { articles } }) => {
			return articles;
		});
};

export const getArticlesById = (id) => {
	return newsApi.get(`/api/articles/${id}`).then(({ data: { article } }) => {
		return article;
	});
};

