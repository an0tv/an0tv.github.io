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
        <h1>Gaucho Racing Cloud Telemetry 2024</h1>
      </center>

        <div class="project-images">
          <div class="imrow">
            <img src="../assets/mosquitto.png" alt="Mosquitto MQTT" style="max-height:185px; height: auto; width: 33%; max-width: 185px;">
            <img src="../assets/singlestore.png" alt="SingleStore Database" style="max-height:185px; height: auto; width: 33%; max-width: 185px;">
            <img src="../assets/react.png" alt="React" style="max-height:185px; height: auto; width: 33%; max-width: 200px;">
          </div>
        </div>

        <div class="project-content">
          <section class="project-section">
            <h2>Overview</h2>
            <p>
              A comprehensive cloud telemetry system designed for the UCSB Gaucho Racing team. This system enables real-time 
              monitoring and analysis of vehicle performance data through a sophisticated pipeline of modern technologies.
            </p>
          </section>

          <section class="project-section">
            <h2>Technical Details</h2>
            <p>
              The system uses an LTE module to collect CAN frames from the race car and transmit them to an MQTT ingest server 
              for decryption and real-time analysis. The MQTT ingest server is connected to a SingleStore database for efficient 
              data storage and later analysis. Real-time data is forwarded from the ingest server to a React application that 
              provides live telemetry visualization for the racing team. CAN to LTE communication was done with a custom protocol 
              that would convert the incoming messages on the CAN bus to a serial stream that gets parsed and converted to MQTT 
              packets to be sent to ingest service. 
            </p>
          </section>

          <section class="project-section">
            <h2>Key Features</h2>
            <ul>
              <li><strong>Real-time Data Collection:</strong> LTE-enabled CAN frame collection from race vehicle</li>
              <li><strong>MQTT Messaging:</strong> Reliable message queuing for telemetry data transmission</li>
              <li><strong>Database Storage:</strong> SingleStore integration for high-performance data storage</li>
              <li><strong>Live Dashboard:</strong> React-based real-time telemetry visualization</li>
              <li><strong>Data Analysis:</strong> Historical data analysis capabilities</li>
            </ul>
          </section>


          <section class="project-section">
            <h2>External Links</h2>
            <p>
              <a href="https://github.com/Gaucho-Racing/Mapache" target="_blank" class="external-link">
                Mapache
              </a>
              <a href="https://github.com/Gaucho-Racing/TCM-24" target="_blank" class="external-link">
                Firmware
              </a>
              <a href="https://gauchoracing.com/" target="_blank" class="external-link">
                UCSB Gaucho Racing Team
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
</template>
