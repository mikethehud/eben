import axios from "axios";
import config from "../../config.js";

const selectProject = (slug) => {
  return { type: "SELECT_CURRENT_PROJECT", payload: slug }
}

const fetchProjects = (slug = "") => {
  return function(dispatch) {
    dispatch({ type: "FETCH_PROJECTS_START" });

    return axios.get(config.api.baseUrl+"/projects/rows?order[sort]=ASC")
      .then((response) => {
        let data = response.data && response.data.data;
  			dispatch({ type: "FETCH_PROJECTS_FULFILLED", payload: data })

        // Change current project if slug is set
        if(slug)
          dispatch(selectProject(slug));
  		})
      .catch(err => {
        dispatch({ type: "FETCH_PROJECTS_REJECTED", payload: err })
      })
  }
}

export {
  fetchProjects,
  selectProject
}
