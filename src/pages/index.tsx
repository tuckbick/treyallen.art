import * as React from "react";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import Card from "@components/card";

import "./index.scss";

const IndexPage = () => (
    <div className="Splash">
        <Helmet>
            <title>Trey Allen</title>
        </Helmet>
        <Link to="/gallery">
            <Card>
                <h1>trey allen</h1>
                <div className="location">
                    <i className="material-icons">place</i>
                    denver, co
                </div>
            </Card>
        </Link>
    </div>
);

export default IndexPage;
