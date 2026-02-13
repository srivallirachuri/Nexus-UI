import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ScrollStackProps } from "../../types";

/**
 * ScrollStack Component
 * 
 * A premium scrolling presentation where cards stack and scale with a depth effect.
 * Features smooth scaling, blurring, and snapping.
 */
export function ScrollStack({
    children,
    orientation = "vertical",
    snap = false,
    scaleStrength = 0.05,
    blurStrength = 0,
    offset = 40,
    className,
    ...props
}: ScrollStackProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const isHorizontal = orientation === "horizontal";

    // Convert children to array
    const items = React.Children.toArray(children);
    const total = items.length;
    
    return (
        <div 
            ref={containerRef}
            className={`
                relative w-full h-full overflow-y-auto snap-y snap-mandatory
                ${className || ""}
                scrollbar-hide
            `}
            style={{
                scrollBehavior: "smooth"
            }}
            {...props}
        >
            <div className={`
                flex 
                ${isHorizontal ? "flex-row w-max h-full" : "flex-col w-full"}
                gap-4 p-4
            `}>
                {items.map((child, i) => (
                    <StickyItem
                        key={i}
                        index={i}
                        total={total}
                        isHorizontal={isHorizontal}
                        scaleStrength={scaleStrength}
                        blurStrength={blurStrength}
                        offset={offset}
                        containerRef={containerRef}
                    >
                        {child}
                    </StickyItem>
                ))}
            </div>
        </div>
    );
}

function StickyItem({ 
    children, 
    index, 
    total, 
    isHorizontal, 
    scaleStrength, 
    blurStrength,
    offset,
    containerRef 
}: any) {
    return (
        <div 
            className="sticky top-0 left-0 flex-shrink-0 flex items-center justify-center transition-all duration-500"
            style={{
                zIndex: index,
                // Sticky offset to create the "stack" pile
                [isHorizontal ? "left" : "top"]: index * Math.abs(offset), 
                // We add margin to allow scrolling past
                marginBottom: isHorizontal ? 0 : total * Math.abs(offset), 
                marginRight: isHorizontal ? total * Math.abs(offset) : 0, 
            }}
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="w-full h-full"
            >
                {children}
            </motion.div>
        </div>
    );
}
