<template>
  <div class="butterfly" ref="butterFly">
    <div class="wing">
      <div class="bit"></div>
      <div class="bit"></div>
    </div>
    <div class="wing">
      <div class="bit"></div>
      <div class="bit"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    wing: {
      type: String,
      default: "#333333",
    },
  },
  data() {
    return {
      butterFlySize: 50, // Size of the butterfly element
    };
  },
  mounted() {
    this.$nextTick(() => {
      const butterFlyElement = this.$refs.butterFly;
      if (!butterFlyElement) {
        console.error("Butterfly element not found");
        return;
      }
      this.startButterFlyMovement();
    });
  },
  methods: {
    startButterFlyMovement() {
      const butterFlyElement = this.$refs.butterFly;
      if (!butterFlyElement) {
        console.error("Butterfly element not found");
        return;
      }

      const moveButterFly = () => {
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        const rect = butterFlyElement.getBoundingClientRect();
        let currentX = rect.left;
        let currentY = rect.top;
        const angle = Math.random() * 2 * Math.PI;
        const distance = 50;
        let newX = currentX + distance * Math.cos(angle);
        let newY = currentY + distance * Math.sin(angle);
        if (newX < 0) newX = 0;
        if (newY < 0) newY = 0;
        if (newX + this.butterFlySize > viewportWidth)
          newX = viewportWidth - this.butterFlySize;
        if (newY + this.butterFlySize > viewportHeight)
          newY = viewportHeight - this.butterFlySize;
        butterFlyElement.style.left = `${newX}px`;
        butterFlyElement.style.top = `${newY}px`;
      };

      setInterval(moveButterFly, 1000);
    },
  },
};
</script>

<style scoped>
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
  background-color: red;
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
  animation: leftflap 250ms cubic-bezier(0.48, 0.01, 0.54, 1) infinite;
  animation-direction: alternate;
  animation-fill-mode: reverse;
  height: 1px;
  left: 0;
  transform: rotateY(-20deg);
  transform-origin: 700% 50%;
  width: 1px;
  z-index: 3;
}

.wing:last-child {
  animation: rightflap 250ms cubic-bezier(0.48, 0.01, 0.54, 1) infinite;
  animation-direction: alternate;
  animation-fill-mode: reverse;
  right: 0;
  transform: rotateY(200deg);
  z-index: 1;
}

.bit {
  background: dodgerblue;
}

.bit::after {
  background: lighten(dodgerblue, 10%);
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
