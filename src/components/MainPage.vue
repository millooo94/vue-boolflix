<template>
  <main>
    <div
      v-for="movie in arrMovies"
      :key="movie.original_title"
    >
      {{ movie.original_title }}
    </div>
  </main>
</template>

<script>
import axios from 'axios';

export default {
  name: 'MainPage',
  props: {
    searchedString: String,
  },
  data() {
    return {
      movieApi: 'https://api.themoviedb.org/3',
      myKey: 'f076b0b57cdb7cc0d567f3b7fa3992c5',
      arrMovies: null,
    };
  },
  methods: {
    getMovies() {
      axios.get(this.movieApi, {
        params: {
          api_key: this.myKey,
          query: this.searchedString,
        },
      }).then((axiosResponse) => { this.arrMovies = axiosResponse.data.results; });
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
