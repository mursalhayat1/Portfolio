var e=[{key:`swordX`,min:-3,max:3,step:.01,label:`sword X`},{key:`swordY`,min:-3,max:3,step:.01,label:`sword Y`},{key:`swordZ`,min:-5,max:1,step:.01,label:`sword Z (start)`},{key:`swordRotXdeg`,min:-180,max:180,step:1,label:`sword rot X (deg)`},{key:`swordRotYdeg`,min:-180,max:180,step:1,label:`sword rot Y (deg)`},{key:`swordRotZdeg`,min:-180,max:180,step:1,label:`sword rot Z (deg)`},{key:`swordDollyY`,min:-2,max:2,step:.01,label:`dolly Y (rise on scroll)`},{key:`swordDollyZ`,min:0,max:5,step:.05,label:`dolly Z (zoom on scroll)`},{key:`swordDollyRotZdeg`,min:-180,max:180,step:1,label:`dolly rot Z (twist on scroll)`},{key:`swordDollyRotYdeg`,min:-720,max:720,step:5,label:`dolly rot Y (yaw on scroll)`},{key:`anchorOffsetU`,min:-.5,max:.5,step:.005,label:`wound offset X (UV)`},{key:`anchorOffsetV`,min:-.5,max:.5,step:.005,label:`wound offset Y (UV)`},{key:`exposure`,min:.3,max:2.5,step:.01,label:`tone exposure`},{key:`envMapIntensity`,min:0,max:4,step:.05,label:`env map intensity`},{key:`ambient`,min:0,max:1.5,step:.01,label:`ambient`},{key:`key`,min:0,max:4,step:.05,label:`key light`},{key:`fill`,min:0,max:2,step:.01,label:`fill light`},{key:`roughness`,min:0,max:1,step:.01,label:`roughness`},{key:`clearcoat`,min:0,max:1,step:.01,label:`clearcoat`},{key:`clearcoatRoughness`,min:0,max:1,step:.01,label:`cc roughness`},{key:`bloomIntensity`,min:0,max:4,step:.05,label:`bloom intensity`},{key:`bloomThreshold`,min:0,max:1.5,step:.01,label:`bloom threshold`},{key:`bloomRadius`,min:0,max:1.5,step:.01,label:`bloom radius`},{key:`dofFocalLength`,min:0,max:.2,step:.001,label:`DOF focal length`},{key:`dofBokehScale`,min:0,max:5,step:.05,label:`DOF bokeh scale`},{key:`caOffsetX`,min:0,max:.01,step:1e-4,label:`CA offset X`},{key:`caOffsetY`,min:0,max:.01,step:1e-4,label:`CA offset Y`},{key:`grainOpacity`,min:0,max:.6,step:.01,label:`film grain`},{key:`vignetteOffset`,min:0,max:1,step:.01,label:`vignette offset`},{key:`vignetteDarkness`,min:0,max:1.5,step:.01,label:`vignette darkness`},{key:`rainFallSpeed`,min:.5,max:12,step:.1,label:`fall speed`},{key:`rainStreakLength`,min:.05,max:3,step:.01,label:`streak length`},{key:`rainWindX`,min:-1.5,max:1.5,step:.01,label:`wind X`},{key:`rainStreakOpacity`,min:0,max:2,step:.01,label:`streak opacity`},{key:`rainEnvReflection`,min:0,max:4,step:.05,label:`env reflection`},{key:`rainSlowMoFloor`,min:.05,max:1,step:.01,label:`slow-mo floor (peak slowdown)`},{key:`rainSplashesPerSec`,min:0,max:150,step:.5,label:`splashes / sec base`},{key:`rainSplashSize`,min:.01,max:.4,step:.005,label:`splash size`},{key:`rainSplashLifetime`,min:.05,max:1,step:.01,label:`splash lifetime`},{key:`rainWetnessAmount`,min:0,max:1,step:.01,label:`wetness amount (peak)`},{key:`rainTrickleScrollSpeed`,min:0,max:4,step:.01,label:`trickle scroll speed`},{key:`rainTrickleNoiseScale`,min:.5,max:20,step:.1,label:`trickle noise scale`},{key:`clothGravity`,min:0,max:.5,step:.005,label:`cloth gravity (sag)`},{key:`clothLagGain`,min:0,max:15,step:.1,label:`cloth lag gain`},{key:`clothDamping`,min:.5,max:30,step:.1,label:`cloth damping`},{key:`clothBend`,min:0,max:3,step:.05,label:`cloth bend mul`},{key:`clothWindAmp`,min:0,max:1,step:.01,label:`cloth wind amp`},{key:`clothWindFreq`,min:.5,max:15,step:.1,label:`cloth wind freq`},{key:`clothDebugViz`,min:0,max:1,step:1,label:`cloth weight viz (0/1)`},{key:`clothRegionMinX`,min:0,max:1,step:.01,label:`region min X`},{key:`clothRegionMaxX`,min:0,max:1,step:.01,label:`region max X`},{key:`clothRegionMinY`,min:0,max:1,step:.01,label:`region min Y`},{key:`clothRegionMaxY`,min:0,max:1,step:.01,label:`region max Y`},{key:`clothRegionMinZ`,min:0,max:1,step:.01,label:`region min Z`},{key:`clothRegionMaxZ`,min:0,max:1,step:.01,label:`region max Z`},{key:`clothRegionFalloff`,min:.001,max:.3,step:.005,label:`region edge falloff`},{key:`clothRegionAxis`,min:0,max:2,step:1,label:`region axis (0=X 1=Y 2=Z)`},{key:`clothRegionInvert`,min:0,max:1,step:1,label:`region invert (0/1)`}];function t(t){let n=document.createElement(`div`);n.className=`samurai-tweak`,n.innerHTML=`
    <style>
      .samurai-tweak {
        max-height : 80vh;
        overflow-y : auto;
        position: fixed; top: 16px; right: 16px; z-index: 9999;
        background: rgba(8,8,10,0.92);
        border: 1px solid rgba(185,23,41,0.28);
        border-radius: 10px; padding: 14px 16px;
        font: 12px/1.4 ui-monospace, "JetBrains Mono", monospace;
        color: #e8e2d6; min-width: 280px;
        backdrop-filter: blur(8px);
        box-shadow: 0 8px 32px rgba(0,0,0,0.6);
      }
      .samurai-tweak h3 {
        margin: 0 0 12px; font-size: 11px; letter-spacing: 0.18em;
        color: #B91729; text-transform: uppercase;
      }
      .samurai-tweak .row {
        display: grid; grid-template-columns: 1fr 60px;
        align-items: center; gap: 8px; margin-bottom: 8px;
      }
      .samurai-tweak label {
        display: flex; flex-direction: column; gap: 2px;
      }
      .samurai-tweak label span {
        color: rgba(232,226,214,0.6); font-size: 10px;
      }
      .samurai-tweak input[type=range] {
        width: 100%; accent-color: #B91729; height: 2px;
      }
      .samurai-tweak .val {
        text-align: right; color: #e8e2d6; font-variant-numeric: tabular-nums;
      }
      .samurai-tweak button {
        margin-top: 8px; width: 100%; padding: 8px;
        background: #B91729; color: #fff; border: none; border-radius: 6px;
        font: inherit; letter-spacing: 0.18em; text-transform: uppercase;
        cursor: pointer; font-size: 11px;
      }
      .samurai-tweak button:hover { background: #d8202f; }
      .samurai-tweak .copied { background: #2a8a3a; }
    </style>
    <h3>Sword Tweak</h3>
    <div class="rows"></div>
    <button class="copy">Copy values</button>
  `,document.body.appendChild(n);let r=n.querySelector(`.rows`),i={};for(let n of e){let e=t[n.key],a=document.createElement(`div`);a.className=`row`,a.innerHTML=`
      <label>
        <span>${n.label}</span>
        <input type="range" min="${n.min}" max="${n.max}" step="${n.step}" value="${e}">
      </label>
      <span class="val">${Number(e).toFixed(2)}</span>
    `,r.appendChild(a);let o=a.querySelector(`input`),s=a.querySelector(`.val`);i[n.key]=o,o.addEventListener(`input`,()=>{let e=parseFloat(o.value);t[n.key]=e,s.textContent=e.toFixed(2)})}let a=n.querySelector(`.copy`);a.addEventListener(`click`,async()=>{let e=e=>Number(t[e]).toFixed(3),n=[`// === Paste into scene.mjs swordPose / lighting / wound anchors ===`,`// Sword resting pose:`,`swordPose.x       = ${e(`swordX`)};`,`swordPose.y       = ${e(`swordY`)};`,`swordPose.z       = ${e(`swordZ`)};`,`swordPose.rotXdeg = ${e(`swordRotXdeg`)};`,`swordPose.rotYdeg = ${e(`swordRotYdeg`)};`,`swordPose.rotZdeg = ${e(`swordRotZdeg`)};`,`swordPose.dollyY       = ${e(`swordDollyY`)};`,`swordPose.dollyZ       = ${e(`swordDollyZ`)};`,`swordPose.dollyRotZdeg = ${e(`swordDollyRotZdeg`)};`,`swordPose.dollyRotYdeg = ${e(`swordDollyRotYdeg`)};`,`// Wound anchor offset (UV space, applied after blade-tip projection):`,`anchorOffset.u = ${e(`anchorOffsetU`)};`,`anchorOffset.v = ${e(`anchorOffsetV`)};`,`renderer.toneMappingExposure = ${e(`exposure`)};`,`// AmbientLight intensity:`,`ambient.intensity = ${e(`ambient`)};`,`// DirectionalLight intensities:`,`key.intensity  = ${e(`key`)};`,`fill.intensity = ${e(`fill`)};`,`// MeshPhysicalMaterial settings:`,`roughness:          ${e(`roughness`)},`,`clearcoat:          ${e(`clearcoat`)},`,`clearcoatRoughness: ${e(`clearcoatRoughness`)},`,`envMapIntensity:    ${e(`envMapIntensity`)},`,`// Rain initial uniform values (paste into rain.mjs createRain uniforms):`,`uFallSpeed:          ${e(`rainFallSpeed`)},`,`uStreakLength:       ${e(`rainStreakLength`)},`,`uWindX:              ${e(`rainWindX`)},`,`uStreakOpacity:      ${e(`rainStreakOpacity`)},`,`uEnvReflection:      ${e(`rainEnvReflection`)},`,`uSlowMoFloor:        ${e(`rainSlowMoFloor`)},`,`uSplashesPerSec:     ${e(`rainSplashesPerSec`)},`,`uSplashSize:         ${e(`rainSplashSize`)},`,`uSplashLifetime:     ${e(`rainSplashLifetime`)},`,`uWetnessAmount:      ${e(`rainWetnessAmount`)}, // PEAK`,`uTrickleScrollSpeed: ${e(`rainTrickleScrollSpeed`)},`,`uTrickleNoiseScale:  ${e(`rainTrickleNoiseScale`)},`,`// Cloth region (paste into scene.mjs after createClothState):`,`clothState.region.minX    = ${e(`clothRegionMinX`)};`,`clothState.region.maxX    = ${e(`clothRegionMaxX`)};`,`clothState.region.minY    = ${e(`clothRegionMinY`)};`,`clothState.region.maxY    = ${e(`clothRegionMaxY`)};`,`clothState.region.minZ    = ${e(`clothRegionMinZ`)};`,`clothState.region.maxZ    = ${e(`clothRegionMaxZ`)};`,`clothState.region.falloff = ${e(`clothRegionFalloff`)};`,`clothState.region.axis    = ${Number(t.clothRegionAxis)|0};`,`clothState.region.invert  = ${Number(t.clothRegionInvert)|0};`,`clothState.region.dirty   = true;`,`// Cloth physics tunables:`,`clothState.config.gravity  = ${e(`clothGravity`)};`,`clothState.config.lagGain  = ${e(`clothLagGain`)};`,`clothState.config.damping  = ${e(`clothDamping`)};`,`clothState.config.bend     = ${e(`clothBend`)};`,`clothState.config.windAmp  = ${e(`clothWindAmp`)};`,`clothState.config.windFreq = ${e(`clothWindFreq`)};`,`clothState.config.debugViz = ${e(`clothDebugViz`)};`].join(`
`);try{await navigator.clipboard.writeText(n),a.textContent=`Copied!`,a.classList.add(`copied`),setTimeout(()=>{a.textContent=`Copy values`,a.classList.remove(`copied`)},1400)}catch{console.log(n),a.textContent=`See console`}})}export{t as mountTweakPanel};