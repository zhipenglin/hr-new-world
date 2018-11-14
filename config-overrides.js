const px2rem=require('postcss-px2rem'),
    postcssRewired=require('@engr/ic-scripts-rewired-postcss');
module.exports = (config, env) => {
    config=postcssRewired((options)=>{
        const plugins=options.plugins();
        plugins.push(px2rem({remUnit:64}));
        options.plugins=()=>plugins;
        return options;
    })(config);
    return config;
};
