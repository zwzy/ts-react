# react 代码规范
### 创建模块
* 模块没有状态或是没有引用refs， 推荐使用普通函数（非箭头函数）
~~~
// bad (relying on function name inference is discouraged)
const Listing = ({ hello }) => (
  <div>{hello}</div>
);

// good
function Listing({ hello }) {
  return <div>{hello}</div>;
}
~~~
### 命名
* **扩展名:** React模块使用 .jsx|.tsx 扩展名.
* **文件名:** 文件名使用帕斯卡命名. 如, ReservationCard.jsx.
* **引用命名:** React模块名使用帕斯卡命名，实例使用骆驼式命名
~~~
// bad
import reservationCard from './ReservationCard';

// good
import ReservationCard from './ReservationCard';

// bad
const ReservationItem = <ReservationCard />;

// good
const reservationItem = <ReservationCard />;
~~~
* **模块命名:** 模块使用当前文件名一样的名称. 如果整个文件夹是一个模块，使用 index.js作为入口文件
~~~
// bad
import Footer from './Footer/Footer';

// bad
import Footer from './Footer/index';

// good
import Footer from './Footer';
~~~
* **高阶模块命名:** 模块使用当前文件名一样的名称. 如果整个文件夹是一个模块，使用 index.js作为入口文件
~~~
// bad
export default function withFoo(WrappedComponent) {
  return function WithFoo(props) {
    return <WrappedComponent {...props} foo />;
  }
}

// good
export default function withFoo(WrappedComponent) {
  function WithFoo(props) {
    return <WrappedComponent {...props} foo />;
  }

  const wrappedComponentName = WrappedComponent.displayName
    || WrappedComponent.name
    || 'Component';

  WithFoo.displayName = `withFoo(${wrappedComponentName})`;
  return WithFoo;
}
~~~
*  **属性命名:** 避免使用DOM相关的属性来用作其他的用途。
~~~
// bad
<MyComponent style="fancy" />

// good
<MyComponent variant="fancy" />
~~~
### Quotes 单引号还是双引号
* 对于JSX属性值总是使用双引号("), 其他均使用单引号(')
~~~
// bad
<Foo bar='bar' />

// good
<Foo bar="bar" />

// bad
<Foo style={{ left: "20px" }} />

// good
<Foo style={{ left: '20px' }} />
~~~
### Spacing 空格
* 总是在自动关闭的标签前加一个空格，正常情况下也不需要换行
* 不要在JSX {} 引用括号里两边加空格
~~~
// bad
<Foo
 />
// good
<Foo />

// bad
<Foo bar={ baz } />
// good
<Foo bar={baz} />
~~~
### Props 属性
* JSX 属性名使用小骆驼拼写法camelCase，如果属性名是一个 React 组件名，则使用大骆驼拼写法 PascalCase
~~~
// bad
<Foo
  UserName="hello"
  phone_number={12345678}
/>

// good
<Foo
  userName="hello"
  phoneNumber={12345678}
  Component={SomeComponent}
/>
~~~
* 避免使用数组的 index 来作为 key 属性的值。
~~~
// bad
{todos.map((todo, index) =>
  <Todo
    {...todo}
    key={index}
  />
)}

// good
{todos.map(todo => (
  <Todo
    {...todo}
    key={todo.id}
  />
))}
~~~
* 尽可能少地使用扩展运算符 除以下情况
  + 使用了变量提升的高阶组件
  + 只有在清楚明白扩展对象时才使用扩展运算符
  + 尽可能地筛选出不必要的属性
  ~~~
  // 1
  function HOC(WrappedComponent) {
    return class Proxy extends React.Component {
      Proxy.propTypes = {
        text: PropTypes.string,
        isLoading: PropTypes.bool
      };

      render() {
        return <WrappedComponent {...this.props} />
      }
    }
  }  
  // 2
  export default function Foo {
    const props = {
      text: '',
      isPublished: false
    }

    return (<div {...props} />);
  }   
  // 3  
  // bad
  render() {
    const { irrelevantProp, ...relevantProps  } = this.props;
    return <WrappedComponent {...this.props} />
  }

  // good
  render() {
    const { irrelevantProp, ...relevantProps  } = this.props;
    return <WrappedComponent {...relevantProps} />
  }    
  ~~~
* **Refs:** 
  + 总是在Refs里使用回调函数
  ~~~
  // bad
  <Foo
    ref="myRef"
  />

  // good
  <Foo
    ref={(ref) => { this.myRef = ref; }}
  />
  ~~~
* **括号:** 
  + 将多行的JSX标签写在 ()里
  ~~~
  // bad
  render() {
    return <MyComponent className="long body" foo="bar">
            <MyChild />
          </MyComponent>;
  }

  // good
  render() {
    return (
      <MyComponent className="long body" foo="bar">
        <MyChild />
      </MyComponent>
    );
  }

  // good, 单行可以不需要
  render() {
    const body = <div>hello</div>;
    return <MyComponent>{body}</MyComponent>;
  }
  ~~~
* **标签:**
  + 对于没有子元素的标签来说总是自己关闭标签
  + 如果模块有多行的属性， 关闭标签时新建一行
  ~~~
  // bad
  <Foo className="stuff"></Foo>

  // good
  <Foo className="stuff" />

  // bad
  <Foo
    bar="bar"
    baz="baz" />

  // good
  <Foo
    bar="bar"
    baz="baz"
  />  
  ~~~
### 函数
* 使用箭头函数来获取本地变量。这使得传递数据给事件处理器 (event handler) 很方便
 ~~~
 function ItemList(props) {
    return (
      <ul>
        {props.items.map((item, index) => (
          <Item
            key={item.key}
            onClick={(event) => { doSomethingWith(event, item.name, index); }}
          />
        ))}
      </ul>
    );
  }
 ~~~
* 当在 render() 里使用事件处理方法时，提前在构造函数里把 this 绑定上去
 ~~~
 // bad
class extends React.Component {
  onClickDiv() {
    // do stuff
  }

  render() {
    return <div onClick={this.onClickDiv.bind(this)} />;
  }
}

// very bad
class extends React.Component {
  onClickDiv = () => {
    // do stuff
  }

  render() {
    return <div onClick={this.onClickDiv} />
  }
}

// good
// 为什么? 在每次 render 过程中， 再调用 bind 都会新建一个新的函数，浪费资源。在类成员变量 (class fields) 里不要使用箭头函数，因为箭头函数会造成它难以测试和调试，并会降低性能。从概念上讲，类成员变量存的应该是数据，而不是逻辑或方法。
class extends React.Component {
  constructor(props) {
    super(props);

    this.onClickDiv = this.onClickDiv.bind(this);
  }

  onClickDiv() {
    // do stuff
  }

  render() {
    return <div onClick={this.onClickDiv} />;
  }
}
 ~~~
* 在React模块中，(JS中就没有私有变量) 不要给所谓的私有函数添加 _ 前缀，本质上它并不是私有的.