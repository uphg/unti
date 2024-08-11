import antfu from '@antfu/eslint-config'

export default antfu({
  files: ['packages/**/*.ts', 'test/**/*.ts'],
  rules: {
    'no-console': 'off',
    'no-restricted-syntax': 'off', // 禁止使用特定的语法
    'no-useless-return': 'off', // 禁止冗余的返回语句
    'no-self-compare': 'off', // 禁止自我比较
    'antfu/if-newline': 'off', // if 语句结束后强制换行
    'ts/no-empty-object-type': 'off', // 禁止空对象类型
    'ts/no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true }], // 禁止未使用的表达式
    'ts/no-unsafe-function-type': 'off',
    'ts/no-this-alias': 'off', // 禁止使用 this 别名
    'no-new-wrappers': ['error', { allowTernary: true, ignores: 'test/common.ts' }],

    'jsonc/sort-keys': 'off', // JSONC 文件中的键按照字母排序
    'style/brace-style': 'off', // 对块强制实施一致的大括号样式
    'import/no-mutable-exports': 'off', // 禁止导出可变变量
    // 'nonblock-statement-body-position': 'error', // 强制执行单行语句的位置
  },
})
