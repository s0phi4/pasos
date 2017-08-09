"static strict"

export default {
        type: "object",
        required: ["metrics"],
        properties: {
          metrics: {type: "boolean", title: "Metrics"},
        },
  uiSchema: {
    metrics: {
    "ui:widget": "radio"
    }
  }
}

