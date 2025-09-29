// stylelint.config.cjs
module.exports = {
   syntax: "scss", // ou "scss" via postcss-scss
   extends: [
      "stylelint-config-recommended-scss"
   ],
   plugins: ["stylelint-scss"],
   rules: {
      "scss/at-rule-no-unknown": true,
      "no-descending-specificity": null,
      "color-hex-length": "short",
      "color-hex-alpha": null,
      "function-url-quotes": "always"
   },
   ignoreFiles: [
      "style/css/**/*.css",
      "style/css/fontawesome-all.min.css",
      "ancien_cv/**/*.css"
   ]
};
