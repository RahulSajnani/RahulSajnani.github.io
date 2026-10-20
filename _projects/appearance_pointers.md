---
layout: page
title: Appearance Pointers
description: MultiModal Region Control of Diffusion Transformers &middot; <em>Under review</em>
img: assets/img/projects/appearance_pointers/Teaser_new.png
importance: 1
category: work
giscus_comments: false
pretty_table: false
---

<!-- ============================================================ -->
<!-- Reusable Project Page Template (based on brown-ivl layout).  -->
<!-- Clone this file for a new project, swap IDs/content/images.  -->
<!-- ============================================================ -->

<style>
  /* Hide al-folio's default post-header on this project page; the hero below handles title + authors. */
  .post > .post-header   { display: none; }

  /* ---- Project page typography and layout ------------------- */
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
  .project-links a:hover {
    background: var(--global-theme-color);
    color: #ffffff;
    border-color: var(--global-theme-color);
  }
  html[data-theme="dark"] .project-links a {
    background: #ffffff;
    color: #1a1a1a;
    border-color: rgba(0,0,0,0.1);
  }

  /* Sticky pill-style section navigation. */
  .section-nav {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.35rem;
    margin: 1rem auto 2rem;
    padding: 6px;
    background: #ffffff;
    border: 1px solid var(--global-divider-color);
    border-radius: 10px;
    box-shadow: 0 1px 4px rgba(0,0,0,0.04);
    position: sticky;
    top: 70px;
    z-index: 5;
    max-width: fit-content;
  }
  .section-nav a {
    display: inline-block;
    padding: 5px 14px;
    border-radius: 6px;
    font-size: 0.85rem;
    font-weight: 500;
    color: #333;
    text-decoration: none;
    transition: background 0.15s ease, color 0.15s ease;
    white-space: nowrap;
  }
  .section-nav a:hover {
    background: var(--global-theme-color);
    color: #ffffff;
    text-decoration: none;
  }
  html[data-theme="dark"] .section-nav {
    background: rgba(255,255,255,0.95);
    border-color: rgba(0,0,0,0.1);
  }
  @media (max-width: 600px) {
    .section-nav { position: static; }
    .section-nav a { padding: 4px 10px; font-size: 0.8rem; }
  }

  h2.section-title {
    font-size: 1.35rem; font-weight: 600;
    margin: 2.4rem 0 0.9rem;
    padding-bottom: 0.4rem;
    border-bottom: 1px solid var(--global-divider-color);
  }
  h3.subsection-title { font-size: 1.08rem; font-weight: 600; margin: 1.5rem 0 0.6rem; }

  .fig-caption { font-size: 0.85rem; color: var(--global-text-color-light); text-align: center; margin: 0.4rem auto 0.3rem; max-width: 820px; }

  .bibtex-block {
    background: var(--global-code-bg-color);
    border-radius: 6px;
    padding: 0.9rem 1rem;
    font-family: ui-monospace, "SFMono-Regular", Menlo, monospace;
    font-size: 0.82rem;
    line-height: 1.55;
    overflow-x: auto;
    white-space: pre;
  }
</style>

<!-- -------------------- HERO -------------------- -->
<div class="project-hero">
  <h1>Appearance Pointers: MultiModal Region Control of Diffusion Transformers</h1>
  <div class="subtitle">Under review &middot; 2026</div>

  <div class="author-list">
    <a href="https://scholar.google.com/citations?hl=en&user=HAtfBjoAAAAJ&view_op=list_works&sortby=pubdate">Rahul Sajnani</a><sup>1,2</sup> &middot;
    Yulia Gryaditskaya<sup>2</sup> &middot;
    Radomír Měch<sup>2</sup> &middot;
    <a href="https://cs.brown.edu/people/ssrinath/">Srinath Sridhar</a><sup>1</sup> &middot;
    <a href="http://mgadelha.me/">Matheus Gadelha</a><sup>2</sup>
  </div>
  <div class="affiliation-list">
    <sup>1</sup> Brown University &nbsp;&nbsp; <sup>2</sup> Adobe Research
  </div>

  <div class="project-links">
    <a href="#"><i class="ai ai-arxiv"></i>&nbsp;arXiv</a>
    <a href="https://ivl.cs.brown.edu/research/appearance_pointers.html"><i class="fa-solid fa-globe"></i>&nbsp;Brown IVL Page</a>
    <a href="#citation"><i class="fa-solid fa-quote-left"></i>&nbsp;BibTeX</a>
  </div>

  <div class="section-nav">
    <a href="#capabilities">Capabilities</a>
    <a href="#methodology">Methodology</a>
    <a href="#qualitative">Qualitative Results</a>
    <a href="#dataset">Dataset</a>
    <a href="#citation">Citation</a>
    <a href="#contact">Contact</a>
  </div>
</div>

<!-- -------------------- CAPABILITIES / TEASER -------------------- -->
<h2 id="capabilities" class="section-title">Capabilities</h2>

<div class="row">
  <div class="col-sm-12 mt-2">
    {% include figure.liquid loading="eager" path="assets/img/projects/appearance_pointers/Teaser_new.png" class="img-fluid rounded z-depth-1" alt="Appearance Pointers capabilities teaser" %}
  </div>
</div>
<div class="fig-caption">
  Appearance Pointers enables fine-grained <strong>multi-modal region control</strong> of a pretrained diffusion transformer: each region of the output can be independently steered by a text prompt, a reference image, or a material texture — all in a single denoising pass.
</div>

<!-- -------------------- METHODOLOGY -------------------- -->
<h2 id="methodology" class="section-title">Methodology</h2>

<p>
Appearance Pointers performs region-conditioned image generation and editing by injecting <em>regional tokens</em> into a pre-trained <strong>FLUX Kontext</strong> generation model. Special tokens denoted <code>ⁱAP</code> and <code>ᵀAP</code> tie each region to its conditions, enabling multi-modal region-level control inside a single forward pass.
</p>

<div class="row">
  <div class="col-sm-12 mt-2">
    {% include figure.liquid path="assets/img/projects/appearance_pointers/Overview.png" class="img-fluid rounded z-depth-1" alt="Method overview" %}
  </div>
</div>
<div class="fig-caption">Overview of the Appearance Pointers architecture.</div>

<h3 id="region-linking" class="subsection-title">Region Linking</h3>
<p>
Each region is processed independently. Its text prompt, reference image, and mask signals are fused to produce region tokens <code>ⁱMᵢ</code> (image stream) and <code>ᵀMᵢ</code> (text stream), which feed the FLUX transformer per region <em>i</em>.
</p>
<div class="row">
  <div class="col-sm-12 mt-2">
    {% include figure.liquid path="assets/img/projects/appearance_pointers/Region_Linking.png" class="img-fluid rounded z-depth-1" alt="Region linking diagram" %}
  </div>
</div>

<h3 id="region-aggregation" class="subsection-title">Region Aggregation</h3>
<p>
Region tokens from the image and text streams across all regions are combined into a single, unified per-region representation. Aggregation happens <strong>independently at every spatial patch</strong>, which preserves the spatial cues carried by each Appearance Pointer token.
</p>
<div class="row">
  <div class="col-sm-12 mt-2">
    {% include figure.liquid path="assets/img/projects/appearance_pointers/Region_Aggregation.png" class="img-fluid rounded z-depth-1" alt="Region aggregation diagram" %}
  </div>
</div>

<h3 id="attention" class="subsection-title">Attention Map for Appearance Pointers</h3>
<p>
After training, the Appearance Pointer learns to attend to its corresponding region condition. Queries come from the Appearance Pointer token; keys come from the Image Condition tokens. The heatmap below visualizes the attended region at a highlighted query location.
</p>
<div class="row">
  <div class="col-sm-12 mt-2">
    {% include figure.liquid path="assets/img/projects/appearance_pointers/Attention_maps.png" class="img-fluid rounded z-depth-1" alt="Attention maps for Appearance Pointers" %}
  </div>
</div>

<!-- -------------------- QUALITATIVE RESULTS -------------------- -->
<h2 id="qualitative" class="section-title">Qualitative Results — In the Wild</h2>
<p>
We showcase <strong>heterogeneous</strong> region-condition combinations: each region of a target image is independently driven by text, a reference image, or a material texture. Numbered regions tie back to their corresponding condition.
</p>

<div class="row mt-3">
  <div class="col-sm-12">
    {% include figure.liquid path="assets/img/projects/appearance_pointers/Qual_Supp_1.png" class="img-fluid rounded z-depth-1" alt="Qualitative gallery 1" %}
  </div>
</div>
<div class="row mt-3">
  <div class="col-sm-12">
    {% include figure.liquid path="assets/img/projects/appearance_pointers/Qual_Supp_2.png" class="img-fluid rounded z-depth-1" alt="Qualitative gallery 2" %}
  </div>
</div>
<div class="row mt-3">
  <div class="col-sm-12">
    {% include figure.liquid path="assets/img/projects/appearance_pointers/Qual_Supp_3.png" class="img-fluid rounded z-depth-1" alt="Qualitative gallery 3" %}
  </div>
</div>

<!-- -------------------- DATASET -------------------- -->
<h2 id="dataset" class="section-title">Dataset</h2>
<p>
We release a region-control dataset containing, for each image:
</p>
<ol>
  <li>Region segments</li>
  <li>Region captions</li>
  <li>Region pose-variation edits</li>
  <li>Region texture on a sphere</li>
  <li>Pose and texture consistency scores</li>
</ol>
<div class="row mt-3">
  <div class="col-sm-12">
    <div style="background:#ffffff; padding:14px; border-radius:8px; border:1px solid var(--global-divider-color);">
      {% include figure.liquid path="assets/img/projects/appearance_pointers/dataset_regions_optimized.png" class="img-fluid rounded" alt="Appearance Pointers region dataset" %}
    </div>
  </div>
</div>

<!-- -------------------- CITATION -------------------- -->
<h2 id="citation" class="section-title">Citation</h2>
<div class="bibtex-block">@misc&#123;sajnani2026AppearancePointers,
  title=&#123;Appearance Pointers: MultiModal Region Control of Diffusion Transformers&#125;,
  author=&#123;Rahul Sajnani and Yulia Gryaditskaya and Radomír Měch and Srinath Sridhar and Matheus Gadelha&#125;,
  year=&#123;2026&#125;,
  eprint=&#123;&#125;,
  archivePrefix=&#123;arXiv&#125;,
  primaryClass=&#123;cs.CV&#125;
&#125;</div>

<!-- -------------------- ACKNOWLEDGEMENTS / CONTACT -------------------- -->
<h2 id="contact" class="section-title">Acknowledgements &amp; Contact</h2>
<p>
Part of this work was done during Rahul's internship at <strong>Adobe Research</strong>.
</p>
<p>
Questions? Reach out at <a href="mailto:rahul_sajnani@brown.edu">rahul_sajnani@brown.edu</a>.
</p>
