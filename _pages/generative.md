---
layout: page
title: Generative Demos
permalink: /generative/
description: Controllable generative models &mdash; GeoDiffuser (WACV 2025 Best Student Paper), GenHSI (WACV 2026), AppearancePointers (under review).
nav: true
nav_order: 10
---

<style>
  .gen-wrap { max-width: 1040px; margin: 0 auto; }
  .gen-wrap p.lead { font-size: 1rem; color: var(--global-text-color-light); margin-bottom: 1rem; }

  .g-section-title {
    font-size: 1.35rem; font-weight: 600;
    margin: 2.6rem 0 0.3rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid var(--global-divider-color);
  }
  .g-section-sub { font-size: 0.9rem; color: var(--global-text-color-light); margin: 0 0 1rem; }

  .g-tag {
    display: inline-block;
    font-size: 0.72rem;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    background: rgba(0,0,0,0.07);
    color: var(--global-text-color-light);
    padding: 2px 8px;
    border-radius: 999px;
    margin-right: 0.4rem;
    vertical-align: middle;
  }
  html[data-theme="dark"] .g-tag { background: rgba(255,255,255,0.08); }
  .g-tag.highlight {
    background: rgba(123,30,41,0.1);
    color: #7B1E29;
    font-weight: 600;
  }

  .g-fig { background: var(--global-code-bg-color); padding: 10px; border-radius: 8px; border: 1px solid var(--global-divider-color); overflow: hidden; }
  .g-fig img { width: 100%; height: auto; display: block; border-radius: 4px; }

  .g-caption { font-size: 0.86rem; color: var(--global-text-color-light); text-align: center; margin: 0.5rem auto 0; max-width: 820px; line-height: 1.4; }

  .g-gallery { display: grid; gap: 10px; margin-top: 0.6rem; }
  @media (min-width: 520px) { .g-gal-3 { grid-template-columns: repeat(3, 1fr); } .g-gal-4 { grid-template-columns: repeat(4, 1fr); } }
  .g-gallery .g-cell { background: #fff; border-radius: 6px; border: 1px solid var(--global-divider-color); overflow: hidden; }
  html[data-theme="dark"] .g-gallery .g-cell { background: #1e1e1e; }
  .g-gallery img { width: 100%; height: auto; display: block; }

  .g-links { margin: 0.4rem 0 0.2rem; font-size: 0.9rem; }
  .g-links a {
    display: inline-flex; align-items: center; gap: 0.3rem;
    padding: 4px 10px; border-radius: 6px;
    background: #fff; border: 1px solid var(--global-divider-color);
    color: #1a1a1a; text-decoration: none; font-weight: 500;
    font-size: 0.82rem; margin-right: 0.3rem;
  }
  .g-links a:hover { background: var(--global-theme-color); color: #fff; border-color: var(--global-theme-color); }
  html[data-theme="dark"] .g-links a { background: #fff; color: #1a1a1a; }

  .g-cta { text-align: center; margin: 2.4rem 0 0; font-size: 0.95rem; }
  .g-cta a { color: var(--global-theme-color); text-decoration: none; margin: 0 0.6rem; }
  .g-cta a:hover { text-decoration: underline; }
</style>

<div class="gen-wrap" markdown="1">

<p class="lead">Across these three projects I build <strong>legible, designed structures inside the forward pass of pretrained diffusion models</strong> &mdash; so a user can control <em>where</em> content goes, <em>what</em> it looks like, and <em>how</em> it moves, without retraining the base model. For full write-ups: <a href="/projects/geodiffuser/">GeoDiffuser</a>, <a href="/projects/appearance_pointers/">AppearancePointers</a>, <a href="https://kunkun0w0.github.io/project/GenHSI/">GenHSI</a>.</p>

<!-- =================== GEODIFFUSER =================== -->
<h2 class="g-section-title"><span class="g-tag highlight">WACV 2025 &middot; Best Student Paper</span>GeoDiffuser</h2>
<p class="g-section-sub">Geometry-based image editing on a frozen text-to-image diffusion model &mdash; <strong>training-free</strong>, invited talk at WACV 2025. User specifies a 3D rigid transformation (translate, rotate, scale) on an object; GeoDiffuser realizes it by rewriting the model's attention maps at inference time, preserving physically-consistent shadows and reflections.</p>

<div class="g-links">
  <a href="/projects/geodiffuser/">Project page</a>
  <a href="https://ivl.cs.brown.edu/research/geodiffuser.html">IVL mirror</a>
  <a href="https://github.com/RahulSajnani/GeoDiffuser">Code</a>
</div>

<div class="g-fig mt-2" markdown="0">
  {% include figure.liquid path="assets/img/projects/geodiffuser/Teaser_updated.001.jpeg" class="img-fluid" alt="GeoDiffuser teaser" %}
</div>
<div class="g-caption">User-specified 3D edits (translation, rotation, scale) applied to objects inside pretrained diffusion models &mdash; without fine-tuning.</div>

<h3 style="font-size:1rem; font-weight:600; margin:1.6rem 0 0.4rem;">Edit gallery &mdash; movement</h3>
<div class="g-gallery g-gal-4" markdown="0">
  <div class="g-cell"><img src="/assets/img/projects/geodiffuser/movement/1.gif" alt="Movement edit 1"></div>
  <div class="g-cell"><img src="/assets/img/projects/geodiffuser/movement/10.gif" alt="Movement edit 2"></div>
  <div class="g-cell"><img src="/assets/img/projects/geodiffuser/movement/16.gif" alt="Movement edit 3"></div>
  <div class="g-cell"><img src="/assets/img/projects/geodiffuser/movement/19.gif" alt="Movement edit 4"></div>
</div>
<div class="g-caption">Object translation / rotation edits applied to real images at inference. Each GIF shows the edit evolving across diffusion timesteps.</div>

<h3 style="font-size:1rem; font-weight:600; margin:1.6rem 0 0.4rem;">Edit gallery &mdash; object removal</h3>
<div class="g-gallery g-gal-4" markdown="0">
  <div class="g-cell"><img src="/assets/img/projects/geodiffuser/removal/1.gif" alt="Removal 1"></div>
  <div class="g-cell"><img src="/assets/img/projects/geodiffuser/removal/3.gif" alt="Removal 2"></div>
  <div class="g-cell"><img src="/assets/img/projects/geodiffuser/removal/5.gif" alt="Removal 3"></div>
  <div class="g-cell"><img src="/assets/img/projects/geodiffuser/removal/8.gif" alt="Removal 4"></div>
</div>
<div class="g-caption">Clean object removal &mdash; attention-map rewriting fills in geometrically consistent background without inpainting.</div>

<p class="g-caption" style="text-align:left; max-width:none; margin-top:1rem;">
  <strong>Headline results:</strong> MD <strong>7.3</strong> vs 10.8 on 3D edits (vs fine-tuned Diffusion Handles); <strong>5.6</strong> vs 20.0 on 2D edits (vs Zero123-XL + LaMa).
</p>

<!-- =================== GENHSI =================== -->
<h2 class="g-section-title"><span class="g-tag">WACV 2026</span><span class="g-tag highlight">Training-free</span>GenHSI</h2>
<p class="g-section-sub"><strong>Training-free</strong> controllable generation of long human&ndash;scene interaction (HSI) videos. The user supplies three things &mdash; an image of a <strong>scene</strong>, an image of a <strong>character / avatar</strong>, and a <strong>text prompt</strong> describing a chain of interactions &mdash; and GenHSI synthesizes a long, 3D-aware video of the character performing those interactions inside the scene, with identity preservation and physically plausible affordances. No fine-tuning of the base video-diffusion model.</p>

<p class="g-section-sub">Three-stage pipeline inspired by movie animation:
  <strong>(1) Script writing</strong> &mdash; a VLM parses the high-level text prompt into atomic actions grounded in the scene's affordances;
  <strong>(2) Pre-visualization</strong> &mdash; a pretrained 2D inpainting diffusion model is used to generate plausible 2D human poses via view canonicalization, which are then lifted to 3D keyframes under contact + VLM reasoning;
  <strong>(3) Animation</strong> &mdash; the 3D keyframes condition a pretrained video-diffusion model to render the final long interaction video.
</p>

<div class="g-links">
  <a href="https://kunkun0w0.github.io/project/GenHSI/">Project page</a>
  <a href="https://ivl.cs.brown.edu/research/genhsi">IVL mirror</a>
  <a href="https://arxiv.org/abs/2506.19840">arXiv</a>
</div>

<p style="font-size:0.9rem; color: var(--global-text-color-light); margin-top: 0.9rem;">
  <strong>Authors:</strong> Zekun Li, Rui Zhou, <strong>Rahul Sajnani</strong>, Xiaoyan Cong, Daniel Ritchie, Srinath Sridhar.
</p>

<p style="font-size:0.9rem; color: var(--global-text-color-light); margin-top: 0.6rem;">
  Same instinct as GeoDiffuser &mdash; use a pretrained generative model as a compositional substrate without retraining &mdash; carried from 2D image editing to 3D-aware long-form video generation.
</p>

<h3 style="font-size:1rem; font-weight:600; margin:1.8rem 0 0.4rem;">Scene 1 &mdash; <em>"A man sits on the bed, then sits on the chair."</em></h3>

<div class="g-gallery g-gal-2" markdown="0" style="grid-template-columns: 1fr 1fr; gap: 10px;">
  <div>
    <div class="g-fig" style="padding:4px;" markdown="0">
      <video muted autoplay loop playsinline preload="metadata" style="width:100%; display:block; border-radius:4px;">
        <source src="/assets/video/projects/genhsi/scene1_kling.mp4" type="video/mp4">
      </video>
    </div>
    <div class="g-caption"><strong>Baseline</strong> &mdash; Kling (with elements)</div>
  </div>
  <div>
    <div class="g-fig" style="padding:4px;" markdown="0">
      <video muted autoplay loop playsinline preload="metadata" style="width:100%; display:block; border-radius:4px;">
        <source src="/assets/video/projects/genhsi/scene1_genhsi.mp4" type="video/mp4">
      </video>
    </div>
    <div class="g-caption"><strong>GenHSI (ours)</strong></div>
  </div>
</div>

<h3 style="font-size:1rem; font-weight:600; margin:1.8rem 0 0.4rem;">Scene 2 &mdash; <em>"The girl stands next to the chair, then sits on it. After that, she approaches the table and touches it."</em></h3>

<div class="g-gallery g-gal-2" markdown="0" style="grid-template-columns: 1fr 1fr; gap: 10px;">
  <div>
    <div class="g-fig" style="padding:4px;" markdown="0">
      <video muted autoplay loop playsinline preload="metadata" style="width:100%; display:block; border-radius:4px;">
        <source src="/assets/video/projects/genhsi/scene2_kling.mp4" type="video/mp4">
      </video>
    </div>
    <div class="g-caption"><strong>Baseline</strong> &mdash; Kling (with elements)</div>
  </div>
  <div>
    <div class="g-fig" style="padding:4px;" markdown="0">
      <video muted autoplay loop playsinline preload="metadata" style="width:100%; display:block; border-radius:4px;">
        <source src="/assets/video/projects/genhsi/scene2_genhsi.mp4" type="video/mp4">
      </video>
    </div>
    <div class="g-caption"><strong>GenHSI (ours)</strong></div>
  </div>
</div>

<!-- =================== APPEARANCEPOINTERS =================== -->
<h2 class="g-section-title"><span class="g-tag">Under review &middot; ICLR 2027</span>AppearancePointers</h2>
<p class="g-section-sub">Fine-grained multi-region controllable image generation on FLUX / MMDiT. Every region in the output can be independently specified by a <strong>different modality</strong> &mdash; text, reference image, or material texture &mdash; without region bleed, in a single denoising pass. Introduces per-region appearance-pointer tokens plus a position-ID resampling scheme that routes each conditioning signal to its designated spatial region.</p>

<div class="g-links">
  <a href="/projects/appearance_pointers/">Project page</a>
  <a href="https://ivl.cs.brown.edu/research/appearance_pointers.html">IVL mirror</a>
  <a href="https://arxiv.org/abs/2607.19344">arXiv</a>
</div>

<div class="g-fig mt-2" markdown="0">
  {% include figure.liquid path="assets/img/projects/appearance_pointers/Teaser_new.png" class="img-fluid" alt="AppearancePointers teaser" %}
</div>
<div class="g-caption">Per-region control via text, reference image, or material texture &mdash; in a single denoising pass of a pretrained FLUX / MMDiT model.</div>

<h3 style="font-size:1rem; font-weight:600; margin:1.6rem 0 0.4rem;">Method overview</h3>
<div class="g-fig" markdown="0">
  {% include figure.liquid path="assets/img/projects/appearance_pointers/Overview.png" class="img-fluid" alt="AppearancePointers method" %}
</div>
<div class="g-caption">Region tokens attach appearance pointers that route conditioning to their spatial regions via position-ID resampling in the attention layers.</div>

<h3 style="font-size:1rem; font-weight:600; margin:1.6rem 0 0.4rem;">Qualitative results</h3>
<div class="g-gallery g-gal-3" markdown="0">
  <div class="g-cell"><img src="/assets/img/projects/appearance_pointers/Qual_Supp_1.png" alt="Qualitative 1"></div>
  <div class="g-cell"><img src="/assets/img/projects/appearance_pointers/Qual_Supp_2.png" alt="Qualitative 2"></div>
  <div class="g-cell"><img src="/assets/img/projects/appearance_pointers/Qual_Supp_3.png" alt="Qualitative 3"></div>
</div>
<div class="g-caption">Multi-region generations with mixed conditioning modalities per region.</div>

<p class="g-caption" style="text-align:left; max-width:none; margin-top:1rem;">
  <strong>Headline results:</strong> Beats DreamRenderer, MSDiffusion, InstanceDiffusion, and Seg2Any &mdash; <strong>gold</strong> on CLIP-I / DINO-I / MIoU for image-conditioned region generation, and gold on CLIP-I / DINO-I for text-conditioned. Also curated and released <strong>AP-37K</strong>, a 37K-sample multimodal dataset of text + reference-image + texture conditioning triplets.
</p>

<div class="g-cta" markdown="0">
Full project pages: <a href="/projects/geodiffuser/">GeoDiffuser &rarr;</a> &middot; <a href="https://kunkun0w0.github.io/project/GenHSI/">GenHSI &rarr;</a> &middot; <a href="/projects/appearance_pointers/">AppearancePointers &rarr;</a>
</div>

<script>
(function(){
  function tryPlay(v){
    if(!v) return;
    try{ v.muted=true; v.playsInline=true; var p=v.play(); if(p&&p.catch) p.catch(function(){}); } catch(e){}
  }
  function init(){
    var vids = document.querySelectorAll('.gen-wrap video');
    if(!('IntersectionObserver' in window)){ vids.forEach(tryPlay); return; }
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if(e.isIntersecting){ tryPlay(e.target); }
        else { try{ e.target.pause(); }catch(_){} }
      });
    }, { threshold: 0.2 });
    vids.forEach(function(v){ io.observe(v); });
  }
  if(document.readyState==='loading'){ document.addEventListener('DOMContentLoaded', init); } else { init(); }
})();
</script>

</div>
