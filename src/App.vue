<template>
  <div>
    <HeaderPage @searchedValue="getValue" />
    <MainPage :searched-string="searchedString" />
  </div>
</template>

<script>
import HeaderPage from '@/components/HeaderPage.vue';
import MainPage from '@/components/MainPage.vue';

export default {
  name: 'App',
  components: {
    HeaderPage,
    MainPage,
  },
  data() {
    return {
      searchedString: '',
    };
  },
  methods: {
    getValue(value) {
      this.searchedString = value;
    },
  },
};
</script>

<style lang="scss">
@import "~bootstrap/scss/bootstrap";

</style>
