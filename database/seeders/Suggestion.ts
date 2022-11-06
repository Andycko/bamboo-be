import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Suggestion from 'App/Models/Suggestion'

export default class extends BaseSeeder {
  public async run() {
    await Suggestion.updateOrCreateMany(
      ['name', 'type'],
      [
        {
          name: 'Mindfulness',
          type: 'rest',
          tags: 'mindfulness,meditation,yoga,breathing,exercise,movement,stretching,relaxation,calm,calmness,calm down,calm down',
          description:
            'Mindfulness is the practice of purposely focusing your attention on the present moment,such as how the air smells and feels as you breathe, or how a chair feels as you sit on it, or how a ball feels as you hold it.',
          meta: {
            relatedArticle: 'https://www.healthline.com/health/mindfulness#mindfulness-exercises',
          },
        },
        {
          name: 'Play a computer game',
          type: 'activity',
          tags: 'computer,gaming,relaxation,excitement,fun',
          description:
            "Computer gaming can be a great way to relax and unwind. It's a great way to spend time with friends and family for those that enjoy venturing to the virtual world.",
          meta: {},
        },
        {
          name: 'Go for a walk',
          type: 'activity',
          tags: 'breathing, exercise, movement, stretching, relaxation, calm, nature, outdoors, fresh air',
          description:
            'Going for a walk is a great way to get some exercise and fresh air. It can be a great way to clear your mind and relax. It can also be a great way to spend time with friends and family.',
          meta: {},
        },
        {
          name: 'Try a new craft',
          type: 'activity',
          tags: 'craft, creativity, fun, relaxation, calm, calmness, calm down, new, learn, learning',
          description:
            'Learning a craft can be challenging and rewarding. It can be a great way to relax and unwind. It can also be a great way to spend time with friends and family.',
          meta: {
            relatedArticle: 'https://www.thesprucecrafts.com/crafts-to-try-4127569',
          },
        },
        {
          name: 'Read a book',
          type: 'read',
          tags: 'reading, book, learn, learning, knowledge, fun, relaxation, calm, calmness, calm down, new book, book worm, literature',
          description:
            'Reading a book can be a great way to relax and unwind. It can also be a great way to spend time with friends and family.',
          meta: {},
        },
        {
          name: 'Take a power nap',
          type: 'rest',
          tags: 'nap, sleep, power nap, 20min, chill, calm, relaxing, calmness, calm down, rest, relaxation',
          description:
            'Taking a power nap can help some people feel more alert and productive. It can be a great way to relax and unwind.',
          meta: {
            relatedArticle: 'https://www.healthline.com/health/power-nap',
          },
        },
      ]
    )
  }
}
