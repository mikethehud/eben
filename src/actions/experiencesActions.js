import axios from "axios";
import config from "../../config.js";

const fetchExperiences = () => {
  return function(dispatch) {
    dispatch({ type: "FETCH_EXPERIENCES_START" });

    return axios.get(config.api.baseUrl+"/experiences/rows?order[start_date]=DESC")
      .then((response) => {
        let data = response.data && response.data.data;
  			dispatch({ type: "FETCH_EXPERIENCES_FULFILLED", payload: data })
  		})
      .catch(err => {
        dispatch({ type: "FETCH_EXPERIENCES_REJECTED", payload: err })
      })
  }
}

export {
  fetchExperiences
}
