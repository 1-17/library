import Component from "../../../../models/Component"
import Cover from "./Cover"
import Preview from "./Preview"
import code from "./code"

class Link extends Component {
  cover = Cover
  preview = Preview
  code = code
}

const _link = new Link()

export default _link
