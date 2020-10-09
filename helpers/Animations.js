// Loader
// let easingNormal = [0.175, 0.85, 0.42, 0.96];
let easingCool = [0.6, 0.01, -0.05, 0.9];
// let easingSuper = [0.43, 0.13, 0.23, 0.96];
// let easingMenu = [0.6, 0.01, -0.05, 0.9];

let loquitoYoutube = [0.43, 0.13, 0.23, 0.96];



export const imageHover = {
  rest: {
    opacity: 1, 
    ease: "easeOut", 
    duration: 0.2, 
    type: "tween" 
  },
  hover: {
    opacity: 0.7,
    transition: {
      duration: 0.2,
      type: "tween",
      ease: "easeIn"
    }
  }
};

export const titleHover = {
  rest: {
    y: 6,
    opacity: 0, 
    ease: "easeOut", 
    duration: 0.2, 
    type: "tween" 
  },
  hover: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.2,
      type: "tween",
      ease: "easeIn"
    }
  }
};


export const simpleAnimation = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 2,
      ease: easingCool, 
      delay: 1
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 2,
      ease: easingCool
    }
  },
};


export const reallySimple = {
  initial: {
    opacity: 0,
    transition: {
      duration: 0.4,
    }
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.4,
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.4,
    }
  },
};

export const simpleList = {
  initial: {
    opacity: 0,
    transition: {
      duration: 0.4
    }
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.4,
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.4,
    }
  },
};



// Work Navigation
export const workDetailClose = {
  initial: { 
    // y: 0,
    scale: 0
  },
  animate: {
    // y: 0,
    scale: 1,
    transition: {
      duration: 0.1,
      delay: 0.6
    }
  },
  exit: {
    // y: 0,
    scale: 0,
    transition: {
      duration: 0.1,
      delay: 0
    }
  },
}

export const workDetailNavigation = {
  initial: { 
    // y: 0,
    opacity: 0
  },
  animate: {
    // y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      delay: 0.6
    }
  },
  exit: {
    // y: 0,
    opacity: 0,
    transition: {
      duration: 0.1,
      delay: 0
    }
  },
}


export const textContainerWorks = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.6
    }
  },
}
export const textComponentsWorks = {
  initial: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 0.8,
      type: "tween",
      ease: loquitoYoutube
    }
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      type: "tween",
      ease: loquitoYoutube
    }
  },
  exit: {
    opacity: 0,
    y: 0,
    transition: {
      duration: 3,
      type: "tween",
      ease: loquitoYoutube
    }
  },
};


export const imagesWork = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: { 
      duration: 1,
      delay: 0.6
    }
  },
  exit: {
    opacity: 0,
    transition: { 
      duration: 0.4
    }
  }
};

export const overlayWorks = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: { 
      duration: 0.6,
      delay: 0.1
    }
  },
  exit: {
    opacity: 0,
    transition: { 
      duration: 1
    }
  }
};
