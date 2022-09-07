<template>
  <div class="chat">
    <h2>{{ message }}</h2>
  </div>
</template>

<script>
export default {
  name: "chat",
  components: {},
  mixins: [],
  props: {},
  data: function () {
    return {
      message: "Hello chat"
    };
  },
  created: function () {},
  mounted: function () {},
  computed: {},
  methods: {}
};
</script>

<style scoped>
.chat {
}
</style>
