
<template class="back_color">
  <head>
    <link type="stylesheet" href="../style.css">
  </head>
  <div class="projects-container">
    <center>
      <h1>Projects</h1>
    </center>

    <div class="projects-list">
      <div class="project-item">
        <router-link to="/projects/gaucho-racing-telemetry" class="project-link">
          <div class="project-card">
            <h2>Gaucho Racing Cloud Telemetry 2024</h2>
            <p class="project-summary">Real-time telemetry system with MQTT, SingleStore DB, and React dashboard</p>
          </div>
        </router-link>
      </div>

      <div class="project-item">
        <router-link to="/projects/gaucho-racing-steering-wheel" class="project-link">
          <div class="project-card">
            <h2>Gaucho Racing Steering Wheel 2023</h2>
            <p class="project-summary">Interactive dashboard integrated into UCSB GR23 steering wheel with gyroscope positioning</p>
          </div>
        </router-link>
      </div>

      <div class="project-item">
        <router-link to="/projects/coming-soon" class="project-link">
          <div class="project-card">
            <h2>More Projects Coming Soon...</h2>
            <p class="project-summary">Additional projects will be added to showcase more work</p>
            <div class="project-tags">
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

