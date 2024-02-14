import React from "react";

const WelcomePage = (props) => {
    return (
        <div className="welcome-page">
            <div className="intro-div">
                <p className="intro">
                    My Trails is an app that shows hiking trails in your state,
                    that users can update and add photos, or upload new trails that are not listed!
                </p>
            </div>
            <div className="wish-list-desc-div">
                <p className="wish-list-desc">
                    Logged in users can add trails to their wishlist so they can look forward to the path ahead!
                </p>
            </div>
            <div className="completed-desc-div">
                <p className="completed-desc">
                    Logged in users can also keep track of trails they have trekked!
                    The completed trails being shown in your completed trails list
                </p>
            </div>
        </div>
    )
}

export default WelcomePage