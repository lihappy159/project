module.exports = {
    "rules": {
        "global-require": 0,
        "key-spacing": [0, { "beforeColon": false, "afterColon": true }],
    },
    "parser": "babel-eslint",
    "parserOptions": {
        "sourceType": "module",
        "ecmaVersion": 8,
        "ecmaFeatures": {
            "jsx": true,
            "experimentalObjectRestSpread": true
    }
}
