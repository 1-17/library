import { useEffect } from "react"
import classNames from "classnames"
import { useArticles } from "../../../hooks"
import Widget from "../../../models/Widget"
import Form from "../../form/Form"
import Fieldset from "../../form/Fieldset"
import Field from "../../form/Field"

class Typography extends Widget {
  component = () => {
    const { widget } = useArticles()

    useEffect(() => {
      !widget.config.length && widget.setConfig({
        text: {
          content: "Example text",
          font: "",
          size: "",
          color: "",
          weight: ""
        },
        icon: {
          left: {
            content: ""
          },
          right: {
            content: ""
          }
        }
      })
    }, [])

    return (
      <span className={classNames(
        widget.config.text && (
          [widget.config.text.font, widget.config.text.weight].map(font => `font-${font}`),
          [widget.config.text.size, widget.config.text.color].map(text => `text-${text}`)
        )
      )}>
        {
          widget.config.icon && (
            widget.config.icon.left.content + " "
          )
        }
        {
          widget.config.text && (
            widget.config.text.content
          )
        }
        {
          widget.config.icon && (
            " " + widget.config.icon.right.content
          )
        }
      </span>
    )
  }

  controls = () => {
    const { widget } = useArticles()

    const sizes = {
      1: "",
      2: "lg",
      3: "xl",
      4: "2xl"
    }

    return (
      <Form>
        <Fieldset legend="Text">
          <Field
            type="text"
            value={widget.config.text.content}
            onChange={e => {
              widget.setConfig(prev => ({
                ...prev,
                ...prev.text = {
                  ...prev.text,
                  content: e.target.value
                }
              }))
            }}
          />
        </Fieldset>
        <Fieldset legend="Size">
          <div className="flex items-center gap-4 *:grow">
            {
              Object.entries(sizes).map(([type, size], i) =>
                <Field
                  key={i}
                  label={type}
                  id={`size-${type}`}
                  type="radio"
                  checked={widget.config.text.size === size}
                  onChange={() => {
                    widget.setConfig(prev => ({
                      ...prev,
                      ...prev.text = {
                        ...prev.text,
                        size: size
                      }
                    }))
                  }}
                />
              )
            }
          </div>
        </Fieldset>
      </Form>
    )
  }
}

const _typography = new Typography()

export default _typography
