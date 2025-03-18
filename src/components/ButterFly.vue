<template>
  <div ref="butterFlyContainer" style="perspective: 1000px;" class="butterFlyContainer" :class="{'flip': this.currentShouldFlip}">
    <div :style="{ '--wing-color': this.currentColor, '--rnd-flap': this.currentFlapDelay }" class="butterfly" ref="butterFly">
      <div class="wing">
        <div class="bit"></div>
        <div class="bit"></div>
      </div>
      <div class="wing">
        <div class="bit"></div>
        <div class="bit"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    wingColor: {
      type: String,
      default: null,
    },
    fixed: {
      type: Boolean,
      default: false,
    },
    positionX: {
      type: Number,
      default: null,
    },
    positionY: {
      type: Number,
      default: null,
    },
  },
  data() {
    return {
      currentShouldFlip: this.shouldFlip(),
      currentFlapDelay: this.generateRandomFlap(),
      currentColor: this.wingColor || this.generateRandomColor(),
      butterFlySize: 50, // Size of the butterfly element
      position: { x: this.positionX ||window.innerWidth * (Math.random()), y: this.positionY || window.innerHeight / 2 + window.innerHeight * (Math.random()) },
      velocity: { x: Math.random(), y: Math.random()},
      isFixed: this.fixed,
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.butterFlyElement = this.$refs.butterFlyContainer;
      this.butterFlyElement.style.position = 'absolute';
      this.animateButterFly();
    });
  },
  methods: {
    generateRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    },
    generateRandomFlap() {
      return (Math.random() * 1500) + 'ms';
    },
    shouldFlip() {
      return Math.random() < 0.5;
    },
    animateButterFly() {
      const updatePosition = () => {
         // Assign unique phase offset and time factor for each butterfly
  if (!this.phaseOffset) this.phaseOffset = Math.random() * Math.PI * 2; 
  if (!this.timeFactor) this.timeFactor = 0.8 + Math.random() * 0.4; 

  // Create a more natural flight path using sine and cosine waves
  const time = (performance.now() * 0.001 * this.timeFactor) + this.phaseOffset;// Use time to make the movement smoother

  const angle = Math.sin(time) * Math.PI * 2; 
  const speed = 0.8 + Math.random() * 0.3; // Random speed variation for natural fluttering

  // Gradual changes in direction
  this.velocity.x += Math.cos(angle) * speed * 0.1; 
  this.velocity.y += speed * -0.4;

  // Apply easing for smooth acceleration and deceleration
  this.velocity.x *= 0.92; 
  this.velocity.y *= 0.92;

  // Update position
  this.position.x += this.velocity.x;
  this.position.y += this.velocity.y;

  // Add gentle upward drift for realism
  this.position.y -= Math.sin(time * 0.5) * 0.5; 

  // Ensure the butterfly stays within the viewport
  const maxX = window.innerWidth - this.butterFlySize;
  // const maxY = window.innerHeight - this.butterFlySize;

  if (this.position.x < 0) this.position.x = 0;
  if (this.position.y < 0 - this.butterFlySize) {
    // this.position.y = window.innerHeight + this.butterFlySize;
    // this.currentShouldFlip = !this.currentShouldFlip;
    // this.currentFlapDelay = this.generateRandomFlap();
    // this.currentColor = this.generateRandomColor();
    // this.position.x = Math.random() * window.innerWidth;
    this.isFixed = true;
  }
  if (this.position.x > maxX) this.position.x = maxX;
  // if (this.position.y > maxY) this.position.y = maxY;

  // Convert position to percentages
  const leftPercent = (this.position.x / window.innerWidth) * 100;
  // const topPercent = (this.position.y / window.innerHeight) * 100;

  // Apply position
  this.butterFlyElement.style.left = `${leftPercent}%`;
  this.butterFlyElement.style.top = `${this.position.y}px`;
  // console.log('this.position.y', this.position.y)
  // Keep animating
  if (!this.isFixed) {
    requestAnimationFrame(updatePosition);
  }
};
      
      requestAnimationFrame(updatePosition);
    },
  },
};
</script>

<style scoped>

.butterFlyContainer {
  animation: fadeIn 2s ease-in-out;
}

.butterfly {
  animation: hover 250ms cubic-bezier(0.48, 0.01, 0.54, 1) infinite;
  animation-direction: alternate;
  animation-fill-mode: reverse;
  position: absolute;
  top: 30%;
  left: 50%;
  scale: 0.3;
  transform-style: preserve-3d;
  transform: rotateX(50deg) rotateY(20deg) rotateZ(-50deg) translateY(0px);
  width: 15px;
}

.wing {
  background: #888;
  display: block;
  opacity: 0.7;
  outline: 1px solid transparent;
  position: absolute;
  top: 0;
}

.wing:first-child {
  animation: leftflap 0.8s cubic-bezier(0.48, 0.01, 0.54, 1) infinite;
  animation-direction: alternate;
  animation-fill-mode: reverse;
  animation-delay: var(--rnd-flap);
  height: 1px;
  left: 0;
  transform: rotateY(-20deg);
  transform-origin: 700% 50%;
  width: 1px;
  z-index: 3;
}

.wing:last-child {
  animation: rightflap 0.8s cubic-bezier(0.48, 0.01, 0.54, 1) infinite;
  animation-direction: alternate;
  animation-fill-mode: reverse;
  animation-delay: var(--rnd-flap);
  right: 0;
  transform: rotateY(200deg);
  z-index: 1;
}

.bit {
  background: var(--wing-color);
}

.bit::after {
  background: rgba(255, 255, 255, 0.10);
}

.bit,
.bit::after {
  border-radius: 50%;
  overflow: hidden;
  position: absolute;
  right: 0;
  top: 0;
  transform-origin: 100% 50%;
}

.bit:first-child {
  height: 70px;
  text-align: center;
  top: 15px;
  transform: rotateZ(40deg);
  width: 130px;
}

.bit:first-child::after {
  content: "";
  display: inline-block;
  height: 60px;
  left: -30px;
  top: 5px;
  width: 100px;
}

.bit:last-child {
  height: 55px;
  transform: rotateZ(-40deg);
  width: 100px;
}

.bit:last-child::after {
  content: "";
  display: inline-block;
  height: 45px;
  left: -24px;
  top: 5px;
  width: 60px;
  z-index: 1;
}


.flip {
  transform: rotateY(180deg);
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes hover {
  0% {
    transform: rotateX(50deg) rotateY(20deg) rotateZ(-50deg) translateZ(0px);
  }
  100% {
    transform: rotateX(50deg) rotateY(20deg) rotateZ(-50deg) translateZ(-3px);
  }
}

@keyframes leftflap {
  0% {
    transform: rotateY(-20deg);
  }
  100% {
    transform: rotateY(90deg);
  }
}

@keyframes rightflap {
  0% {
    transform: rotateY(200deg);
  }
  100% {
    transform: rotateY(90deg);
  }
}
</style>