<template class="back_color">
  <head>
    <link type="stylesheet" href="../style.css">
  </head>
  <div class="project-container">
    <div class="project-detail">
      <div class="breadcrumb">
        <router-link to="/projects" class="breadcrumb-link">← Back to Projects</router-link>
      </div>
      
      <center>
        <h1>Gaucho Racing Steering Wheel 2023</h1>
      </center>

        <div class="project-images">
          <div class="imrow">
            <img src="../assets/wheel.png" alt="Steering Wheel Dashboard" style="max-height:300px; height: auto; width: 100%; max-width: 400px;">
          </div>
        </div>

        <div class="project-content">
          <section class="project-section">
            <h2>Overview</h2>
            <p>
              A custom dashboard system integrated directly into the UCSB Gaucho Racing GR23 steering wheel. This innovative 
              solution provides drivers with essential vehicle information while maintaining the compact form factor required 
              for competitive racing environments.
            </p>
          </section>

          <section class="project-section">
            <h2>Technical Details</h2>
            <p>
              The dashboard runs on a powerful Teensy 4.1 microcontroller and features a 6-axis gyroscope for accurate 
              steering wheel positioning detection. The system displays critical vehicle data such as speed by establishing 
              a direct connection to the vehicle's CAN bus network. Position data is transmitted back through the CAN bus 
              to provide real-time steering feedback to the vehicle's control systems.
            </p>
          </section>

          <section class="project-section">
            <h2>Key Features</h2>
            <ul>
              <li><strong>Integrated Design:</strong> Seamlessly built into the steering wheel for optimal driver access</li>
              <li><strong>6-Axis Gyroscope:</strong> Precise steering wheel position tracking and orientation detection</li>
              <li><strong>CAN Bus Integration:</strong> Real-time vehicle data communication and feedback</li>
              <li><strong>Dual Rotary Encoders:</strong> Intuitive user interface for information display control</li>
              <li><strong>Real-time Display:</strong> Live speed and vehicle status information</li>
              <li><strong>Compact Form Factor:</strong> Designed for competitive racing environment constraints</li>
            </ul>
          </section>

          <section class="project-section">
            <h2>User Interface</h2>
            <p>
              The main form of user input consists of two rotary encoders strategically positioned for easy access during 
              racing conditions. These encoders allow drivers to change the displayed information without taking their hands 
              off the steering wheel or compromising their driving focus.
            </p>
          </section>

          <section class="project-section">
            <h2>External Links</h2>
            <p>
              <a href="https://gauchoracing.com/" target="_blank" class="external-link">
                UCSB Gaucho Racing Team
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
</template>
