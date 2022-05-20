import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      tasks: [
        {id: 1, createDate: '20.05.2022 15:04', title: 'Buy milk for my brother', isActive: true},
        {id: 2, createDate: '19.05.2022 15:04', title: 'Learn JS', isActive: true},
        {id: 3, createDate: '18.05.2022 15:04', title: 'Catch some birds for my birthday', isActive: true},
      ],

    }
  },
  mutations: {
    addNewTask(state, title) {
      const currentDate = `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}`;
      const s_tasks = state.tasks;
      if (s_tasks.length === 0) {
        return s_tasks.push({id: 1, createDate: currentDate, title: title, isActive: true});
      }
      s_tasks.push({id: state.tasks.reduce((x,y) => x.id > y.id ? x : y).id + 1, createDate: currentDate, title:title, isActive: true});
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