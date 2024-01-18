class Code {
  component
  usage
}

class Component extends Code {
  cover
  preview
  code

  constructor() {
    super()

    this.code = {
      component: this.component,
      usage: this.usage
    }
  }
}

export default Component
