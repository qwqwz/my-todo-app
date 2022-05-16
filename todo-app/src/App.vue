<template>
  <div class="app">
    <h1 class="main-title">My ToDo</h1>
    <post-form/>
    <post-list :items="items"/>

  </div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";

export default {
  components: {PostForm, PostList},
  data() {
    return {
      items: [
        {id: 1, title: 'Hello', status: true},
        {id: 2, title: 'Hello2', status: true},
      ]
    }
  }
}
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap');

body {
  font-family: 'Chakra Petch', sans-serif;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  margin: 24px;
}

.app {
  align-content: center;
  max-width: 820px;
  background-color: #3B3D47;
  margin: 24px auto;
  padding: 32px;
  border-radius: 18px;
}

.main-title {
  font-weight: 700;
  font-size: 48px;
  line-height: 63px;
  color: #FCFCFC;
}

</style>
