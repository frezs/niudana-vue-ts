import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { viteMockServe } from 'vite-plugin-mock'
import { createProxy } from './build/vite/proxy'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    //mock插件支持
    viteMockServe({
      ignore: /^\_/,
      mockPath: 'mock',
      supportTs: true,
      localEnabled: true,
      prodEnabled: true, // 生产环境打包mock
      injectCode: `
        import { setupProdMockServer } from '../mock/_createProdMockServer';
        setupProdMockServer();
        `,
    }),
  ],
  server: {
    // 监听本地IP
    host: true,
    port: 3000,
    proxy: createProxy([['/api', 'http://localhost:3000']]),
  },
  resolve: {
    // 配置别名
    alias: {
      '@': resolve(__dirname, './src'),
      '#': resolve(__dirname, './types'),
    },
  },
})