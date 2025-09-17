<script setup>
import { reactive } from 'vue';

 let testimonials = reactive([
    {
      comment:"Excellent service! The team was super professional and made our event unforgettable.", 
      user: "Anna K."
    },
    {
      comment:"Top quality equipment at great prices. We’ll definitely book again!", 
      user: "Marco T."
    },
    {
      comment:"Amazing experience from start to finish. Highly recommend this company!", 
      user: "Sofia R."
    }

 ])

</script>

<template>

<section id="testimonials" class="py-5" style="background-color: #1b1b1b">
      <div class="container">
        <h2
          class="text-center mb-5"
          style="
            font-family: 'Dancing Script', cursive;
            color: #7ee7d3;
            font-size: 2.8rem;
          "
        >
          What Our Clients Say
        </h2>

        <div
          id="testimonialCarousel"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <!-- Dots -->
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#testimonialCarousel"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#testimonialCarousel"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#testimonialCarousel"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#testimonialCarousel"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                  style="filter: invert(80%)"
                ></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#testimonialCarousel"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                  style="filter: invert(80%)"
                ></span>
                <span class="visually-hidden">Next</span>
            </button>
          <!-- Carousel items -->
          <div class="carousel-inner text-center">
            <!-- Arrows -->
            
            <div v-for="(testmonial,i) in testimonials" v-bind:class="{'carousel-item':true ,'active' : i==0}">
              <div
                class="testimonial-card p-4 rounded-4 shadow"
              >
                <i
                  class="fas fa-quote-left fa-2x mb-3"
                  style="color: #7ee7d3"
                ></i>
                <p style="color: #cccccc">
                  {{testmonial.comment}}
                </p>
                <h5 style="color: #e0e0e0; margin-top: 15px">— {{ testmonial.user }}</h5>
              </div>
              
              
            </div>
            
          </div>
        </div>
      </div>
    </section>
</template>
<style>
  .testimonial-card {
    border: 1px solid #7ee7d3;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    background-color: #252525;
    max-width: 600px;
    margin: 0 auto;
  }
  .testimonial-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 16px rgba(126, 231, 211, 0.3);
  }
    /* Button Hover Effect */
  button:hover {
    background-color: #7ee7d3;
    border-color: #7ee7d3;
  }
</style>