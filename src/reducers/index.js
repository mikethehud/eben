import { combineReducers } from "redux";

import app from "./appReducer";
import experiences from "./experiencesReducer";
import pages from "./pagesReducer";
import projects from "./projectsReducer";

export default combineReducers({
	experiences,
	pages,
	projects,
	app
})
