<template>
  <div>
    <div class="col ">
      <div class="img-container w-100 h-100 position-relative">
        <div class="schedule w-100 bg-black">
          <div class="text-container">
            <div>{{ movie.title }}</div>
            <div>{{ movie.original_title }}</div>
            <div>{{ movie.overview }}</div>
            <lang-flag :iso="movie.original_language" />
            <div class="stars d-flex justify-content-between">
              <font-awesome-icon
                v-for="item in rating"
                :key="item"
                icon="fa-solid fa-star"
              >
                {{ item }}
              </font-awesome-icon>
              <font-awesome-icon
                v-for="item in (5 - rating)"
                :key="item"
                icon="fa-regular fa-star"
              >
                {{ item }}
              </font-awesome-icon>
            </div>
          </div>
        </div>
        <img
          class="w-100"
          :src="`http://image.tmdb.org/t/p/w500/${movie.poster_path}`"
          alt=""
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MovieCard',
  props: {
    movie: Object,
  },
  data() {
    return {
      rating: Math.ceil((this.movie.vote_average * 5) / 10),
    };
  },
};
</script>

<style lang="scss" scoped>
.img-container:hover .schedule {
  visibility: visible;
}
.schedule {
  position: absolute;
  inset: 0;
  visibility: hidden;
  .text-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
    font-size: .8rem;
  }
}

</style>
