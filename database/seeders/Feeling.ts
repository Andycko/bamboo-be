import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Feeling from 'App/Models/Feeling'

export default class extends BaseSeeder {
  public async run() {
    await Feeling.updateOrCreateMany('name', [
      { name: 'joyful', positive: true },
      { name: 'loved', positive: true },
      { name: 'content', positive: true },
      { name: 'hopeful', positive: true },
      { name: 'amused', positive: true },
      { name: 'relaxed', positive: true },

      { name: 'anxious', positive: false },
      { name: 'sad', positive: false },
      { name: 'angry', positive: false },
      { name: 'ashamed', positive: false },
      { name: 'guilty', positive: false },
      { name: 'tired', positive: false },
    ])
  }
}
