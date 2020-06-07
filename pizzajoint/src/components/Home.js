import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.3, duration: 2 }}
      className="home container"
    >
      <h2>Welcome to Pizza Joint</h2>
      <Link to="/base">
        <button>Create Your Pizza</button>
      </Link>
    </motion.div>
  );
};

export default Home;