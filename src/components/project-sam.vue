<template class="back_color">
    <head>
        <link type="stylesheet" href="../style.css" />
    </head>
    <div class="project-container">
        <div class="project-detail">
            <div class="breadcrumb">
                <router-link to="/projects" class="breadcrumb-link"
                    >← Back to Projects</router-link
                >
            </div>

            <center>
                <h1>Gaucho Racing SAM 2024</h1>
            </center>

            <div class="project-images">
                <div class="imrow">
                    <img
                        src="../assets/sam.png"
                        alt="Sensor Array Module"
                        style="
                            max-height: 400px;
                            height: auto;
                            width: 100%;
                            max-width: 800px;
                        "
                    />
                </div>
            </div>

            <div class="project-content">
                <section class="project-section">
                    <h2>Overview</h2>
                    <p>
                        The goal behind this project was to design an
                        alternative Teensy 4.1 for the purpose of more features,
                        better HW control, improved analog performance, included
                        CAN 2.0 and CAN FD, and a more robust voltage input
                        range. SAM was also desgined alongside a plethora of
                        additional hats for the purpose of data collection and
                        FSAE car characterization. These modules include dual IR
                        cameras for tyre and rotor temperature monitoring, a TOF
                        sensor for ground clearance measurement, 9-axis IMU for
                        vehicle dynamics, and tension and compression sensors
                        for suspension analysis.
                    </p>
                </section>

                <section class="project-section">
                    <h2>Technical Details - SAM</h2>
                    <h3>Brief Overview</h3>
                    <p>
                        The module itself uses a dual microcontroller
                        architecture, one that is used as the primary controller
                        of the SAM and is the STM32G474. The other
                        microcontroller, the STM32F103, is used as a programmer
                        and is flashed with a cracked version of the STM
                        firmware taken from Chinese ST-link clones. The reason
                        this was done was to remove the necessity of having to
                        carry a programmer with you when working with SAM.
                        Furthermore, the PCB includes a DC-DC buck converter
                        that first converts the 12-28V input voltage down to 5V
                        for the CAN transceiver, and other auxilary components.
                        Then 5V is taken down to 3.3V via a linear regulator.
                        3.3V is used to power the STM32G474 and the STM32F103.
                        The PCB also features dual CAN FD transceivers for
                        communication with other devices, a neopixel led for
                        status indication, a USB-C pin header for programming, a
                        LP filter for the analog power references, and a
                        MCU-controlled Vref.
                    </p>
                    <h3>Hardware Overview - SAM</h3>
                    <div class="hardware-grid">
                        <div class="hardware-item">
                            <img
                                src="../assets/sam-F.png"
                                alt="Dual MCU Architecture"
                                style="cursor: pointer"
                            />
                            <p>Top copper layer</p>
                        </div>
                        <div class="hardware-item">
                            <img
                                src="../assets/sam-B.png"
                                alt="Power Management"
                                style="cursor: pointer"
                            />
                            <p>Back copper layer</p>
                        </div>
                        <div class="hardware-item">
                            <img
                                src="../assets/sam-F3D.png"
                                alt="CAN FD Communication"
                                style="cursor: pointer"
                            />
                            <p>Top 3D layer</p>
                        </div>
                        <div class="hardware-item">
                            <img
                                src="../assets/sam-B3D.png"
                                alt="4-Layer PCB Design"
                                style="cursor: pointer; transform: scaleX(-1)"
                            />
                            <p>Bottom 3D layer</p>
                        </div>
                    </div>
                    <p>
                        The PCB stackup is as follows: 4 layers, 0.5oz copper,
                        Signal, Ground, Power, Signal. All files can be found in
                        the following
                        <a href="https://github.com/Gaucho-Racing/Sensor-Nodes"
                            >GitHub repository</a
                        >.
                    </p>
                </section>
            </div>
        </div>
    </div>
</template>

<!-- import samFImage from "../assets/sam-F.png"; import samBImage from
"../assets/sam-B.png"; import samF3DImage from "../assets/sam-F3D.png"; import
samB3DImage from "../assets/sam-B3D.png"; -->

<!-- <script>
import samFImage from "../assets/sam-F.png";
import samBImage from "../assets/sam-B.png";
import samF3DImage from "../assets/sam-F3D.png";
import samB3DImage from "../assets/sam-B3D.png";

export default {
    name: "ProjectSam",
    data() {
        return {
            samFImage,
            samBImage,
            samF3DImage,
            samB3DImage,
        };
    },
    methods: {
        openImage(imagePath) {
            const newWindow = window.open("", "_blank");
            newWindow.document.write(`
                <!DOCTYPE html>
                <html>
                <head>
                    <title>Hardware Image</title>
                    <style>
                        body {
                            margin: 0;
                            padding: 0;
                            background: black;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            min-height: 100vh;
                        }
                        img {
                            max-width: 100%;
                            max-height: 100vh;
                            object-fit: contain;
                        }
                    </style>
                </head>
                <body>
                    <img src="${imagePath}" alt="Hardware Image" />
                </body>
                </html>
            `);
        },
    },
};
</script> -->
