<template>
  <div>
    <div class="col ">
      <div class="img-container w-100 h-100 position-relative">
        <div class="schedule w-100 bg-black">
          <div class="text-container">
            <div>{{ title }}</div>
            <div>{{ originalTitle }}</div>
            <div>{{ overview }}</div>
            <div>{{ arrCast }}</div>
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

export default {
  name: 'MovieCard',
  props: {
    title: String,
    originalTitle: String,
    language: String,
    overview: String,
    imgUrl: String,
    rating: Number,
    arrCast: Array,

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
