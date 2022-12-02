<template>
  <div>
    <HeaderPage
      :genres-list="arrGenres"
      @searchedValue="getValue"
      @changedGenre="getSelectedNewValue"
    />
    <MainPage
      :searched-movies="arrMovies"
      :searched-series="arrSeries"
      :genres-list="getUniqueGenres"
      :arr-movies-filtered="arrMoviesFiltered"
      :arr-series-filtered="arrSeriesFiltered"
    />
  </div>
</template>

<script>
import HeaderPage from '@/components/HeaderPage.vue';
import MainPage from '@/components/MainPage.vue';
import axios from 'axios';

export default {
  name: 'App',
  components: {
    HeaderPage,
    MainPage,
  },
  data() {
    return {
      searchedString: '',
      movieStr: 'https://api.themoviedb.org/3/search/movie',
      seriesStr: 'https://api.themoviedb.org/3/search/tv',
      movieGenreStr: 'https://api.themoviedb.org/3/genre/movie/list',
      seriesGenreStr: 'https://api.themoviedb.org/3/genre/tv/list',
      myKey: 'f076b0b57cdb7cc0d567f3b7fa3992c5',
      arrMovies: [],
      arrSeries: [],
      arrGenres: [],
      selectedNewValue: 'all',
    };
  },
  computed: {
    arrMoviesFiltered() {
      if (this.selectedNewValue === 'all') {
        return this.arrMovies;
      }
      // eslint-disable-next-line
      return this.arrMovies.filter((objMovie) => objMovie.genre_ids.includes(this.selectedNewValue));
    },
    arrSeriesFiltered() {
      if (this.selectedNewValue === 'all') {
        return this.arrSeries;
      }
      // eslint-disable-next-line
      return this.arrSeries.filter((objSeries) => objSeries.genre_ids.includes(this.selectedNewValue));
    },
  },
  created() {
    axios.get(this.movieGenreStr, {
      params: {
        api_key: this.myKey,
      },
    }).then((axiosResponse) => {
      this.arrGenres.push(...axiosResponse.data.genres);
    });

    axios.get(this.seriesGenreStr, {
      params: {
        api_key: this.myKey,
      },
    }).then((axiosResponse) => {
      this.arrGenres.push(...axiosResponse.data.genres);
    });
    console.log(this.arrGenres);
  },

  methods: {
    getValue(value) {
      this.searchedString = value;

      axios.get(this.movieStr, {
        params: {
          api_key: this.myKey,
          query: this.searchedString,
          language: 'it-IT',
        },
      }).then((axiosResponse) => {
        this.arrMovies = axiosResponse.data.results;
      });

      axios.get(this.seriesStr, {
        params: {
          api_key: this.myKey,
          query: this.searchedString,
          language: 'it-IT',
        },
      }).then((axiosResponse) => {
        this.arrSeries = axiosResponse.data.results;
      });
    },
    getUniqueGenres() {
      return this.arrGenres.filter((c, index) => this.arrGenres.indexOf(c) === index);
    },

    getSelectedNewValue(value) {
      this.selectedNewValue = value;
      console.log(this.selectedNewValue);
    },
  },
};
</script>

<style lang="scss">
@import "~bootstrap/scss/bootstrap";

</style>
