import path from 'path'
import { defineConfig } from 'vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  plugins: [
    // vite static copy makes your src file available at "domain/dest/filename"
    viteStaticCopy({
      targets: [
        {
          src: path.join(
            __dirname,
            // set this to wherever your itk-wasm-pipeline.min.worker.js file is present
            './node_modules/itk-wasm/dist/pipeline/web-workers/bundles/itk-wasm-pipeline.min.worker.js',
          ),
          dest: 'itk',
        },
      ],
    }),
  ],
})
