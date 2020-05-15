import { Element } from '../Element.js'
export class SVGElement extends Element {
  get ownerSVGElement () {
    let owner = null
    let parent
    while ((parent = this.parentNode)) {
      if (parent.nodeName === 'svg') {
        owner = parent
      }
    }
    return owner
  }

  get viewportElement () {
    let owner = null
    let parent
    while ((parent = this.parentNode)) {
      // TODO: and others
      if ([ 'svg', 'symbol' ].contains(parent.nodeName)) {
        owner = parent
      }
    }
    return owner
  }
}
