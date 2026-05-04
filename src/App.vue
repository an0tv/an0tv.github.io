<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { projects } from "./data/projects.js";
import Project3D from "./components/Project3D.vue";

// ── State ──────────────────────────────────────────
const activeSection = ref("home");
const revealed = ref({});
const modalOpen = ref(false);
const selectedProject = ref(null);
const mobileMenuOpen = ref(false);

// ── Smooth Scroll ──────────────────────────────────
function scrollTo(id) {
    mobileMenuOpen.value = false;
    const el = document.getElementById(id);
    if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
}

// ── Intersection Observer for active section ──────
let observer = null;
onMounted(() => {
    const sections = document.querySelectorAll("section[id]");
    observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    activeSection.value = entry.target.id;
                }
            });
        },
        { rootMargin: "-40% 0px -55% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
});
onUnmounted(() => {
    if (observer) observer.disconnect();
});

// ── Scroll-triggered reveal ─────────────────────────
let revealObserver = null;
onMounted(() => {
    revealObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    revealed.value[entry.target.dataset.reveal] = true;
                    revealObserver.unobserve(entry.target);
                }
            });
        },
        { rootMargin: "0px 0px -80px 0px", threshold: 0.1 },
    );
    document.querySelectorAll("[data-reveal]").forEach((el) => {
        revealObserver.observe(el);
    });
});
onUnmounted(() => {
    if (revealObserver) revealObserver.disconnect();
});

// ── Project Modal ──────────────────────────────────
function openProject(project) {
    selectedProject.value = project;
    modalOpen.value = true;
    document.body.style.overflow = "hidden";
}
function closeModal() {
    modalOpen.value = false;
    selectedProject.value = null;
    document.body.style.overflow = "";
}
</script>

<template>
    <!-- ── Navigation ────────────────────────────── -->
    <nav class="navbar">
        <div class="navbar__inner">
            <span class="navbar__brand" @click="scrollTo('home')">an0tv</span>
            <ul
                :class="[
                    'navbar__links',
                    { 'navbar__links--open': mobileMenuOpen },
                ]"
            >
                <li>
                    <a
                        :class="[
                            'nav-link',
                            { active: activeSection === 'home' },
                        ]"
                        @click="scrollTo('home')"
                        >Home</a
                    >
                </li>
                <li>
                    <a
                        :class="[
                            'nav-link',
                            { active: activeSection === 'projects' },
                        ]"
                        @click="scrollTo('projects')"
                        >Projects</a
                    >
                </li>
            </ul>
            <button
                class="navbar__toggle"
                @click="mobileMenuOpen = !mobileMenuOpen"
                aria-label="Menu"
            >
                <span></span><span></span><span></span>
            </button>
        </div>
    </nav>

    <!-- ── Hero Section ──────────────────────────── -->
    <section id="home" class="hero">
        <div class="hero__card">
            <h1 class="hero__title">Andrey Otvagin</h1>
            <p class="hero__subtitle">
                Student at UCSB — double majoring in
                <span class="accent">Statistics &amp; Data Science</span> and
                <span class="accent">Computer Engineering</span>. Graduating
                2026 (BS) &amp; 2027 (MS in ECE).
            </p>
            <p class="hero__description">
                Currently working on a low-cost, high-throughput data collection
                system for automotive applications and chirp radar fusion for
                autonomous vehicle tracking.
            </p>
            <div class="hero__links">
                <a
                    href="https://github.com/an0tv"
                    target="_blank"
                    class="btn btn--outline"
                    >GitHub</a
                >
                <a href="./resume.pdf" target="_blank" class="btn btn--primary"
                    >Resume</a
                >
            </div>
        </div>
    </section>

    <!-- ── Projects Section ─────────────────────── -->
    <section id="projects" class="section">
        <div class="section__inner">
            <h2
                class="section__title"
                :class="{ 'is-revealed': revealed.projectsTitle }"
                data-reveal="projectsTitle"
            >
                Projects
            </h2>
            <p
                class="section__subtitle"
                :class="{ 'is-revealed': revealed.projectsSub }"
                data-reveal="projectsSub"
            >
                Things I've been building
            </p>

            <div class="projects-grid">
                <article
                    v-for="(p, idx) in projects"
                    :key="p.id"
                    :class="[
                        'project-card',
                        { 'is-revealed': revealed['p' + idx] },
                    ]"
                    :data-reveal="'p' + idx"
                    @click="openProject(p)"
                >
                    <div class="project-card__img-wrap">
                        <Project3D
                            v-if="p.cover3d"
                            :seed="idx"
                            :model="
                                typeof p.cover3d === 'string' ? p.cover3d : null
                            "
                        />
                        <img
                            v-else
                            :src="`/assets/${p.image}`"
                            :alt="p.title"
                            class="project-card__img"
                        />
                    </div>
                    <div class="project-card__body">
                        <h3 class="project-card__title">{{ p.title }}</h3>
                        <p class="project-card__summary">{{ p.summary }}</p>
                        <div class="project-card__tags">
                            <span
                                v-for="tag in p.tags"
                                :key="tag"
                                class="tag"
                                >{{ tag }}</span
                            >
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </section>

    <!-- ── Footer ────────────────────────────────── -->
    <footer class="footer">
        <p>&copy; 2025 Andrey Otvagin &middot; Built with Vue &amp; Vite</p>
    </footer>

    <!-- ── Project Modal ─────────────────────────── -->
    <Teleport to="body">
        <div v-if="modalOpen" class="modal-overlay" @click.self="closeModal">
            <div class="modal" v-if="selectedProject">
                <button
                    class="modal__close"
                    @click="closeModal"
                    aria-label="Close"
                >
                    &times;
                </button>

                <div class="modal__header">
                    <h2 class="modal__title">{{ selectedProject.title }}</h2>
                    <div class="modal__tags">
                        <span
                            v-for="tag in selectedProject.tags"
                            :key="tag"
                            class="tag"
                            >{{ tag }}</span
                        >
                    </div>
                </div>

                <div class="modal__body">
                    <div v-if="selectedProject.images" class="modal__gallery">
                        <img
                            v-for="img in selectedProject.images"
                            :key="img"
                            :src="`/assets/${img}`"
                            class="modal__gallery-img"
                        />
                    </div>
                    <img
                        v-else
                        :src="`/assets/${selectedProject.image}`"
                        class="modal__hero-img"
                    />

                    <section
                        v-for="(section, si) in selectedProject.content"
                        :key="si"
                        class="modal__section"
                    >
                        <h3 class="modal__section-title">
                            {{ section.heading }}
                        </h3>
                        <p v-if="section.text" class="modal__text">
                            {{ section.text }}
                        </p>
                        <ul v-if="section.list" class="modal__list">
                            <li v-for="(item, li) in section.list" :key="li">
                                {{ item }}
                            </li>
                        </ul>
                    </section>

                    <div
                        v-if="
                            selectedProject.links &&
                            selectedProject.links.length
                        "
                        class="modal__links"
                    >
                        <a
                            v-for="link in selectedProject.links"
                            :key="link.url"
                            :href="link.url"
                            target="_blank"
                            class="btn btn--small btn--outline"
                            >{{ link.label }} &nearr;</a
                        >
                    </div>
                </div>
            </div>
        </div>
    </Teleport>
</template>
