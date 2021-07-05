import { createStore } from 'redux';

const ADD_TODO = '添加 TODO';

function addToDo(text) {
  return {
    type: ADD_TODO,
    text
  }
}
const store = createStore(addToDo);

export default store