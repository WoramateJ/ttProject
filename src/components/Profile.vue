<template lang="html">
  <div class="profile">
    <span><img :src="userGraphical"/></span>
  </div>
</template>

<script>

export default {
  props: {
    playerName: {
      default: '',
      type: String
    }
  },
  data () {
    return {
      userGraphical: {
        default: '',
        type: String
      }
    }
  },
  created () {
    this.userGraphical = 'https://g.bf4stats.com/Dvalken001/pc/'+this.playerName+'.png'
  }
}
</script>

<style lang="css" scoped>
.profile {
  align-self: center;
}
</style>
