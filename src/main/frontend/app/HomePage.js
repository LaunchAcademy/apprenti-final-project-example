import React, { Component } from 'react';

class HomePage extends Component {

    render() {
        return (
            <div className= "row">
                <div className="large-6 medium-6 columns primary callout">
                        <div className="style">
                            <a href="/style">
                              <img src='/images/shopbystyle.jpg' alt="Search by Style" width="100%"></img>
                            </a>
                </div>
            </div>
            <div className="large-6 medium-6 columns primary callout">
                    <div className="">
                        <a href="/list?budget=100">
                            <img src='/images/budget.jpg' alt="Browse By Budget" witdh="100%"></img>
                        </a>
                    </div>
                 </div>
                <div className="large-6 medium-6 columns primary callout">
                    <div className="size">
                        <a href="/size">
                        <img src='/images/size.jpg' alt="Add Your Size" witdh="100%"></img>
                        </a>
                    </div>
                </div>
                <div className="large-6 medium-6 columns primary callout">
                    <div className="addStyle">
                        <a href="/fashion/new">
                        <img src='/images/addYourStyle.jpg' alt="Add Your Style" witdh="100%"></img>
                        </a>
                    </div>
                </div>
                <div className="large-6 medium-6 columns primary callout">
                    <div className="summerTrends">
                        <a href="/summerTrends">
                            <img src='/images/summer.jpg' alt="Seek Summer Chic"></img>
                        </a>
                    </div>
                </div>
            <div className="large-6 medium-6 columns primary callout">
                    <div className="under100">
                        <a href="/list?budget=100">
                        <img src='/images/under100.jpg' alt="Under 100" witdh="100%"></img>
                        </a>
                    </div>
            </div>
            </div>
        )
    }
}
export default HomePage