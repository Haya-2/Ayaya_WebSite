// eslint.config.js
import js from "@eslint/js";

export default [
   js.configs.recommended,
   {
      rules: {
         "no-unused-vars": "warn", // avertit si variable non utilisée
         "no-console": "off", // autorise console.log (pratique en dev)
      },
   },
];
