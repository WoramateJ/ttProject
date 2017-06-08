<template lang="html">
  <div class="">
    <div>
      <table class="table table-hover table-bordered">
        <thead>
          <tr>  
            <th style="text-align: center;">Name</th>
            <th style="text-align: center;">Kills</th>
            <th style="text-align: center;">Shots</th>
            <th style="text-align: center;">Hits</th>
            <th style="text-align: center;">Headshots</th>
            <th style="text-align: center;">Time</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for='weapon in playerWeaponsList'>
            <td>{{ weapon.name }}</td>
            <td>{{ weapon.stat.kills }}</td>
            <td>{{ weapon.stat.shots }}</td>
            <td>{{ weapon.stat.hits }}</td>
            <td>{{ weapon.stat.hs }}</td>
            <td>{{ weapon.stat.time }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    playerWeaponsList: {
      default: null,
      type: Object
    }
  }
}
</script>

<style lang="css" scoped>
</style>
