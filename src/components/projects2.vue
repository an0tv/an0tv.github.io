
import { createRenderer } from 'vue';
<template class="back_color">
  <head>
    <link type="stylesheet" href="../style.css">
  </head>
  <div class="row">
    <div class="col">
    <center>
    <h1>Projects</h1>
  </center>
    <h2>
      1. Gaucho Racing cloud telemetry 2024
    </h2>
   
    <div class="imrow">
        <img src="../assets/mosquitto.png" style="max-height:185px; height: auto; width: 33%; max-width: 185px;">
        <img src="../assets/singlestore.png" style="max-height:185px; height: auto; width: 33%; max-width: 185px;">
        <img src="../assets/react.png" style="max-height:185px; height: auto; width: 33%; max-width: 200px;">
    </div>
    
    <p style="word-wrap: break-word;width: 75%; max-width: 800px;">
      Cloud telemetry system using an LTE module to collect CAN frames and send them to an MQTT ingest server for decryption and realtime 
      analysis. MQTT ingest server is connected to a SingleStore db for data storage and later analysis. Realtime data is sent from ingest server 
      to React App for realtime telemetry. 
    </p>

    <h2>
      2. Guacho Racing steering wheel 2023
    </h2>
    <div class="imrow"><img src="../assets/wheel.png" style="max-height:185px; height: auto; width: 100%; max-width: 185px;"></div>
    
    <p style="word-wrap: break-word;width: 75%; max-width: 800px;">
      A dashboard that is integrated into the UCSB GR23 steering wheel.
      Screen runs on a teensy 4.1 and has a 6 axis gyroscope for accurate steering wheel positioning. 
      Displays speed by using a CAN bus connection and returns positioning back via CAN bus. Main from of 
      user input are two rotary encoders meant for changing displayed information. 
    </p>

  </div>
  </div>
  
</template>

