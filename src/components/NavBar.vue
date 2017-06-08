<template lang="html">
  <nav class="navbar navbar-toggleable-md navbar-inverse bg-primary">
    <!-- <img src="http://s.apptoko.com/a/uploads/thumbnails/062014/battlefield-bf4-stats-icon.png"> -->
    <a class="navbar-brand" href="http://localhost:8080/">BF4 Stats</a>
    <a class="navbar-brand" href="http://localhost:8080/onlineplayer">Online player</a>
    <div class="navbar-right"v-if="isShowName">
      <div v-if="isGet">
        <span><img :src="userBarApi"/></span>
      </div>
      <div v-else>
        <span>Please tell us you BF4 name.</span>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    isGet: {
      default: false,
      type: Boolean
    },
    userBarApi: {
      default: '',
      type: String
    },
    isShowName: {
      default: false,
      type: Boolean
    }
  }
}
</script>

<style lang="css" scoped>
.navbar-text {
  font: Helvetica;
  font-size: 100px;
}
</style>
