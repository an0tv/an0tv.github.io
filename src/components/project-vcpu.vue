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
                <h1>RISC-V Singlecycle CPU 2024</h1>
            </center>

            <div class="project-images">
                <div class="imrow">
                    <img
                        src="../assets/vcpu.png"
                        alt="Verilog CPU"
                        style="max-height: 600px; height: 100%"
                    />
                </div>
            </div>

            <div class="project-content">
                <section class="project-section">
                    <h2>Overview</h2>
                    <p>
                        This was an assignment for one of my classes where we
                        were tasked with designing and building a single-cycle
                        RISC-V CPU. The goal was to build upon a single cycle
                        non-pipelined CPU and implement a pipelined version of
                        the CPU with some modifications to improve IPC.
                    </p>
                </section>

                <section class="project-section">
                    <h2>Technical Details</h2>
                    <p>
                        The CPU was written in Verilog and simulated using
                        ModelSim. The CPU implemented a hazard detector, a
                        branch predictor, hardware prefetching with critical
                        word first, as well as dual arithmetic logic units. The
                        dual ALUs were implemented by expanding prefetch to
                        fetch two instructions from cache at once and decode
                        them simultaneously. This allowed for hazard detection
                        to be performed on both instructions in parallel, and
                        with some logic to handle hazards were instructions
                        depend on registers that are not yet available. This
                        meant that the CPU would not execute back to back
                        instructions that depend on the same register, and in
                        essence throw out the second instruction. Additionally,
                        branch and jump prediction was handled in a similar way,
                        simply piping a NOP into the second pipeline stage no
                        matter on prediction. This worked out fairly well as
                        with the branch predictor, the CPU would execute the
                        correct jump instruction, and the NOP would be discarded
                        for whatever was in PC+4 on the next cycle.
                    </p>
                </section>
            </div>
        </div>
    </div>
</template>
