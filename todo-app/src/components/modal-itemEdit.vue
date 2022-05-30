<template>
<div class="edit_wrap"
     @mousedown="closing = $event.target === $el"
     @mouseup.self="closing && closeModal()"
>
  <div class="edit_wrap_body">
    <div class="edit_wrap_content">
      <div class="svg_container edit_btn_close"
      @click="closeModal()"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 16L7 7M16 7L11.5 11.5L7 16" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </div>
      <h3 class="edit_title">Edit task</h3>
      <input class="edit_input" type="text" placeholder="Buy milk for my brother"
      v-model="title"
      >
      <button class="edit_btn_submit"
      @click="editTask(title, item)"
      >Save</button>
    </div>
  </div>
  Hello
</div>
</template>

<script>
export default {
  name: "modal-itemEdit",
  data: () => {
    return {
      title: '',
      closing: false
    }
  },
  props: {
    item: Object
  },
  watch: {
    item: {immediate: true,
      handler(value) {
      this.title = value.title
    }},
  },
  methods: {
    closeModal() {
      this.$emit('closeModal')
    },
    editTask(title, item) {
      item.title = title;
      this.$store.commit('editTask', item);
      this.closeModal();
    }
  }
}
</script>

<style scoped>
.edit_wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  left: 0;
  top: 0;
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgb(0,0,0, 35%);
  z-index: 3;
}

.edit_wrap_body {
  border-radius: 18px;
  width: 80%;
  max-width: 620px;
  position: fixed;
  padding: 24px;
  background-color: #4B4C5A;
  color: #ECECEC;
}

.edit_wrap_content {
  display: flex;
  flex-direction: column;
}

.edit_title {
  font-family: 'Chakra Petch';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 31px;
  margin-bottom: 24px;
}

.edit_input {
  font-family: 'Chakra Petch', sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 21px;
  color: #8D8E9B;
  padding: 16px 24px;
  border: 2px solid #8D8e9B;
  border-radius: 18px;
  background: none;
}

.edit_input:focus-visible {
  outline: none;
  border-color: #FCFCFC;
  color: #FCFCFC;
}

.edit_btn_submit {
  display: flex;
  flex-wrap: wrap;
  align-self: flex-end;
  font-family: 'Chakra Petch', sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 21px;
  padding: 16px 60px;
  margin-top: 16px;
  background: #219653;
  color: #ECECEC;
  border-radius: 18px;
  border: none;
  cursor: pointer;
}
.edit_btn_submit:hover {
  background-color: #239b57;
}
.edit_btn_submit:active {
  background-color: #219653;
}

.svg_container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
}

.edit_btn_close {
  cursor: pointer;
  margin-bottom: 10px;
  align-self: flex-end;
  border-radius: 8px;
  padding: 8px;
  stroke: #8D8E9B;
}

.edit_btn_close:hover {
  background-color: #8D8E9B;
  stroke: #ECECEC;
  transition: 0.3s;
}
</style>