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
      :genres-list="arrGenres"
      :selected-new-value="selectedNewValue"
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
      movieApi: 'https://api.themoviedb.org/3/search/movie',
      seriesApi: 'https://api.themoviedb.org/3/search/tv',
      genreApi: 'https://api.themoviedb.org/3/genre/movie/list',
      myKey: 'f076b0b57cdb7cc0d567f3b7fa3992c5',
      arrMovies: [],
      arrSeries: [],
      arrGenres: [],
      selectedNewValue: '',
    };
  },
  created() {
    axios.get(this.genreApi, {
      params: {
        api_key: this.myKey,
      },
    }).then((axiosResponse) => {
      this.arrGenres = axiosResponse.data.genres;
      // console.log(this.arrGenres);
    });
  },

  methods: {
    getValue(value) {
      this.searchedString = value;
      this.getMovies();
      this.getSeries();
    },
    getMovies() {
      axios.get(this.movieApi, {
        params: {
          api_key: this.myKey,
          query: this.searchedString,
        },
      }).then((axiosResponse) => {
        this.arrMovies = axiosResponse.data.results;
      });
    },
    getSeries() {
      axios.get(this.seriesApi, {
        params: {
          api_key: this.myKey,
          query: this.searchedString,
        },
      }).then((axiosResponse) => {
        this.arrSeries = axiosResponse.data.results;
      });
    },
    getSelectedNewValue(value) {
      this.selectedNewValue = value;
      // console.log(this.selectedNewValue);
    },
  },
};
</script>

<style lang="scss">
@import "~bootstrap/scss/bootstrap";

</style>
