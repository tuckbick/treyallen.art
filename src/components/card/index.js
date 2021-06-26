import * as React from 'react';

import './index.scss';

const Card = (props) => (
    <div className="Card">
        {props.children}
    </div>
)

export default Card;