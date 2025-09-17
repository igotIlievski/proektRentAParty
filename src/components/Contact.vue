<template>
     <!-- Contact Section -->
     <section id="contact" class="py-5 text-center">
      <div class="container" style="width:57%;">
        <h2 style="font-family: 'Dancing Script', cursive;font-size:2.8rem;color:#7ee7d3">Contact Us</h2>
        <form action="#" method="POST">
          <input
            type="text"
            class="form-control mb-3"
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            class="form-control mb-3"
            placeholder="Your Email"
            required
          />
          <textarea
            class="form-control mb-3"
            placeholder="Your Message"
            rows="4"
            required
          ></textarea>
          <button type="submit" class="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
</template>
<style>
.form-select,
  .btn {
    background-color: transparent;
    border: 1px solid #7ee7d3;
    color: #e0e0e0;
    font-family: "Poppins", sans-serif;
  }
  .form-select:focus,
  .btn:focus {
    border-color: #7ee7d3;
    box-shadow: none;
  }
</style>