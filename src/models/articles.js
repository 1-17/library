import { button, link } from "../components/articles/components"
import { typography } from "../components/articles/widgets"

const articles = {
  components: {
    layout: [
      {
        name: "Link",
        description: "Anchor tag ready for external links and route navigation that can be opened in a new tab.",
        cover: link.cover,
        preview: link.preview,
        codes: link.code
      },
      {
        name: "Button",
        description: "Button or anchor tag ready for external links and route navigation, with style variants.",
        cover: button.cover,
        preview: button.preview,
        codes: button.code
      },
      {
        name: "Header",
        description: "Lorem cupidatat proident nulla ad adipisicing tempor."
      }
    ],
    form: [
      {
        name: "Form",
        description: "In ex magna consectetur nulla aliqua et ex irure labore labore incididunt culpa Lorem ullamco."
      },
      {
        name: "Field",
        description: "Mollit consequat dolore et ad duis do consequat nisi."
      },
      {
        name: "Stack",
        description: "Minim irure minim culpa Lorem aute exercitation labore nulla incididunt duis cillum."
      }
    ]
  },
  widgets: {
    notion: [
      {
        name: "Typography",
        description: "Deserunt sunt enim qui elit irure in.",
        cover: typography.component,
        component: typography.component,
        controls: typography.controls
      }
    ]
  }
}

export default articles
