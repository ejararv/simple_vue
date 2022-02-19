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
      <my-button
        style="align-self: flex-end; margin-top: 15px"
        @click="createPost"
        class="btn"
        >Create</my-button
      >
    </form>
  </div>
</template>

<script>
import MyButton from "./UI/MyButton.vue";
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
  components: { MyButton },
};
</script>

<style  scoped>
form {
  display: flex;
  flex-direction: column;
}

.input {
  width: 100%;
  border: 1px solid #44d5a7;
  padding: 10px 15px;
  margin-top: 15px;
}
</style>