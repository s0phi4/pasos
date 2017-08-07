"static strict"

export default {
        title: "Hello swhere",
        type: "object",
        required: ["title"],
        properties: {
          title: {type: "string", title: "Title", default: "A new task"},
          done: {type: "boolean", title: "Done?", default: false}
        }
}

