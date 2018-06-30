const postSnap = {
  methods: {
    postSnap (catUrl, title) {
      this.$root.$firebaseRefs.snap.push(
        {
          'url': catUrl,
          'comment': title,
          'info': 'Posted by App',
          'created_at': -1 * new Date().getTime()
        }
      ).then((result) => {
        this.$router.push(`/detail/${result.key}`)
      })
    }
  }
}

export default postSnap
