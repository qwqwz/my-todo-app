<template>
  <ul class="post-list"
      v-if="this.$store.state.tasks.length > 0"

  >
    <transition-group name="list-complete">
      <post-item
        class="list-complete-item"
        :key="item.id"
        :item="item"
        :index="index"
        v-for="(item, index) in this.$store.state.tasks"
        @openModal="openModal"
      />
    </transition-group>
  </ul>
  <div class="empty-list"
  v-else
  ><h4>Empty :(<br>Add a new task</h4></div>
  <transition name="modal">
  <modal-item-edit class="modal_edit"
    v-if="mVisible"
    :key="item.id"
    :item="item"
    @closeModal="closeModal"
  />
  </transition>
</template>

<script>
import PostItem from "@/components/PostItem";
import modalItemEdit from "@/components/modal-itemEdit";
export default {
  name: "PostList",
  components: {PostItem, modalItemEdit},
  data: () => {
    return {
      mVisible: false,
      item: {}
    }
  },
  methods: {
    openModal (item) {
      this.mVisible = true;
      this.item = item;
    },
    closeModal () {
      this.mVisible = false;
    }
  }
}
</script>

<style scoped>
.post-list {
  list-style: none;
  margin-top: 38px;
  gap: 16px;
}

.post-list li {
  margin-bottom: 16px;
}

.list-complete-item {
  max-width: 820px;
  transition: all .3s;
  display: flex;
}
 .list-complete-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.list-complete-enter-active {
  opacity: 0;
  transform: translateY(30px);
}

.list-complete-leave-active {
  width: 100%;
  position: absolute;
}

.list-complete-move {
  transition: transform 0.5s ease;
}

.modal-enter-active, .modal-leave-active {
  transition: opacity .3s;
}
.modal-enter, .modal-leave-to{
  opacity: 0;
}

.empty-list h4{
  margin-top: 50px;
  text-align: center;
  font-size: 26px;
  color: #8D8E9B;
  line-height: 32px;

}
</style>