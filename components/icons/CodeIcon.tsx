"use client";

import { useEffect, useRef } from "react";
import { Player } from "@lordicon/react";

import ICON from "@/public/coding-icon.json";

export interface CodeIconProps {
  size: number;
}

export default function CodeIcon({ size }: CodeIconProps) {
  const playerRef = useRef<Player>(null);

  useEffect(() => {
    playerRef.current?.playFromBeginning();
  }, []);

  return (
    <Player
      size={size}
      onComplete={() => playerRef.current?.playFromBeginning()}
      ref={playerRef}
      icon={ICON}
    />
  );
}
