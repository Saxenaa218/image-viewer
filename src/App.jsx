import { Suspense, useEffect, useState, lazy } from 'react'
import { getImagesAsync } from './api/index.js'
import './App.css'
const ImageModal = lazy(() => import('./components/ImageModal.jsx'));

function App() {
  const [images, setImages] = useState([])
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
      getImages();
  }, [])

  async function getImages() {
    try {
      const result = await getImagesAsync()
      setImages(result.data)
    } catch(error) {
      // error
    }
  }

  const onClose = () => {
    setActiveImage(null)
  }

  const handleImageClick = (itm) => {
    setActiveImage(itm)
  }

  return (
    <div className='container'>
      {images.map(itm => <img loading='lazy' src={itm.download_url} key={images.id} width="100px" onClick={() => handleImageClick(itm)}/>)}
      {activeImage && 
        <Suspense fallback="loading image ...">
          <ImageModal activeImage={activeImage} onClose={onClose}/>  
        </Suspense>
      }
    </div>
  )
}

export default App
