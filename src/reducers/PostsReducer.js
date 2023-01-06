export default (state = [], action) => {
  // reducers are pure they'renot supposed to return other than the state or action for example(NOT values From DOM or making api request or )
  //BAD! return axios.get("...")
  //BAD! return dcument.querySelector("input")
  //Good!
  //   return state + action;

  // bad! Must NOT mutate the "state" input in our reducer like doing state[0] = "Sam" or state.pop() or if with object state.name = "Sam" or state.age = 30
  // IT is actually possible to mutate the "state" argument in the reducer but just in some corner case (if we return the state or a state modified like state.name = "Sam" the redux library will not update the rest of the react application and it will not update the state because of (check redux library src/combineReducers.ts liine 171 let hasChanged))

  // by using ceratin methods on arrays and objects instead of others like instead of state.push("hi") we use [...state,"hi"] or instead of state.pop() use state.filter(item => item !== "hi") to exclude from array

  //instead of using IF statements is better to use switch

  //   if (action.type == "FETCH_POSTS") {
  //     return action.payload;
  //   }
  //in case the action.type is not "FETCH_POSTS" we initialize state = [] because the reducer must not return un undefined value
  switch (action.type) {
    case "FETCH_POSTS":
      return action.payload;
    default:
      return state;
  }
};
