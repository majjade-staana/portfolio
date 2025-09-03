"use client"

import { motion } from "framer-motion";
import Image from "next/image";

type SkillCardProps = {
    category: {
        name: string;
        items: {
            title: string;
            icon: string;
        }[];
    };
    index: number,
    isInner?: boolean;
};

export const SkillCard = ({ category, index, isInner = false }: SkillCardProps) => {
    const { items, name } = category;
    const itemsToShow = isInner ? items : items.slice(0, 6);

    return (
        <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="rounded-2xl shadow-md p-4 md:p-6 bg-card"
        >
            <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-6">{name}</h3>
            <div className="grid grid-cols-3 gap-6">
              {itemsToShow.map((item, i) => (
                <div key={i} className="flex flex-col items-center flex-shrink-0">
                  <div className="p-3 mb-2 shadow-md rounded-full bg-icon transition-transform duration-200 hover:-translate-y-1">
                    <div className="w-6 h-6 md:w-9 md:h-9 relative">
                      <Image
                        src={item.icon}
                        alt={item.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <p className="text-sm">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
        </motion.div>
    )
}