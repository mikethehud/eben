let initialState = {
	server: false
}

export default function reducer (state=initialState, action) {
	switch(action.type) {
		// Switch to client
		case "BE_CLIENT": {
			return {server: false}
			break;
		}
	}

	return state;
}
