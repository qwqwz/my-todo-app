<template>
  <div class="post-form">
    <input class="main-input" type="text" placeholder="Enter the name...">
<button class="btn">Create</button>
  </div>
</template>

<script>
export default {
  name: "PostForm"
}
</script>

<style scoped>

.post-form {
  display: flex;
  flex-direction: column;
}

.main-input {
  font-family: 'Chakra Petch', sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 21px;
  color: #8D8E9B;
  padding: 16px 24px;
  margin-top: 38px;
  border: 2px solid #8D8e9B;
  border-radius: 18px;
  background: none;
}

.main-input:focus-visible {
  outline: none;
  border-color: #FCFCFC;
  color: #FCFCFC;
}

.btn {
  align-self: flex-end;
  font-family: 'Chakra Petch', sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 21px;
  padding: 16px 60px;
  margin-top: 16px;
  background: #645CBA;
  color: #ECECEC;
  border-radius: 18px;
  border: none;
  cursor: pointer;
}
.btn:hover {
  background-color: #6860c2;
}
.btn:active {
  background-color: #645CBA;
}

</style>