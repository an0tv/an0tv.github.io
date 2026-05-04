/**
 * ===================================================
 *  PROJECT DATA
 *  To add a new project, just add an object to the
 *  array below. No need to create new components or
 *  update the router!
 * ===================================================
 *
 * Fields:
 *   id        - Unique identifier (used for modals)
 *   title     - Project name
 *   summary   - Short description (shown on card)
 *   image     - Path relative to src/assets/
 *   tags      - Array of tech/topic tags
 *   cover3d   - (optional) Set true for a random rotating 3D shape, or set to a
 *               string path (e.g. "./assets/model.glb") for a custom .glb model
 *   content   - Array of sections:
 *     { heading: "...", text: "...", list: ["..."] }
 *   links     - Array of { url, label }
 *   images    - (optional) Array of gallery image paths
 */
export const projects = [
  {
    id: "SENSORSSS",
    title: "Sensors!",
    summary: "Just a collection of sensors that I have worked with.",
    image: "sensor.png",
    tags: ["PCB Design", "Firmware", "STM32", "SPI", "DMA", "I2C"],
    content: [
      {
        heading: "Overview",
        text: "This project card is meant to catalog the sensors that I have gotten working for primarily gaucho racing as well as some personal projects as well as prior work expereince.",
      },
      {
        heading: "MLX90640/14 - GR",
        text: "Thermal cameras, one is a single pixel and the other is multi-pixel. Both have a working implementation and are meant for rotor and tyre temp.",
      },
      {
        heading: "BMI323 - GR",
        text: "Nice small 6-axis IMU, a massive pain to get working, but is fully implemented over SPI through DMA. This IMU is used as a gyro+acc combo on multiple GR cars.",
      },
      {
        heading: "Generic Full Bridge Compression + Tension Load cell - GR",
        text: 'Not necessarily a "hard" sensor to get working, but did require a rather complex analog circuit for shift and gain so that output was centered around 1,024V for a full range swing of 0 to 2,048V.',
      },
      {
        heading: "Sensirion Flow Sensor - Work Exp.",
        text: "I had to fully implement this sensor in FW, to allow for parameter adjustemnt without requiring specialized equipment for flow measuremnet.",
      },
      {
        heading: "Pressure Sensors - GR & Work Exp.",
        text: "Have done numerous different pressure sensor implementaions via analog emulation, FW emulation, or just typical implementations.",
      },
    ],
    // links: [{}],
  },
  {
    id: "PSC",
    title: "Pedals Signal Conditioner 2025",
    summary: "GR26 Pedals signal conditioner, 0-5V to 4-20mA converter",
    image: "PSC.glb",
    cover3d: "PSC.glb",
    tags: ["PCB Design", "3D Design"],
    content: [
      {
        heading: "Overview",
        text: "The goal of this project was to make a working dual channel signal conditioner with one of the channels being amplified to for full scale range. This board was desigend for the accelerator pedal position sensor. ",
      },
      {
        heading: "Hardware",
        text: "Current IC is XTR117 and op amp is OPA991. Two channel signal conditioner, primary signal has a buffer that is powered from the XTR117 reference voltage for the purpose of being able to provide external power to the sensor. Second channel has a 2x non inverting gain amplifier circuit to make the 0.25 - 2.25V signal to be 0.5 - 4.5V. Both channels can be configured to be a three wire current loop (+12V, I_in, I_out) or two wire (I_in, I_out).",
      },
      {
        heading: "Lore",
        text: "GR25 we assigned the PSC to a new member and it did not follow the design sheet, which made is non-linear which is kinda sub-optimal, so this was made to replace it. It works, and serves its purpose well.",
      },
    ],
    // links: [{}],
  },
  {
    id: "Power",
    title: "Power Shenanigans 2025",
    summary:
      "Just a dive into power electronics and a collection of all of the projects in this general field. ",
    image: "DCDC.glb",
    cover3d: "DCDC.glb",
    tags: ["Power Electronics", "PCB Design"],
    content: [
      {
        heading: "Overview",
        text: "This is a collection of my projects that have something to do with power electronics, or just anything that is generally > 5A or > 30V that either requires specialized chip selection or specialized schematics",
      },
      {
        heading: "DC-DC[ALT]",
        text: "This is the second iteration of my power supply that is meant to convert 20V down to 12V with a peak of 6A without using an external mosfet. It is designed with a four layer board and supports up to peak of 8A for approximately 20s. It is used to power the Jetson Orin Nano and ECU on the GR26 car.",
      },
      {
        heading: "DC-DC[MAIN]",
        text: "This was the first iteration of my PDB/ power supply that was meant to go into the car, and was more of a proof of concept of using E-Fuses rather than actual fuses. This would allow for better current monitoring as well as adjustable power limiting. This project was retired due to main buck IC operating out of spec and as such not being able to achive stable operation.",
      },
      {
        heading: "Boost CC LED Driver",
        text: "USB-C constant current boost LED driver meant for driving 50W leds. The goal of this project was to build a full analog DC-DC Constant Current Boost driver using a pwm IC to undestand the principle behind constant current buck topology. ",
      },
    ],
    // links: [{}],
  },
  {
    id: "penthouse",
    title: "Gaucho Racing Penthouse 2025",
    summary: "Front-end enclosure for GR25 electronics",
    image: "penthouse.png",
    tags: ["PCB Design", "Embedded Systems", "FSAE", "3D Printing"],
    content: [
      {
        heading: "Overview",
        text: "The goal of this project was to compartmentalize most of the electronics that are present in the front of GR25. This was done to simplify the wiring harness by decreasing the amount of splices needed in the main harness. The drawback of this approach is needing to then route everything inside the box.",
      },
      {
        heading: "Technical Details — Electronics",
        text: "The penthouse electronics can be split into two sections: the ECU and the TCM. The ECU is responsible for controlling the car. The TCM is responsible for all telemetry and data pre-processing that comes from the car. It consists of a Jetson Orin Nano, LTE router, and a DC-DC buck converter meant to step 20V down to 12V to power the Jetson.",
      },
      {
        heading: "Technical Details — Hardware",
        text: "The penthouse is a hybrid assembly consisting of 3D printed walls and FR4 panels serving as the top and bottom face of the enclosure. The enclosure is joined together using M3x45 bolts and SMD nuts soldered onto the FR4 panels. This allows for a rigid mechanical connection and keeps the enclosure under compression. Similar SMD nuts are used to mount the electronics to the bottom face of the penthouse.",
      },
    ],
    links: [
      { url: "https://gauchoracing.com/", label: "UCSB Gaucho Racing Team" },
    ],
  },
  {
    id: "vcpu",
    title: "RISC-V Singlecycle CPU 2024",
    summary:
      "RISC-V CPU implemented in Verilog with advanced pipeline features",
    // cover3d: true,
    image: "vcpu.png",
    tags: ["Verilog", "Computer Architecture", "ModelSim"],
    content: [
      {
        heading: "Overview",
        text: "This was an assignment for one of my classes where we were tasked with designing and building a single-cycle RISC-V CPU. The goal was to build upon a single-cycle non-pipelined CPU and implement a pipelined version with modifications to improve IPC.",
      },
      {
        heading: "Technical Details",
        text: "The CPU was written in Verilog and simulated using ModelSim. The CPU implements a hazard detector, a branch predictor, hardware prefetching with critical word first, as well as dual arithmetic logic units. The dual ALUs were implemented by expanding prefetch to fetch two instructions from cache at once and decode them simultaneously. This allowed hazard detection to be performed on both instructions in parallel, with logic to handle cases where instructions depend on registers not yet available. The CPU would not execute back-to-back instructions that depend on the same register, effectively discarding the second instruction. Branch and jump prediction was handled similarly, by piping a NOP into the second pipeline stage regardless of prediction. With the branch predictor, the CPU would execute the correct jump instruction, and the NOP would be discarded for whatever was in PC+4 on the next cycle.",
      },
    ],
    links: [],
  },
  {
    id: "telemetry",
    title: "Gaucho Racing Cloud Telemetry 2024",
    summary:
      "Real-time telemetry with MQTT, SingleStore DB, and React dashboard",
    image: "singlestore.png",
    // cover3d: true,
    tags: ["MQTT", "SingleStore", "React", "LTE", "CAN Bus"],
    images: ["mosquitto.png", "singlestore.png", "react.png"],
    content: [
      {
        heading: "Overview",
        text: "A comprehensive cloud telemetry system designed for the UCSB Gaucho Racing team. This system enables real-time monitoring and analysis of vehicle performance data through a sophisticated pipeline of modern technologies.",
      },
      {
        heading: "Technical Details",
        text: "The system uses an LTE module to collect CAN frames from the race car and transmit them to an MQTT ingest server for decryption and real-time analysis. The MQTT ingest server is connected to a SingleStore database for efficient data storage and later analysis. Real-time data is forwarded from the ingest server to a React application that provides live telemetry visualization for the racing team. CAN to LTE communication was done with a custom protocol that converts incoming messages on the CAN bus to a serial stream that gets parsed and converted to MQTT packets to be sent to the ingest service.",
      },
      {
        heading: "Key Features",
        list: [
          "Real-time LTE-enabled CAN frame collection from FSAE vehicle",
          "MQTT messaging for reliable telemetry data transmission",
          "SingleStore integration for high-performance data storage",
          "React-based live telemetry visualization dashboard",
        ],
      },
    ],
    links: [
      { url: "https://github.com/Gaucho-Racing/Mapache", label: "Mapache" },
      { url: "https://github.com/Gaucho-Racing/TCM-24", label: "Firmware" },
      { url: "https://gauchoracing.com/", label: "UCSB Gaucho Racing Team" },
    ],
  },
  {
    id: "sam",
    title: "Gaucho Racing SAM 2024",
    summary:
      "Custom Teensy 4.1 alternative with hats for vehicle characterization",
    image: "sam.png",
    // cover3d: "gr25_nodes.glb",
    tags: ["STM32", "PCB Design", "CAN FD", "Kicad"],
    images: ["sam-F.png", "sam-B.png", "sam-F3D.png", "sam-B3D.png"],
    content: [
      {
        heading: "Overview",
        text: "The goal behind this project was to design an alternative to the Teensy 4.1 with more features, better HW control, improved analog performance, included CAN 2.0 and CAN FD, and a more robust voltage input range. SAM was also designed alongside a plethora of additional hats for data collection and FSAE car characterization. These modules include dual IR cameras for tyre and rotor temperature monitoring, a TOF sensor for ground clearance measurement, a 9-axis IMU for vehicle dynamics, and tension/compression sensors for suspension analysis.",
      },
      {
        heading: "Technical Details — SAM",
        text: "The module uses a dual microcontroller architecture: the STM32G474 serves as the primary controller, while the STM32F103 is used as a programmer flashed with a cracked version of the STM firmware taken from Chinese ST-link clones. This removes the need to carry a separate programmer when working with SAM. The PCB includes a DC-DC buck converter that converts the 12-28V input down to 5V for the CAN transceiver and auxiliary components, then 5V is regulated down to 3.3V via a linear regulator for the microcontrollers. The PCB also features dual CAN FD transceivers, a neopixel LED for status indication, a USB-C pin header for programming, an LP filter for analog power references, and MCU-controlled Vref.",
      },
      {
        heading: "Hardware Overview — SAM",
        text: "The PCB stackup is 4 layers, 0.5oz copper: Signal, Ground, Power, Signal.",
      },
    ],
    links: [
      {
        url: "https://github.com/Gaucho-Racing/Sensor-Nodes",
        label: "GitHub Repository",
      },
    ],
  },
  {
    id: "steering-wheel",
    title: "Gaucho Racing Steering Wheel 2023",
    summary: "Interactive dashboard integrated into UCSB GR23 steering wheel",
    image: "wheel.png",
    tags: ["Teensy", "CAN Bus", "Embedded Systems", "FSAE"],
    content: [
      {
        heading: "Overview",
        text: "A custom dashboard system integrated directly into the UCSB Gaucho Racing GR23 steering wheel. This innovative solution provides drivers with essential vehicle information while maintaining the compact form factor required for competitive racing environments.",
      },
      {
        heading: "Technical Details",
        text: "The dashboard runs on a powerful Teensy 4.1 microcontroller and features a 6-axis gyroscope for accurate steering wheel positioning detection. The system displays critical vehicle data such as speed by establishing a direct connection to the vehicle's CAN bus network. Position data is transmitted back through the CAN bus to provide real-time steering feedback to the vehicle's control systems.",
      },
      {
        heading: "Key Features",
        list: [
          "Seamlessly built into steering wheel for optimal driver access",
          "6-axis gyroscope for precise position tracking and orientation",
          "CAN bus integration for real-time data communication",
          "Dual rotary encoders for intuitive display control",
          "Live speed and vehicle status information",
          "Compact form factor designed for racing constraints",
        ],
      },
      {
        heading: "User Interface",
        text: "The main form of user input consists of two rotary encoders strategically positioned for easy access during racing conditions. These encoders allow drivers to change the displayed information without taking their hands off the steering wheel or compromising their driving focus.",
      },
    ],
    links: [
      { url: "https://gauchoracing.com/", label: "UCSB Gaucho Racing Team" },
    ],
  },
];
