// Loader
let easingNormal = [0.175, 0.85, 0.42, 0.96];
let easingCool = [0.6, 0.01, -0.05, 0.9];
let easingSuper = [0.43, 0.13, 0.23, 0.96];
let easingMenu = [0.6, 0.01, -0.05, 0.9];


export const pageWrapperBackground = {
  closed: {
    opacity: 0,
    transition: {
      duration: 0.2,
      delay: 0.8,
    },
  },
  open: {
    opacity: 1,
    transition: {
      duration: 0.4,
      // when: "beforeChildren",
      // delay: 2,
    },
  },
}

export const navFake = {
  initial: {
    opacity: 0,
    transition: {
      duration: 0.6,
      // delay: 
    }
  },
  animate: { 
    opacity: 1,
    transition: {
      duration: 0.6,
      delay: 0.6,
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.6,
      delay: 0.2,
    }
  },
}



export const loaderAnimation = {
  initial: {},
  animate: {
    scaleX: 5,
    transition: {
      yoyo: Infinity,
      duration: 0.5,
      ease: "easeInOut"
    }
  },
  exit: {
    scaleX: 0,
  }
}


export const stripeBottom = {
  initial: {
    scaleY: 1,
    originY: 1
  },
  animate: {
    scaleY: 0,
    originY: 1,
    transition: {
      delay: 0.3,
      duration: 1,
      ease: easingNormal
    }
  },
  exit: {
    scaleY: 2,
    transition: {
      duration: 1,
      ease: easingNormal
    },
    transitionEnd: { display: "none" }
  }
}

// Home Headline (Hello There!)
export const homeContainerVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.5
    }
  },
}
export const homeLetterVariants = {
  initial: {
    y: 100,
    transition: {
      type: "spring",
      damping: 16,
      stiffness: 150
    }
  },
  animate: {
    y: 0,
    transition: {
      type: "spring",
      damping: 16,
      stiffness: 150
    }
  }
};

// Home Text
export const homeTextContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.7
    }
  },
}
export const homeTextContent = {
  initial: {
    y: 50,
    opacity: 0,
    transition: {
      type: "spring",
      damping: 16,
      stiffness: 130
    }
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 16,
      stiffness: 130,
      velocity: 0.00001
    }
  }
};

// Home Social
export const socialVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 1.4,
      delay: 1
    }
  },
  exit: {
    opacity: 0
  },
}

//Menu
export const menuAnimationLeft = {
  closed: { 
    x: 0,
    y: 0,
    rotate: 0,
    transition: {
      duration: 0.7,
      ease: easingMenu,
    },
  },
  open: {
    x: -4,
    y: 6,
    rotate: 135,
    transition: {
      duration: 0.7,
      ease: easingMenu,
    },
  },
}
export const menuAnimationRight = {
  closed: { 
    x: 4,
    y: 0,
    scaleX: 0.75,
    rotate: 0,
    transition: {
      duration: 0.7,
      ease: easingMenu,
    },
  },
  open: {
    x: -4,
    y: -6,
    scaleX: 1,
    rotate: 45,
    transition: {
      duration: 0.7,
      ease: easingMenu,
    },
  },
}

//imageDetail

export const workDetailContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.04
    }
  },
  exit: {
    transition: {
      staggerChildren: 0.05
    }
  }
}
export const workDetailChildren = {
  initial: {
    y: 30,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easingCool
    }
  },
  exit: {
    y: -30,
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: easingCool
    }

  }
};



// Work Navigation
export const workDetailNavigation = {
  initial: { 
    // y: 0,
    opacity: 0
  },
  animate: {
    // y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      delay: 1
    }
  },
  exit: {
    // y: 0,
    opacity: 0,
    transition: {
      duration: 0.4,
      delay: 0
    }
  },
}


// Grid
export const gridContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 1
    }
  },
  exit: {
    transition: {
      staggerChildren: 0.01
    }
  }
}
export const gridItem = {
  initial: {
    y: 30,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      delay: 0.6,
      ease: easingCool
      // ease: [0.48, 0.15, 0.25, 0.96]
    }
  },
  exit: {
    y: -30,
    opacity: 0,
    transition: {
      duration: 1,
      ease: easingCool
      // ease: [0.48, 0.15, 0.25, 0.96]
    }
  }
};



// About
export const aboutVariants = {
  initial: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 0.8,
      ease: easingCool
    }
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easingCool
    }
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.8,
      ease: easingCool
    }
  },
}

