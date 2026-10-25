---
layout: page
title: Robot Demos
permalink: /demos/
description: Real-robot demos &mdash; UniWALM manipulation (bimanual, dexterous, memory-dependent, RMBench) and self-driving car work.
nav: true
nav_order: 9
---

<style>
  .demos-wrap { max-width: 1040px; margin: 0 auto; }
  .demos-wrap p.lead { font-size: 1rem; color: var(--global-text-color-light); margin-bottom: 1rem; }

  .d-section-title {
    font-size: 1.3rem; font-weight: 600;
    margin: 2.6rem 0 0.4rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid var(--global-divider-color);
  }
  .d-section-sub { font-size: 0.9rem; color: var(--global-text-color-light); margin: 0 0 1.1rem; }

  .d-video {
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    background: #0a0a0a;
    box-shadow: 0 2px 10px rgba(0,0,0,0.08);
  }
  .d-video.d-16x9 { aspect-ratio: 16/9; }
  .d-video video {
    width: 100%; height: 100%;
    display: block;
    object-fit: cover;
  }
  .d-video.d-portrait { aspect-ratio: 9/14; max-width: 340px; margin: 0 auto; background: #000; }
  .d-video.d-portrait video { object-fit: contain; }

  .d-caption {
    font-size: 0.88rem;
    color: var(--global-text-color-light);
    text-align: center;
    margin: 0.5rem auto 0;
    max-width: 820px;
    line-height: 1.4;
  }

  .d-grid { display: grid; gap: 1rem; margin-top: 0.6rem; }
  @media (min-width: 760px) { .d-grid-2 { grid-template-columns: repeat(2, 1fr); } }

  .d-note {
    font-size: 0.84rem;
    color: var(--global-text-color-light);
    background: var(--global-code-bg-color);
    border-left: 3px solid var(--global-theme-color);
    padding: 0.65rem 0.85rem;
    border-radius: 4px;
    margin: 0.6rem 0 1rem;
    line-height: 1.45;
  }

  .d-cta {
    text-align: center;
    margin: 2.4rem 0 0;
    font-size: 0.95rem;
  }
  .d-cta a { color: var(--global-theme-color); text-decoration: none; margin: 0 0.6rem; }
  .d-cta a:hover { text-decoration: underline; }
</style>

<div class="demos-wrap" markdown="1">

<p class="lead">Short demo reels from recent and past work &mdash; <strong>UniWALM</strong> (real-robot manipulation) and a self-driving car project. For full write-ups: <a href="/projects/uniwalm/">UniWALM project page</a>, <a href="/projects/self_driving/">Self-Driving project page</a>.</p>

<div class="d-note" markdown="0">
<strong>Note on UniWALM videos below.</strong> Real-robot rollouts here are from an <strong>unoptimized</strong> deployment pipeline (I/O, teleop stack, logging overhead) and run <strong>without a real-time controller (RTC)</strong>, which is why the motion appears jerky. The actual UniWALM <strong>policy + language-memory reasoning runs at ~140&nbsp;ms per step</strong> (N&nbsp;=&nbsp;10 flow-matching steps on an H100). Smoothness would come for free with an RTC layer on top.
</div>

<h2 class="d-section-title">Capability wall</h2>
<p class="d-section-sub">Overview reel across the four UniWALM task families: bimanual, dexterous, multi-stage, and memory-dependent.</p>

<div class="d-video d-16x9" markdown="0">
  <video muted autoplay loop playsinline preload="metadata" poster="/assets/video/home/hero_capability_wall_poster.jpg">
    <source src="/assets/video/home/hero_capability_wall.mp4" type="video/mp4">
  </video>
</div>
<div class="d-caption">Capability wall across tasks. 3&times; speed.</div>

<h2 class="d-section-title">RMBench &mdash; memory-dependent benchmark</h2>
<p class="d-section-sub">UniWALM reaches <strong>34.5%</strong> on RMBench's memory-dependent M(N) subset &mdash; <strong>+21.2 points</strong> over same-backbone FastWAM (13.3%), and <em>exceeds</em> Mem-0's privileged-keyframe setup (28.5%) without any pretrained VLM. Below: 12 real-robot successes sampled across the four tasks, randomly ordered.</p>

<div class="d-video d-16x9" markdown="0">
  <video muted autoplay loop playsinline preload="metadata" poster="/assets/video/home/slide_rmbench_success_poster.jpg">
    <source src="/assets/video/home/slide_rmbench_success.mp4" type="video/mp4">
  </video>
</div>
<div class="d-caption">12 successful real-robot rollouts across <em>Press Button</em>, <em>Battery Try</em>, <em>Blocks Ranking Try</em>, and <em>Cover Blocks</em>, randomly ordered in a 4&times;3 grid. 6&times; speed.</div>

<h2 class="d-section-title">Multi-stage dexterous bimanual &mdash; item removal</h2>
<p class="d-section-sub">Sequential bimanual removal of 5 items from a container across varied object layouts. Deployed on Flexiv bimanual arms with Sharpa / Paxini hands.</p>

<div class="d-video d-16x9" markdown="0">
  <video muted autoplay loop playsinline preload="metadata" poster="/assets/video/home/slide_item_removal_poster.jpg">
    <source src="/assets/video/home/slide_item_removal.mp4" type="video/mp4">
  </video>
</div>
<div class="d-caption">Multi-stage item removal rollouts. 3&times; speed.</div>

<h2 class="d-section-title">Find-the-Item &mdash; memory-dependent manipulation</h2>
<p class="d-section-sub">A real-world Find-the-Item task designed to require memory: the policy sees the target object once at episode start, then has to recover it later across visual distractors. Generating a textual memory lifts success from <strong>11.1%</strong> (FastWAM, same video backbone, no language) to <strong>61.1%</strong> &mdash; state-of-the-art VLAs stay at or below chance (&le;&nbsp;33.3%).</p>

<div class="d-video d-16x9" markdown="0">
  <video muted autoplay loop playsinline preload="metadata" poster="/assets/video/home/slide_memory_poster.jpg">
    <source src="/assets/video/home/slide_memory.mp4" type="video/mp4">
  </video>
</div>
<div class="d-caption">Find-the-Item rollouts. The policy re-reads its own natural-language memory on every control step. 3&times; speed.</div>

<h2 class="d-section-title">Self-driving car &mdash; RRC IIIT (2020&ndash;2021)</h2>
<p class="d-section-sub">Earlier work from undergrad / M.Sc. at the <a href="https://robotics.iiit.ac.in/">Robotics Research Center</a>, under Prof. K. Madhava Krishna. I designed the <strong>mapping</strong> and <strong>obstacle-avoidance</strong> modules and built the ROS pipeline that fused perception outputs into the occupancy map used by the planner.</p>

<div class="d-grid d-grid-2">
  <div>
    <div class="d-video d-16x9" markdown="0">
      <video muted autoplay loop playsinline preload="metadata" poster="/assets/video/home/slide_sd_open_field_poster.jpg">
        <source src="/assets/video/home/slide_sd_open_field.mp4" type="video/mp4">
      </video>
    </div>
    <div class="d-caption"><strong>Autonomous driving (open field).</strong> Closed-loop mapping + planner driving the vehicle. 2&times; speed.</div>
  </div>
  <div>
    <div class="d-video d-16x9" markdown="0">
      <video muted autoplay loop playsinline preload="metadata" poster="/assets/video/home/slide_sd_obstacle_poster.jpg">
        <source src="/assets/video/home/slide_sd_obstacle.mp4" type="video/mp4">
      </video>
    </div>
    <div class="d-caption"><strong>Obstacle avoidance.</strong> Local-planner reaction to detected obstacles. 2&times; speed.</div>
  </div>
</div>

<div style="margin-top:1.4rem;">
  <div class="d-video d-portrait" markdown="0">
    <video muted autoplay loop playsinline preload="metadata" poster="/assets/video/home/slide_sd_xbox_poster.jpg">
      <source src="/assets/video/home/slide_sd_xbox.mp4" type="video/mp4">
    </video>
  </div>
  <div class="d-caption"><strong>Drive-by-wire via Xbox controller.</strong> A fun early milestone &mdash; wiring the car up end-to-end so it could be driven over a joystick before autonomy was layered on top. Became the teleop + safety-override channel for later testing.</div>
</div>

<div class="d-cta" markdown="0">
Full project pages: <a href="/projects/uniwalm/">UniWALM &rarr;</a> &middot; <a href="/projects/self_driving/">Self-Driving &rarr;</a>
</div>

<script>
(function(){
  function tryPlay(v){
    if(!v) return;
    try{
      v.muted = true;
      v.playsInline = true;
      var p = v.play();
      if(p && p.catch) p.catch(function(){});
    } catch(e){}
  }
  function onInView(el){
    if(!('IntersectionObserver' in window)){ tryPlay(el); return; }
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if(e.isIntersecting){ tryPlay(e.target); }
        else { try{ e.target.pause(); }catch(_){} }
      });
    }, { threshold: 0.25 });
    io.observe(el);
  }
  function init(){
    document.querySelectorAll('.demos-wrap video').forEach(onInView);
  }
  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
</script>

</div>
