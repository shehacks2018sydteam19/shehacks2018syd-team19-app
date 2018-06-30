<script>
  import { find } from 'lodash'

  export default {
    data () {
      return {
        snap: null
      }
    },
    mounted () {
      this.snap = find(this.$root.snap, (snap) => snap['.key'] === this.$route.params.id)
    }
  }
</script>

<template>
  <div class="mdl-grid">
    <div class="mdl-cell mdl-cell--8-col">
      <div class="picture">
        <img :src="snap.url" />
      </div>
      <div class="info">
        <span>{{ snap.info }}</span>
      </div>
    </div>
    <div class="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet">
      <div class="comment">
        <span>{{ snap.comment }}</span>
      </div>
      <div class="actions">
        <router-link class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" to="/post">
          Preview
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .picture > img {
    color: #fff;
    width:100%;
  }
  .info {
    text-align: right;
    padding: 5px;
    color: #555;
    font-size: 10px;
  }
  .comment {
    padding: 10px;
    color: #555;
  }
  .actions {
    text-align: center;
  }
</style>
