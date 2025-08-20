'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Service3() {
    return (
        <section className="w-full px-4 sm:px-8 md:px-16 py-12 space-y-20">
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
            <div
                className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-[url('/dining.png')] bg-cover bg-center px-4 sm:px-6 lg:px-12 py-10"
            >
                {/* Image */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                    className="flex justify-center"
                >
                    <Image
                        src="/img1 (1).jpeg"
                        alt="Modular Kitchen"
                        width={900}
                        height={700}
                        className="object-cover w-full md:w-[80rem] h-auto "
                    />
                </motion.div>

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                    className="text-center md:text-left"
                >
                    <h3 className="text-xl sm:text-4xl font-semibold text-black mb-4">
                        MODULAR KITCHEN
                    </h3>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gradient-to-r from-[#004e66] via-[#00787a] to-[#00a896] text-white px-6 py-2  font-medium mb-6"
                    >
                        Enquire Now
                    </motion.button>
                </motion.div>

                {/* Paragraph */}
                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                    className="text-gray-700 leading-relaxed text-sm sm:text-base w-full md:w-[80rem] col-span-1 md:col-span-2 text-justify"
                >
                    We at Homora Interiors believe that the key to a family’s health depends on the
                    environment in which the food is prepared at their home. In this context,
                    the kitchen’s design and hygiene are of prime importance. Homora Interiors is
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

            {/* Section 2 - Bedroom Works */}
            <div className="w-full px-4  py-12 bg-[url('/bedroom-bg.png')] bg-cover bg-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    {/* Left Side (Heading + Button) */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                        className="text-center md:text-right"
                    >
                        <h3 className="text-2xl sm:text-4xl font-semibold text-black mb-4">
                            BEDROOM WORKS
                        </h3>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-gradient-to-r from-[#004e66] via-[#00787a] to-[#00a896] text-white px-6 py-2  font-medium"
                        >
                            Enquire Now
                        </motion.button>
                    </motion.div>

                    {/* Right Side (Image) */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                        className="flex justify-center"
                    >
                        <Image
                            src="/img1 (2).jpeg"
                            alt="Bedroom Works"
                            width={800}
                            height={600}
                            className=" object-cover"
                        />
                    </motion.div>
                </div>

                {/* Next Row (Paragraph with animation) */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                    className="mt-10 max-w-4xl  text-center md:text-left"
                >
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base md:w-[80rem]">
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
                    </p>
                </motion.div>
            </div>

            {/* Section 3 -  */}
            <div
                className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-[url('/kidsroom-bg')] bg-cover bg-center px-4 sm:px-6 lg:px-12 py-10"
            >
                {/* Image */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                    className="flex justify-center"
                >
                    <Image
                        src="/img1 (1).jpeg"
                        alt="KIDS BEDROOM"
                        width={900}
                        height={700}
                        className="object-cover w-full md:w-[80rem] h-auto "
                    />
                </motion.div>

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                    className="text-center md:text-left"
                >
                    <h3 className="text-xl sm:text-4xl font-semibold text-black mb-4">
                        KIDS BEDROOM
                    </h3>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gradient-to-r from-[#004e66] via-[#00787a] to-[#00a896] text-white px-6 py-2  font-medium mb-6"
                    >
                        Enquire Now
                    </motion.button>
                </motion.div>

                {/* Paragraph */}
                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                    className="text-gray-700 leading-relaxed text-sm sm:text-base w-full md:w-[80rem] col-span-1 md:col-span-2 text-justify"
                >
                    The children are the heart and soul of the house. The need for space that maximizes their growth potential is important. As parents, our customers seek the best living space designs solutions for their children. We are able to design the study areas, wallpapers, lighting, storage, wardrobes, and beds to suit their growing needs. Our design solutions offer the best value for money for those looking to design a beautiful living space for their children.
                </motion.p>
            </div>


            {/* Section 4*/}
            <div className="w-full px-4  py-12 bg-[url('/living-bg.png')] bg-cover bg-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    {/* Left Side (Heading + Button) */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                        className="text-center md:text-right"
                    >
                        <h3 className="text-2xl sm:text-4xl font-semibold text-black mb-4">
                            LIVING ROOM
                        </h3>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-gradient-to-r from-[#004e66] via-[#00787a] to-[#00a896] text-white px-6 py-2  font-medium"
                        >
                            Enquire Now
                        </motion.button>
                    </motion.div>

                    {/* Right Side (Image) */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                        className="flex justify-center"
                    >
                        <Image
                            src="/img1 (2).jpeg"
                            alt="LIVING ROOM"
                            width={800}
                            height={600}
                            className=" object-cover"
                        />
                    </motion.div>
                </div>

                {/* Next Row (Paragraph with animation) */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                    className="mt-10 max-w-4xl  text-center md:text-left"
                >
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base md:w-[80rem]">
                        Every guest who visits a house is received in the living room. It is a room that gives character to a house and its residents. It sets the tone for creating a good first impression. The arrangement of space in the living room is of importance rather than the size of the living room. In addition to this the furniture, the lighting, and the colours are of importance too. We at Homora Interiors have the best professional home and flat interior design team in South India on hand to handle your living room design requirements with regards to a host of different needs like TV Unit, sofa set, center table, lighting, display out and partitioning.
                    </p>
                </motion.div>
            </div>

            {/* Section 5 -  */}
            <div
                className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-[url('/modular-kitchen-bg.png')] bg-cover bg-center px-4 sm:px-6 lg:px-12 py-10"
            >
                {/* Image */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                    className="flex justify-center"
                >
                    <Image
                        src="/img1 (1).jpeg"
                        alt="KIDS BEDROOM"
                        width={900}
                        height={700}
                        className="object-cover w-full md:w-[80rem] h-auto "
                    />
                </motion.div>

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                    className="text-center md:text-left"
                >
                    <h3 className="text-xl sm:text-4xl font-semibold text-black mb-4">
                        DINING ROOM
                    </h3>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gradient-to-r from-[#004e66] via-[#00787a] to-[#00a896] text-white px-6 py-2  font-medium mb-6"
                    >
                        Enquire Now
                    </motion.button>
                </motion.div>

                {/* Paragraph */}
                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                    className="text-gray-700 leading-relaxed text-sm sm:text-base w-full md:w-[80rem] col-span-1 md:col-span-2 text-justify"
                >
                    Another room which should define a clean and hygienic environment is the ding room. It is the room where you congregate to dine with family and friends. The dining set, crockery, shelves, and wash area must be aesthetically designed to maximize the space and hygiene requirements in addition to the comfort of dining. Matters like the distance of the dining area to the wash area, the choice of dining table and chairs, lighting, colours used are some of the important aspects we at Homora Interiors pay close attention when designing such a space. The result of such an exercise is a healthy and beautiful dining space.
                </motion.p>
            </div>
        </section>
    );
}
