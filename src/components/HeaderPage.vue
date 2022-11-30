<template>
  <header>
    <div class="container">
      <div class="row justify-content-between align-items-center">
        <div class="col-auto">
          <h1 class="m-0">
            BOOLFLIX
          </h1>
        </div>
        <div class="col-auto d-flex">
          <label for="search">
            <input
              id="search"
              v-model="searchStr"
              placeholder="Cerca il tuo film preferito"
              type="text"
              name="search"
            >
          </label>
          <button @click="$emit('searchedValue', searchStr)">
            CERCA
          </button>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: 'HeaderPage',
  data() {
    return {
      searchStr: '',
    };
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
