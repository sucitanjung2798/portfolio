"use client";

import Image, { StaticImageData } from "next/image";
import { useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from "@/components/ui/carousel";

import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

type Props = {
  images: StaticImageData[];
};

export default function ProjectCarousel({ images }: Props) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  return (
    <div className="space-y-5">

      <Carousel
        setApi={(carousel) => {
          setApi(carousel);

          if (!carousel) return;

          setCurrent(carousel.selectedScrollSnap());

          carousel.on("select", () => {
            setCurrent(carousel.selectedScrollSnap());
          });
        }}
      >
        <CarouselContent>

          {images.map((image, index) => (

            <CarouselItem key={index}>

              <div className="overflow-hidden rounded-2xl border bg-slate-100">

                <Image
                  src={image}
                  alt=""
                  className="w-full object-contain"
                />

              </div>

            </CarouselItem>

          ))}

        </CarouselContent>

      </Carousel>

      {/* Bottom */}

      <div className="flex items-center justify-between">

        <button
          onClick={() => api?.scrollPrev()}
          className="rounded-full border p-2 transition hover:bg-slate-100"
        >
          <ChevronLeft size={18} />
        </button>

        {/* Indicator */}

        <div className="flex items-center gap-2">

          {images.map((_, index) => (

            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`h-2 rounded-full transition-all duration-300

                ${
                  current === index
                    ? "w-8 bg-blue-600"
                    : "w-2 bg-slate-300"
                }

              `}
            />

          ))}

        </div>

        <button
          onClick={() => api?.scrollNext()}
          className="rounded-full border p-2 transition hover:bg-slate-100"
        >
          <ChevronRight size={18} />
        </button>

      </div>

      {/* Thumbnail */}

      <div className="flex gap-3 overflow-x-auto pb-2">

        {images.map((image, index) => (

          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`overflow-hidden rounded-xl border-2 transition

              ${
                current === index
                  ? "border-blue-500"
                  : "border-transparent"
              }
            `}
          >

            <Image
              src={image}
              alt=""
              className="h-20 w-36 object-cover"
            />

          </button>

        ))}

      </div>

    </div>
  );
}