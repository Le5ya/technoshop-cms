import { API_URI } from "./const.js"
export const getGoods = async () => {
	const response = await fetch(`${API_URI}goods/?nopage=true`);
	if (response.ok) {
		return response.json()
	}
	throw new Error(response.status);
}
export const getategory = async () => {
	const response = await fetch(`${API_URI}category`);
	if (response.ok) {
		return response.json()
	}
	throw new Error(response.status);
}