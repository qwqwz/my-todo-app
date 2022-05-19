import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      tasks: [
        {id: 1, title: 'Buy milk for my brother', isActive: true},
        {id: 2, title: 'Learn JS', isActive: true},
        {id: 3, title: 'Catch some birds for my birthday', isActive: true},
      ],
    }
  },
  mutations: {
    addNewTask(state, title) {
      const s_tasks = state.tasks;
      if (s_tasks.length === 0) {
        return s_tasks.push({id: 1, title: title, isActive: true});
      }
      s_tasks.push({id: s_tasks[s_tasks.length - 1].id + 1, title:title, isActive: true});
    },
    deleteTask(state, id) {
        state.tasks = state.tasks.filter(x => x.id !== id);
      }
    },
  getters: {
    turnActive: state => {
      state.tasks.sort ((x,y) => Number(y.isActive) - Number(x.isActive));
    }
  }

})


export default store;