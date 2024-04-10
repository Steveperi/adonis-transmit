import type { HttpContext } from '@adonisjs/core/http'

export default class SitesController {
    async index(ctx: HttpContext) {
        return await ctx.view.render('pages/home', {
        })
    }
}