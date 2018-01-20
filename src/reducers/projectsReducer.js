import moment from "moment";

let initialState = {
	fetching: false,
	fetched: false,
	lastFetched:null,
	current:null,
	all: []
}

export default function reducer (state=initialState, action) {
	switch(action.type) {
		// Start fetching the projects
		case "FETCH_PROJECTS_START": {
			return {...state, fetching: true}
			break;
		}
		// Projects are received
		case "FETCH_PROJECTS_FULFILLED": {
			let lastFetched = + Date.now();
			return {...state, fetching:false, fetched:true, lastFetched:lastFetched, all:action.payload}
			break;
		}
		// Project fetching failed..
		case "FETCH_PROJECTS_REJECTED": {
			return {...state, fetching:false, error:action.payload}
			break;
		}
		// Select a project
		case "SELECT_CURRENT_PROJECT": {
			// find current project
			let currentProject = state.all.find((item) => item.slug == action.payload);
			return {...state, current:currentProject}
			break;
		}
	}

	return state;
}
