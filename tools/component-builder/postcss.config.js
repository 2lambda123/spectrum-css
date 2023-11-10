module.exports = ({ options = {} }) => {
    const {
        keepVars = false,
        notNested = true,
        secondNotNested = true,
        diff = false,
    } = options;

    return {
        plugins: {
            "postcss-import": {},
            "postcss-remapvars": {},
            "postcss-nested": {},
            "postcss-inherit": {},
            "postcss-varsonly": diff,
            "postcss-logical": {},
            "postcss-transform-logical": {},
            "postcss-dir-pseudo-class": {},
            "postcss-custom-properties-passthrough": {},
            "postcss-calc": {},
            "postcss-custom-properties-mapping": keepVars,
            "postcss-notnested": notNested ? { replace: ".spectrum" } : false,
            "postcss-svg": {},
            "legacy-postcss-dropunusedvars": {},
            "legacy-postcss-dropdupedvars": {},
            "postcss-droproot": {},
            "postcss-notnested": secondNotNested ? {} : false, // Second one to catch all stray &
            "postcss-discard-empty": {},
            "postcss-discard-comments": { removeAllButFirst: true },
            "autoprefixer": {},
        }
    };
};
