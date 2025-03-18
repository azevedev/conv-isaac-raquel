<script>
export default {
  props: {
    color: {
      type: String,
      default: "#333333"
    }
  }
}
</script>

<template>
  <svg width="48px" height="48px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M23 14V6H25V14H23Z" :fill="color"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M28 11L20 11L20 9L28 9L28 11Z" :fill="color"/>
  <path d="M6 28.5C6 27.5797 6.53902 26.7782 7.5 26.5L15 24V42H6C6 42 6 29.4203 6 28.5Z" :fill="color"/>
  <path d="M42 28.5C42 27.5797 41.461 26.7782 40.5 26.5L33 24V42H42C42 42 42 29.4203 42 28.5Z" :fill="color"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M17 42V18.5C17 17.5 17.7778 17 17.7778 17L24 13L30.2222 17C30.2222 17 31 17.5 31 18.5V42H27V32C27 30.3431 25.6569 29 24 29C22.3431 29 21 30.3431 21 32V42H17Z" :fill="color"/>
  </svg>
</template>