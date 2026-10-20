---
layout: page
title: GeoDiffuser
description: Geometry-Based Image Editing with Diffusion Models &middot; <em>WACV 2025 Best Student Paper</em>
img: assets/img/projects/geodiffuser/arxiv_teaser.png
importance: 2
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

  .fig-caption { font-size: 0.85rem; color: var(--global-text-color-light); text-align: center; margin: 0.4rem auto 0.3rem; max-width: 820px; }

  .bibtex-block { background: var(--global-code-bg-color); border-radius: 6px; padding: 0.9rem 1rem; font-family: ui-monospace, "SFMono-Regular", Menlo, monospace; font-size: 0.82rem; line-height: 1.55; overflow-x: auto; white-space: pre; }

  .white-panel { background:#ffffff; padding:14px; border-radius:8px; border:1px solid var(--global-divider-color); }

  .gif-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(170px, 1fr)); gap: 8px; margin: 0.6rem 0; }
  .gif-grid img { width: 100%; border-radius: 6px; display: block; }
</style>

<!-- -------------------- HERO -------------------- -->
<div class="project-hero">
  <h1>GeoDiffuser: Geometry-Based Image Editing with Diffusion Models</h1>
  <div class="subtitle">IEEE/CVF WACV 2025 &middot; <strong>Best Student Paper</strong></div>

  <div class="author-list">
    <a href="https://scholar.google.com/citations?hl=en&user=HAtfBjoAAAAJ&view_op=list_works&sortby=pubdate">Rahul Sajnani</a><sup>1,2</sup> &middot;
    <a href="https://scholar.google.com/citations?user=u8FiVv8AAAAJ&hl=en">Jeroen Vanbaar</a><sup>2</sup> &middot;
    Jie Min<sup>2</sup> &middot;
    <a href="https://kdk132.github.io/">Kapil Katyal</a><sup>2</sup> &middot;
    <a href="https://cs.brown.edu/people/ssrinath/">Srinath Sridhar</a><sup>1,2</sup>
  </div>
  <div class="affiliation-list">
    <sup>1</sup> Brown University &nbsp;&nbsp; <sup>2</sup> Amazon Robotics
  </div>

  <div class="project-links">
    <a href="https://arxiv.org/abs/2404.14403"><i class="ai ai-arxiv"></i>&nbsp;arXiv</a>
    <a href="https://arxiv.org/pdf/2404.14403.pdf"><i class="fa-regular fa-file-pdf"></i>&nbsp;Paper</a>
    <a href="https://github.com/RahulSajnani/GeoDiffuser"><i class="fa-brands fa-github"></i>&nbsp;Code</a>
    <a href="#citation"><i class="fa-solid fa-quote-left"></i>&nbsp;BibTeX</a>
  </div>

  <div class="section-nav">
    <a href="#edits">Edits</a>
    <a href="#overview">Overview</a>
    <a href="#framework">Framework</a>
    <a href="#method">Method</a>
    <a href="#results">Results</a>
    <a href="#limitations">Limitations</a>
    <a href="#citation">Citation</a>
    <a href="#contact">Contact</a>
  </div>
</div>

<!-- -------------------- EDITS -------------------- -->
<h2 id="edits" class="section-title">Real Image Editing with GeoDiffuser</h2>

<h3 class="subsection-title">2D and 3D Edits</h3>
<div class="gif-grid">
  <img src="/assets/img/projects/geodiffuser/movement/1.gif" alt="2D/3D edit 1">
  <img src="/assets/img/projects/geodiffuser/movement/10.gif" alt="2D/3D edit 10">
  <img src="/assets/img/projects/geodiffuser/movement/4.gif" alt="2D/3D edit 4">
  <img src="/assets/img/projects/geodiffuser/movement/18.gif" alt="2D/3D edit 18">
  <img src="/assets/img/projects/geodiffuser/movement/16.gif" alt="2D/3D edit 16">
  <img src="/assets/img/projects/geodiffuser/movement/17.gif" alt="2D/3D edit 17">
  <img src="/assets/img/projects/geodiffuser/movement/19.gif" alt="2D/3D edit 19">
  <img src="/assets/img/projects/geodiffuser/movement/20.gif" alt="2D/3D edit 20">
  <img src="/assets/img/projects/geodiffuser/movement/12.gif" alt="2D/3D edit 12">
  <img src="/assets/img/projects/geodiffuser/movement/13.gif" alt="2D/3D edit 13">
  <img src="/assets/img/projects/geodiffuser/movement/9.gif" alt="2D/3D edit 9">
  <img src="/assets/img/projects/geodiffuser/movement/21.gif" alt="2D/3D edit 21">
</div>

<h3 class="subsection-title">Object Removal</h3>
<div class="gif-grid">
  <img src="/assets/img/projects/geodiffuser/removal/1.gif" alt="Removal 1">
  <img src="/assets/img/projects/geodiffuser/removal/2.gif" alt="Removal 2">
  <img src="/assets/img/projects/geodiffuser/removal/3.gif" alt="Removal 3">
  <img src="/assets/img/projects/geodiffuser/removal/4.gif" alt="Removal 4">
  <img src="/assets/img/projects/geodiffuser/removal/5.gif" alt="Removal 5">
  <img src="/assets/img/projects/geodiffuser/removal/6.gif" alt="Removal 6">
  <img src="/assets/img/projects/geodiffuser/removal/9.gif" alt="Removal 9">
  <img src="/assets/img/projects/geodiffuser/removal/8.gif" alt="Removal 8">
</div>

<!-- -------------------- OVERVIEW -------------------- -->
<h2 id="overview" class="section-title">Overview</h2>

<div class="row">
  <div class="col-sm-12 mt-2">
    <div class="white-panel">
      {% include figure.liquid loading="eager" path="assets/img/projects/geodiffuser/arxiv_teaser.png" class="img-fluid rounded" alt="GeoDiffuser arXiv teaser" %}
    </div>
  </div>
</div>

<p>
GeoDiffuser is a <strong>zero-shot, optimization-based</strong> method that unifies common 2D and 3D object-level image edits into a single pipeline. The key insight is to <em>view image editing operations as geometric transformations</em> that can be injected directly into the <strong>attention layers</strong> of a diffusion model — producing the edit implicitly, with no fine-tuning and no 3D supervision.
</p>
<p>
Given an input image and user guidance, the foreground is segmented with <strong>SAM</strong> and a corresponding transform is estimated. GeoDiffuser supports <em>translation</em>, <em>3D rotation</em>, and <em>object removal</em> — and inpaints disoccluded regions that are revealed when objects move.
</p>

<!-- -------------------- FRAMEWORK -------------------- -->
<h2 id="framework" class="section-title">General Editing Framework</h2>

<p>
Our editing pipeline first <strong>inverts</strong> the image to obtain a noise latent, then runs two parallel diffusion processes:
</p>
<ol>
  <li>A <strong>reference diffusion</strong> process that regenerates the input image and preserves untouched regions.</li>
  <li>An <strong>edit diffusion</strong> process that reuses attention from the reference to realize the desired geometric edit.</li>
</ol>
<p>Shared attention is the key mechanism that ties the two processes together.</p>

<div class="row">
  <div class="col-sm-12 mt-2">
    <div class="white-panel">
      {% include figure.liquid path="assets/img/projects/geodiffuser/background_general_editing_framework.jpeg" class="img-fluid rounded" alt="General editing framework" %}
    </div>
  </div>
</div>

<!-- -------------------- METHOD -------------------- -->
<h2 id="method" class="section-title">Method Overview</h2>

<p>
GeoDiffuser introduces a novel <strong>attention-sharing mechanism</strong> that handles both 2D and 3D geometric edits inside a shared-attention layer. The method is entirely zero-shot and training-free, using latent optimization for edit guidance. The shared attention acts as a <em>proxy</em> for the post-edit foreground location, and the loss terms fill disocclusions while penalizing divergence of edit attention from reference attention.
</p>

<div class="row">
  <div class="col-sm-12 mt-2">
    <div class="white-panel">
      {% include figure.liquid path="assets/img/projects/geodiffuser/method_attention_sharing.jpeg" class="img-fluid rounded" alt="Attention sharing method" %}
    </div>
  </div>
</div>

<!-- -------------------- RESULTS -------------------- -->
<h2 id="results" class="section-title">Results</h2>

<div class="row">
  <div class="col-sm-12 mt-2">
    <div class="white-panel">
      {% include figure.liquid path="assets/img/projects/geodiffuser/Gallery_updated_final.jpg" class="img-fluid rounded" alt="Results gallery 1" %}
    </div>
  </div>
</div>
<div class="row mt-3">
  <div class="col-sm-12">
    <div class="white-panel">
      {% include figure.liquid path="assets/img/projects/geodiffuser/results_gallery_2.jpg" class="img-fluid rounded" alt="Results gallery 2" %}
    </div>
  </div>
</div>

<!-- -------------------- LIMITATIONS -------------------- -->
<h2 id="limitations" class="section-title">Limitations</h2>
<p>
Because edits occur in a lower-dimensional latent space, aliasing / interpolation artifacts can occasionally appear (e.g., the ship example). Optimization also sometimes yields sub-optimal foreground reconstructions or background disocclusion.
</p>
<div class="row">
  <div class="col-sm-12 mt-2">
    <div class="white-panel">
      {% include figure.liquid path="assets/img/projects/geodiffuser/Failure_Cases_Arxiv.jpg" class="img-fluid rounded" alt="Limitations / failure cases" %}
    </div>
  </div>
</div>

<!-- -------------------- CITATION -------------------- -->
<h2 id="citation" class="section-title">Citation</h2>
<div class="bibtex-block">@inproceedings&#123;sajnani2024geodiffuser,
  title=&#123;GeoDiffuser: Geometry-Based Image Editing with Diffusion Models&#125;,
  author=&#123;Rahul Sajnani and Jeroen Vanbaar and Jie Min and Kapil Katyal and Srinath Sridhar&#125;,
  booktitle=&#123;Proceedings of the IEEE/CVF Winter Conference on Applications of Computer Vision (WACV)&#125;,
  year=&#123;2025&#125;,
  eprint=&#123;2404.14403&#125;,
  archivePrefix=&#123;arXiv&#125;,
  primaryClass=&#123;cs.CV&#125;
&#125;</div>

<!-- -------------------- CONTACT -------------------- -->
<h2 id="contact" class="section-title">Acknowledgements &amp; Contact</h2>
<p>
Part of this work was done during Rahul's internship at <strong>Amazon</strong>. Additionally supported by NSF grant <em>CNS #2038897</em>, ONR grant <em>N00014-22-1-259</em>, and an AWS Cloud Credits award.
</p>
<p>
Questions? Reach out at <a href="mailto:rahul_sajnani@brown.edu">rahul_sajnani@brown.edu</a>.
</p>
