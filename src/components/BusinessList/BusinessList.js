import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

class BusinessLIst extends React.Component{
    render(){
        return (
        <div className="BusinessList">
            {this.props.businesses.map((business, i) =>
                <Business key={i} business={business}/>
            )}
        </div>
        );
    }
}
export default BusinessLIst;
