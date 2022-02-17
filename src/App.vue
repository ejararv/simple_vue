<template>
  <div class="app">
    <div>
      <form @submit.prevent>
        <h4>Create post</h4>
        <input
          v-bind:value="title"
          @input="title = $event.target.value"
          class="input"
          type="text"
          placeholder="Title"
        />
        <input
          v-bind:value="body"
          @input="body = $event.target.value"
          class="input"
          type="text"
          placeholder="Text"
        />
        <button class="btn" @click="createPost">Create</button>
      </form>
    </div>
    <div class="post" v-for="post in posts" :key="post.id">
      <div><strong>Name:</strong> {{ post.title }}</div>
      <div><strong>Details:</strong> {{ post.body }}</div>
    </div>
  </div>
</template> 

<script>
export default {
  data() {
    return {
      posts: [
        {
          id: 1,
          title: "JavaScript 1",
          body: "Text 1",
        },
        {
          id: 2,
          title: "JavaScript 2",
          body: "Text 2",
        },
        {
          id: 3,
          title: "JavaScript 3",
          body: "Text 3",
        },
      ],
      title: "",
      body: "",
    };
  },
  methods: {
    createPost() {
      const newPost = {
        id: Date.now(),
        title: this.title,
        body: this.body,
      };
      this.posts.push(newPost);
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app {
  padding: 20px;
}
form {
  display: flex;
  flex-direction: column;
}
.post {
  padding: 15px;
  border: 1px solid grey;
  margin-top: 15px;
}
.input {
  width: 100%;
  border: 1px solid grey;
  padding: 10px 15px;
  margin-top: 15px;
}
.btn {
  align-self: flex-end;
  margin-top: 15px;
  padding: 10px 15px;
  background: none;
  border: 1px solid grey;
}
</style>