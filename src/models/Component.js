class Code {
  component
  usage
}

class Component extends Code {
  cover
  preview
  codes

  constructor() {
    super()

    this.codes = {
      component: this.component,
      usage: this.usage
    }
  }
}

export default Component
