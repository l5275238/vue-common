<template>
  <div>
    <Modal v-model="value"  @on-ok="ok"  @on-cancel="cancel" :title="title" width="500px" class-name="vertical-center-modal">
    </Modal>
  </div>
</template>
<script type="text/ecmascript-6">
  export default{

    data() {
      return {
        value: false,
        title: ''
      }
    },
    created() {
    },
    methods: {
      ok:function () {

      },
      cancel:function () {

      }
    }
  }
</script>
<style rel="stylesheet/stylus" lang="stylus">
</style>
