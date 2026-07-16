"use client";

import Image, { StaticImageData } from "next/image";
import { useState } from "react";

import { Dialog, DialogContent } from "@/components/ui/dialog";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  images: StaticImageData[];
};

export default function ProjectUI({ images }: Props) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState(0);

  const previousImage = () => {
    if (selectedIndex === null) return;

    setDirection(-1);

    setSelectedIndex(
      selectedIndex === 0 ? images.length - 1 : selectedIndex - 1,
    );
  };

  const nextImage = () => {
    if (selectedIndex === null) return;

    setDirection(1);

    setSelectedIndex(
      selectedIndex === images.length - 1 ? 0 : selectedIndex + 1,
    );
  };

  return (
    <>
      {/* Thumbnail */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedIndex(index)}
            className="cursor-pointer group overflow-hidden rounded-xl border bg-slate-100 shadow-sm transition-all hover:-translate-y-1 hover:border-blue-500 hover:shadow-lg"
          >
            <Image
              src={image}
              alt={`Screenshot ${index + 1}`}
              className="aspect-video w-full object-cover transition duration-300 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      {/* Preview */}
      <Dialog
        open={selectedIndex !== null}
        onOpenChange={(open) => {
          if (!open) setSelectedIndex(null);
        }}
      >
        <DialogContent className="w-[95vw] max-w-6xl border-0 bg-white p-4 sm:p-6 z-[999]">
          {selectedIndex !== null && (
            <div className="relative">
              <div className="relative overflow-hidden">
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.div
                    key={selectedIndex}
                    initial={{
                      opacity: 0,
                      scale: 0.98,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 1.02,
                    }}
                    transition={{
                      duration: 0.2,
                      ease: "easeOut",
                    }}
                    className="flex justify-center"
                  >
                    <Image
                      src={images[selectedIndex]}
                      alt=""
                      className="mx-auto max-h-[80vh] w-auto max-w-full rounded-xl object-contain"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              <button
                onClick={previousImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-3 shadow-lg cursor-pointer"
              >
                <ChevronLeft size={18} />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-3 shadow-lg cursor-pointer"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
