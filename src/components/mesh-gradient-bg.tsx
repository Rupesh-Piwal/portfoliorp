'use client';

import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react';

export default function MeshGradientBackground() {
  return (
    <div className="absolute inset-0 -z-10 pointer-events-none">
      <ShaderGradientCanvas
        style={{ width: '100%', height: '100%' }}
        pixelDensity={1}
      >
        <ShaderGradient
          animate="on"
          type="sphere"
          shader="defaults"
          uSpeed={0.3}
          uStrength={0.3}
          uDensity={0.8}
          uFrequency={5.5}
          uAmplitude={3.2}
          positionX={-0.1}
          rotationY={130}
          rotationZ={70}
          color1="#73bfc4"
          color2="#ff810a"
          color3="#8da0ce"
          reflection={0.4}
          brightness={0.8}
          envPreset="city"
          grain="on"
          cameraZoom={15.1}
          cDistance={0.5}
        />
      </ShaderGradientCanvas>
    </div>
  );
}
