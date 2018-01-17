import moment from "moment";

let initialState = {
	items: {}
}

export default function reducer (state=initialState, action) {
	switch(action.type) {
		// Start fetching the experiences
		case "FETCH_PAGE_START": {
			return {...state}
			break;
		}
		// Products are received
		case "FETCH_PAGE_FULFILLED": {
			let lastFetched = + Date.now();

			let pages = state.items;
			let page = action.payload;

			pages[page.name] = {
				lastFetched: lastFetched,
				content: page.content
			}

			return {...state, items: pages }
			break;
		}
		// Product fetching failed..
		case "FETCH_PAGE_REJECTED": {
			return {...state, error:action.payload}
			break;
		}
	}

	return state;
}
