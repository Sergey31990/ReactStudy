import React from "react";
import * as axios from "axios";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import ProfileInfo from "./ProfileInfo";

class ProfileContainer extends React.Component{
    componentDidMount() {
        let userId = this.props.match.params.userId;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setUserProfile(response.data);
            })
    }

    render(){
        debugger;
        console.log(this.props);
        return (
            <ProfileInfo {...this.props}
                         fullName={this.props.profile.fullName}
                         aboutMe={this.props.profile.aboutMe}
                         photo={this.props.profile.photos}
            />
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);