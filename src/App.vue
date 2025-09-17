<script setup>
import Header from './components/Header.vue'
import Services from './components/Services.vue'
import Calculator from './components/Calculator.vue'
import Testimonials from './components/Testimonials.vue'
import Gallery from './components/Gallery.vue'
import WhyUs from './components/WhyUs.vue'
import Contact from './components/Contact.vue'
</script>

<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main> -->
    <Header />
    <Services/>
    
    
    <Testimonials/>
    <Gallery/>
    <WhyUs/>
    <Contact/>
    <Calculator />
   

    <!-- Footer Section -->
    <footer class="bg-dark text-center py-4 text-light">
      <p>&copy; 2025 Event Rentals. All Rights Reserved.</p>
      <div class="social-links">
        <a href="#" class="text-light me-3">Facebook</a>
        <a href="#" class="text-light me-3">Instagram</a>
        <a href="#" class="text-light">Twitter</a>
      </div>
    </footer>

    
</template>



<style scoped>
/* header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  } */
/* } */
  
  .form-group {
    margin-bottom: 20px;
  }
  label {
    display: block;
    margin-bottom: 8px;
    font-weight: bold;
    color: #e0e0e0;
  }
  select,
  input {
    width: 100%;
    padding: 12px;
    background-color: #2c2c2c;
    color: #e0e0e0;
    border: 1px solid #444;
    border-radius: 8px;
    font-size: 16px;
    margin-bottom: 5px;
  }
  select:focus,
  input:focus {
    outline: none;
    border-color: #7fe0c8;
    box-shadow: 0 0 0 2px rgba(127, 224, 200, 0.2);
  }
  button {
    background-color: #7fe0c8;
    color: #1c1c1c;
    border: none;
    padding: 14px 20px;
    border-radius: 8px;
    font-size: 18px;
    cursor: pointer;
    font-weight: bold;
    width: 100%;
    margin-top: 15px;
    transition: all 0.3s ease;
  }
  button:hover {
    background-color: #90e8d0;
    box-shadow: 0 0 15px rgba(127, 224, 200, 0.4);
  }
  .secondary-btn {
    background-color: transparent;
    color: #ffffff;
    border: 2px solid #7fe0c8;
    margin-top: 10px;
  }
  .secondary-btn:hover {
    background-color: rgba(127, 224, 200, 0.1);
  }
  .result {
    margin-top: 25px;
    padding: 20px;
    background-color: #2c2c2c;
    color: #e0e0e0;
    border-radius: 12px;
    border-left: 4px solid #7fe0c8;
    display: none;
  }
  
  @media (max-width: 600px) {
    select,
    input {
      padding: 10px;
    }
  }
  
  /* Footer */
  footer {
    background-color: #1b1b1b;
    color: #e0e0e0;
  }
  /* Links Hover Effect */
  a:hover {
    color: #7ee7d3;
  }
  /* Button Hover Effect
  button:hover {
    background-color: #7ee7d3;
    border-color: #7ee7d3;
  } */
  
  
  
  
</style>
