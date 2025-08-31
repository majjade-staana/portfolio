"use client";

import { useState } from "react";
import Image, { ImageProps } from "next/image";
import { ImageIcon } from "lucide-react";

interface FallbackImageProps extends Omit<ImageProps, "src"> {
  src?: string | null | undefined;
}

export default function FallbackImage({
  src,
  alt,
  ...props
}: FallbackImageProps) {
  const [error, setError] = useState(false);

  if (!src || error) {
    // Fallback (solid background with Lucide icon)
    return (
      <div
        className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-500"
        style={{ borderRadius: "inherit" }}
      >
        <ImageIcon className="w-10 h-10" />
      </div>
    );
  }

  return (
    <Image
      {...props}
      src={src}
      alt={alt}
      onError={() => setError(true)}
    />
  );
}
