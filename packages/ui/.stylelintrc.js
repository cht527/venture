module.exports = {
    extends: 'stylelint-config-standard-scss',
    plugins: ['stylelint-scss'],
    rules: {
      'selector-class-pattern': '^[a-zA-Z0-9]+$',
      'color-function-notation': 'legacy',
      'no-empty-first-line': true,
      'font-family-no-missing-generic-family-keyword': null,
      'at-rule-no-unknown': null,
      'scss/at-rule-no-unknown': true,
      'selector-pseudo-class-no-unknown': [
        true,
        {
          ignorePseudoClasses: ['global'],
        },
      ],
      'no-descending-specificity': null, // super annoying with `:global`, https://github.com/stylelint/stylelint/issues/4010
      'string-quotes': 'single',
      'color-named': 'never',
      'declaration-no-important': true,
      'selector-max-compound-selectors': [3, { severity: 'warning' }],
      'max-nesting-depth': [3, { ignore: ['pseudo-classes'], severity: 'warning' }],
      'value-no-vendor-prefix': [true, { ignoreValues: ['box'] }],
    },
  };
  