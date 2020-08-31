// Loader
// let easingNormal = [0.175, 0.85, 0.42, 0.96];
let easingCool = [0.6, 0.01, -0.05, 0.9];
// let easingSuper = [0.43, 0.13, 0.23, 0.96];
// let easingMenu = [0.6, 0.01, -0.05, 0.9];





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
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
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