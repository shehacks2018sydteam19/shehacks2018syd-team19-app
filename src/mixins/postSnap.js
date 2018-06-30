const postSnap = {
  methods: {
    postSnap (catUrl, title) {
      this.$root.$firebaseRefs.cat.push(
        {
          'url': catUrl,
          'comment': title,
          'info': 'Posted by App',
          'created_at': -1 * new Date().getTime()
        }
      ).then(
        this.$router.push('/')
      )
    }
  }
}

export default postSnap
