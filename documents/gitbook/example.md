# examples

counter demo


```js
//counter-actor.js
import {Actor, Action} from 'iflux2'

export default class CounterActor extends Actor {
  defaultState() {
    return {
      count: 0
    }
  }
  
  @Action('increment')
  increment(state) {
    return state.update('count', count => count + 1)
  }
  
  
  @Action('decrement')
  decrement(state) {
    return state.update('count', count => count - 1)
  }
}
```

```js
//store.js
import {Store} from 'iflux2'
import CounterActor from 'counter-actor'


export default class AppStore extends Store {
  bindActor() {
    return [
      new CounterActor
    ]
  }
  
  increment = () => {
    this.dispatch('increment')
  };
  
  decrement = () => {
    this.dispatch('decrement')
  };
}
```

```js
//ql.js
import {QL} from 'iflux2'

export const countQL = QL('counterQL', [
  'count',
  count => count
])
```


```js
//counter-container.js
import React, {Component} from 'react'
import {Relax} from 'iflux2'
import {countQL} from 'ql'
const noop = () => {}

@Relax
export default class CounterContainer extends Component {
  static defaultProps = {
    count: countQL //注入bigQuery(countQL),
    //count: 0 //注入store.state.get('count')
    increment: noop,
    decrement: noop
  };
  
  render() {
    const {count, increment, decrement} = this.props
    
    return (
      <div>
        <a href='javascript:;' onClick={decrement}>-</a>
        <span>{count}</span>
        <a href='javascript:;' onClick={increment}>+</a>
      <div>
    )
  }
}
```

```js
//index.js
import React, {Component} from 'react'
import {StoreProvider} from 'iflux2'
import AppStore from 'store'
import CounterCounter from 'counter-container'


@StoreProvider(AppStore)
export default class CounterApp extends Component {
  render() {
    return (
      <CounterCounter/>
    )
  }
}
```

## more
http://git.dev.qianmi.com/OF730/iflux2-todo

