<template>
  <div>
    <div class="post">
      <div>
        <div><strong>Name:</strong> {{ post.title }}</div>
        <div><strong>Details:</strong> {{ post.body }}</div>
      </div>
      <div class="post__btns"><my-button>Delete</my-button></div>
    </div>
  </div>
</template>

<script>
import MyButton from "./UI/MyButton.vue";
export default {
  components: { MyButton },
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style  scoped>
.post {
  padding: 15px;
  border: 1px solid #44d5a7;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>