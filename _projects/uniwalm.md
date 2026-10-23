---
layout: page
title: UniWALM
description: A Unified World-Action-Language Model for Embodied Robot Control &middot; <em>Under review, ICRA 2027</em>
img: assets/img/projects/uniwalm/arxiv_teaser.png
importance: 1
category: work
giscus_comments: false
---

<style>
  .post > .post-header { display: none; }

  .project-hero          { text-align: center; margin: 0.5rem 0 1.6rem; }
  .project-hero h1       { font-size: 1.8rem; font-weight: 700; margin: 0 0 0.3rem; line-height: 1.25; }
  .project-hero .subtitle{ font-size: 1rem; color: var(--global-text-color-light); margin-bottom: 0.9rem; }

  .author-list { font-size: 0.95rem; line-height: 1.6; margin: 0.4rem auto 0.6rem; max-width: 820px; }
  .author-list a { color: var(--global-theme-color); text-decoration: none; }
  .author-list sup { font-size: 0.72rem; color: var(--global-text-color-light); }
  .affiliation-list { font-size: 0.86rem; color: var(--global-text-color-light); margin: 0 auto 1rem; }

  .project-links { display: flex; justify-content: center; flex-wrap: wrap; gap: 0.5rem; margin: 1rem 0 1.6rem; }
  .project-links a {
    display: inline-flex; align-items: center; gap: 0.4rem;
    padding: 6px 14px; border-radius: 6px;
    background: #ffffff;
    border: 1px solid var(--global-divider-color);
    color: #1a1a1a;
    font-size: 0.88rem; font-weight: 500;
    text-decoration: none;
    transition: all 0.15s ease;
  }
  .project-links a:hover { background: var(--global-theme-color); color: #fff; border-color: var(--global-theme-color); }
  html[data-theme="dark"] .project-links a { background: #ffffff; color: #1a1a1a; border-color: rgba(0,0,0,0.1); }

  .section-nav {
    display: flex; justify-content: center; flex-wrap: wrap; gap: 0.35rem;
    margin: 1rem auto 2rem; padding: 6px;
    background: #ffffff; border: 1px solid var(--global-divider-color);
    border-radius: 10px; box-shadow: 0 1px 4px rgba(0,0,0,0.04);
    position: sticky; top: 70px; z-index: 5; max-width: fit-content;
  }
  .section-nav a {
    display: inline-block; padding: 5px 14px; border-radius: 6px;
    font-size: 0.85rem; font-weight: 500; color: #333;
    text-decoration: none; transition: all 0.15s ease; white-space: nowrap;
  }
  .section-nav a:hover { background: var(--global-theme-color); color: #fff; text-decoration: none; }
  @media (max-width: 600px) { .section-nav { position: static; } .section-nav a { padding: 4px 10px; font-size: 0.8rem; } }

  h2.section-title { font-size: 1.35rem; font-weight: 600; margin: 2.4rem 0 0.9rem; padding-bottom: 0.4rem; border-bottom: 1px solid var(--global-divider-color); }
  h3.subsection-title { font-size: 1.08rem; font-weight: 600; margin: 1.5rem 0 0.6rem; }

  .fig-caption { font-size: 0.85rem; color: var(--global-text-color); text-align: center; margin: 0.4rem auto 0.3rem; max-width: 820px; }
  html[data-theme="dark"] .fig-caption { color: rgba(255,255,255,0.92); }

  .bibtex-block { background: var(--global-code-bg-color); border-radius: 6px; padding: 0.9rem 1rem; font-family: ui-monospace, "SFMono-Regular", Menlo, monospace; font-size: 0.82rem; line-height: 1.55; overflow-x: auto; white-space: pre; }

  .white-panel { background:#ffffff; padding:14px; border-radius:8px; border:1px solid var(--global-divider-color); }

  .task-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 10px; margin: 0.6rem 0 1rem; }
  .task-grid .task-card {
    background: #ffffff;
    border: 1px solid var(--global-divider-color);
    border-radius: 8px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }
  .task-grid .task-card img { width: 100%; display: block; aspect-ratio: 4/3; object-fit: cover; }
  .task-grid .task-card .label { padding: 6px 10px; font-size: 0.82rem; font-weight: 600; color: #1a1a1a; }

  .metric-row { display: flex; flex-wrap: wrap; gap: 10px; margin: 0.6rem 0 1rem; }
  .metric {
    flex: 1 1 180px;
    background: #ffffff;
    border: 1px solid var(--global-divider-color);
    border-radius: 8px;
    padding: 10px 14px;
    text-align: center;
  }
  .metric .number { font-size: 1.3rem; font-weight: 700; color: var(--global-theme-color); line-height: 1.1; }
  .metric .label  { font-size: 0.78rem; color: #555; margin-top: 2px; }
  html[data-theme="dark"] .metric, html[data-theme="dark"] .task-grid .task-card { background: #ffffff; border-color: rgba(0,0,0,0.1); }
  html[data-theme="dark"] .metric .label, html[data-theme="dark"] .task-grid .task-card .label { color: #333; }

  /* Rollout strip galleries */
  .strip-row { margin: 0.4rem 0 0.3rem; }
  .strip-cell { padding: 0 2px; }
  .strip-cell img {
    width: 100%;
    aspect-ratio: 4 / 3;
    object-fit: cover;
    border-radius: 4px;
    display: block;
  }
</style>

<!-- -------------------- HERO -------------------- -->
<div class="project-hero">
  <h1>UniWALM: A Unified World-Action-Language Model for Embodied Robot Control</h1>
  <div class="subtitle"><em>Under review</em> &middot; IEEE ICRA 2027</div>

  <div class="author-list">
    <a href="https://scholar.google.com/citations?hl=en&user=HAtfBjoAAAAJ&view_op=list_works&sortby=pubdate">Rahul Sajnani</a><sup>1,2</sup> &middot;
    Diego Romeres<sup>2</sup> &middot;
    Mingyuan Zhang<sup>2,3</sup> &middot;
    Kai Gao<sup>2</sup> &middot;
    Carl Qi<sup>2,4</sup> &middot;
    Baichuan Huang<sup>2</sup> &middot;
    <a href="https://cs.brown.edu/people/ssrinath/">Srinath Sridhar</a><sup>1</sup> &middot;
    Dylan Randle<sup>2</sup> &middot;
    Lillian J. Ratliff<sup>2,5</sup> &middot;
    Jose Barreiros<sup>2</sup> &middot;
    Manikantan Nambi<sup>2</sup> &middot;
    <a href="https://scholar.google.com/citations?user=u8FiVv8AAAAJ&hl=en">Jeroen Vanbaar</a><sup>2</sup>
  </div>
  <div class="affiliation-list">
    <sup>1</sup> Brown University &nbsp;&middot;&nbsp;
    <sup>2</sup> Amazon &nbsp;&middot;&nbsp;
    <sup>3</sup> Northeastern University &nbsp;&middot;&nbsp;
    <sup>4</sup> UT Austin &nbsp;&middot;&nbsp;
    <sup>5</sup> University of Washington
  </div>

  <div class="project-links">
    <a href="https://arxiv.org/abs/2610.28626"><i class="ai ai-arxiv"></i>&nbsp;arXiv</a>
    <a href="https://github.com/RahulSajnani/UniWALM"><i class="fa-brands fa-github"></i>&nbsp;Code</a>
    <a href="#citation"><i class="fa-solid fa-quote-left"></i>&nbsp;BibTeX</a>
  </div>

  <div class="section-nav">
    <a href="#overview">Overview</a>
    <a href="#architecture">Architecture</a>
    <a href="#memory-loop">Memory Loop</a>
    <a href="#fmc">FMC</a>
    <a href="#qualitative">Qualitative</a>
    <a href="#results">Results</a>
    <a href="#citation">Citation</a>
    <a href="#contact">Contact</a>
  </div>
</div>

<!-- -------------------- TEASER -------------------- -->
<div class="row">
  <div class="col-sm-12 mt-2">
    <div class="white-panel">
      {% include figure.liquid loading="eager" path="assets/img/projects/uniwalm/arxiv_teaser.png" class="img-fluid rounded" alt="UniWALM teaser (from arXiv paper)" %}
    </div>
  </div>
</div>
<div class="fig-caption">
  <strong>(a) UniWALM.</strong> A single <strong>mixture-of-transformers</strong> backbone co-denoises video, action, and language. Four tasks: <strong>(b)</strong> single-arm manipulation, <strong>(c)</strong> dexterous bimanual, <strong>(d)</strong> dexterous bimanual sequential, <strong>(e)</strong> reasoning-dependent manipulation. <strong>(f)</strong> other hybrid architectures bolt a VLM onto a video model; <strong>(g)</strong> UniWALM instead shares one representation across all three modalities.
</div>

<!-- -------------------- OVERVIEW VIDEO -------------------- -->
<div class="row mt-4">
  <div class="col-sm-12">
    <div class="white-panel" style="padding:0; overflow:hidden;">
      <video class="autoplay-on-view" muted autoplay loop playsinline preload="metadata" controls poster="/assets/video/projects/uniwalm/posters/uniwalm_overview.jpg" style="width:100%; height:auto; display:block; border-radius:8px;">
        <source src="/assets/video/projects/uniwalm/uniwalm_overview.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
</div>
<div class="fig-caption">Overview video: UniWALM in action across real and simulated manipulation tasks.</div>

<!-- -------------------- OVERVIEW -------------------- -->
<h2 id="overview" class="section-title">Overview</h2>

<p>
Motivated by the human ability to integrate experience across <strong>language</strong>, <strong>perception</strong>, and <strong>action</strong>, we introduce <strong>UniWALM</strong>, a unified world-action-language model that learns video, action, and language in a <em>single shared representation</em>, where each modality serves as both a conditioning signal and a supervision target.
</p>
<p>
We ask: <em>can jointly generating language enrich the shared representation of a video-action model, yielding a unified representation that improves manipulation and supports memory-dependent behavior?</em>
</p>
<p>
Unlike prior approaches that <em>attach</em> a separate reasoning or vision-language model to a video-action backbone and run them as distinct stages, UniWALM unifies all three modalities inside a <strong>single mixture-of-transformers backbone</strong> with per-modality diffusion heads that denoise <em>synchronously</em>. Subtask and textual-memory tokens are decoded in the same denoising pass as action — no separate planning stage — and action / language generation at inference does not require synthesizing future video.
</p>

<div class="metric-row">
  <div class="metric"><div class="number">61.1%</div><div class="label">Real-world Find-the-Item<br/>(vs 11.1% FastWAM)</div></div>
  <div class="metric"><div class="number">34.5%</div><div class="label">RMBench M(N)<br/>(no pretrained VLM)</div></div>
  <div class="metric"><div class="number">+14.8%</div><div class="label">MolmoSpaces average<br/>(over same-backbone FastWAM)</div></div>
  <div class="metric"><div class="number">+21.2 pts</div><div class="label">RMBench vs FastWAM<br/>(13.3% → 34.5%)</div></div>
</div>

<!-- -------------------- ARCHITECTURE -------------------- -->
<h2 id="architecture" class="section-title">Architecture</h2>

<p>
UniWALM is built on a <strong>mixture-of-transformers</strong> backbone with three expert streams that share co-attention:
</p>
<ol>
  <li><strong>Video expert</strong> — Wan2.2 video diffusion over future frames.</li>
  <li><strong>Action expert</strong> — a Diffusion Transformer over action chunks.</li>
  <li><strong>Language expert</strong> — a <strong>discrete diffusion</strong> head over subtask / memory tokens.</li>
</ol>
<p>
All three streams <em>co-denoise in parallel</em> at every timestep. Action and language can be sampled at inference without producing a full future video.
</p>

<div class="row mt-3">
  <div class="col-sm-12">
    <div class="white-panel">
      {% include figure.liquid path="assets/img/projects/uniwalm/architecture.png" class="img-fluid rounded" alt="UniWALM mixture-of-transformers architecture" %}
    </div>
  </div>
</div>
<div class="fig-caption">
  Mixture-of-transformers backbone with per-modality diffusion heads. Video, action, and language tokens share co-attention and denoise synchronously; the generated memory tokens re-enter the context on the next control step.
</div>

<!-- -------------------- MEMORY LOOP -------------------- -->
<h2 id="memory-loop" class="section-title">Language-as-Memory Loop</h2>

<p>
At every control step, the policy <strong>generates</strong> a short natural-language memory describing its own progress — e.g., which subtask has been completed, which object was just picked up. On the next step, the policy <strong>re-reads</strong> its own generated memory as conditioning.
</p>
<p>
This closes a tight <em>generate → remember → act</em> loop <strong>inside a single network</strong>, without an external planner, VLM, or memory bank. The result is memory-dependent behavior that emerges as a natural consequence of the unified formulation.
</p>

<!-- -------------------- FMC -------------------- -->
<h2 id="fmc" class="section-title">Flow Matching with Correction (FMC)</h2>

<p>
To improve <strong>action reliability</strong>, we introduce <em>Flow Matching with Correction</em> (FMC) — a training objective that teaches recovery from <strong>perturbed action trajectories</strong>. The perturbation is applied only during training, so <strong>there is no additional inference cost</strong>.
</p>
<p>
On a 2D toy benchmark of robot end-effector trajectories (circle, star, spiral, line, arc, figure-8, square), FMC reduces unconditional Chamfer distance by <strong>4.0%</strong> and wins on 5/7 shape classes (<strong>71.4%</strong> win rate) over the linear flow-matching baseline.
</p>

<div class="row mt-3 justify-content-center">
  <div class="col-md-7 col-sm-10">
    <div class="white-panel">
      {% include figure.liquid path="assets/img/projects/uniwalm/flow_correction.png" class="img-fluid rounded" alt="Flow Matching with Correction (FMC)" %}
    </div>
  </div>
</div>
<div class="fig-caption">Flow Matching with Correction trains the policy to recover from perturbed action trajectories, at zero inference-time cost.</div>

<!-- -------------------- QUALITATIVE RESULTS -------------------- -->
<h2 id="qualitative" class="section-title">Qualitative Results</h2>
<p>
We evaluate UniWALM across real-world and simulated manipulation tasks: single-arm, dexterous bimanual, dexterous bimanual sequential, and reasoning-dependent (Find-the-Item).
</p>

<h3 class="subsection-title">Rollouts across tasks</h3>
<div class="row mt-3">
  <div class="col-sm-12">
    <div class="white-panel">
      {% include figure.liquid path="assets/img/projects/uniwalm/qualitative.png" class="img-fluid rounded" alt="UniWALM qualitative rollouts: MolmoBot Pick&Place, Find-the-Item (memory), simple + complex dexterous" %}
    </div>
  </div>
</div>
<div class="fig-caption">
  Qualitative rollouts across the four task families: <strong>(a) MolmoBot Pick&amp;Place</strong>, <strong>(b) Find-the-Item (memory)</strong>, <strong>(c) Simple dexterous</strong>, and <strong>(d) Complex dexterous</strong>. Red captions are generated <em>subtask / memory</em> tokens the policy produces at each step and re-reads on the next.
</div>

<h3 class="subsection-title">RMBench — per-task rollouts</h3>
<div class="row mt-3">
  <div class="col-sm-12">
    <div class="white-panel">
      {% include figure.liquid path="assets/img/projects/uniwalm/rmbench_fig.png" class="img-fluid rounded" alt="RMBench M(n) qualitative rollouts: Press Button, Battery Try, Blocks Ranking Try, Cover Blocks" %}
    </div>
  </div>
</div>
<div class="fig-caption">
  <strong>RMBench M(n) qualitative rollouts.</strong> Each row is a successful UniWALM rollout on one M(n) task — <em>Press Button</em>, <em>Battery Try</em>, <em>Blocks Ranking Try</em>, <em>Cover Blocks</em>. Below each panel we show the predicted <span style="color:#b22222">next subtask</span> and the generated <span style="color:#1f6d8f">textual memory</span> that is re-consumed as the prompt on the next control step. Reading left-to-right shows how the language-memory loop accumulates task-relevant state across steps.
</div>

<!-- -------------------- RESULTS -------------------- -->
<h2 id="results" class="section-title">Quantitative Results</h2>

<h3 id="results-molmo" class="subsection-title">MolmoSpaces (simulation)</h3>
<p>
UniWALM achieves the highest success rate on all three compositional pick-and-place variants, improving over the closest world-action model (FastWAM) sharing the same Wan2.2 backbone by <strong>+14.8%</strong> on average.
</p>

<h3 id="results-rmbench" class="subsection-title">RMBench — Memory-Dependent M(N)</h3>
<p>
Without any pretrained language or reasoning model, UniWALM reaches <strong>34.5%</strong> on RMBench's memory-dependent M(N) subset — improving over same-backbone FastWAM (13.3%) by <strong>+21.2 points</strong> and <em>exceeding</em> Mem-0's keyframe-equipped setup (28.5%) using only a <em>single</em> episode-start anchor frame rather than per-task privileged keyframes.
</p>

<h3 id="results-real" class="subsection-title">Real-World Find-the-Item</h3>
<p>
On a real-world Find-the-Item task designed to require memory, generating textual memory lifts success from <strong>11.1%</strong> (FastWAM, which shares our video backbone but has no language generation) to <strong>61.1%</strong>. State-of-the-art VLAs stay at or below chance (≤ 33.3%).
</p>

<div class="row g-2">
  <div class="col-md-3 col-sm-6 mt-2">
    <div class="white-panel" style="padding:0; overflow:hidden;">
      <video class="autoplay-on-view speed-2x" muted autoplay loop playsinline preload="metadata" controls poster="/assets/video/projects/uniwalm/posters/press_button.jpg" style="width:100%; height:auto; display:block; border-radius:8px;">
        <source src="/assets/video/projects/uniwalm/rmbench/press_button.mp4" type="video/mp4">
      </video>
    </div>
    <div class="fig-caption"><strong>Press Button</strong></div>
  </div>
  <div class="col-md-3 col-sm-6 mt-2">
    <div class="white-panel" style="padding:0; overflow:hidden;">
      <video class="autoplay-on-view speed-2x" muted autoplay loop playsinline preload="metadata" controls poster="/assets/video/projects/uniwalm/posters/battery_try.jpg" style="width:100%; height:auto; display:block; border-radius:8px;">
        <source src="/assets/video/projects/uniwalm/rmbench/battery_try.mp4" type="video/mp4">
      </video>
    </div>
    <div class="fig-caption"><strong>Battery Try</strong></div>
  </div>
  <div class="col-md-3 col-sm-6 mt-2">
    <div class="white-panel" style="padding:0; overflow:hidden;">
      <video class="autoplay-on-view speed-2x" muted autoplay loop playsinline preload="metadata" controls poster="/assets/video/projects/uniwalm/posters/blocks_ranking_try.jpg" style="width:100%; height:auto; display:block; border-radius:8px;">
        <source src="/assets/video/projects/uniwalm/rmbench/blocks_ranking_try.mp4" type="video/mp4">
      </video>
    </div>
    <div class="fig-caption"><strong>Blocks Ranking Try</strong></div>
  </div>
  <div class="col-md-3 col-sm-6 mt-2">
    <div class="white-panel" style="padding:0; overflow:hidden;">
      <video class="autoplay-on-view speed-2x" muted autoplay loop playsinline preload="metadata" controls poster="/assets/video/projects/uniwalm/posters/cover_blocks.jpg" style="width:100%; height:auto; display:block; border-radius:8px;">
        <source src="/assets/video/projects/uniwalm/rmbench/cover_blocks.mp4" type="video/mp4">
      </video>
    </div>
    <div class="fig-caption"><strong>Cover Blocks</strong></div>
  </div>
</div>

<p>
Together, these results answer our question affirmatively: a single model generating language, video, and action can improve control, and <strong>memory-dependent behavior emerges as a natural consequence</strong> of the unified formulation.
</p>

<!-- -------------------- CITATION -------------------- -->
<h2 id="citation" class="section-title">Citation</h2>
<pre class="bibtex-block">@misc{sajnani2026uniwalmunifiedworldaction,
      title={UniWALM: Unified World Action Language Model for Embodied Robot Control},
      author={Rahul Sajnani and Diego Romeres and Mingyuan Zhang and Kai Gao and Carl Qi and Baichuan Huang and Srinath Sridhar and Dylan Randle and Lillian J. Ratliff and Jose Barreiros and Manikantan Nambi and Jeroen Vanbaar},
      year={2026},
      eprint={2610.28626},
      archivePrefix={arXiv},
      primaryClass={cs.RO},
      url={https://arxiv.org/abs/2610.28626},
}</pre>

<!-- -------------------- CONTACT -------------------- -->
<h2 id="contact" class="section-title">Acknowledgements &amp; Contact</h2>
<p>
Work done during Rahul's internship at <strong>Amazon Robotics</strong>.
</p>
<p>
Questions? Reach out at <a href="mailto:rahul_sajnani@brown.edu">rahul_sajnani@brown.edu</a>.
</p>

<script>
document.addEventListener("DOMContentLoaded", function () {
  const vids = document.querySelectorAll("video.autoplay-on-view");

  // Pre-set playback rate for 2x videos (applies even before play).
  vids.forEach(v => {
    if (v.classList.contains("speed-2x")) {
      v.defaultPlaybackRate = 2.0;
      v.playbackRate = 2.0;
      v.addEventListener("loadedmetadata", () => { v.playbackRate = 2.0; });
      v.addEventListener("play",           () => { v.playbackRate = 2.0; });
    }
  });

  if (!("IntersectionObserver" in window)) {
    vids.forEach(v => v.play().catch(() => {}));
    return;
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      const v = e.target;
      if (e.isIntersecting && e.intersectionRatio >= 0.5) {
        v.play().catch(() => {});
      } else {
        v.pause();
      }
    });
  }, { threshold: [0, 0.25, 0.5, 0.75, 1.0] });

  vids.forEach(v => io.observe(v));
});
</script>
