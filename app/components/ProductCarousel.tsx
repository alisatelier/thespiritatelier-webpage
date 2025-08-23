"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

interface ProductCarouselProps {
  title: string;
  images: string[];
  href: string;
  blurb: string;
}

export default function ProductCarousel({
  title,
  images,
  href,
  blurb,
}: ProductCarouselProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-play functionality
  useEffect(() => {
    if (!api) return;

    // Clear any existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    // Start auto-play only when hovered and there are multiple images
    if (isHovered && images.length > 1) {
      intervalRef.current = setInterval(() => {
        api.scrollNext();
      }, 2000); // Change image every 2 seconds
    }

    // Cleanup function
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [api, isHovered, images.length]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleArrowClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <Link
      href={href}
      className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative aspect-[4/3]">
        <Carousel
          className="w-full h-full"
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <div className="relative w-full h-full aspect-[4/3]">
                  <Image
                    src={image}
                    alt={`${title} - Image ${index + 1}`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Only show navigation if there are multiple images */}
          {images.length > 1 && (
            <>
              <CarouselPrevious
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white border-none opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10"
                onClick={handleArrowClick}
              />
              <CarouselNext
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white border-none opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10"
                onClick={handleArrowClick}
              />
            </>
          )}
        </Carousel>
      </div>

      <div className="p-5 space-y-2">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-700">{blurb}</p>
        <span className="inline-flex items-center gap-1 px-5 py-1 rounded-xl bg-brandnavy text-white text-sm hover:bg-brandlightpink hover:text-brandnavy transition">
          Shop <span aria-hidden>→</span>
        </span>
      </div>
    </Link>
  );
}
