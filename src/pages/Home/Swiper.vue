<template>
  <section>
   
      <swiper :options="swiperOption">
        <swiper-slide class="slid1">Slide 1</swiper-slide>
        <swiper-slide class="slid2">Slide 2</swiper-slide>
        <swiper-slide class="slid3">Slide 3</swiper-slide>
        <swiper-slide class="slid4">Slide 4</swiper-slide>
        <swiper-slide class="slid5">Slide 5</swiper-slide>
        <swiper-slide class="slid6">Slide 6</swiper-slide>
        <swiper-slide class="slid7">Slide 7</swiper-slide>
        <div class="swiper-paginaion" slot="pagination"></div>
      </swiper>
    </md-card-media>
  </md-card>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        swiperOption: {
          effect: 'Swiper',
          grabCursor: true,
          centeredSlides: true,
          slidesPerView: 'auto',
          coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows : true
          },
          pagination: {
            el: '.swiper-pagination'
          }
        }
      }
    }
  }
</script>

<style scoped>
  .swiper-inner {
    width: 100%;
    height: 400px;
    padding-top: 50px;
    padding-bottom: 50px;
  }
  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 300px;
    height: 300px;
    text-align: center;
    line-height: 300px
  }
  .slid1{
    background: pink
  }
  .slid2{
    background:#80808063
  }
  .slid3{
    background:skyblue
  }
  .slid4{
    background:orange
  }
  .slid5{
    background: #cc9bdcad
  }
  .slid6{
    background:#a6dea8
  }
 .slid7{
    background:#ffc1076e
  }
</style>