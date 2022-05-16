<template>
  <ul class="post-list">
    <post-item :key="item.id" :item="item" v-for="item in items"/>
  </ul>
</template>

<script>
import PostItem from "@/components/PostItem";
export default {
  name: "PostList",
  components: {PostItem},
  props: {
    items: Array
  }

}
</script>

<style scoped>
.post-list {
  list-style: none;
  margin-top: 38px;
}

.post-list li {
  margin-top: 16px;
}

</style>