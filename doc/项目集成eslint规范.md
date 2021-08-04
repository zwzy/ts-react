## eslint 安装
* npm install -g eslint
* eslint --init
* 选择内容
  + 第一步 
  ~~~
  // 选择第三种选项会多一个，会让您主动选择 eslint 类型
    To check syntax only
  ❯ To check syntax and find problems
    To check syntax, find problems, and enforce code style
  ~~~
  + 第二步
  ~~~
  ❯ JavaScript modules (import/export)
    CommonJS (require/exports)
    None of these
  ~~~
  + 第三步
  ~~~
  ❯ React
    Vue.js
    None of these
  ~~~
  + 第四步
  ~~~
    Does your project use TypeScript? › No / Yes
  ~~~
  + 第五步
  ~~~
  ? Where does your code run? …  (Press <space> to select, <a> to toggle all, <i> to invert selection)
  ✔ Browser
  ✔ Node
  ~~~
  + 第六步（若第一步不选第三种，没有这一步）
  ~~~
  ? How would you like to define a style for your project? … 
  ❯ Use a popular style guide
    Answer questions about your style
    Inspect your JavaScript file(s)
  ~~~
  + 第七步 选择你喜欢的风格
  ~~~
  ? Which style guide do you want to follow? … 
  ❯ Airbnb: https://github.com/airbnb/javascript
    Standard: https://github.com/standard/standard
    Google: https://github.com/google/eslint-config-google
    XO: https://github.com/xojs/eslint-config-xo
  ~~~
* 配置文件相关（根目录下）
      + .eslintrc.js