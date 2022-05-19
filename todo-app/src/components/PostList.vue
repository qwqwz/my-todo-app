<template>
  <ul class="post-list">
    <transition-group name="list-complete">
      <post-item
        class="list-complete-item"
        :key="item.id"
        :item="item"
        :index="index"
        v-for="(item, index) in this.$store.state.tasks"
      />
    </transition-group>
  </ul>
</template>

<script>
import PostItem from "@/components/PostItem";
export default {
  name: "PostList",
  components: {PostItem},
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

</style>