<template>
  <div v-if="show" ref="butterFlyContainer" style="perspective: 100000px; scale: 0.5;" class="butterFlyContainer" :class="{'flip': this.currentShouldFlip}">
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
    side: {
      type: String,
      default: '',
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
      isFixed: this.fixed,
      currentShouldFlip: this.shouldFlip(),
      currentFlapDelay: this.generateRandomFlap(),
      currentColor: this.wingColor || this.generateRandomColor(),
      butterFlySize: 25, // Size of the butterfly element
      position: { x: this.positionX ||window.innerWidth * (Math.random()), y: this.positionY || window.innerHeight / 2 + window.innerHeight * (Math.random()) },
      velocity: { x: Math.random(), y: Math.random()},
      unit: this.fixed ? '%' : 'px',
      show: true
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.butterFlyElement = this.$refs.butterFlyContainer;
      if(this.isFixed) this.butterFlyElement.style.position = 'fixed';
      else this.butterFlyElement.style.position = 'absolute';
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
      if(this.fixed && this.side === 'left') return true;
      if(this.fixed && this.side === 'right') return false;
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
  this.velocity.x *= 0.98; 
  this.velocity.y *= 0.94;

  // Update position
  this.position.x += this.velocity.x;
  this.position.y += this.velocity.y;

  // Add gentle upward drift for realism
  this.position.y -= Math.sin(time * 0.5) * 0.5; 

  // Ensure the butterfly stays within the viewport
  const maxX = window.innerWidth - this.butterFlySize;
  const maxY = -100;

  if (this.position.x < 0) this.position.x = 0;
  if (this.position.y < 0 - this.butterFlySize) {
    // this.position.y = window.innerHeight + this.butterFlySize;
    // this.currentShouldFlip = !this.currentShouldFlip;
    // this.currentFlapDelay = this.generateRandomFlap();
    // this.currentColor = this.generateRandomColor();
    // this.position.x = Math.random() * window.innerWidth;
    // this.isFixed = true;
  }
  if (this.position.x > maxX) this.position.x = maxX;
  // if (this.position.y > maxY) this.position.y = maxY;

  if(this.position.y < maxY ) this.show = false

  // Convert position to percentages
  // const leftPercent = (this.position.x / window.innerWidth) * 100;
  // const topPercent = (this.position.y / window.innerHeight) * 100;

  // Apply position
  this.butterFlyElement.style.left = `${this.position.x}${this.unit}`;
  this.butterFlyElement.style.top = `${this.position.y}${this.unit}`;
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
/* app/assets/stylesheets/home.css */
.home {
  padding: 20px;
  padding-top: 35px;
}

.fade-p {
  animation: fade-p forwards 3s;
}

.fade-n {
  animation: fade-n forwards 3s;
}

.fade-move {
  animation: fade-move forwards 2s;
}

.fade-move-scale {
  animation: fade-move-scale forwards 2s;
}

.time-of-env {
  display: flex;
  width: 100%;
  justify-content: space-between;
  min-height: 150px;
  font-size: 30px;
}

.time {
  display: flex;
  font-size: 18px;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: 100%;
}

.intersection {
  height: 155px;
  width: 20px;
  background: #BF9742;
  border-radius: 18px;
  margin-top: 20px;
}

.date {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: 100%;
}

@keyframes fade-p {
  0% {
    transform: translateY(-100px) scaleX(-1);
    rotate: 60deg;
    opacity: 0;
  }
  100% {
    transform: translateY(0px) scaleX(-1);
    rotate: 80deg;
    opacity: 1;
  }
}

@keyframes fade-n {
  0% {
    transform: translateY(-100px);
    rotate: -60deg;
    opacity: 0;
  }
  100% {
    transform: translateY(0px);
    rotate: -80deg;
    opacity: 1;
  }
}

@keyframes fade-move {
  0% {
    opacity: 0;
    transform: translateY(100px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}

@keyframes fade-move-scale {
  0% {
    opacity: 0;
    transform: translateY(100px) scaleX(-1);
  }
  100% {
    opacity: 1;
    transform: translateY(0px) scaleX(-1);
  }
}

.butterfly-fade-wrapper {
  animation: fadeIn 1.2s ease-in-out forwards;
  opacity: 0;
  transform: translateZ(0); /* Force separate compositor layer */
}

/* Butterfly Body */
.butterfly {
  animation: 
    hover 700ms cubic-bezier(0.48, 0.01, 0.54, 1) infinite;
  animation-direction: alternate;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: scale(0.2) rotateX(50deg) rotateY(20deg) rotateZ(-80deg) translateY(0px);
  transform-style: preserve-3d;
  width: 8px;
}

/* Wings - Restored Working Version */
.wing {
  background: #888;
  opacity: 1;
  outline: 1px solid transparent;
  position: absolute;
  top: 0;
  transform: translate3d(0, 0, 0);
  will-change: transform;
}

/* Left Wing - Original Working Config */
.wing:first-child {
  animation: leftflap 0.8s cubic-bezier(0.48, 0.01, 0.54, 1) infinite;
  animation-direction: alternate;
  height: 1px;
  left: 0;
  transform: rotateY(-20deg);
  width: 1px;
  z-index: 3;
  transform-origin: 100% 50%;
}

/* Right Wing - Targeted Chrome Fix */
.wing:last-child {
  animation: rightflap 0.8s cubic-bezier(0.48, 0.01, 0.54, 1) infinite;
  animation-direction: alternate;
  right: 0;
  transform: rotateY(-160deg) translateZ(0); /* Force 3D layer */
  z-index: 1;
  transform-origin: left center;
  backface-visibility: visible;
  transform-style: preserve-3d; /* Add this */
  -webkit-transform-style: preserve-3d;
}

/* Keyframes - Restored Original */
@keyframes leftflap {
  0% { transform: rotateY(-20deg); }
  100% { transform: rotateY(90deg); }
}

@keyframes rightflap {
  0% { transform: rotateY(200deg); }
  100% { transform: rotateY(90deg); }
}


.bit {
  background: var(--wing-color);
  scale: 0.5;
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
  to {
    opacity: 1;
  }
}

@keyframes hover {
  0% {
    transform: rotateX(50deg) rotateY(20deg) rotateZ(-50deg) translateZ(0px);
  }
  100% {
    transform: rotateX(58deg) rotateY(12deg) rotateZ(-42deg) translateZ(-8px);
  }
}
</style>