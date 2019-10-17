<template>
  <div style="margin: 20px;">
    <el-input v-model="input" placeholder="请输入内容"></el-input>
    <el-button @click="showMessage">点击show message</el-button>
    <el-button @click="showTest">点击show test</el-button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        input: 'Hello Element UI!'
      };
    },
    mounted() {
      // console.log(this.$message);
      // console.log(this.$toast, 'aaa')
      this.$message('aaaa')
      this.$toast('啊啊啊，我加上了')
    },
    methods: {
      showMessage () {
        this.$message('aaaa')
      },
      showTest() {
        this.$toast('啊啊啊，我终于加上了')
      }
    }
  };
</script>

<style>
  .el-input {
    margin-bottom: 20px;
  }
</style>
