<template>
  <div id="carousel">
    <b-carousel
      id="carousel-fade"
      style="text-shadow: 0px 0px 2px #000"
      fade
      controls
      indicators
      img-width="1024"
      img-height="1000"
    >
      <b-carousel-slide
        caption="Learn From The Experts."
        img-src="img/carousel/slider01.jpg"
      ></b-carousel-slide>

      <b-carousel-slide
        caption="We Are Excellent In Education."
        img-src="img/carousel/slider02.jpg"
      ></b-carousel-slide>

      <b-carousel-slide
        caption="Strive for Excellent."
        img-src="img/carousel/slider03.jpg"
      ></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  name: "Carousel"
};
</script>

<style lang="scss">
.carousel .carousel-item img {
  height: 800px;
}

.carousel .carousel-caption h3 {
  font-size: 40px;
  background: rgba(0, 0, 0, 0.5);
  padding: 10px 0px;
}
</style>
