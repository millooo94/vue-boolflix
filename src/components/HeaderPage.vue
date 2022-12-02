<template>
  <header>
    <div class="container">
      <div class="row justify-content-between align-items-center">
        <div class="col-auto">
          <a
            href=""
            class="text-decoration-none"
          >
            <h1 class="m-0">
              BOOLFLIX
            </h1>
          </a>
        </div>
        <div class="col-auto d-flex">
          <form
            action=""
            @submit.prevent="$emit('searchedValue', searchStr)"
          >
            <label for="search">
              <input
                id="search"
                v-model="searchStr"
                class="h-100"
                placeholder="Cerca il tuo film preferito"
                type="text"
                name="search"
              >
            </label>
            <button>
              CERCA
            </button>
            <label for="genres">
              <select
                id="genres"
                v-model="genreFilter"
                class="h-100"
                name="genres"
                @change="genreChange"
              >
                <option value="all">All</option>
                <option
                  v-for="genre in genresList"
                  :key="genre.name"
                  :value="genre.id"
                >{{ genre.name }}</option>
              </select>
            </label>
          </form>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: 'HeaderPage',
  props: {
    genresList: Array,
  },
  data() {
    return {
      searchStr: '',
      genreFilter: 'all',
    };
  },
  methods: {
    genreChange() {
      this.$emit('changedGenre', this.genreFilter);
    },
  },
};
</script>

<style lang="scss" scoped>
header{
  background-color: black
}
h1 {
  color: red;
  font-weight: bold;
}
input{
  &::placeholder {
    font-size: .8rem;
  }
}
button {
  background-color: red;
  color: white;
}

</style>
