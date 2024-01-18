import Component from "../../../../models/Component"
import Cover from "./Cover"
import Preview from "./Preview"
import code from "./code"

class Button extends Component {
  cover = Cover
  preview = Preview
  code = code
}

const _button = new Button()

export default _button
