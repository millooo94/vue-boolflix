<template>
  <div>
    <div class="col ">
      <div class="img-container w-100 h-100 position-relative">
        <div class="schedule w-100 bg-black">
          <div class="text-container">
            <div>{{ title }}</div>
            <div>{{ originalTitle }}</div>
            <div>{{ overview }}</div>
            <div
              v-for="actor in splicedArrCast"
              :key="actor.id"
            >
              {{ actor.name }}
            </div>
            <lang-flag :iso="language" />
            <div class="stars d-flex justify-content-between">
              <font-awesome-icon
                v-for="i in rating"
                :key="i"
                icon="fa-solid fa-star"
              />
              <font-awesome-icon
                v-for="i in (5 - rating)"
                :key="i"
                icon="fa-regular fa-star"
              />
            </div>
          </div>
        </div>
        <img
          class="w-100"
          :src="imgUrl"
          alt=""
        >
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'MovieCard',
  props: {
    title: String,
    originalTitle: String,
    language: String,
    overview: String,
    imgUrl: String,
    rating: Number,
    id: Number,

  },
  data() {
    return {
      movieCastStr: `https://api.themoviedb.org/3/movie/${this.id}/credits`,
      myKey: 'f076b0b57cdb7cc0d567f3b7fa3992c5',
      arrCast: [],
      splicedArrCast: this.arrCast.splice(4, this.arrCast.lenght - 1),
    };
  },
  created() {
    axios.get(this.movieCastStr, {
      params: {
        api_key: this.myKey,
      },
    }).then((axiosResponse) => {
      this.arrCast = axiosResponse.data.cast;
    });
  },
  // methods: {
  //   getSplicedArray() {
  //     return this.arrCast.splice(4, this.arrCast.lenght - 1);
  //   },
  // },
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
