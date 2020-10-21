"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  find: async (ctx) => {
    // console.log(ctx.request.body);
    console.log(ctx);
    const dd = await strapi.
    const article = await strapi.query("article").find();
    console.log(article);
    return article;
  },
};
