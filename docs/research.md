---
layout: page
title: Research
permalink: /research/
lang: en
---

<style>
    #projects { padding: 0.2rem 1rem 1rem 1rem; }
    img#projects { vertical-align:middle; }
    ul#projects { font-size: 90%; }
</style>

## Summary
Our main research topic is the analysis and control of acoustic fields and their applications. In particular, we explore new signal processing/machine learning methodologies that incorporate the physical properties of wave fields. Based on these methodologies, we aim to develop systems for virtual reality audio, spatial noise suppression, etc. 

<script defer class="speakerdeck-embed" data-id="3e8d2624f0bd44de9f5338a91bda2b8d" data-ratio="1.77777777777778" src="//speakerdeck.com/assets/embed.js"></script>

## Projects

### Sound field reproduction using loudspeaker array

<div id=projects>
<img id="projects" src="/img/sfr_circ.gif" alt="Sound field reproduction" width="70%">
<p>Since conventional stereophonic / surround sound systems are based on an auditory property called summing localization, their appropriate listening position is limited to the center of loudspeakers, the so-called sweet spot. Furthermore, especially when reproducing reverberant sounds, the driving signals of the loudspeakers are manually designed by sound engineers. 
Sound field reproduction techniques aim to synthesize physical acoustic fields, enabling a broad listening area and sound distance and reverberation reproduction without designing processes. </p>

<h4>References</h4>
<ul id="projects">
<li>S. Koyama, K. Furuya, Y. Hiwasaki, and Y. Haneda, "Analytical Approach to Wave Field Reconstruction Filtering in Spatio-Temporal Frequency Domain," <em>IEEE Trans. Audio, Speech, Lang. Process.</em>, vol. 21, no. 4, pp. 685-696, 2013. <a href="https://doi.org/10.1109/TASL.2012.2229985" target="_blank"><i class="fas fa-external-link-alt"></i></a></li>
<li>N. Ueno, S. Koyama, and H. Saruwatari, "Three-Dimensional Sound Field Reproduction Based on Weighted Mode-Matching Method," <em>IEEE/ACM Trans. Audio, Speech, Lang. Process.</em>, vol. 27, no. 12, pp. 1852-1867, 2019. <a href="https://doi.org/10.1109/TASLP.2019.2934834" target="_blank"><i class="fas fa-external-link-alt"></i></a></li>
</ul>
</div>

### Binaural reproduction from microphone array recordings

<div id=projects>
<img id="projects" src="/img/micarray2binaural.png" alt="Binaural reproduction" width="80%">
<p>Binaural reproduction is a spatial audio technology that reproduces sounds at two ear positions by using headphones and head-related transfer functions (HRTFs). The binaural sounds in a VR space are simply reproduced by numerical acoustic simulations using given source positions and signals. However, the binaural reproduction of a real environment is not straightforward. We develop a technology to estimate a sound field using a microphone array and reproduce it as binaural sounds, which can be applied to VR systems requiring a large listening area. </p>

<h4>References</h4>
<ul id="projects">
<li>N. Iijima, S. Koyama, and H. Saruwatari, "Binaural Rendering from Microphone Array Signals of Arbitrary Geometry," <em>J. Acoust. Soc. Amer.</em>, vol. 150, no. 4, pp. 2479-2491, 2021. <a href="https://doi.org/10.1121/10.0006538" target="_blank"><i class="fas fa-external-link-alt"></i></a></li>
<li>N. Ueno, S. Koyama, and H. Saruwatari, "Sound Field Recording Using Distributed Microphones Based on Harmonic Analysis of Infinite Order," <em>IEEE Signal Process. Lett.</em>, vol. 25, no. 1, pp. 135-139, 2018.  <a href="https://doi.org/10.1109/LSP.2017.2775242" target="_blank"><i class="fas fa-external-link-alt"></i></a></li>
</ul>
</div>

### Spatial active noise control

<div id=projects>
<img id="projects" src="/img/spatial_anc.png" alt="Spatial ANC" width="75%">
<p>Active noise control (ANC) is a technique to reduce noise by a canceling loudspeaker and monitoring microphone, which has been applied to local or one-dimensional space such as earphones and air ducts. Spatial ANC aims to reduce noise over a three-dimensional target region. However, conventional techniques can reduce noise only at microphone positions. We develop a new spatial ANC technique to reduce regional noise by estimating a noise field with microphones and synthesizing an anti-noise field with loudspeakers. </p>

<h4>References</h4>
<ul id="projects">
<li>S. Koyama, J. Brunnström, H. Ito, N. Ueno, and H. Saruwatari, "Spatial Active Noise Control Based on Kernel Interpolation of Sound Field," <em>IEEE/ACM Trans. Audio, Speech, Lang. Process.</em>, vol. 29, pp. 3052-3063, 2021. <a href="https://doi.org/10.1109/TASLP.2021.3107983" target="_blank"><i class="fas fa-external-link-alt"></i></a></li>
<li>H. Ito, S. Koyama, N. Ueno, and H. Saruwatari, "Feedforward Spatial Active Noise Control Based on Kernel Interpolation of Sound Field," in <em>Proc. IEEE Int. Conf. Acoust., Speech, Signal Process. (ICASSP)</em>, pp. 511-515, Brighton, May, 2019. <a href="https://doi.org/10.1109/ICASSP.2019.8683067" target="_blank"><i class="fas fa-external-link-alt"></i></a></li>
</ul>
</div>

### Personal sound zone synthesis by multizone sound field control

<div id=projects>
<img id="projects" src="/img/psz.png" alt="Personal sound zone" width="75%">
<p>In a general sound system, sounds spread in all directions; thus, interference of multiple sounds can be noisy, and sounds can be delivered to someone who does not want to hear. Local-field sound reproduction aims to synthesize personalized sound zones by multizone sound field control with multiple loudspeakers. </p>

<h4>References</h4>
<ul id="projects">
<li>Takumi Abe, Shoichi Koyama, Natsuki Ueno, and Hiroshi Saruwatari, "Amplitude Matching for Multizone Sound Field Control," <em>IEEE/ACM Trans. Audio, Speech, Lang. Process.</em>, vol. 31, pp. 656-669, 2023. <a href="https://doi.org/10.1109/TASLP.2022.3231715" target="_blank"><i class="fas fa-external-link-alt"></i></a></li>
<li>S. Koyama, T. Amakasu, N. Ueno, and H. Saruwatari, "Amplitude Matching: Majorization-Minimization Algorithm for Sound Field Control Only With Amplitude Constraint," in <em>Proc. IEEE Int. Conf. Acoust., Speech, Signal Process. (ICASSP)</em>, pp. 411-415, Jun., 2021. <a href="https://doi.org/10.1109/ICASSP39728.2021.9414855" target="_blank"><i class="fas fa-external-link-alt"></i></a></li>
</ul>
</div>


