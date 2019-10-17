<template>
  <div class="toast-box">
    this is toast {{msg}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: ''
    };
  },
  watch: {
    msg(value) {
      console.log('msg changed ', value);
    }
  }
};
</script>
