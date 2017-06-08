<template>
  <div>
    <navbar :is-show-name="true" :is-get="state.isGetName" :user-bar-api="api.userBarApi"></navbar>
    <div v-if="state.isShowForm">
      {{ text.msg }}
      <login @login="onSubmit"></login>
    </div>
    <nav class="navbar" v-else>
      <div class="navbar navbar-brand">
        <input type="button" value="Profile" @click="toggleProfile">
        <input type="button" value="Weapons" @click="toggleWeapons">
      </div>
    </nav>
    <div class="information" v-if="state.hasPlayerInfo">
      <profile class="col-sm-12 information" :player-name="name" v-if="state.isShowProfile"></profile>
      <weapons class="col-sm-12 information" :player-weapons-list="object.playerInfo ? object.playerInfo.weapons : 0" v-if="state.isShowWeapons"></weapons>
    </div>
  </div>
</template>

<script>
import Navbar from './NavBar'
import Profile from './Profile'
import Weapons from './Weapons'
import Login from './Login'

export default {
  components: {
    Navbar,
    Profile,
    Weapons,
    Login
  },
  data () {
    return {
      state: {
        isGetName: false,
        isShowForm: true,
        isShowProfile: false,
        isShowWeapons: false,
        hasPlayerInfo: false
      },
      text: {
        msg: 'Welcome to Your BF4 stat viwer.'
      },
      object:{
        playerInfo: {
          default: null,
          type: Object
        }
      },
      api: {
        userBarApi: ''
      },
      msg: 'Welcome to Your BF4 stat viwer.',
      name: null,
      isGetName: false,
      playerInfo: {
        default: null,
        type: Object
      },
      isShowForm: true,
      userBarApi: '',
      isShowProfile: false,
      isShowWeapons: false,
      hasPlayerInfo: false
    }
  },
  methods: {
    getPlayerInfo: function () {
      var api = 'https://api.bf4stats.com/api/playerInfo?plat=pc&name='+this.playerName+'&output=json'
      this.axios.get(api).then((response) => {
        this.object.playerInfo = response.data
      })
      this.api.userBarApi = 'https://g.bf4stats.com/o1TEpx5V/pc/'+this.name+'.png'
      this.state.hasPlayerInfo = true
    },
    onSubmit: function (value) {
      this.name = value
      if (this.name === '') {
        alert( 'You cannot left player\'s name vlank' )
        this.state.isShowForm = true
        return
      } else {
        this.getPlayerInfo()
      }
      this.state.isGetName = true
      this.state.isShowForm = false
    },
    toggleProfile: function () {
      if (this.isShowProfile) {
        this.state.isShowProfile = false
      } else {
        this.state.isShowProfile = true
        this.state.isShowWeapons = false
      }
    },
    toggleWeapons: function () {
      if (this.isShowWeapons) {
        this.state.isShowWeapons = false
      } else {
        this.state.isShowWeapons = true
        this.state.isShowProfile = false
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.information {
  height: 100%;
}
</style>
