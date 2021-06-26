import * as React from 'react';
import { Link } from 'gatsby';
import Card from '@components/card';

import './index.scss'

const IndexPage = () => (
  <div className="Splash">
    <Link to="/gallery">
      <Card>
        <h1>trey allen</h1>
        <div className="location">
          <i class="material-icons">place</i>
          denver, co
        </div>
      </Card>
    </Link>
  </div>
)

export default IndexPage;