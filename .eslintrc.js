module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ['plugin:vue/recommended', 'eslint:recommended'],

  // add your custom rules here
  //it is base on https://github.com/vuejs/eslint-config-vue
  rules: {
    "vue/max-attributes-per-line": ['warn', {
      "singleline": 10,
      "multiline": {
        "max": 1,
        "allowFirstLine": false
      }
    }],
    "vue/singleline-html-element-content-newline": "off",
    "vue/multiline-html-element-content-newline":"off",
    "vue/name-property-casing": ["error", "PascalCase"],
    "vue/no-v-html": "off",
    'arrow-spacing': [2, {
      'before': true,
      'after': true
    }],// 在arrow函数中，在箭头前后强制执行一致的间距
    'block-spacing': [2, 'always'],
    'brace-style': [2, '1tbs', {
      'allowSingleLine': true
    }],
    'camelcase': [0, {
      'properties': 'always'
    }],// 强制驼峰法命名
    'comma-dangle': [2, 'never'],// 对象字面量项尾不能有逗号
    'comma-spacing': [2, {
      'before': false,
      'after': true
    }],// 逗号前后的空格
    'comma-style': [2, 'last'],// 逗号风格，换行时在行首还是行尾
    'constructor-super': 2,
    'curly': [2, 'multi-line'],
    'dot-location': [2, 'property'],
    'eol-last': 2,
    'eqeqeq': ["error", "always", {"null": "ignore"}],
    'generator-star-spacing': [2, {
      'before': true,
      'after': true
    }],
    'handle-callback-err': [0, '^(err|error)$'],// nodejs中才会使用到，这里直接关掉
    'indent': [0, 2, {
      'SwitchCase': 1
    }],
    'jsx-quotes': [2, 'prefer-single'],
    'key-spacing': [2, {
      'beforeColon': false,
      'afterColon': true
    }],
    'keyword-spacing': [2, {
      'before': true,
      'after': true
    }],// 键间距
    'new-cap': [2, {
      'newIsCap': true,
      'capIsNew': false
    }],
    'new-parens': 2,
    'no-array-constructor': 2,// 禁止使用数组构造器
    'no-console': 'off',// 是否禁止使用console
    'no-class-assign': 2,// 禁止给类赋值
    'no-cond-assign': 2,// 禁止在条件表达式中使用赋值语句
    'no-const-assign': 2,// 禁止修改const声明的变量
    'no-control-regex': 0,// 是否禁止在正则表达式中使用控制字符
    'no-delete-var': 2,// 不能对var声明的变量使用delete操作符
    'no-dupe-args': 2,// 函数参数不能重复
    'no-dupe-keys': 2,// 在创建对象字面量时不允许键重复 {a:1,a:1}
    'no-duplicate-case': 2,// switch中的case标签不能重复
    'no-empty-character-class': 2,// 正则表达式中的[]内容不能为空
    'no-eval': 2,// 禁止使用eval
    'no-ex-assign': 2,// 禁止给catch语句中的异常参数赋值
    'no-extend-native': 2,// 禁止扩展native对象
    'no-extra-parens': [2, 'functions'],// 禁止非必要的括号
    'no-fallthrough': 2,//禁止switch穿透
    'no-floating-decimal': 2,// 禁止省略浮点数中的 0,比如0.5缩写为.5, 3.0缩写3.
    'no-func-assign': 2,// 禁止重复的函数声明
    'no-implied-eval': 2,// 禁止隐式转换
    'no-inner-declarations': [2, 'functions'],// 禁止在块语句中使用声明（变量或函数）
    'no-invalid-regexp': 2,// 禁止无效的正则表达式
    'no-irregular-whitespace': 2,// 不能有不规则的空格
    'no-iterator': 2,// 禁止使用__iterator__ 属性
    'no-label-var': 2,// label名不能与var声明的变量名相同
    'no-lone-blocks': 2,// 禁止不必要的嵌套块
    'no-mixed-spaces-and-tabs': 2,// 禁止混用tab和空格
    'no-multi-spaces': 2,// 不能用多余的空格
    'no-multiple-empty-lines': [2, {
      'max': 2
    }],// //空行最多不能超过2行
    'no-native-reassign': 2,// 不能重写native对象
    'no-negated-in-lhs': 2,// in 操作符的左边不能有!
    'no-param-reassign': 0,// 禁止给参数重新赋值
    'no-proto': 2,// 禁止使用__proto__属性
    'no-redeclare': 2,// 禁止重复声明变量
    'no-regex-spaces': 2,// 禁止在正则表达式字面量中使用多个空格 /foo bar/
    'no-return-assign': [2, 'except-parens'],// return 语句中不能有赋值表达式,除非用圆括号括起来，否则不允许赋值。
    'no-self-compare': 2,// 不能比较自身
    'no-sequences': 0,// 禁止使用逗号运算符
    'no-spaced-func': 2,// 函数调用时 函数名与()之间不能有空格
    'no-sparse-arrays': 2,// 禁止稀疏数组， [1,,2]
    'no-this-before-super': 2,// 在调用super()之前不能使用this或super
    'no-throw-literal': 2,
    'no-trailing-spaces': 1,
    'no-undef': 2,// 不能有未定义的变量
    'no-undef-init': 2,// 变量初始化时不能直接给它赋值为undefined
    'no-unexpected-multiline': 2,// 避免多行表达式
    'no-unmodified-loop-condition': 2,
    'no-unneeded-ternary': [2, {
      'defaultAssignment': false
    }],// 禁止不必要的嵌套 var isYes = answer === 1 ? true : false;
    'no-unreachable': 2,// 不能有无法执行的代码
    'no-unused-vars': [2, {
      'vars': 'all',
      'args': 'none'
    }],// 不能有声明后未被使用的变量或参数
    'no-useless-call': 2,// 禁止不必要的call和apply
    // 'no-useless-escape': 0,
    'no-with': 2,// 禁用with
    'padded-blocks': [2, 'never'],// 块语句内行首行尾是否要空行
    'quotes': [2, 'single', {
      'avoidEscape': true,// 允许字符串使用单引号或双引号，只要字符串包含必须以其他方式转义的引号
      'allowTemplateLiterals': true// 许字符串使用反引号
    }],// 尽可能要求使用单引号
    'semi': [2, 'never'],// 语句强制分号结尾,always强制执行，never不执行
    'semi-spacing': [2, {
      'before': false,
      'after': true
    }],// //分号前后空格
    'space-before-blocks': [0, 'always'],// 不以新行开始的块{前面要不要有空格
    'space-before-function-paren': [0, 'never'],// 函数定义时括号前面要不要有空格
    'space-in-parens': [2, 'never'],//小括号里面要不要有空格
    'space-infix-ops': 2,//中缀操作符周围要不要有空格
    'space-unary-ops': [2, {
      'words': true,
      'nonwords': false
    }],
    'template-curly-spacing': [0, 'always'],// ${}表达式是否限制大括号内的空格,never不允许有空格,always在花括号内需要一个或多个空间
    'use-isnan': 2,// 禁止比较时使用NaN，只能用isNaN()
    'valid-typeof': 2,// 必须使用合法的typeof的值
    'prefer-const': 1,// 变量永远不会被重新分配的使用const
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // 'object-curly-spacing': [2, 'always', {
    //   objectsInObjects: false
    // }],
    'array-bracket-spacing': [2, 'never']// 是否允许非空数组里面有多余的空格
  }
}
