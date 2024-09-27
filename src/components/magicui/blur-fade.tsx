// "use client";

// import { AnimatePresence, motion, useInView, Variants } from "framer-motion";
// import { useRef } from "react";

// type MarginType =
//   | string
//   | number
//   | {
//       top?: number | string;
//       right?: number | string;
//       bottom?: number | string;
//       left?: number | string;
//     };

// interface BlurFadeProps {
//   children: React.ReactNode;
//   className?: string;
//   variant?: {
//     hidden: { y: number };
//     visible: { y: number };
//   };
//   duration?: number;
//   delay?: number;
//   yOffset?: number;
//   inView?: boolean;
//   inViewMargin?: string;
//   blur?: string;
// }

// const parseMargin = (margin: string): MarginType => {
//   // If the margin is a single number with 'px', convert it to a number
//   if (margin.endsWith("px")) {
//     return parseInt(margin, 10);
//   }
//   // If it's a string of four space-separated values, return as is
//   if (margin.split(" ").length === 4) {
//     return margin;
//   }
//   // Otherwise, return as a single string
//   return margin;
// };

// const BlurFade = ({
//   children,
//   className,
//   variant,
//   duration = 0.4,
//   delay = 0,
//   yOffset = 6,
//   inView = false,
//   inViewMargin = "-50px",
//   blur = "6px",
// }: BlurFadeProps) => {
//   const ref = useRef(null);
//   const inViewResult = useInView(ref, {
//     once: true,
//     margin: parseMargin(inViewMargin),
//   });
//   const isInView = !inView || inViewResult;
//   const defaultVariants: Variants = {
//     hidden: { y: yOffset, opacity: 0, filter: `blur(${blur})` },
//     visible: { y: -yOffset, opacity: 1, filter: `blur(0px)` },
//   };
//   const combinedVariants = variant || defaultVariants;

//   return (
//     <AnimatePresence>
//       <motion.div
//         ref={ref}
//         initial="hidden"
//         animate={isInView ? "visible" : "hidden"}
//         exit="hidden"
//         variants={combinedVariants}
//         transition={{
//           delay: 0.04 + delay,
//           duration,
//           ease: "easeOut",
//         }}
//         className={className}
//       >
//         {children}
//       </motion.div>
//     </AnimatePresence>
//   );
// };

// export default BlurFade;
