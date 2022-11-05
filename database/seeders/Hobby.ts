import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Hobby from 'App/Models/Hobby'

export default class extends BaseSeeder {
  public async run() {
    await Hobby.updateOrCreateMany('name', [
      { name: 'Programming' },
      { name: 'Reading' },
      { name: 'Sporting' },
      { name: 'Gaming' },
      { name: 'Music' },
      { name: 'Cooking' },
      { name: 'Traveling' },
      { name: 'Writing' },
      { name: 'Photography' },
      { name: 'Gardening' },
      { name: 'Knitting' },
      { name: 'Sewing' },
      { name: 'Jewelery making' },
      { name: 'Woodworking' },
    ])
  }
}
