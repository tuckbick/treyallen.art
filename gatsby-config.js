const Path = require("path");

module.exports = {
    siteMetadata: {
        siteUrl: "https://treyallen.art",
        title: "treyallen.art",
    },
    plugins: [
        // aliasing
        {
            resolve: `gatsby-plugin-alias-imports`,
            options: {
                alias: {
                    "@components": Path.resolve(__dirname, "src/components"),
                    "@styles": Path.resolve(__dirname, "src/styles"),
                    "@images": Path.resolve(__dirname, "src/images"),
                    "@data": Path.resolve(__dirname, "src/data"),
                },
                extensions: [],
            },
        },
        // styles
        "gatsby-plugin-sass",
        // fonts
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: ["Dosis:400", "Raleway:300", "Material+Icons"],
                display: "swap",
            },
        },
        // images
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        "gatsby-plugin-image",
        // json
        `gatsby-transformer-json`,
        // files
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: `./src/images`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `./src/data`,
            },
        },
        // ...
        {
            resolve: "gatsby-plugin-google-analytics",
            options: {
                trackingId: "275593105",
            },
        },
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sitemap",
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                icon: "./src/images/icon.png",
            },
        },
    ],
};
