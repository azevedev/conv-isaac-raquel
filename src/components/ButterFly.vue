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
      position: { x: this.positionX ||window.innerWidth * (Math.random()), y: this.positionY || window.innerHeight * (Math.random()) },
      velocity: { x: Math.random(), y: Math.random()},
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
        const angle = Math.random() * 2 * Math.PI;
        const speed = .3; // Adjust for desired speed
        this.velocity.x += Math.cos(angle) * speed;
        this.velocity.y += Math.sin(angle) * speed;

        // Apply easing to the velocity for smoother movement
        this.velocity.x *= 0.98;
        this.velocity.y *= 0.98;

        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;

        // Ensure the butterfly stays within the viewport
        if (this.position.x < 0) this.position.x = 0;
        if (this.position.y < 0) this.position.y = 0;
        if (this.position.x + this.butterFlySize > window.innerWidth)
          this.position.x = window.innerWidth - this.butterFlySize;
        if (this.position.y + this.butterFlySize > window.innerHeight)
          this.position.y = window.innerHeight - this.butterFlySize;

           // Calculate position as a percentage of the viewport dimensions
        const leftPercent = (this.position.x / window.innerWidth) * 100;
        const topPercent = (this.position.y / window.innerHeight) * 100;

        this.butterFlyElement.style.left = `${leftPercent}%`;
        this.butterFlyElement.style.top = `${topPercent}%`;
        
        if(!this.fixed) {
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