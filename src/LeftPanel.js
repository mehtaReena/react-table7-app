import React from 'react';

function LeftPanel(props) {
    return (
        <div className="leftpanel">
            <div>
                <button className="btn">EdIT CLASSROOM</button>
            </div>

            <div>
                <button className="btn">Change Staus</button>
            </div>

            <div>
                <button className="btn color"> Create Class Room</button>
            </div>

            <div className="text bold">
                 Summary View
            </div>
            <hr/>

            <div className="text">
                Total Classes

            </div>




        </div>
    );
}

export default LeftPanel;