import * as React from "react";
import Card from "@components/card";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import "./index.scss";

const Listing: React.FC<Listing> = ({ image }) => (
    <Card className="Listing" theme="none">
        <GatsbyImage
            className="Listing__image"
            image={getImage(image)}
            alt=""
        />
    </Card>
);

export default Listing;
