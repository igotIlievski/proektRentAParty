

<template>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand" href="#">Rent A Party</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link" href="#hero">Hero</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#services">Services</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#calculator">Calculator</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#why-us">Why Us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#gallery">Gallery</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#testimonials">Testimonials</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- Header Section -->
    <header id="hero" class="bg-dark text-center py-5">
      <div class="container">
        <h1
          class="display-4 fw-bold"
          style="font-family: 'Dancing Script', cursive"
        >
          Rent A Party - Event Rentals
        </h1>
        <p class="lead" style="font-family: 'Poppins', sans-serif">
          Your one-stop solution for all event needs
        </p>
      </div>
    </header>
</template>

<style>
/* Navbar Styles */
.navbar {
    background-color: #1b1b1b;
    transition: background-color 0.3s ease-in-out;
  }
  /* Navbar Links */
  .navbar-nav .nav-link {
    color: #e0e0e0;
    font-family: "Poppins", sans-serif;
    padding: 10px 15px;
    transition: color 0.3s ease, transform 0.3s ease;
  }
  .navbar-nav .nav-link:hover {
    color: #7ee7d3;
    transform: translateY(-5px); /* Slightly lift the link on hover */
  }

  /* Active Link Style */
  .navbar-nav .nav-link.active {
    color: #7ee7d3;
    font-weight: bold;
  }
  /* Navbar Toggle Button */
  .navbar-toggler {
    border-color: #7ee7d3;
  }
  .navbar-toggler-icon {
    background-color: #7ee7d3;
  }
  
  /* Hover effect on navbar */
  .navbar:hover {
    background-color: #333; /* Darker background on hover */
  }
  
  /* Header */
  #hero {
    background-color: #1b1b1b;
    color: #e0e0e0;
  }
  #hero h1 {
    font-family: "Dancing Script", cursive;
    font-size: 3rem;
    color: #7ee7d3;
  }
  #hero p {
    font-family: "Poppins", sans-serif;
    font-size: 1.25rem;
  }
</style>