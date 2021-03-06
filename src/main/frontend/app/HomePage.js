import React, { Component } from 'react';
import Navbar from'./Navbar'

class HomePage extends Component {

   render() {
       return (
       <div>
       <div>
       <Navbar/>
       </div>
        
           <div className= "row">
               <div className="large-6 medium-6 small-12 columns">
                   <div className="primary callout">
                       <div className="style">
                           <a href="list?style=">
                             <img src='/images/shopbystyle.jpg' alt="Search by Style" width="100%"></img>
                           </a>
                    </div>
                    </div>
                </div>
                <div className="large-6 medium-6 small-12 columns">
                    <div className="primary callout">
                   <div className="">
                       <a href="/list?budget=">
                           <img src='/images/budget.jpg' alt="Browse By Budget" width="100%"></img>
                       </a>
                   </div>
                   </div>
                </div>
                <div className="large-6 medium-6 small-12 columns">
                    <div className="primary callout">
                   <div className="summerTrends">
                       <a href="/list?style=pool-party">
                           <img src='/images/summerAygun.jpg' alt="Seek Summer Chic"></img>
                       </a>
                   </div>
                   </div>
               </div>
               <div className="large-6 medium-6 small-12 columns">
                    <div className="primary callout">
                   <div className="size">
                       <a href="list?style=">
                       <img src='/images/size.jpg' alt="Add Your Size" width="100%"></img>
                       </a>
                   </div>
                   </div>
               </div>
               <div className="large-6 medium-6 small-12 columns">
               <div className="primary callout">
                   <div className="under100">
                       <a href="/list?budget=100">
                       <img src='/images/under100.jpg' alt="Under 100" width="100%"></img>
                       </a>
                       </div>
                   </div>
                   </div>
               <div className="large-6 medium-6 small-12 columns">
               <div className="primary callout">
                   <div className="addStyle">
                       <a href="/fashion/new">
                       <img src='/images/addYourStyle.jpg' alt="Add Your Style" width="100%"></img>
                       </a>
                   </div>
                   </div>
               </div>
           </div>
           </div>
       )
   }
}
export default HomePage