import { useEffect, useRef } from 'react';

interface PixelatedImageProps {
  src: string;
  pixelSize?: number;
}

export default function PixelatedImage({ src, pixelSize = 8 }: PixelatedImageProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = src;

    img.onload = () => {
      const { width, height } = canvas.getBoundingClientRect();
      canvas.width = width;
      canvas.height = height;

      // Calculate dimensions for pixelation
      const smallWidth = Math.ceil(width / pixelSize);
      const smallHeight = Math.ceil(height / pixelSize);

      // Draw image small
      ctx.imageSmoothingEnabled = false;
      ctx.drawImage(img, 0, 0, smallWidth, smallHeight);

      // Scale up to create pixelated effect
      ctx.drawImage(canvas, 0, 0, smallWidth, smallHeight, 0, 0, width, height);

      // Apply grayscale and normalize brightness
      const imageData = ctx.getImageData(0, 0, width, height);
      const data = imageData.data;

      // Target average darkness (lower = darker, 0-255 scale)
      const targetBrightness = 80;

      // Calculate current average brightness
      let totalBrightness = 0;
      let pixelCount = 0;
      for (let i = 0; i < data.length; i += 4) {
        const gray = data[i] * 0.299 + data[i + 1] * 0.587 + data[i + 2] * 0.114;
        totalBrightness += gray;
        pixelCount++;
      }
      const avgBrightness = totalBrightness / pixelCount;
      const adjustment = targetBrightness - avgBrightness;

      // Apply grayscale with brightness adjustment
      for (let i = 0; i < data.length; i += 4) {
        const gray = data[i] * 0.299 + data[i + 1] * 0.587 + data[i + 2] * 0.114;
        const adjusted = Math.max(0, Math.min(255, gray + adjustment));
        data[i] = adjusted;
        data[i + 1] = adjusted;
        data[i + 2] = adjusted;
      }

      ctx.putImageData(imageData, 0, 0);
    };
  }, [src, pixelSize]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ imageRendering: 'pixelated' }}
    />
  );
}
