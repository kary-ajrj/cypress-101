import { defineConfig } from 'cypress'
export default defineConfig({
  e2e: {
    reporter:'mochawesome',
    supportFile:false
  },
})