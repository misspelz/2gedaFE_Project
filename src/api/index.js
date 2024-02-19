import axios from "axios";

const _2gedaservice = axios.create({
	baseURL: "https://development.2geda.net/api",
	maxBodyLength: Infinity,
});

export const setupAxios = () => {
	const token = localStorage.getItem("authToken");
    _2gedaservice.defaults.headers.common["Authorization"] = `Token ${token}`;
};

export default _2gedaservice;
