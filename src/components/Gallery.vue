<script setup>
import { reactive } from 'vue';
    let pictures = reactive([
        {link:'pictures/gallery-1.jpg',
         alt: "Event 1",
         id:1
        },
        {link:"pictures/gallery-2.jpg",
         alt:"Event 2",
         id:2
        },
        {link:"pictures/gallery-3.jpg",
         alt:"Event 3",
         id:3
        },
        
    ])
</script>

<template>
    <!-- Event Gallery Section -->
    <section id="gallery" class="py-5">
      <div class="container text-center">
        <h2 style="font-family: 'Dancing Script', cursive;font-size:2.8rem">Event Gallery</h2>
        <div class="row">
          <!-- Example images for the gallery -->
          <div v-for="picture in pictures"  class="col-md-4 mb-4" v-bind:key="picture.id">
            <img v-bind:src="picture.link" class="img-fluid rounded" v-bind:alt="picture.alt" />
          </div>
        </div>
      </div>
    </section>
</template>