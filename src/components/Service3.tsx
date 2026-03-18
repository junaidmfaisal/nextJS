'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Service3() {
    return (
        <section className="w-full px-4 sm:px-8 md:px-16 py-8 md:py-12 space-y-12 md:space-y-20">
            <motion.h2
                className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black text-center mb-6"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                RESIDENTIAL & FLAT INTERIORS
            </motion.h2>

            {/* Section 1 - Modular Kitchen */}
            <div className="relative rounded-xl overflow-hidden shadow-lg">
                <div className="absolute inset-0 bg-[url('/kitchen2.jpg')] bg-cover bg-center bg-no-repeat"></div>
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center px-4 sm:px-6 lg:px-12 py-10">
                    {/* Mobile: Image first */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                        className="flex justify-center order-1 md:order-1"
                    >
                        <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden shadow-lg">
                            <Image
                                src="/kitchen.jpg"
                                alt="Modular Kitchen"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </motion.div>

                    {/* Mobile: Content second */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                        className="text-center md:text-left order-2 md:order-2"
                    >
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-4">
                            MODULAR KITCHEN
                        </h3>
                        <Link href={'/contact'}>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-gradient-to-r from-[#004e66] via-[#00787a] to-[#00a896] text-white px-6 py-2 font-medium mb-6"
                            >
                                Enquire Now
                            </motion.button>
                        </Link>
                    </motion.div>

                    {/* Mobile: Paragraph third */}
                    <motion.p
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                        className="text-white leading-relaxed text-base sm:text-lg w-full md:w-full col-span-1 md:col-span-2 text-justify order-3 md:order-3 bg-black/40 p-4 rounded-lg backdrop-blur-sm"
                    >
                        We at Homora Interiors believe that the key to a family&apos;s health depends on the
                        environment in which the food is prepared at their home. In this context,
                        the kitchen&apos;s design and hygiene are of prime importance. Homora Interiors is
                        able to design the most sensible and convenient kitchen interior design
                        solutions for our clients. We keep the little intricacies of hygiene in mind
                        like the use of sunlight to place the wash area in order to prevent
                        bacterial growth in these places. Also, things like the placement of the
                        hob, exhaust, ease of cooking and height of kitchen counters, keeping the
                        kitchen free of fungus, insects, and pests, and storage cabinets are also
                        key parameters that we consider while designing a kitchen. Our team of
                        experienced modular kitchen designers is able to design kitchens with these
                        solutions in mind for our clients. Not only do our kitchens look good, they
                        also provide practical ease of use and hygiene.In terms of look and
                        appearance, we pay a lot of attention to the colour themes and materials
                        used. Laminate finish, accurly finish, lacquer glass, PU finish, and linear
                        finish are some of the various material finishes that we use in our designs.
                        Marine Plywood, Multi-Wood, MDF materials ensure that the cabinets and
                        shelves ensure a long life is free from rust. Such hygienic and modern
                        kitchens are made possible by Homora Interiors. We use accessories and fittings
                        from Hettich which is made from superior German Technology.
                    </motion.p>
                </div>
            </div>

            {/* Section 2 - Bedroom Works - FIXED */}
            <div className="relative rounded-xl overflow-hidden shadow-lg">
                <div className="absolute inset-0 bg-[url('/bedroom.2jpg.avif')] bg-cover bg-center bg-no-repeat"></div>
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center px-4 sm:px-6 lg:px-12 py-10">
                    {/* Mobile: Image first - Changed order for mobile */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                        className="flex justify-center order-1 md:order-2"
                    >
                        <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden shadow-lg">
                            <Image
                                src="/bedroom.jpg"
                                alt="Bedroom Works"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </motion.div>

                    {/* Mobile: Content second - Changed order for mobile */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                        className="text-center md:text-right order-2 md:order-1"
                    >
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-4">
                            BEDROOM WORKS
                        </h3>
                        <Link href={'/contact'}>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-gradient-to-r from-[#004e66] via-[#00787a] to-[#00a896] text-white px-6 py-2 font-medium mb-6"
                            >
                                Enquire Now
                            </motion.button>
                        </Link>
                    </motion.div>

                    {/* Mobile: Paragraph third */}
                    <motion.p
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                        className="text-white leading-relaxed text-base sm:text-lg w-full md:w-full col-span-1 md:col-span-2 text-justify order-3 md:order-3 bg-black/40 p-4 rounded-lg backdrop-blur-sm"
                    >
                        People spend a lot of memorable and relaxing moments in the bedroom.
                        It is a place of rest and should provide the utmost comfort. We at
                        Homora Interiors believe that the materials, design and space management
                        should be of the highest quality. The need to have an interior design
                        team that can incorporate all these features is of prime importance.
                        Well-designed spaces for wardrobes, personal makeup spaces,
                        comfortable beds, and storage tables are some of the many interior
                        design furnishing solutions we provide our clients. In addition to
                        this, we also specialize in ceiling lighting solutions for our
                        customers with our experienced team of lighting technicians and
                        designers.
                    </motion.p>
                </div>
            </div>

            {/* Section 3 - Kids Bedroom */}
            <div className="relative rounded-xl overflow-hidden shadow-lg">
                <div className="absolute inset-0 bg-[url('/kid.jpg')] bg-cover bg-center "></div>
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center px-4 sm:px-6 lg:px-12 py-8 md:py-10">
                    {/* Mobile: Image first */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                        className="flex justify-center order-1 md:order-1"
                    >
                        <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden shadow-lg">
                            <Image
                                src="/kid2.jpg"
                                alt="KIDS BEDROOM"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </motion.div>

                    {/* Mobile: Content second */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                        className="text-center md:text-left order-2 md:order-2"
                    >
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-4">
                            KIDS BEDROOM
                        </h3>
                        <Link href={'/contact'}>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-gradient-to-r from-[#004e66] via-[#00787a] to-[#00a896] text-white px-6 py-2 font-medium mb-6"
                            >
                                Enquire Now
                            </motion.button>
                        </Link>
                    </motion.div>

                    {/* Mobile: Paragraph third */}
                    <motion.p
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                        className="text-white leading-relaxed text-base sm:text-lg w-full md:w-full col-span-1 md:col-span-2 text-justify order-3 md:order-3 bg-black/40 p-4 rounded-lg backdrop-blur-sm"
                    >
                        The children are the heart and soul of the house. The need for space that maximizes their growth potential is important. As parents, our customers seek the best living space designs solutions for their children. We are able to design the study areas, wallpapers, lighting, storage, wardrobes, and beds to suit their growing needs. Our design solutions offer the best value for money for those looking to design a beautiful living space for their children.
                    </motion.p>
                </div>
            </div>

            {/* Section 4 - Living Room - FIXED */}
            <div className="relative rounded-xl overflow-hidden shadow-lg">
                <div className="absolute inset-0 bg-[url('/living.jpg')] bg-cover bg-center bg-no-repeat"></div>
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center px-4 sm:px-6 lg:px-12 py-10">
                    {/* Mobile: Image first - Changed order for mobile */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                        className="flex justify-center order-1 md:order-2"
                    >
                        <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden shadow-lg">
                            <Image
                                src="/living.jpg"
                                alt="LIVING ROOM"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </motion.div>

                    {/* Mobile: Content second - Changed order for mobile */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                        className="text-center md:text-right order-2 md:order-1"
                    >
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-4">
                            LIVING ROOM
                        </h3>
                        <Link href={'/contact'}>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-gradient-to-r from-[#004e66] via-[#00787a] to-[#00a896] text-white px-6 py-2 font-medium mb-6"
                            >
                                Enquire Now
                            </motion.button>
                        </Link>
                    </motion.div>

                    {/* Mobile: Paragraph third */}
                    <motion.p
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                        className="text-white leading-relaxed text-base sm:text-lg w-full md:w-full col-span-1 md:col-span-2 text-justify order-3 md:order-3 bg-black/40 p-4 rounded-lg backdrop-blur-sm"
                    >
                        Every guest who visits a house is received in the living room. It is a room that gives character to a house and its residents. It sets the tone for creating a good first impression. The arrangement of space in the living room is of importance rather than the size of the living room. In addition to this the furniture, the lighting, and the colours are of importance too. We at Homora Interiors have the best professional home and flat interior design team in South India on hand to handle your living room design requirements with regards to a host of different needs like TV Unit, sofa set, center table, lighting, display out and partitioning.
                    </motion.p>
                </div>
            </div>

            {/* Section 5 - Dining Room */}
            <div className="relative rounded-xl overflow-hidden shadow-lg">
                <div className="absolute inset-0 bg-[url('/dining.jpg')] bg-cover bg-center bg-no-repeat"></div>
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center px-4 sm:px-6 lg:px-12 py-8 md:py-10">
                    {/* Mobile: Image first */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                        className="flex justify-center order-1 md:order-1"
                    >
                        <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden shadow-lg">
                            <Image
                                src="/dining.jpg"
                                alt="DINING ROOM"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </motion.div>

                    {/* Mobile: Content second */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                        className="text-center md:text-left order-2 md:order-2"
                    >
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-4">
                            DINING ROOM
                        </h3>
                        <Link href={'/contact'}>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-gradient-to-r from-[#004e66] via-[#00787a] to-[#00a896] text-white px-6 py-2 font-medium mb-6"
                            >
                                Enquire Now
                            </motion.button>
                        </Link>
                    </motion.div>

                    {/* Mobile: Paragraph third */}
                    <motion.p
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                        className="text-white leading-relaxed text-base sm:text-lg w-full md:w-full col-span-1 md:col-span-2 text-justify order-3 md:order-3 bg-black/40 p-4 rounded-lg backdrop-blur-sm"
                    >
                        Another room which should define a clean and hygienic environment is the dining room. It is the room where you congregate to dine with family and friends. The dining set, crockery, shelves, and wash area must be aesthetically designed to maximize the space and hygiene requirements in addition to the comfort of dining. Matters like the distance of the dining area to the wash area, the choice of dining table and chairs, lighting, colours used are some of the important aspects we at Homora Interiors pay close attention when designing such a space. The result of such an exercise is a healthy and beautiful dining space.
                    </motion.p>
                </div>
            </div>
        </section>
    );
}