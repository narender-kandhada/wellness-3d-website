import { motion } from "framer-motion";
import AnimatedImage from "./AnimatedImage";

const MotionSection = motion.section;
const MotionDiv = motion.div;

export default function ParallaxSection({
  id,
  kicker,
  title,
  description,
  bullets,
  align = "right",
  contentStyle,
  imageStyle,
  image,
  imageAlt,
  overlays = [],
  mobileSafe = false,
}) {
  const imageFirst = align === "left";

  return (
    <MotionSection id={id} className="relative min-h-[88vh] py-12 md:py-20">
      <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12">
        <MotionDiv style={contentStyle} className={imageFirst ? "md:order-2" : ""}>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#618070]">{kicker}</p>
          <h3 className="mt-3 text-3xl font-semibold tracking-tight text-[#1f2c23] md:text-5xl">{title}</h3>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-[#4f6758] md:text-lg">{description}</p>

          <ul className="mt-6 space-y-2.5">
            {bullets.map((bullet) => (
              <li key={bullet} className="text-sm text-[#40604d] md:text-[0.96rem]">
                • {bullet}
              </li>
            ))}
          </ul>
        </MotionDiv>

        <MotionDiv style={imageStyle} className={`relative flex min-h-[420px] items-center justify-center ${imageFirst ? "md:order-1" : ""}`}>
          <div className="absolute h-[260px] w-[260px] rounded-full bg-[#badfc7]/45 blur-3xl" />
          <AnimatedImage
            src={image}
            alt={imageAlt}
            disabled={mobileSafe}
            wrapperClassName="relative z-20 w-[250px] rounded-[2rem] border border-white/65 bg-white/35 p-2.5 shadow-[0_28px_75px_-38px_rgba(20,40,28,0.9)] backdrop-blur-sm md:w-[290px]"
            imageClassName="w-full rounded-[1.55rem]"
            floating
            floatingDistance={9}
          />

          {overlays.map((overlay) => (
            <AnimatedImage
              key={overlay.key}
              src={overlay.src}
              alt={overlay.alt}
              style={overlay.style}
              disabled={mobileSafe}
              wrapperClassName={overlay.wrapperClassName}
              imageClassName={overlay.imageClassName}
              floating
              floatingDistance={overlay.floatingDistance ?? 7}
              floatingDelay={overlay.floatingDelay ?? 0.2}
            />
          ))}
        </MotionDiv>
      </div>
    </MotionSection>
  );
}