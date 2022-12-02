<template>
  <main>
    <div
      v-if="arrMoviesFiltered.length"
      class="container p-4"
    >
      <div class="movies">
        <h1>Movies</h1>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-3 g-4">
          <MainCard
            v-for="movie in arrMoviesFiltered"
            :id="movie.id"
            :key="movie.id"
            :title="movie.title"
            :original-title="movie.original_title"
            :language="movie.original_language"
            :rating="getRating(movie.vote_average, 5, 10)"
            :img-url="`${imgBase}${imgSize}${movie.poster_path}`"
            :overview="movie.overview"
          />
        </div>
      </div>

      <div
        v-if="arrSeriesFiltered.length"
        class="series"
      >
        <h1>Series</h1>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-3 g-4">
          <MainCard
            v-for="series in arrSeriesFiltered"
            :key="series.id"
            :title="series.name"
            :original-title="series.original_name"
            :language="series.original_language"
            :rating="getRating(series.vote_average, 5, 10)"
            :img-url="`${imgBase}${imgSize}${series.poster_path}`"
            :overview="series.overview"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<script>

import MainCard from '@/components/MainCard.vue';

export default {
  name: 'MainPage',
  components: {
    MainCard,
  },
  props: {
    searchedMovies: Array,
    searchedSeries: Array,
    genresList: Array,
    arrMoviesFiltered: Array,
    arrSeriesFiltered: Array,
  },
  data() {
    return {
      imgBase: 'http://image.tmdb.org/t/p',
      imgSize: '/w500',
    };
  },
  methods: {
    getRating(currentRating, maxRating, maxCurrentRating) {
      return Math.ceil((currentRating * maxRating) / maxCurrentRating);
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
