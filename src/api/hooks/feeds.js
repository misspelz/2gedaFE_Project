import { useMutation, useQuery } from "@tanstack/react-query";
import { createFeedsPost, getAllFeedsPost } from "api/services/feeds";

const feedsKey = "feed";

export const useCreateFeedsPost = (options) => {
	const mutation = useMutation({
		mutationFn: (postData) => createFeedsPost(postData),
		onSuccess: (data) => {
			options.onSuccess && options.onSuccess(data);
		},
		onError: (error) => {
			options.onError && options.onError(error);
		},
	});

	return {
		createPost: mutation.mutate,
		isSuccess: mutation.isSuccess,
		isError: mutation.isError,
		isLoading: mutation.isPending,
	};
};

export const useGetAllFeeds = () => {
	const response = useQuery({
		queryKey: [feedsKey],
		queryFn: () => getAllFeedsPost(),
	});

	return {
		isError: response.isError,
		isLoading: response.isLoading,
		isSuccess: response.isSuccess,
		data: response.data ? response.data : undefined,
	};
};
