import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const containerVariants = {
  hidden: { x: "100vw" },
  visible: {
    x: 0,
    transition: {
      delay: 0.5,
      type: "spring",
      when: "beforeChildren",
      mass: 0.2,
      damping: 8,
      staggerChildren: 0.4,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Order = ({ pizza }) => {
  const [showThanks, setshowThanks] = useState(true);

  setTimeout(() => {
    setshowThanks(false);
  }, 4000);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="container order"
    >
      <AnimatePresence>
        {showThanks && (
          <motion.h2 exit={{ y: "-100vh" }}>
            Thank you for your order :)
          </motion.h2>
        )}
      </AnimatePresence>
      <motion.p variants={childVariants}>
        You ordered a {pizza.base} pizza with:
      </motion.p>
      <motion.div variants={childVariants}>
        {pizza.toppings.map((topping) => (
          <div key={topping}>{topping}</div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Order;
