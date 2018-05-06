if(!cache.updateUrlWithPosition){
  const {updateUrlWithPosition} = application
  cache.updateUrlWithPosition = updateUrlWithPosition
}

const {updateUrlWithPosition} = cache

application.updateUrlWithPosition = function(path){
  const fragment = this.locationFragment(path, 0, 0)
  const url = `${this.currentUrl()}?path=${fragment}`
  if(url !== window.location.href){
    return updateUrlWithPosition.apply(this, [path, 0, 0])
  }
}.bind(application)
