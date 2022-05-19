<template>

  <div class="item-checkbox" :class="isActive === false ? 'unable' : true"></div>
</template>

<script>
export default {
  name: "ItemCheckbox",
  props: {
    isActive: {
      type: Boolean
    }
  }
}
</script>

<style scoped>
.item-checkbox {
  min-width: 30px;
  min-height: 30px;
  border: 2px solid #6B6C77;
  border-radius: 8px;
}

.unable {
  background-image: url("../../assets/icons/ic_round-done.svg");
  background-repeat: no-repeat;
  background-position: center;
}
</style>