import { cn } from "@/lib/utils";
import Image from "next/image";
import { HTMLAttributes } from "react";

interface SockProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
}

const Socks = ({ imgSrc, className, ...props }: SockProps) => {
  return (
    <div
      className={cn(
        "relative pointer-events-none z-50 overflow-hidden",
        className
      )}
      {...props}
    >
      <Image
        src="/socks.png"
        className="pointer-events-none z-50 select-none"
        alt="sock image"
        width={800}
        height={800}
      />

      <div className="absolute -z-10 inset-0">
        <Image
          className="object-cover min-w-full min-h-full pointer-events-none"
          src={imgSrc}
          alt="overlaying sock image"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default Socks;
