import React from 'react';
import { motion } from 'framer-motion';

const stats = [
    { label: "Familles Aidées", value: 500, suffix: "+", color: "text-brand-blue" },
    { label: "Centres Audités", value: 35, suffix: "", color: "text-brand-red" },
    { label: "Kits Solaires", value: "1.2k", suffix: "", color: "text-brand-yellow" },
];


const ImpactCounters = () => {
    return (
        <section className="py-20 bg-brand-navy text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className={`text-6xl font-black mb-2 ${stat.color}`}>
                                {stat.value}{stat.suffix}
                            </div>
                            <div className="text-xl text-gray-400 font-medium uppercase tracking-widest">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ImpactCounters;
