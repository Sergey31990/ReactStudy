// import React from "react";
// import Profile from "./Profile";
// import * as axios from "axios";
// import {connect} from "react-redux/";
// import {setUserProfile} from "../../redux/profile-reducer";
// import {withRouter} from "react-router-dom";
//
//
// class ProfileContainer extends React.Component{
//     componentDidMount() {
//
//     }
//
//     render(){
//         return (
//             <Profile />
//         )
//     }
// }
//
// let mapStateToProps = (state) => ({
//     profile: state.profilePage.profile
// })
//
// let WithUrlDataContainerComponent = withRouter(ProfileContainer);
//
// export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);