import * as React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import Header from "@components/header";
import Listing from "@components/listing";

import "./index.scss";

export const query = graphql`
    query {
        listings: allListingsJson {
            nodes {
                image {
                    childImageSharp {
                        gatsbyImageData(
                            height: 800
                            width: 800
                            placeholder: NONE
                            quality: 50
                            breakpoints: [750, 1080]
                            backgroundColor: "#8cafbf"
                            transformOptions: {
                                fit: CONTAIN
                                # trim: 100
                                # background: { r: 0, g: 0, b: 0, alpha: 0 }
                            }
                        )
                    }
                }
            }
        }
    }
`;

interface GalleryPageProps {
    data: {
        listings: {
            nodes: Listing[];
        };
    };
}

const GalleryPage: React.FC<GalleryPageProps> = ({ data }) => {
    return (
        <div className="Gallery">
            <Helmet>
                <title>Trey Allen - Gallery</title>
            </Helmet>
            <Header />
            <div className="Gallery__content">
                {data.listings.nodes.map((listing, i) => (
                    <Listing key={i} {...listing} />
                ))}
            </div>
        </div>
    );
};

export default GalleryPage;
