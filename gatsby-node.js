const path = require(`path`)

const languages = [
  {
    path: "/",
    code: "ru_UA",
  },
  {
    path: "/uk/",
    code: "uk_UA",
  }
]

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  languages.forEach(lang => {
    createPage({
      path: lang.path,
      component: path.resolve("./src/templates/Homepage.js"),
      context: {
        lang: lang.code,
        prefix: lang.path,
      },
    })
  })

  languages.forEach(lang => {
    createPage({
      path: `${lang.path}about/`,
      component: path.resolve("./src/templates/About.js"),
      context: {
        lang: lang.code,
        prefix: lang.path,
      },
    })
  })

  languages.forEach(lang => {
    createPage({
      path: `${lang.path}contacts/`,
      component: path.resolve("./src/templates/Contacts.js"),
      context: {
        lang: lang.code,
        prefix: lang.path,
      },
    })
  })

  languages.forEach(lang => {
    createPage({
      path: `${lang.path}blog/`,
      component: path.resolve("./src/templates/Blog.js"),
      context: {
        lang: lang.code,
        prefix: lang.path,
      },
    })
  })

  languages.forEach(lang => {
    createPage({
      path: `${lang.path}catalog/`,
      component: path.resolve("./src/templates/Catalog.js"),
      context: {
        lang: lang.code,
        prefix: lang.path,
      },
    })
  })

  languages.forEach(lang => {
    createPage({
      path: `${lang.path}product-category/`,
      component: path.resolve("./src/templates/ProductCategory.js"),
      context: {
        lang: lang.code,
        prefix: lang.path,
      },
    })
  })

  languages.forEach(lang => {
    createPage({
      path: `${lang.path}single-post/`,
      component: path.resolve("./src/templates/Single-Post.js"),
      context: {
        lang: lang.code,
        prefix: lang.path,
      },
    })
  })
}