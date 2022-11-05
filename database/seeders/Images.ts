import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Image from 'App/Models/Images'

export default class extends BaseSeeder {
  public async run() {
    await Image.updateOrCreateMany('url', [
      {
        url: 'https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y3V0ZSUyMGNhdHxlbnwwfHwwfHw%3D&w=1000&q=80',
        tags: 'cat,tiny,kitten,pet,companion',
      },
      {
        url: 'https://i.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4',
        tags: 'laptop,cafe,study,organised,technology',
      },
      {
        url: 'https://i.picsum.photos/id/2/5000/3333.jpg?hmac=_KDkqQVttXw_nM-RyJfLImIbafFrqLsuGO5YuHqD-qQ',
        tags: 'apple,macbook,it,technology,notes,organised',
      },
      {
        url: 'https://i.picsum.photos/id/81/5000/3250.jpg?hmac=gFiddUc7I25C06HUIMesyaFCjSOWE3L3uDl0QSyuX4M',
        tags: 'nature,green,forest,outdoors,trees',
      },
      {
        url: 'https://i.picsum.photos/id/82/1500/997.jpg?hmac=VcdCqu9YiLpbCtr8YowUCSUD3-245TGekiXmtiMXotw',
        tags: 'orchids,asia,tree,bloom,color',
      },
      {
        url: 'https://i.picsum.photos/id/88/1280/1707.jpg?hmac=NnkwPVDBTVxHkc4rALB_fyu-OHY2usdm7iRk5El7JC4',
        tags: 'photography,trafic,cars,busy,city',
      },
      {
        url: 'https://i.picsum.photos/id/89/4608/2592.jpg?hmac=G9E4z5RMJgMUjgTzeR4CFlORjvogsGtqFQozIRqugBk',
        tags: 'grass,outdoors,green,sun,cloud,sky',
      },
      {
        url: 'https://i.picsum.photos/id/955/3872/2592.jpg?hmac=9Qkf5jGvEI5yx50cewZwqHpYnLlsAYq1vOfntqduFPo',
        tags: 'farming,acre,field,crops,outdoors',
      },
      {
        url: 'https://i.picsum.photos/id/965/5000/3337.jpg?hmac=SSRD4B1rjf9xoPaQu80GZCNdgRfUpPF2aK9hYd43gZs',
        tags: 'bridge,architecture,engineering,clouds,water',
      },
      {
        url: 'https://i.picsum.photos/id/970/3264/2448.jpg?hmac=aH-hIUJyFxqFreKtIQ62w6IKGr47AUC40nAKne0VHGE',
        tags: 'ocean,sea,blue,waves,sand,beach,holiday',
      },
    ])
  }
}
