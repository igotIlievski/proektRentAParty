<script setup>
 let reasons = [
  {header : "Reliable Service",
    paragraph: "Always on time with professional setup and takedown for a stress-free experience."
  },
  {header : "Affordable Pricing",
    paragraph: "Top-quality rentals at competitive prices, with transparent quotes and no hidden fees."
  },
  {header : "Premium Quality",
    paragraph: "Immaculately maintained equipment that will impress your guests and elevate your event."
  }
  ];
</script>
<template>
    <!-- Why Us Section -->
    <section id="why-us" class="py-5" style="background-color: #1b1b1b">
      <div class="container">
        <h2
          class="text-center mb-5"
          style="
            font-family: 'Dancing Script', cursive;
            color: #7ee7d3;
            font-size: 2.8rem;
          "
        >
          Why Choose Us?
        </h2>
        <div class="row text-center">
          <div v-for="reason in reasons" class="col-md-4 mb-4">
            <div
              class="p-4 h-100 border border-turquoise rounded-4 shadow"
              style="background-color: #252525"
            >
              <i class="fas fa-handshake fa-3x mb-3" style="color: #7ee7d3"></i>
              <h4 style="color: #e0e0e0; font-family: 'Poppins', sans-serif">
                {{reason.header}}
              </h4>
              <p style="color: #cccccc">
                {{reason.paragraph}}
              </p>
            </div>
          </div>
          <!-- <div class="col-md-4 mb-4">
            <div
              class="p-4 h-100 border border-turquoise rounded-4 shadow"
              style="background-color: #252525"
            >
              <i
                class="fas fa-dollar-sign fa-3x mb-3"
                style="color: #7ee7d3"
              ></i>
              <h4 style="color: #e0e0e0; font-family: 'Poppins', sans-serif">
                Affordable Pricing
              </h4>
              <p style="color: #cccccc">
                Top-quality rentals at competitive prices, with transparent
                quotes and no hidden fees.
              </p>
            </div>
          </div>

          <div class="col-md-4 mb-4">
            <div
              class="p-4 h-100 border border-turquoise rounded-4 shadow"
              style="background-color: #252525"
            >
              <i class="fas fa-star fa-3x mb-3" style="color: #7ee7d3"></i>
              <h4 style="color: #e0e0e0; font-family: 'Poppins', sans-serif">
                Premium Quality
              </h4>
              <p style="color: #cccccc">
                Immaculately maintained equipment that will impress your guests
                and elevate your event.
              </p>
            </div>
          </div>-->
        </div>  
      </div>
    </section>
</template>
<style>
    /* Why Us Section */
  #why-us {
    background-color: #2a2a2a;
    color: #e0e0e0;
  }
  .border-turquoise {
    border: 1px solid #7ee7d3;
  }
</style>