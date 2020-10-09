// Loader
// let easingNormal = [0.175, 0.85, 0.42, 0.96];
let easingCool = [0.6, 0.01, -0.05, 0.9];
// let easingSuper = [0.43, 0.13, 0.23, 0.96];
// let easingMenu = [0.6, 0.01, -0.05, 0.9];

let loquitoYoutube = [0.43, 0.13, 0.23, 0.96];

export const defaultAnimation = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  },
  exit: {},
}
export const reallySimple = {
  initial: {
    opacity: 0,
    y: 6,
    transition: {
      duration: 0.4,
    }
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
    }
  },
  exit: {
    opacity: 0,
    y: -6,
    transition: {
      duration: 0.4,
    }
  },
};

export const secondarySimple = {
  initial: {
    opacity: 0,
    y: 6,
    transition: {
      duration: 0.4,
    }
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.4,
      duration: 0.4,
    }
  },
  exit: {
    opacity: 0,
    y: -6,
    transition: {
      duration: 0.4,
    }
  },
};

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
      duration: 0.4,
      delay: 0.4
    }
  },
  exit: {
    // y: 0,
    scale: 0,
    transition: {
      duration: 0.4,
      delay: 0
    }
  },
}



export const textContainerWorks = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  },
  exit: {

  },
}
export const textComponentsWorks = {
  initial: {
    opacity: 0,
    y: 6,
    transition: {
      duration: 0.4,
      type: "tween",
      ease: loquitoYoutube
    }
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      type: "tween",
      ease: loquitoYoutube
    }
  },
  exit: {
    opacity: 0,
    y: 0,
    transition: {
      duration: 0.4,
      type: "tween",
      ease: loquitoYoutube
    }
  },
};


// export const imagesWork = {
//   initial: {
//     opacity: 0,
//   },
//   animate: {
//     opacity: 1,
//     transition: { 
//       duration: 0.6,
//       // delay: 0.6
//     }
//   },
//   exit: {
//     opacity: 0,
//     transition: { 
//       duration: 0.4
//     }
//   }
// };
