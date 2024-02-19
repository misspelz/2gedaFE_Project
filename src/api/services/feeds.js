import _2gedaservice from "..";

const {post, get} = _2gedaservice


export const createFeedsPost = async (postData) => {
	const response = post(`/feed/create_post/`, postData);
	return (await response).data;
};

export const getAllFeedsPost = async () => {
	const response = get(`/feed/create_post/`);
	return (await response).data;
};