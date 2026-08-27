declare module "image-map-resizer" {
  // Minimal declaration for the package. It exports a function that can be invoked
  // to (re)size image maps. Use `any` to avoid strict typing for now.
  const imageMapResizer: (...args: any[]) => any
  export default imageMapResizer
}
