import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

// import HinnastoPagePreview from './preview-templates/HinnastoPagePreview'
// import ProductPagePreview from './preview-templates/ProductPagePreview'
// import IndexPagePreview from './preview-templates/IndexPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

// CMS.registerPreviewTemplate('index', IndexPagePreview)
// CMS.registerPreviewTemplate('hinnasto', HinnastoPagePreview)
// CMS.registerPreviewTemplate('products', ProductPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
