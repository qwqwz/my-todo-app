<template>
<li class="post-item"
    @click="turnActive(index)"
    :class="item.isActive === false ? 'done' : true"
>
  <div class="main_content">
    <ItemCheckbox :isActive="item.isActive"/>
    <div>
      <div class="create-date">{{ checkDate(item.createDate) }} </div>
      <div class="title"
      >
        <h4>{{ item.title }}</h4>
      </div>
    </div>
  </div>
  <div class="controls">
    <div class="control_edit" @click.stop.prevent @click="openModal(item)">
      <div class="svg_container">
        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.474 3.40783L15.592 5.52483L13.474 3.40783ZM14.836 1.54283L9.109 7.26983C8.81309 7.56533 8.61128 7.94181 8.529 8.35183L8 10.9998L10.648 10.4698C11.058 10.3878 11.434 10.1868 11.73 9.89083L17.457 4.16383C17.6291 3.99173 17.7656 3.78742 17.8588 3.56256C17.9519 3.33771 17.9998 3.09671 17.9998 2.85333C17.9998 2.60994 17.9519 2.36895 17.8588 2.14409C17.7656 1.91923 17.6291 1.71492 17.457 1.54283C17.2849 1.37073 17.0806 1.23421 16.8557 1.14108C16.6309 1.04794 16.3899 1 16.1465 1C15.9031 1 15.6621 1.04794 15.4373 1.14108C15.2124 1.23421 15.0081 1.37073 14.836 1.54283V1.54283Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M16 13V16C16 16.5304 15.7893 17.0391 15.4142 17.4142C15.0391 17.7893 14.5304 18 14 18H3C2.46957 18 1.96086 17.7893 1.58579 17.4142C1.21071 17.0391 1 16.5304 1 16V5C1 4.46957 1.21071 3.96086 1.58579 3.58579C1.96086 3.21071 2.46957 3 3 3H6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    </div>
    <div class="control_delete" @click.stop.prevent @click="deleteTask(item.id, item.isActive, index)">

      <div class="svg_container">
        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.6 8.65V12.9M2.6 4.4H15.4L14.136 16.487C14.0927 16.903 13.9065 17.2873 13.613 17.5665C13.3196 17.8457 12.9395 18 12.5456 18H5.4544C5.06051 18 4.68045 17.8457 4.387 17.5665C4.09355 17.2873 3.90733 16.903 3.864 16.487L2.6 4.4ZM5.276 1.97495C5.4054 1.68337 5.61017 1.4369 5.8664 1.26427C6.12264 1.09165 6.4198 0.999996 6.7232 1H11.2768C11.5803 0.999835 11.8777 1.09141 12.1341 1.26405C12.3905 1.43668 12.5953 1.68324 12.7248 1.97495L13.8 4.4H4.2L5.276 1.97495V1.97495ZM1 4.4H17H1ZM7.4 8.65V12.9V8.65Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    </div>

  </div>
</li>
</template>

<script>
import ItemCheckbox from "@/components/ui/ItemCheckbox";
export default {
  name: "PostItem",
  components: {ItemCheckbox},
  props: {
    item: Object,
    index: Number
  },
  methods: {
    deleteTask(id, status) {
      this.$store.commit('deleteTask', id, status);
      this.$store.getters.turnActive;
    },
    turnActive(index) {
      const active = this.$store.state.tasks[index].isActive;
      this.$store.state.tasks[index].isActive = !active;
      this.$store.getters.turnActive;
    },
    checkDate(date) {
      const arr = date.split(' ');
      const yesterday = new Date(new Date() - 24*3600*1000)

      if (arr[0] === new Date().toLocaleDateString()) {
        return `Today ${arr[1]}`
      } else if (arr[0] === yesterday.toLocaleDateString()) {
        return  `Yesterday ${arr[1]}`
      }

      return date;
    },
    openModal (item) {
      this.$emit('openModal', item)
    }
  }
}
</script>

<style scoped>

.post-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #4B4C5A;
  border-radius: 18px;
  padding: 16px 24px;
  gap: 24px;
  cursor: pointer;
  user-select: none;
  z-index: 1;
}

.main_content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
}

.post-item:hover {
  background-color: #575969;
  transition: 0.3s;
}

.post-item:hover .controls {
  opacity: 100%;
  transition: opacity ease-in-out .3s;
}

.done {
  opacity: 50%;
}

.done .control_edit {
  display: none;
}

.done h4{
  text-decoration: line-through;
  color: #8D8E9B;
}

.create-date {
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  color: #8D8E9B;
}

.title {
  margin-top: 8px;
  color: #ECECEC;
}

.controls {
  display: flex;
  opacity: 0;
  justify-content: right;
  gap: 8px;
  flex-wrap: wrap;
  z-index: 2;
}

.svg_container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
}

.control_edit {
  border-radius: 8px;
  padding: 8px;
  stroke: #8D8E9B;
}

.control_edit:hover {
  background-color: #8D8E9B;
  stroke: #ECECEC;
  transition: 0.3s;
}

.control_delete {
  border-radius: 8px;
  padding: 8px;
  stroke: #EB5757;
  transition: 0.3s;
}

.control_delete:hover {
  background-color: #EB5757;
  stroke: #ECECEC;
}


</style>