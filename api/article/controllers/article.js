"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

const { sanitizeEntity } = require("strapi-utils");

module.exports = {
  find: async (ctx) => {
    console.log(22, ctx.req);
    const article = await strapi.query("article").find();
    // return article;
    const entity = await strapi.services.article.find();
    // console.log("entity", entity);
    // console.log("article", article);
    return sanitizeEntity(entity, { model: strapi.models.article });
  },
};
