<template lang="html">
  <div class="online">
    <navbar></navbar>
    <div class="col-sm-3"> </div>
    <div class="col-sm-6" v-if="gotData">
      <table class="table table-hover table-bordered">
        <thead>
          <tr>
            <th class="thead-text-center">Platform</th>
            <th class="thead-text-center">Players</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in platformList">
            <td>{{ item.label }}</td>
            <td>{{ item.count }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="col-sm-3"> </div>
  </div>
</template>

<script>
import Navbar from './NavBar'

export default {
  components: {
    Navbar
  },
  data () {
    return {
      gotData: false,
      platformList: null
    }
  },
  created: function () {
    var api = 'https://api.bf4stats.com/api/onlinePlayers?output=json'
    this.axios.get(api).then((response) => {
      this.platformList = response.data
      this.gotData = true
    })
  }
}
</script>

<style lang="css" scoped>
.thead-text-center{
  text-align: center;
}
</style>
