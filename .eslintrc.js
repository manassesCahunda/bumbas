module.exports = {
  root: true,
  extends: ["@react-native","prettier","prettier/react" ],
  env:{
    es6:true,
    jest:true,
    browser:true
  },
  globals:{
  Atomics:"readonly",
  SharedArrayBuffer:"readnoly",
  __DEV__:true
},
parserOptions:{
  ecmaFeatures:{
    jsx:true
  },
ecmaVersion:2023,
sourceType:"module"
},
  Plugins:[
    "react",
    "react-nativ",
    "react-hooks",
    "prettier",
    "jsx-ally",
    "import"
  ],
  rules:{
    "prettier/prettier" : "error",
    "react/jsx-filename-extension":["error", {extensions:[".js",".js"]}],
    "import/prefer-default-export":  "off",
    "no-unused-vars":["error", { argsIngnorePattern: "^_" }],
    "react/jsx-one-expression-per-line":"off",
    "global-require":"off",
    "react-native/no-raw-text":"off",
    "no-param-reassign":"off",
    "no-underscore-dangle":"off",
    Camelcase:"Off",
    "no-console":["error",{allow:["tron"]}],
    "react-hooks/rules-of-hooks":"error",
    "react-hooks/exhaustive-deps":"warn"
  },
  settings: {
     "import/resolver": {

      "babel-plugin-root-import": {
      
        rootPathSuffix:"src"
      
      }
    } 
  },
};
