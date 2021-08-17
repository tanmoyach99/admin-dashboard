import React from 'react';
import './featuredInfo.css';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

const FeaturedInfo = () => {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">
                    Revenue
                </span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,215</span>
                    <span className="featuredMoneyRate">
                        -11.4 <ArrowDownwardIcon className="featuredIcon negative"/>
                    </span>
                </div>
                <span className="featuredSub">Compared to Last Month</span>
            </div>
             <div className="featuredItem">
                <span className="featuredTitle">
                    Sales
                </span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$1,215</span>
                    <span className="featuredMoneyRate">
                        -11.4 <ArrowDownwardIcon className="featuredIcon"/>
                    </span>
                </div>
                <span className="featuredSub">Compared to Last Month</span>
            </div>
             <div className="featuredItem">
                <span className="featuredTitle">
                    Cost
                </span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$4,215</span>
                    <span className="featuredMoneyRate">
                        +11.4 <ArrowUpwardIcon className="featuredIcon"/>
                    </span>
                </div>
                <span className="featuredSub">Compared to Last Month</span>
            </div>
            
        </div>
    );
};

export default FeaturedInfo;