import { setPipelineWorkerUrl, readImageDicomFileSeries } from '@itk-wasm/dicom'
const $input = document.querySelector('#file')

// set url to where worker is available (your custom location specified in vite config)
setPipelineWorkerUrl(
  document.location.origin + '/itk/itk-wasm-pipeline.min.worker.js',
)
$input.addEventListener('change', async (e) => {
  const files = Array.from(e.target.files)
  console.log(files)
  const { outputImage, webWorkerPool, sortedFilenames } =
    await readImageDicomFileSeries({
      webWorkerPool: null,
      inputImages: files,
      singleSortedSeries: true,
    })
  console.log(outputImage)
})
