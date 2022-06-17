// export const API_URL = process.env.REACT_APP_SERVER_URL;

export const API_URL =
	process.env.NODE_ENV === "production"
		? "https://gear-space.herokuapp.com"
		: "http://localhost:5000";
