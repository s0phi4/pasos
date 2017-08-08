"static strict"

export default {
    type: "object",
    required: [
      "nameOfBlog",
      "domain",
      "port",
    ],
    properties: {
      "nameOfBlog": {type:"string", title: "Name of blog"},
      "domain": {type: "string", title: "Domain"},
      "port": {type: "string", title: "Port", maxLength: 4},
      "sslCertificate": {type: "string", title: "SSL Certificate"},

    }, 
  uiSchema: {
    nameOfBlog: {
      "ui:widget": "textarea",
    }
  }

  
}

