export function toogle(toogleObj) {
  const height = toogleObj.scrollHeight;
  if (toogleObj.style.height != `${height}px`)
    toogleObj.style.height = `${height}px`
  else
    toogleObj.style.height = '0'
}
