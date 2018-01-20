import axios from "axios";
import config from "../../config.js";

const fetchPage = (page) => {
  return function(dispatch) {
    dispatch({ type: "FETCH_PAGE_START" });

    return axios.get(config.api.baseUrl+"/pages/rows?filters[name][eq]="+page)
      .then((response) => {
        let data = response.data && response.data.data;
        if(response.data && response.data.data && response.data.data.length > 0) {
          dispatch({ type: "FETCH_PAGE_FULFILLED", payload: response.data.data[0] })
        }
  			else {
          dispatch({ type: "FETCH_PAGE_FULFILLED", payload: {} })
        }
  		})
      .catch(err => {
        dispatch({ type: "FETCH_PAGE_REJECTED", payload: err })
      })
  }
}

export {
  fetchPage
}
