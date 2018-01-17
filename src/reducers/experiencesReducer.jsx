import moment from "moment";

let initialState = {
	fetching: false,
	fetched: false,
	lastFetched:null,
	all: []
}

export default function reducer (state=initialState, action) {
	switch(action.type) {
		// Start fetching the experiences
		case "FETCH_EXPERIENCES_START": {
			return {...state, fetching: true}
			break;
		}
		// Experiences are received
		case "FETCH_EXPERIENCES_FULFILLED": {
			let lastFetched = + Date.now();
			return {...state, fetching:false, fetched:true, lastFetched:lastFetched, all:action.payload}
			break;
		}
		// Experience fetching failed..
		case "FETCH_EXPERIENCES_REJECTED": {
			return {...state, fetching:false, error:action.payload}
			break;
		}
	}

	return state;
}
