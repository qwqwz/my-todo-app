<template>
<li class="post-item" @click="turnStatus(item)" >
  <ItemCheckbox :status="item.status"/>
  <div>
    <div class="create-date">Today 16:09</div>
    <div class="title" :class="item.status == false ? 'unable' : true">{{ item.title }}</div>
  </div>
</li>
</template>

<script>
import ItemCheckbox from "@/assets/ItemCheckbox";
export default {
  name: "PostItem",
  components: {ItemCheckbox},
  props: {
    item: Object
  },
  methods: {
    turnStatus(item) {
      item.status = !item.status;
    }
  }
}
</script>

<style scoped>

.post-item {
  display: flex;
  align-items: center;
  background: #4B4C5A;
  border-radius: 18px;
  padding: 24px 16px;
  gap: 24px;
  cursor: pointer;
}

.unable {
  text-decoration: line-through;
}

.create-date {
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  color: #8D8E9B;
}

.title {
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 21px;
  margin-top: 8px;
  color: #ECECEC;
}

</style>