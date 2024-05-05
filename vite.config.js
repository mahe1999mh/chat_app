import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    // Allow importing .js and .jsx files without specifying the extension
    extensions: ['.js', '.jsx','.css']
  }
})
