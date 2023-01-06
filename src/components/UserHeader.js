import React, { useEffect } from "react";
import { connect } from "react-redux";
// import { fetchUser } from "../actions";

const UserHeader = (props) => {
  // useEffect(() => {
  //   props.fetchUser(props.userId);
  // }, []);
  // Instead of retreiving all the users array and then find the one inside the component we will send 1 user to the component using the mapStateToProps function

  // const { user } = props.user; destructuring this way BAD! gives error of user is undefined
  if (!props.user) {
    return null;
  }
  return <div className='header'>{props.user.name}</div>;
};
//ownProps are the props that are about to be sent in the Component
const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find((user) => user.id === ownProps.userId) };
};

export default connect(mapStateToProps)(UserHeader);

// class UserHeader extends React.Component {
//   componentDidMount() {
//     this.props.fetchUser(this.props.userId);
//   }
//   render() {
//     const user = this.props.users.find((user) => user.id === this.props.userId);
//     if (!user) {
//       return null;
//     }
//     return <div className='header'>{user.name}</div>;
//   }
// }
// const mapStateToProps = (state) => {
//   return { users: state.users };
// };

// export default connect(mapStateToProps, { fetchUser })(UserHeader);
