// eslint.config.js
import js from "@eslint/js";

export default [
   js.configs.recommended,
   {
      languageOptions: {
         globals: {
            // navigateurs / DOM
            window: "readonly",
            document: "readonly",
            console: "readonly",
            fetch: "readonly",
         },
         parserOptions: {
            ecmaVersion: 2021,
            sourceType: "module",
         },
      },
      rules: {
         "no-unused-vars": "warn", // avertit si variable non utilisée
         "no-console": "off", // autorise console.log (pratique en dev)
      },
   },
];
