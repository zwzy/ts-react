# 前端React代码规范
## 命名规范
* 文件名一般小写 即 **file**（除组件文件名外）
* 组件名 **驼峰式命名** 即 **BreadBox**
## 代码规范
* 数组多行应该换行
  ~~~
  const objectInArray = [
    {
      id: 1,
    },
    {
      id: 2,
    },
  ];
  ~~~
* 解构
  + 对象解构
  ~~~
  // 当字段与属性引用名相同时将省写全放在上面，比较直观
  function getUserInfo() {
    return {
      name,
      age,
      sex: '1'
      code: '100047783'
    }
  }
  function getFullName({ firstName, lastName }) {
    return `${firstName} ${lastName}`;
  }
  ~~~
  + 数组解构
  ~~~
  const [first, second] = arr;
  ~~~
  + 多个返回值解构
* Function
  ~~~
  // bad...
  function processInput(input) {
    return [left, right, top, bottom];
  }
  // 调用者需要考虑返回数据的顺序。
  const [left, __, top] = processInput(input);
  // good...
  function processInput(input) {
    return {left, right, top, bottom};
  }
  // 调用者只选择他们需要的数据。
  const { left, top } = processInput(input);
  ~~~
  + 不要使用arguments 用 reset 语法 ... 代替。
  ~~~
  // bad
  function concatenateAll() {
    const args = Array.prototype.slice.call(arguments);
    return args.join('');
  }

  // good
  function concatenateAll(...args) {
    return args.join('');
  }
  ~~~
  + 使用默认函数参数，还是改变函数参数
  ~~~
  // still bad
  function handleThings(opts) {
    if (opts === void 0) {
      opts = {};
    }
    // ...
  }

  // good
  function handleThings(opts = {}) {
    // ...
  }
  ~~~
  + 总是把默认参数放到最后
  ~~~
  // bad
  function handleThings(opts = {}, name) {
    // ...
  }

  // good
  function handleThings(name, opts = {}) {
    // ...
  }
  ~~~
  + 不要直接改变值引用的参数
  ~~~
  // bad
  function f1(obj) {
    obj.key = 1;
  }

  // good
  function f2(obj) {
    const key = Object.prototype.hasOwnProperty.call(obj, 'key') ? obj.key : 1;
  }
  ~~~
* class 类
  + 方法返回this，供其内部方法调用
  ~~~
  // good
  class Jedi {
    jump() {
      this.jumping = true;
      return this;
    }

    setHeight(height) {
      this.height = height;
      return this;
    }
  }
  const luke = new Jedi();
  luke.jump().setHeight(20);
  ~~~
* 模块
  + 不要使用通配符导出
  ~~~
  // bad
  import * as AirbnbStyleGuide from './AirbnbStyleGuide';

  // good
  import AirbnbStyleGuide from './AirbnbStyleGuide';
  ~~~
  + 不要直接导入导出
  ~~~
  // bad
  // filename es6.js
  export { es6 as default } from './AirbnbStyleGuide';

  // good
  // 虽然写在一行很简洁，但是有一个明确的导入和一个明确的导出能够保证一致性。
  // filename es6.js
  import { es6 } from './AirbnbStyleGuide';
  export default es6;
  ~~~
  + 不要导出可变的引用
  ~~~
  // bad
  let foo = 3;
  export { foo };

  // good
  const foo = 3;
  export { foo };
  ~~~
  + 在单个导出的模块中，选择默认模块而不是指定的导出
  ~~~
  // bad
  export function foo() {}

  // good
  // 为了鼓励更多的文件只导出一件东西，这样可读性和可维护性更好。
  export default function foo() {}
  ~~~
* 迭代器和发生器
  + 使用 map() / every() / filter() / find() / findIndex() / reduce() / some() / ... 遍历数组， 和使用 Object.keys() / Object.values() / Object.entries() 迭代你的对象生成数组。
* 属性
  + 访问属性时使用点符号。 
  ~~~
  const luke = {
    jedi: true,
    age: 28,
  };
  // bad
  const binary = Math.pow(2, 10);

  // good
  const binary = 2 ** 10;
  ~~~
* 变量
  + 把 const 声明的放在一起，把 let 声明的放在一起。
  ~~~
  // bad
  let i;
  const items = getItems();
  let dragonball;
  const goSportsTeam = true;
  let len;

  // good
  const goSportsTeam = true;
  const items = getItems();
  let dragonball;
  let i;
  let length;
  ~~~
  + 不要链式变量赋值
  ~~~
  // bad
  (function example() {
    // JavaScript 把它解释为
    // let a = ( b = ( c = 1 ) );
    // let 关键词只适用于变量 a ；变量 b 和变量 c 则变成了全局变量。
    let a = b = c = 1;
  }());

  console.log(a); // throws ReferenceError
  console.log(b); // 1
  console.log(c); // 1

  // good
  (function example() {
    let a = 1;
    let b = a;
    let c = a;
  }());

  console.log(a); // throws ReferenceError
  console.log(b); // throws ReferenceError
  console.log(c); // throws ReferenceError

  // 对于 `const` 也一样
  ~~~
  + 避免在赋值语句 = 前后换行
  ~~~
  // bad
  const foo =
    superLongLongLongLongLongLongLongLongFunctionName();

  // bad
  const foo
    = 'superLongLongLongLongLongLongLongLongString';

  // good
  const foo = (
    superLongLongLongLongLongLongLongLongFunctionName()
  );

  // good
  const foo = 'superLongLongLongLongLongLongLongLongString';
  ~~~
* 提升
  + 命名函数表达式提升的是变量名，而不是函数名或者函数体
  ~~~
  function example() {
    console.log(named); // => undefined

    named(); // => TypeError named is not a function

    superPower(); // => ReferenceError superPower is not defined

    var named = function superPower() {
      console.log('Flying');
    };
  }
  ~~~
* 比较运算符和等号
   + 对于布尔值使用简写，但是对于字符串和数字进行显式比较。
   ~~~
   // bad
  if (isValid === true) {
    // ...
  }

  // good
  if (isValid) {
    // ...
  }

  // bad
  if (name) {
    // ...
  }

  // good
  if (name !== '') {
    // ...
  }

  // bad
  if (collection.length) {
    // ...
  }

  // good
  if (collection.length > 0) {
    // ...
  }
   ~~~
   + switch 语句中存在 let, const, function, 和 class 声明 用{ } 包裹
   ~~~
   // good
  switch (foo) {
    case 1: {
      let x = 1;
      break;
    }
    case 2: {
      const y = 2;
      break;
    }
    case 3: {
      function f() {
        // ...
      }
      break;
    }
    case 4:
      bar();
      break;
    default: {
      class C {}
    }
  }
   ~~~
   + 三目表达式不应该嵌套(拆分)
   ~~~
   // bad
  const foo = maybe1 > maybe2
    ? "bar"
    : value1 > value2 ? "baz" : null;

  // 分离为两个三目表达式
  const maybeNull = value1 > value2 ? 'baz' : null;

  // good
  const foo = maybe1 > maybe2 ? 'bar' : maybeNull;
   ~~~
   + 避免不要的三目运算
   ~~~
  // bad
  const foo = a ? a : b;
  const bar = c ? true : false;
  const baz = c ? false : true;

  // good
  const foo = a || b;
  const bar = !!c;
  const baz = !c;
   ~~~
  + 当有多行代码块的时候，使用大括号包裹
  ~~~
  // bad
  if (test)
    return false;

  // good
  if (test) return false;

  // good
  if (test) {
    return false;
  }

  // bad
  function foo() { return false; }

  // good
  function bar() {
    return false;
  }
  ~~~
* 控制语句
  + 控制语句太长 逻辑运算符在行的开始
  ~~~
  // good
  if (
    (foo === 123 || bar === 'abc')
    && doesItLookGoodWhenItBecomesThatLong()
    && isThisReallyHappening()
  ) {
    thing1();
  }
  ~~~
  + 不要使用操作符控制语句
  ~~~
  // bad
  !isRunning && startRunning();

  // good
  if (!isRunning) {
    startRunning();
  }
  ~~~
* 注释
  + 使用 /** ... */ 来进行多行注释。
  + 使用 // 进行单行注释 在注释之前放一个空行，除非它在块的第一行。
  ~~~
  // good
  function getType() {
    console.log('fetching type...');

    // set the default type to 'no type'
    const type = this.type || 'no type';

    return type;
  }

  // also good
  function getType() {
    // set the default type to 'no type'
    const type = this.type || 'no type';

    return type;
  }
  ~~~
  + 代码审查
  ~~~
  class Calculator extends Abacus {
    constructor() {
      super();

      // FIXME: 这里不应该使用全局变量
      total = 0;
      // TODO: total 应该由一个 param 的选项配置
      this.total = 0;
    }
  }
  ~~~
* 空白
  + 使用 tabs (空格字符) 设置为 2 个空格
  + 在控制语句（if, while 等）开始括号之前放置一个空格
  + 在函数调用和是声明中，在参数列表和函数名之间没有空格
  + 用空格分离操作符
  + 使用单个换行符结束文件
  ~~~
  // bad
  function fight () {
    console.log ('Swooosh!');
  }

  // good
  function fight() {
    console.log('Swooosh!');
  }
  // bad
  const x=y+5;

  // good
  const x = y + 5;
  // bad
  import { es6 } from './AirbnbStyleGuide';
    // ...
  export default es6;
  // good
  import { es6 } from './AirbnbStyleGuide';
    // ...
  export default es6;↵
  ~~~
  + 在块和下一个语句之前留下一空白行
  ~~~
  // good
  if (foo) {
    return bar;
  }

  return baz;
  // bad
  const obj = {
    foo() {
    },
    bar() {
    },
  };
  return obj;

  // good
  const obj = {
    foo() {
    },

    bar() {
    },
  };
  ~~~
  + 不要在块的开头使用空白行
  ~~~
  // bad
  function bar() {

    console.log(foo);

  }
  // good
  function bar() {
    console.log(foo);
  }
  ~~~
  + 避免让你的代码行超过100个字符
  ~~~
  // bad
  $.ajax({ method: 'POST', url: 'https://airbnb.com/', data: { name: 'John' } }).done(() => console.log('Congratulations!')).fail(() => console.log('You have failed this city.'));

  // good
  const foo = jsonData
    && jsonData.foo
    && jsonData.foo.bar
    && jsonData.foo.bar.baz
    && jsonData.foo.bar.baz.quux
    && jsonData.foo.bar.baz.quux.xyzzy;
  ~~~
  + 字符类型 用 String()
  + 数值类型 用 Number() 和 parseInt(n ,10)
  + 布尔类型 用Boolean() 或 !!age
  + 字符转数值类型 用 str >> 0 更快 太大不合适，
  ~~~
  // good
  const val = Number(inputValue);

  // good
  const val = parseInt(inputValue, 10);
  // good
  /**
  * parseInt 使我的代码变慢。
  * 位运算将一个字符串转换成数字更快。
  */
  const val = inputValue >> 0;
  2147483649 >> 0; // => -2147483647
  ~~~
## 命名规范
* 避免单字母名字
~~~
// bad
function q() {
  // ...
}

// good
function query() {
  // ...
}
~~~
* 在命名对象、函数和实例时使用驼峰命名法（camelCase）
~~~
// good
const thisIsMyObject = {};
function thisIsMyFunction() {}
~~~
* 只有在命名构造器或者类的时候才用帕斯卡拼命名法（PascalCase）
~~~
// good
class User {
  constructor(options) {
    this.name = options.name;
  }
}

const good = new User({
  name: 'yup',
});
~~~
* 不要使用前置或者后置下划线
~~~
// bad
this.__firstName__ = 'Panda';
this.firstName_ = 'Panda';
this._firstName = 'Panda';

// good
this.firstName = 'Panda';
~~~
* 不要保存 this 的引用。 使用箭头函数或者 bind
~~~
// bad
function foo() {
  const that = this;
  return function () {
    console.log(that);
  };
}

// good
function foo() {
  return () => {
    console.log(this);
  };
}
~~~
* 文件名应该和默认导出的名称完全匹配。
~~~

// bad
import CheckBox from './check_box'; // PascalCase import/export, snake_case filename
import forty_two from './forty_two'; // snake_case import/filename, camelCase export
import inside_directory from './inside_directory'; // snake_case import, camelCase export
import index from './inside_directory/index'; // requiring the index file explicitly
import insideDirectory from './insideDirectory/index'; // requiring the index file explicitly

// good
import CheckBox from './CheckBox'; // PascalCase export/import/filename
import fortyTwo from './fortyTwo'; // camelCase export/import/filename
import insideDirectory from './insideDirectory'; // camelCase export/import/directory name/implicit "index"
// ^ supports both insideDirectory.js and insideDirectory/index.js
~~~
* 当你导出默认函数时使用驼峰命名法。 你的文件名应该和方法名相同
~~~
function makeStyleGuide() {
  // ...
}

export default makeStyleGuide;
~~~
* 当你导出一个构造器 / 类 / 单例 / 函数库 / 暴露的对象时应该使用帕斯卡命名法
~~~
const AirbnbStyleGuide = {
  es6: {
  },
};

export default AirbnbStyleGuide;
~~~
* 缩略词和缩写都必须是全部大写或者全部小写。
~~~
// bad
import SmsContainer from './containers/SmsContainer';

// bad
const HttpRequests = [
  // ...
];

// good
import SMSContainer from './containers/SMSContainer';

// good
const HTTPRequests = [
  // ...
];

// also good
const httpRequests = [
  // ...
];

// best
import TextMessageContainer from './containers/TextMessageContainer';

// best
const requests = [
  // ...
];
~~~
* 大写常量： 通常是被导出 + 不被重新赋值 + 程序员可以信任他的
~~~
// 允许，但是不提供语义值
export const apiKey = 'SOMEKEY';

// 多数情况下，很好
export const API_KEY = 'SOMEKEY';

// ---

// bad - 不必要大写 key 没有增加语义值
export const MAPPING = {
  KEY: 'value'
};

// good
export const MAPPING = {
  key: 'value'
};
~~~
* 存取器命名
  +  不要使用 JavaScript 的 getters/setters 方法，因为它们会导致意外的副作用，并且更加难以测试、维护和推敲。 相应的，如果你需要存取函数的时候使用 getVal() 和 setVal('hello')。
  ~~~
  // bad
  class Dragon {
    get age() {
      // ...
    }

    set age(value) {
      // ...
    }
  }

  // good
  class Dragon {
    getAge() {
      // ...
    }

    setAge(value) {
      // ...
    }
  }
  ~~~
  + 如果属性/方法是一个 boolean 值，使用 isVal() 或者 hasVal()
  ~~~
  // bad
  if (!dragon.age()) {
    return false;
  }

  // good
  if (!dragon.hasAge()) {
    return false;
  }
  ~~~
  + 可以创建 get() 和 set() 方法，但是要保证一致性。
  ~~~
  class Jedi {
    constructor(options = {}) {
      const lightsaber = options.lightsaber || 'blue';
      this.set('lightsaber', lightsaber);
    }

    set(key, val) {
      this[key] = val;
    }

    get(key) {
      return this[key];
    }
  }
  ~~~
* 事件附加数据时，应该用 对象传递
~~~
  // bad
  $(this).trigger('listingUpdated', listing.id);

  // ...

  $(this).on('listingUpdated', (e, listingID) => {
    // do something with listingID
  });
  // good
  $(this).trigger('listingUpdated', { listingID: listing.id });

  // ...

  $(this).on('listingUpdated', (e, data) => {
    // do something with data.listingID
  });
  ~~~

* 标准库
  + 使用 Number.isNaN 代替全局的 isNaN
  ~~~
  isNaN('1.2'); // false
  isNaN('1.2.3'); // true

  // good
  Number.isNaN('1.2.3'); // false
  Number.isNaN(Number('1.2.3')); // true
  ~~~
  