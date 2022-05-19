<template>
  <div class="app">
    <h1 class="main-title">My ToDo</h1>
    <post-form />
    <post-list />

  </div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";

export default {
  components: {PostForm, PostList}
}
</script>


<style>
@import url("https://fonts.googleapis.com/css2?family=Chakra+Petch:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap");

body {
  font-family: 'Chakra Petch', sans-serif;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

h4 {
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 21px;
}

#app {
  margin: 24px;
}

.app {
  align-content: center;
  max-width: 820px;
  margin: 0 auto;
}

.main-title {
  font-weight: 700;
  font-size: 48px;
  line-height: 63px;
  color: #FCFCFC;
}

</style>
