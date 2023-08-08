const imgAnimation = {
  hidden: {
    clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
  },
  show: {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    transition: {
      delay: 3.5,
      duration: 1.5,
      ease: "easeInOut",
    },
  },
};
