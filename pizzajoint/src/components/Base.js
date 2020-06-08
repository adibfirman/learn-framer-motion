import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const containerVariants = {
  visible: { x: 0 },
  hidden: {
    x: "100vw",
    transition: { delay: 0.5, type: "spring" },
  },
};

const wrapperButtonVaritans = {
  visible: { x: 0 },
  hidden: {
    x: "-100vw",
    transition: { type: "spring", velocity: 130 },
  },
};

const Base = ({ addBase, pizza }) => {
  const bases = ["Classic", "Thin & Crispy", "Thick Crust"];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="base container"
    >
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map((base) => {
          let spanClass = pizza.base === base ? "active" : "";
          return (
            <motion.li
              whileHover={{ scale: 1.2, color: "#f8e112", originX: 0 }}
              transition={{ type: "spring", stiffness: 500 }}
              key={base}
              onClick={() => addBase(base)}
            >
              <span className={spanClass}>{base}</span>
            </motion.li>
          );
        })}
      </ul>

      {pizza.base && (
        <motion.div variants={wrapperButtonVaritans} className="next">
          <Link to="/toppings">
            <motion.button
              whileHover={{
                scale: 1.1,
                textShadow: "0px 0px 8px rgb(255,255,255)",
                boxShadow: "0px 0px 8px rgb(255,255,255)",
              }}
            >
              Next
            </motion.button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Base;
