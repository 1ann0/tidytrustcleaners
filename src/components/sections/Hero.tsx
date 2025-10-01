import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useBookingStore } from "@/stores/booking-store";
export const Hero = () => {
  const openModal = useBookingStore((state) => state.openModal);
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center text-white">
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop"
          alt="Clean and welcoming home"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative z-20 text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4"
          style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}
        >
          Your Home, Impeccably Clean.
          <br />
          Your Trust, Perfectly Kept.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200 mb-8"
          style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}
        >
          Reliable, professional home and office cleaning services in Kenya. Get your free, instant quote in 60 seconds.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            onClick={openModal}
            size="lg"
            className="bg-primary-blue hover:bg-primary-blue/90 text-white rounded-lg px-10 py-7 text-lg font-semibold"
          >
            Get Your Free Quote
          </Button>
        </motion.div>
      </div>
    </section>
  );
};