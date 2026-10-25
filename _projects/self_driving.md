---
layout: page
title: Self-Driving Car
description: Mapping &amp; obstacle avoidance on a real autonomous platform &middot; <em>Robotics Research Center, IIIT Hyderabad (2021)</em>
img: assets/video/projects/self_driving/posters/open_field.jpg
importance: 10
category: work
giscus_comments: false
---

<style>
  .post > .post-header { display: none; }
  .sd-hero { text-align: center; margin: 0.5rem 0 1.6rem; }
  .sd-hero h1 { font-size: 1.8rem; font-weight: 700; margin: 0 0 0.3rem; line-height: 1.25; }
  .sd-hero .subtitle { font-size: 1rem; color: var(--global-text-color-light); margin-bottom: 0.9rem; }
  h2.section-title { font-size: 1.25rem; font-weight: 600; margin: 2rem 0 0.9rem; padding-bottom: 0.4rem; border-bottom: 1px solid var(--global-divider-color); }
  .fig-caption { font-size: 0.9rem; color: var(--global-text-color-light); text-align: center; margin: 0.5rem auto 0.3rem; max-width: 820px; }
  .white-panel { background:#ffffff; padding:0; border-radius:8px; border:1px solid var(--global-divider-color); overflow:hidden; }
  .sd-grid { display: grid; gap: 1rem; }
  @media (min-width: 900px) { .sd-grid-3 { grid-template-columns: repeat(3, 1fr); } }
  .sd-video-frame {
    aspect-ratio: 16 / 9;
    background: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
  .sd-video-frame video {
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
    display: block;
  }
</style>

<div class="sd-hero">
  <h1>Self-Driving Car &mdash; Mapping &amp; Obstacle Avoidance</h1>
  <div class="subtitle">Robotics Research Center, IIIT Hyderabad &middot; 2020&ndash;2021</div>
</div>

<p>
Earlier work from my undergraduate / M.Sc.&nbsp;at the <a href="https://robotics.iiit.ac.in/">Robotics Research Center (RRC)</a>, IIIT Hyderabad, under <a href="https://scholar.google.co.in/citations?user=QDuPGHwAAAAJ&amp;hl=en">Prof.&nbsp;K.&nbsp;Madhava Krishna</a>. I designed and deployed the <strong>mapping</strong> and <strong>obstacle-avoidance</strong> modules on a real autonomous self-driving car platform, built the ROS pipeline that fuses perception outputs into an occupancy map used by the planner, and ran closed-loop field tests. The three clips below are 2&times; speed with audio stripped.
</p>

<h2 class="section-title">Demonstrations</h2>

<div class="sd-grid sd-grid-3">
  <div>
    <div class="white-panel sd-video-frame">
      <video muted autoplay loop playsinline preload="metadata" controls>
        <source src="/assets/video/projects/self_driving/01_open_field.mp4" type="video/mp4">
      </video>
    </div>
    <div class="fig-caption"><strong>Autonomous driving (open field)</strong> &mdash; closed-loop mapping + planner driving the vehicle through an outdoor path.</div>
  </div>
  <div>
    <div class="white-panel sd-video-frame">
      <video muted autoplay loop playsinline preload="metadata" controls>
        <source src="/assets/video/projects/self_driving/02_obstacle_avoidance.mp4" type="video/mp4">
      </video>
    </div>
    <div class="fig-caption"><strong>Obstacle avoidance</strong> &mdash; local-planner reaction to detected obstacles in the fused occupancy map.</div>
  </div>
  <div>
    <div class="white-panel sd-video-frame">
      <video muted autoplay loop playsinline preload="metadata" controls>
        <source src="/assets/video/projects/self_driving/03_xbox_controller.mp4" type="video/mp4">
      </video>
    </div>
    <div class="fig-caption"><strong>Drive-by-wire via Xbox controller</strong> &mdash; a fun early milestone: wiring the car up end-to-end so it could be driven over an Xbox-controller interface. Validated the low-level control stack before layering autonomy on top, and became the teleop + safety-override channel for later testing.</div>
  </div>
</div>

<h2 class="section-title">Related Publications</h2>

<ul>
  <li>
    <strong><a href="https://arxiv.org/abs/2011.12912">DRACO: Weakly Supervised Dense Reconstruction And Canonicalization of Objects</a></strong>. <em>IEEE ICRA 2021.</em>
    Rahul Sajnani, AadilMehdi Sanchawala, Krishna Murthy Jatavallabhula, Srinath Sridhar, K.&nbsp;Madhava Krishna.
  </li>
  <li>
    <strong><a href="https://arxiv.org/abs/2002.03528">Multi-Object Monocular SLAM for Dynamic Environments</a></strong>. <em>IEEE Intelligent Vehicles Symposium (IV) 2020.</em>
    Gokul B.&nbsp;Nair, Swapnil Daga, Rahul Sajnani, Anirudh Ramesh, Junaid Ahmed Ansari, K.&nbsp;Madhava Krishna. Developed an automated ego-to-metric scaling algorithm from interest points on the road to enable pose-graph optimization without requiring loop closure.
  </li>
</ul>
