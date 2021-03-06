---
layout: page
title: Research
permalink: /ja/research/
lang: ja
---

<style>
    #projects { padding: 0.2rem 1rem 1rem 1rem; }
    img#projects { vertical-align:middle; }
    ul#projects { font-size: 90%; }
</style>

## 研究テーマ概要
「音場を対象とした逆問題」、「音場の記録・伝送・再生のための信号処理」の二つを主な研究テーマとしています。

**音場を対象とした逆問題:** 音空間の可視化や解析、音源位置や室内音響パラメータの推定など、音場計測における種々の逆問題に対し、最適化や機械学習など様々なアプローチから新たな方法論を探求し、システムとしての構築を行う。

**音場の記録・伝送・再生のための信号処理:** 音場の記録、伝送、再生に関わる諸問題を基本原理から応用まで広く扱い、遠隔コミュニケーションやバーチャルリアリティなどを目的とした新しいシステムを、これらの方法論に基づいて実現する。

<script async class="speakerdeck-embed" data-id="9b4360a920d24c028bc059703c4a1dc8" data-ratio="1.33333333333333" src="//speakerdeck.com/assets/embed.js"></script>

## プロジェクト

### スピーカアレイによる音場再現

<div id=projects>
<img id="projects" src="/img/sfr_circ.gif" alt="Sound field reproduction" width="70%">
<p>従来のステレオ/サラウンド方式での音響再生は、summing localizationと呼ばれる聴覚特性に基づくため、スピーカアレイ中心位置（いわゆるスィートスポット）でしか適切に受聴することができず、特に残響環境を再現する場合などは人手で音をデザインするプロセスも必要です。複数のスピーカを用いて物理的な音空間そのものを合成する音場再現技術では、広い受聴領域での再現や、音の距離感・広がり感も含めた再現が可能であるほか、人手でのデザインも不要になることが期待できます。</p>

<h4>References</h4>
<ul id="projects">
<li>S. Koyama, K. Furuya, Y. Hiwasaki, and Y. Haneda, "Analytical Approach to Wave Field Reconstruction Filtering in Spatio-Temporal Frequency Domain," <em>IEEE Trans. Audio, Speech, Lang. Process.</em>, vol. 21, no. 4, pp. 685-696, 2013. <a href="https://doi.org/10.1109/TASL.2012.2229985" target="_blank"><i class="fas fa-external-link-alt"></i></a></li>
<li>N. Ueno, S. Koyama, and H. Saruwatari, "Three-Dimensional Sound Field Reproduction Based on Weighted Mode-Matching Method," <em>IEEE/ACM Trans. Audio, Speech, Lang. Process.</em>, vol. 27, no. 12, pp. 1852-1867, 2019. <a href="https://doi.org/10.1109/TASLP.2019.2934834" target="_blank"><i class="fas fa-external-link-alt"></i></a></li>
</ul>
</div>

### マイクアレイ信号からのバイノーラル再現

<div id=projects>
<img id="projects" src="/img/micarray2binaural.png" alt="Binaural reproduction" width="80%">
<p>頭部伝達関数を用いて両耳位置の信号を合成することを目的とするバイノーラル再現は、ヘッドフォンでの受聴を主に対象とした空間音響技術です。音源の位置や信号などの情報を与えてレンダリングをするような、VR空間におけるバイノーラル再現では、音響数値シミュレーションなどを用いることで比較的容易に実現できます。しかしながら、実環境の音を収録し、バイノーラル信号として再現することは技術的な課題が多く、発展途上の段階です。マイクアレイ信号から対象の音場を推定し、バイノーラル信号を再現する技術を実現することで、広い領域の再現が必要となる6DoFのVR技術などへも応用可能となることが期待できます。</p>

<h4>References</h4>
<ul id="projects">
<li>N. Iijima, S. Koyama, and H. Saruwatari, "Binaural Rendering from Microphone Array Signals of Arbitrary Geometry," <em>J. Acoust. Soc. Amer.</em>, vol. 150, no. 4, pp. 2479-2491, 2021. <a href="https://doi.org/10.1121/10.0006538" target="_blank"><i class="fas fa-external-link-alt"></i></a></li>
<li>N. Ueno, S. Koyama, and H. Saruwatari, "Sound Field Recording Using Distributed Microphones Based on Harmonic Analysis of Infinite Order," <em>IEEE Signal Process. Lett.</em>, vol. 25, no. 1, pp. 135-139, 2018.  <a href="https://doi.org/10.1109/LSP.2017.2775242" target="_blank"><i class="fas fa-external-link-alt"></i></a></li>
</ul>
</div>

### 空間アクティブ騒音制御

<div id=projects>
<img id="projects" src="/img/spatial_anc.png" alt="Spatial ANC" width="75%">
<p>騒音をマイクでモニタリングしながらスピーカ信号によってそれを打ち消す、アクティブ騒音制御技術は、主にダクト内のような一次元空間や、三次元空間だとしても局所的な領域のみを対象として応用されてきました。空間アクティブ騒音制御は、三次元空間のある対象領域内全体にわたって騒音を抑圧することを目的とする技術です。しかしながら、従来の技術では、騒音抑圧の効果はマイク位置付近のみに限られてしまいます。マイク信号から対象領域内の音場を推定し、それを打ち消すような音場をスピーカによって合成する、新たな空間アクティブ騒音制御の技術を研究しています。</p>

<h4>References</h4>
<ul id="projects">
<li>S. Koyama, J. Brunnström, H. Ito, N. Ueno, and H. Saruwatari, "Spatial Active Noise Control Based on Kernel Interpolation of Sound Field," <em>IEEE/ACM Trans. Audio, Speech, Lang. Process.</em>, vol. 29, pp. 3052-3063, 2021. <a href="https://doi.org/10.1109/TASLP.2021.3107983" target="_blank"><i class="fas fa-external-link-alt"></i></a></li>
<li>H. Ito, S. Koyama, N. Ueno, and H. Saruwatari, "Feedforward Spatial Active Noise Control Based on Kernel Interpolation of Sound Field," in <em>Proc. IEEE Int. Conf. Acoust., Speech, Signal Process. (ICASSP)</em>, pp. 511-515, Brighton, May, 2019. <a href="https://doi.org/10.1109/ICASSP.2019.8683067" target="_blank"><i class="fas fa-external-link-alt"></i></a></li>
</ul>
</div>

### マルチゾーン音場合成によるエリア再生

<div id=projects>
<img id="projects" src="/img/psz.png" alt="Personal sound zone" width="75%">
<p>一般的なスピーカによる音響再生では、音が全方位に広がるため、複数の音が干渉して騒音となったり、聴きたくない人にも音が聴こえてしまうことが多々あります。エリア再生技術は、複数のスピーカを用いて音をゾーニングする、マルチゾーン音場合成によって、聴きたい人に聴きたい音を届ける音のパーソナルゾーン化を目的とします。</p>

<h4>References</h4>
<ul id="projects">
<li>S. Koyama, T. Amakasu, N. Ueno, and H. Saruwatari, "Amplitude Matching: Majorization-Minimization Algorithm for Sound Field Control Only With Amplitude Constraint," in <em>Proc. IEEE Int. Conf. Acoust., Speech, Signal Process. (ICASSP)</em>, pp. 411-415, Jun., 2021. <a href="https://doi.org/10.1109/ICASSP39728.2021.9414855" target="_blank"><i class="fas fa-external-link-alt"></i></a></li>
</ul>
</div>
