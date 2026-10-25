---
layout: about
title: About
permalink: /
suptitle:


profile:
  align: right
  image: Rahul_linkedin.jpg
  image_circular: false
  # more_info: >
  #   <p>Providence, RI</p>

news: true
selected_papers: true
social: false
---

I am a CS Ph.D. candidate at **Brown University** advised by [Srinath Sridhar](https://cs.brown.edu/people/ssrinath/), graduating **Dec 2026**. I build **generative world models for robot learning** — unifying video, action, and language into one representation so robots can plan, remember, and act end-to-end from pixels.

Previously: **Applied Scientist II Intern** at [Amazon Industrial Robotics](https://www.amazon.science/tag/amazon-robotics) (2024–2026), **Research Scientist Intern** at [Adobe Research](https://research.adobe.com/) (Summer 2025), and designed [mapping &amp; obstacle-avoidance for a self-driving car](/projects/self_driving/) at [RRC, IIIT-Hyderabad](https://robotics.iiit.ac.in/). B.Tech + M.Sc. (ECE Gold Medal) from IIIT-H.

I am **on the industry job market (2026)** for research roles in robotics foundation models, autonomous driving, and generative modeling (also curious about brain–robot interfaces).

<div class="home-cta" markdown="0"><style>.home-cta{margin:1.2rem 0 1.4rem;display:grid;gap:0.6rem;}@media (min-width:720px){.home-cta{grid-template-columns:1fr 1fr;}}.home-cta a.cta-link{display:flex;align-items:center;gap:0.7rem;padding:0.75rem 1rem;border:1px solid var(--global-divider-color);border-radius:10px;text-decoration:none;color:var(--global-text-color);transition:background 0.15s ease,border-color 0.15s ease;}.home-cta a.cta-link:hover{background:rgba(0,0,0,0.03);border-color:var(--global-theme-color);}html[data-theme="dark"] .home-cta a.cta-link:hover{background:rgba(255,255,255,0.04);}.home-cta .cta-icon{font-size:1.1rem;color:var(--global-theme-color);min-width:1.2rem;text-align:center;}.home-cta .cta-text{flex:1;line-height:1.35;}.home-cta .cta-title{font-weight:600;font-size:0.95rem;}.home-cta .cta-sub{font-size:0.8rem;color:var(--global-text-color-light);}</style><a href="/demos/" class="cta-link"><span class="cta-icon">&#9654;</span><span class="cta-text"><span class="cta-title">Robot demos &rarr;</span><br><span class="cta-sub">UniWALM real-robot rollouts &middot; self-driving clips.</span></span></a><a href="/generative/" class="cta-link"><span class="cta-icon">&#10022;</span><span class="cta-text"><span class="cta-title">Generative demos &rarr;</span><br><span class="cta-sub">GeoDiffuser edits &middot; GenHSI videos &middot; AppearancePointers.</span></span></a></div>

### Research focus

<ul class="research-focus">
  <li><span class="rf-icon"><i class="fa-solid fa-robot"></i></span><div><strong>Robotics foundation models</strong> — world-action-language models, memory-aware policies, diffusion/flow-matching for action, and sample-efficient RL fine-tuning. [<a href="/projects/uniwalm/">UniWALM</a>, <a href="https://anchorq-rl.com/">AnchorQ</a>]</div></li>
  <li><span class="rf-icon"><i class="fa-solid fa-wand-magic-sparkles"></i></span><div><strong>Controllable generative models</strong> — steering diffusion internals for geometry, 3D, and multi-region control. [<a href="/projects/geodiffuser/">GeoDiffuser</a> · WACV '25 Best Student Paper, <a href="/projects/appearance_pointers/">AppearancePointers</a>]</div></li>
  <li><span class="rf-icon"><i class="fa-solid fa-cube"></i></span><div><strong>Canonicalization &amp; 3D understanding</strong> — SO(3)-equivariant pose estimation on partial shapes and NeRFs, feed-forward 3D Gaussian Splatting from monocular video via video-diffusion priors (Wan2.1, LTX-Video, CogVideoX), regularity-aware scene composition, and dense reconstruction. [<a href="https://ivl.cs.brown.edu/ConDor/">ConDor</a>, <a href="https://ivl.cs.brown.edu/research/canonical-fields.html">Canonical Fields</a> (CVPR Highlight), <a href="https://ivl.cs.brown.edu/research/lego-net.html">LEGO-Net</a>, <a href="https://arxiv.org/abs/2011.12912">DRACO</a>]</div></li>
  <li><span class="rf-icon"><i class="fa-solid fa-car-side"></i></span><div><strong>Perception for autonomous driving</strong> — monocular SLAM and multi-object tracking for dynamic urban scenes. [<a href="https://arxiv.org/abs/2002.03528">MoM-SLAM</a>, <a href="https://arxiv.org/abs/2011.07613">BirdSLAM</a>]</div></li>
</ul>

<p style="margin: 0.4rem 0 1rem; font-size: 0.92rem; color: var(--global-text-color-light);">
<i class="fa-solid fa-brain" style="margin-right:0.4rem;"></i>
Also curious about <strong>brain–robot interfaces</strong>: using generative priors to decode intent from neural signals into robot action. Open to collaborating / joining a team already working here.
</p>

<style>
  .research-focus { list-style: none; padding: 0; margin: 0.4rem 0 1rem; }
  .research-focus li {
    display: flex;
    gap: 0.75rem;
    align-items: flex-start;
    margin-bottom: 0.55rem;
  }
  .research-focus .rf-icon {
    flex: 0 0 1.7rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 1.7rem;
    height: 1.7rem;
    border-radius: 6px;
    background: rgba(0,0,0,0.06);
    color: var(--global-theme-color);
    font-size: 0.9rem;
    margin-top: 0.1rem;
  }
  html[data-theme="dark"] .research-focus .rf-icon { background: rgba(255,255,255,0.06); }
</style>

Collaborators & mentors: [Srinath Sridhar](https://cs.brown.edu/people/ssrinath/), [Leonidas Guibas](https://geometry.stanford.edu/), [George Konidaris](https://cs.brown.edu/people/gdk/), [Daniel Ritchie](https://dritchie.github.io/), [Jeroen Vanbaar](https://scholar.google.com/citations?user=u8FiVv8AAAAJ&hl=en), [Kapil Katyal](https://kdk132.github.io/), [K. Madhava Krishna](https://robotics.iiit.ac.in/), [Matheus Gadelha](http://mgadelha.me/), [Kavita Vemuri](https://www.iiit.ac.in/faculty/kavitha-vemuri/).

<p class="link-row" style="text-align:center; font-size: 0.92rem; margin-top: 1.2rem;">
<!-- Resume + CV temporarily hidden
<a href="/assets/pdfs/RahulSajnani_Resume.pdf"><i class="fa-regular fa-file-lines"></i>&nbsp;<strong>Resume</strong></a>
&nbsp;/&nbsp; <a href="/assets/pdfs/RahulSajnani_CV.pdf"><i class="fa-solid fa-graduation-cap"></i>&nbsp;<strong>CV</strong></a>
&nbsp;/&nbsp;
-->
<a href="https://scholar.google.com/citations?hl=en&user=HAtfBjoAAAAJ&view_op=list_works&sortby=pubdate"><i class="ai ai-google-scholar"></i>&nbsp;Google Scholar</a>
&nbsp;/&nbsp; <a href="mailto:rahul_sajnani@brown.edu"><i class="fa-regular fa-envelope"></i>&nbsp;Email</a>
&nbsp;/&nbsp; <a href="https://github.com/RahulSajnani"><i class="fa-brands fa-github"></i>&nbsp;GitHub</a>
&nbsp;/&nbsp; <a href="https://x.com/rahulsajnani2"><i class="fa-brands fa-x-twitter"></i>&nbsp;X</a>
&nbsp;/&nbsp; <a href="https://www.linkedin.com/in/rahul-sajnani-432609178/"><i class="fa-brands fa-linkedin"></i>&nbsp;LinkedIn</a>
&nbsp;/&nbsp; <a href="https://www.researchgate.net/profile/Rahul-Sajnani"><i class="fa-brands fa-researchgate"></i>&nbsp;ResearchGate</a>
</p>
