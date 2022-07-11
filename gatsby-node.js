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
      path: `${lang.path}brands/`,
      component: path.resolve("./src/templates/Brands.js"),
      context: {
        lang: lang.code,
        prefix: lang.path,
      },
    })
  })

  languages.forEach(lang => {
    createPage({
      path: `${lang.path}delivery/`,
      component: path.resolve("./src/templates/Delivery.js"),
      context: {
        lang: lang.code,
        prefix: lang.path,
      },
    })
  })

  languages.forEach(lang => {
    createPage({
      path: `${lang.path}ruler/`,
      component: path.resolve("./src/templates/Ruler.js"),
      context: {
        lang: lang.code,
        prefix: lang.path,
      },
    })
  })

  languages.forEach(lang => {
    createPage({
      path: `${lang.path}credit/`,
      component: path.resolve("./src/templates/Credit.js"),
      context: {
        lang: lang.code,
        prefix: lang.path,
      },
    })
  })

  languages.forEach(lang => {
    createPage({
      path: `${lang.path}montage/`,
      component: path.resolve("./src/templates/Montage.js"),
      context: {
        lang: lang.code,
        prefix: lang.path,
      },
    })
  })

  languages.forEach(lang => {
    createPage({
      path: `${lang.path}privacy/`,
      component: path.resolve("./src/templates/Privacy.js"),
      context: {
        lang: lang.code,
        prefix: lang.path,
      },
    })
  })

  languages.forEach(lang => {
    createPage({
      path: `${lang.path}cart/`,
      component: path.resolve("./src/templates/Cart.js"),
      context: {
        lang: lang.code,
        prefix: lang.path,
      },
    })
  })

  languages.forEach(lang => {
    createPage({
      path: `${lang.path}checkout/`,
      component: path.resolve("./src/templates/Checkout.js"),
      context: {
        lang: lang.code,
        prefix: lang.path,
      },
    })
  })

  languages.forEach(lang => {
    createPage({
      path: `${lang.path}thanks/`,
      component: path.resolve("./src/templates/Thanks.js"),
      context: {
        lang: lang.code,
        prefix: lang.path,
      },
    })
  })

  languages.forEach(lang => {
    createPage({
      path: `${lang.path}search/`,
      component: path.resolve("./src/templates/Search.js"),
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
      component: path.resolve("./src/templates/SinglePost.js"),
      context: {
        lang: lang.code,
        prefix: lang.path,
      },
    })
  })

  languages.forEach(lang => {
    createPage({
      path: `${lang.path}single-product/`,
      component: path.resolve("./src/templates/SingleProduct.js"),
      context: {
        lang: lang.code,
        prefix: lang.path,
      },
    })
  })

  languages.forEach(lang => {
    createPage({
      path: `${lang.path}single-brand/`,
      component: path.resolve("./src/templates/SingleBrand.js"),
      context: {
        lang: lang.code,
        prefix: lang.path,
      },
    })
  })
}

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage, deletePage } = actions
  if (page.path.match(/^\/[a-z]{2}\/404\/$/)) {
    const oldPage = { ...page }
    const langCode = page.path.split(`/`)[1]
    page.matchPath = `/${langCode}/*`
    deletePage(oldPage)
    createPage(page)
  }
}