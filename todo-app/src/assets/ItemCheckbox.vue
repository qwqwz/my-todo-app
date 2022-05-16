<template>

  <div class="item-checkbox" :class="status === false ? 'unable' : true"></div>
</template>

<script>
export default {
  name: "ItemCheckbox",
  props: {
    status: {
      type: Boolean
    }
  }
}
</script>

<style scoped>
.item-checkbox {
  width: 30px;
  height: 30px;
  border: 2px solid #6B6C77;
  border-radius: 8px;
}

.unable {
  background-image: url("../assets/icons/ic_round-done.svg");
  background-repeat: no-repeat;
  background-position: center;
}
</style>