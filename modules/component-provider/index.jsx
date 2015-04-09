var components = {};
module.exports = {
    register(slug, component){
        components[slug] = component;
    },

    get: slug => components[slug]
};