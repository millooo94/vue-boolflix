<template>
  <main>
    <!-- <div class="container">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
        <MovieCard
          :movie="movie"
        />
      </div>
    </div> -->
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
// import MovieCard from '@/components/MovieCard.vue';

export default {
  name: 'MainPage',
  components: {
    // MovieCard,
  },
  props: {
    searchedString: String,
  },
  data() {
    return {
      movieApi: 'https://api.themoviedb.org/3/search/movie',
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
