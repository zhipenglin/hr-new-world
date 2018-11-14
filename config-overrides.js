const px2rem=require('postcss-px2rem'),
    postcssRewired=require('@engr/ic-scripts-rewired-postcss');
module.exports = (config, env) => {
    config=postcssRewired((options)=>{
        const plugins=options.plugins();
        plugins.push(px2rem({remUnit:64}));
        options.plugins=()=>plugins;
        return options;
    })(config);
    config.module.rules[2].oneOf[0].options.limit=1000000000;
    return config;
};
