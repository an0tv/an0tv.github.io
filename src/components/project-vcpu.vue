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
        <h1>RISC-V Singlecycle CPU 2024</h1>
      </center>

        <div class="project-images">
          <div class="imrow">
            <img src="../assets/penthouse.png" alt="Penthouse" style="max-height:400px; height: auto; width: 100%; max-width: 800px;">
          </div>
        </div>

        <div class="project-content">
          <section class="project-section">
            <h2>Overview</h2>
            <p>
              The goal of this project was to compartmentalize most of the electornics that are present in the 
              front of GR25. This was done to simplify the wiring harness through decreasing amount of splices
              needed in the main harness. The drawback of this approach is needing to then route everything inside the 
              box. 
            </p>
          </section>

          <section class="project-section">
            <h2>Technical Details - Electronics</h2>
            <p>
              The penthouse electronics can be split into two sections, the ECU, and the TCM. The ECU is resposnsible for controlling the car. The TCM is responsible 
              for all telemetry and data pre-precoessing that comes from the car. It consists of a Jetson Orin Nano, LTE router, and a DC-DC buck converter meant to step 
              20V down to 12V to power the Jetson. More information of the SW side of the TCM can be found <router-link to="/projects/telemetry">here</router-link>.
            </p>
          </section>

          <section class="project-section">
            <h2>Technical Details - Hardware</h2>
            <p>
              The penthouse is a hybrid assembly consisting of 3D printed walls and FR4 penels to serve as the top and bottom face of the enclosure.
              The enclosure is joined together using M3x45 bolts and SMD nuts soldered on the FR4 panels. This allows for a rigid mechanical connection to 
              exist and keep the enclosure under compression. Furthermore, similar SMD nuts are used to mount the electronics to the bottom face of the penthouse. 
            </p>
          </section>

          <!-- < <section class="project-section">
            <h2>Key Features</h2>
            <ul>
              <li><strong>Integrated Design:</strong> Seamlessly built into the steering wheel for optimal driver access</li>
              <li><strong>6-Axis Gyroscope:</strong> Precise steering wheel position tracking and orientation detection</li>
              <li><strong>CAN Bus Integration:</strong> Real-time vehicle data communication and feedback</li>
              <li><strong>Dual Rotary Encoders:</strong> Intuitive user interface for information display control</li>
              <li><strong>Real-time Display:</strong> Live speed and vehicle status information</li>
              <li><strong>Compact Form Factor:</strong> Designed for competitive racing environment constraints</li>
            </ul>
          </section> -->

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