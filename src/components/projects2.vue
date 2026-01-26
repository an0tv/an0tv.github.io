<template class="back_color">
    <head>
        <link type="stylesheet" href="../style.css" />
    </head>
    <div class="projects-container">
        <center>
            <h1>Projects</h1>
        </center>

        <div class="project-item">
            <router-link to="/projects/penthouse" class="project-link">
                <div class="project-card">
                    <div class="project-card-content">
                        <h2>Gaucho Racing Penthouse 2025</h2>
                        <p class="project-summary">
                            Front-end enclosure for GR26
                        </p>
                    </div>
                    <div class="project-card-image">
                        <img
                            src="../assets/penthouse.png"
                            alt="Penthouse Dashboard"
                        />
                    </div>
                </div>
            </router-link>
        </div>

        <div class="project-item">
            <router-link to="/projects/vcpu" class="project-link">
                <div class="project-card">
                    <div class="project-card-content">
                        <h2>RISC-V Singlecycle CPU 2024</h2>
                        <p class="project-summary">
                            RISC-V Singlecycle CPU implemented in Verilog with
                            advanced features
                        </p>
                    </div>
                    <div class="project-card-image">
                        <img src="../assets/vcpu.png" alt="RISC-V CPU" />
                    </div>
                </div>
            </router-link>
        </div>

        <div class="projects-list">
            <div class="project-item">
                <router-link to="/projects/telemetry" class="project-link">
                    <div class="project-card">
                        <div class="project-card-content">
                            <h2>Gaucho Racing Cloud Telemetry 2024</h2>
                            <p class="project-summary">
                                Real-time telemetry system with MQTT,
                                SingleStore DB, and React dashboard
                            </p>
                        </div>
                        <div class="project-card-image">
                            <img
                                src="../assets/singlestore.png"
                                alt="Cloud Telemetry"
                            />
                        </div>
                    </div>
                </router-link>
            </div>

            <div class="project-item">
                <router-link to="/projects/sam" class="project-link">
                    <div class="project-card">
                        <div class="project-card-content">
                            <h2>Gaucho Racing SAM 2024</h2>
                            <p class="project-summary">
                                SAM or Sensor array module strides to be a
                                Teensy 4.0 alternative with hats designed for
                                vehicle characterization and data collection.
                                Works alongside with the Gaucho Racing Cloud
                                Telemetry.
                            </p>
                        </div>

                        <div class="project-card-image">
                            <img
                                src="../assets/sam.png"
                                alt="Sensor Array Module"
                            />
                        </div>
                    </div>
                </router-link>
            </div>

            <div class="project-item">
                <router-link to="/projects/steering-wheel" class="project-link">
                    <div class="project-card">
                        <div class="project-card-content">
                            <h2>Gaucho Racing Steering Wheel 2023</h2>
                            <p class="project-summary">
                                Interactive dashboard integrated into UCSB GR23
                                steering wheel with gyroscope positioning
                            </p>
                        </div>
                        <div class="project-card-image">
                            <img
                                src="../assets/wheel.png"
                                alt="Steering Wheel"
                            />
                        </div>
                    </div>
                </router-link>
            </div>

            <!-- template -->
            <!-- <div class="project-item">
        <router-link to="/projects/coming-soon" class="project-link">
          <div class="project-card">
            <h2>More Projects Coming Soon...</h2>
            <p class="project-summary">Additional projects will be added to showcase more work</p>
            <div class="project-tags">
            </div>
          </div>
        </router-link>
      </div> -->
        </div>
    </div>
</template>
