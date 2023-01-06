import _ from "lodash";
import jsonPlaceholder from "../apis/jsonPlaceholder";
//An overall better solution to solve the overfetching problem
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  // When we call an Action Creator from withing an Action Creator we have to make sure that we dispatch the result of the internal Actual creator this is why dispatch(fetchPosts())

  // We use "await" to make sure that the fetchPosts request is completed and the result is dispatched for our new Action Creator fetchPostsAndUsers before continue to the next line of code
  await dispatch(fetchPosts());
  // getState gives us access to all the data inside of redux
  // The second argument of the lodash map will give us and array of all of "userId"
  //uniq is going to return an [] with just the unique user ids
  const userIds = _.uniq(_.map(getState().posts, "userId"));
  //the reason we don't have to put "await" before dispatch is because we don't care to be waiting for each user to be fetched, because we don't any other logic after our forEach, if there were any code after the forEach then we could've use the "await" keyword  !!!!!!"await" doesn't work with forEach instead we could do this code if we want to use "await" :
  // await Promise.all(userIds.map((id) => dispatch(fetchUser(id)))) or userIds.map((id) => dispatch(fetchUser(id)))
  userIds.forEach((id) => dispatch(fetchUser(id)));
};

export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get("/posts");

  dispatch({ type: "FETCH_POSTS", payload: response.data });
};
//id is the id of the user we want to fetch
export const fetchUser = (id) => async (dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({ type: "FETCH_USER", payload: response.data });
};

//!!!Problem with memoization is that if a user gets updated with this action creator will not see the changes because the
// export const fetchUser = (id) => (dispatch) => {
//   _fetchUser(id, dispatch);
// };
// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);

//   //FETCH_USER because we are fetching one single user
//   dispatch({ type: "FETCH_USER", payload: response.data });
// });

//Trying to memoize either of the 2 functions will not make only 1 request per id instead we should create another memoized function outside of the action creator ( because it will memoized 1 time and NOT every time we call our action creator of FETCH_USERS) look above
// export const fetchUser = function (id) {
//   return _.memoize(async function (dispatch) {
//     const response = await jsonPlaceholder.get(`/users/${id}`);

//     //FETCH_USER because we are fetching one single user
//     dispatch({ type: "FETCH_USER", payload: response.data });
//   });
// };
