import React from "react";

const WelcomePage = (props) => {
    return (
        <div className="grid-container">
            <div className="grid-x grid-padding-x grid-padding-y">
                <div className="cell">
                    <h1 className="welcome-banner">Welcome to My Trails!!</h1>
                </div>
                <div className="cell grid-x grid-padding-x">
                    <div className="cell auto">
                            My Trails is an app that shows hiking trails in your state,
                            that users can update and add photos, or upload new trails that are not listed!
                    </div>
                    <div className="cell small-3 medium-4 large-6">
                        picture
                    </div>
                </div>
                <div className="cell grid-x grid-padding-x">
                    <div className="cell small-3 medium-4 large-6">
                        picture
                    </div>
                    <div className="cell auto">
                        Logged in users can add trails to their wishlist so they can look forward to the path ahead!
                    </div>
                </div>
                <div className="cell grid-x grid-padding-x">
                    <div className="cell auto">
                        Logged in users can also keep track of trails they have trekked!
                        The completed trails being shown in your completed trails list
                    </div>
                    <div className="cell small-3 medium-4 large-6">
                        picture
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WelcomePage