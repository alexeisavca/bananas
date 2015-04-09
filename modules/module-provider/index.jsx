var modules = {};
module.exports = {
    register(slug, mod){
        modules[slug] = mod;
    },

    get: slug => modules[slug]
};