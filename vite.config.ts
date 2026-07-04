import { defineConfig } from '@tanstack/start/config'

export default defineConfig({
  start: {
    server: {
      preset: 'netlify' // Εδώ λέμε στο TanStack να φτιάξει το σωστό format για το Netlify
    }
  }
})