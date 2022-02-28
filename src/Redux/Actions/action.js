import * as types from '../ActionTypes';

export const fetchTeams = (year) => dispatch => {
  console.log(year)
  fetch(`https://api.football-data.org/v2/competitions/2021/teams?season=${year}`, {
    headers: {
      "X-Auth-Token": "f51730bb99764e75a62bf28d78002060"
    }
  })
    .then(result => result.json())
    .then(data => dispatch(fetchSuccess(true, data)))
  // .catch(err => dispatch(fetchSuccess(false, err.message)))
}

const fetchSuccess = (isSuccess, data) => {
  if (isSuccess) {
    return {
      type: types.FETCH_TEAMS,
      data: data
    }
  }
  // } else {
  //     return {
  //       type: types.EXECUTE_SEARCH_FAIL,
  //       errorMessage: data
  //     }
  //   }
}

// list of teams, pick team, pick match details