<template>
  <div>
    <form @submit.prevent>
      <h4>Create post</h4>
      <input
        v-model="post.title"
        class="input"
        type="text"
        placeholder="Title"
      />
      <input v-model="post.body" class="input" type="text" placeholder="Text" />
      <button @click="createPost" class="btn">Create</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: "",
        body: "",
      },
    };
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit("create", this.post);
      this.post = {
        title: "",
        body: "",
      };
    },
  },
};
</script>

<style  scoped>
form {
  display: flex;
  flex-direction: column;
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