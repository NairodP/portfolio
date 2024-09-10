export const perspective: {
  initial: { scale: number; y: number };
  enter: { scale: number; y: number };
  exit: {
    scale: number;
    y: number;
    opacity: number;
    transition: { duration: number; ease: number[] };
  };
} = {
  initial: {
    scale: 1,
    y: 0,
  },
  enter: {
    scale: 1,
    y: 0,
  },
  exit: {
    scale: 0.9,
    y: -150,
    opacity: 0.5,
    transition: {
      duration: 1.2,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

export const slide: {
  initial: { y: string };
  enter: { y: string };
  exit: {
    y: number;
    transition: { duration: number; ease: number[] };
  };
} = {
  initial: {
    y: "100vh",
  },
  enter: {
    y: "100vh",
  },
  exit: {
    y: 90,
    transition: {
      duration: 1,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

export const opacity: {
  initial: { opacity: number };
  enter: {
    opacity: number;
    transition: { duration: number };
  };
  exit: { opacity: number };
} = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 1,
  },
};