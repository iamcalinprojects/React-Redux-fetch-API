import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPostsAndUsers } from "../actions";
import UserHeader from "./UserHeader";

const PostList = (props) => {
  useEffect(() => {
    // props.fetchPosts();
    props.fetchPostsAndUsers();
  }, []);

  return props.posts.map((post) => {
    return (
      <div className='ui relaxed divided list' key={post.id}>
        <div className='item'>
          <i className='large middle aligned  icon user'></i>
          <div className='content'>
            <div className='description'>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
            <UserHeader userId={post.userId}></UserHeader>
          </div>
        </div>
      </div>
    );
  });
};
//the state argument is from the reducers from the combineReducers function
const mapStateToProps = (state) => {
  return { posts: state.posts, state: state };
};
export default connect(mapStateToProps, { fetchPostsAndUsers })(PostList);

// class PostList extends React.Component {
//   componentDidMount() {
//     this.props.fetchPosts();
//   }
//   renderList() {
//     return this.props.posts.map((post) => {
//       return (
//         <div className='item' key={post.id}>
//           <i className='large middle aligned  icon user'></i>
//           <div className='content'>
//             <div className='description'>
//               <h2>{post.title}</h2>
//               <p>{post.body}</p>
//             </div>
//             <UserHeader userId={post.userId}></UserHeader>
//           </div>
//         </div>
//       );
//     });
//   }

//   render() {
//     console.log("props", this.props);
//     return <div className='ui relaxed divided list'>{this.renderList()}</div>;
//   }
// }
// const mapStateToProps = (state) => {
//   return { posts: state.posts };
// };
// export default connect(mapStateToProps, { fetchPosts })(PostList);
