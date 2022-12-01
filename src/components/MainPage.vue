<template>
  <main>
    <div
      v-if="searchedMovies.length"
      class="container p-4"
    >
      <div class="movies">
        <h1>Movies</h1>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-4">
          <MovieCard
            v-for="movie in searchedMovies"
            :key="movie.id"
            :movie="movie"
          />
        </div>
      </div>

      <div
        v-if="searchedSeries.length"
        class="series"
      >
        <h1>Series</h1>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-4">
          <SeriesCard
            v-for="series in searchedSeries"
            :key="series.id"
            :series="series"
          />
        </div>
      </div>
    </div>

    <!-- <div
      v-for="movie in searchedResults"
      :key="movie.id"
    >
      {{ movie.original_title }}
    </div> -->
  </main>
</template>

<script>

import MovieCard from '@/components/MovieCard.vue';
import SeriesCard from '@/components/SeriesCard.vue';

export default {
  name: 'MainPage',
  components: {
    MovieCard,
    SeriesCard,
  },
  props: {
    searchedMovies: Array,
    searchedSeries: Array,
  },

  methods: {
  },
};
</script>

<style lang="scss" scoped>

</style>
