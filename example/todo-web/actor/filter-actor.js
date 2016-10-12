import {Action} from '../../../src/decorator.js'
import Actor from '../../../src/actor.js'
export default class FilterActor extends Actor {
  defaultState() {
    return {
      filterStatus: '' //默认没有过滤条件
    }
  }

  @Action('filter')
  changeFilter(state, status) {
    return state.set('filterStatus', status)
  }

  @Action('init')
  init(state, {filterStatus}) {
    return state.set('filterStatus', filterStatus)
  }
}
