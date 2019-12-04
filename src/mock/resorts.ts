import { Observable, of } from 'rxjs'
import { delay } from 'q'

export interface IResorts {
    
        img: string,
        address: string,
        phone: number,
        weather: {
           title: string,
           icon: string,
           water: number,
           temperature: number
        },
        social_info:{ 
           title: string,
           img: string,
           followers: number,
           following: number
        }, 
        type: string
     }

export const resorts:IResorts[] = [
    // дополнительно задание pipe для форматирования телефона
{
    img: "https://kuda-spb.ru/image/370/370/uploads/0187d9b2c3219aac544e9e82d6859b8d.jpg",
    address: "г. Арканар, ул. Дона Руматы, д. 4",
    phone: 9066008700,
    weather: {
       title: "Мерзко",
       icon: "wi-night-alt-storm-showers",
       water: 1,
       temperature: -1
    },
    social_info:{ 
       title: "Эксперимент",
       img: "https://educlub.pro/images/004/720/136/4720136/610x/10.jpg",
       followers: 90,
       following: 12
    }, 
    type: "Крепость"
 },
 {
    img: "http://www.intermedia.ru/img/news/326130.jpg",
    address: "д. Простоквашино, ул. Печкина, д.2",
    phone: 7028889955,
    weather: {
       title: "Солнечно",
       icon: "wi-day-cloudy-high",
       water: 12,
       temperature: 21
    },
    social_info:{ 
       title: "Хипстер амбарный",
       img: "https://pp.userapi.com/c847120/v847120581/23441/VgxdtA4qKbY.jpg", 
       followers: 100,
       following: 20
    }, 
    type: "Деревня"
 },
 {
    img: "https://forex-images.mt5.com/photo_news/big/57d2e8ff055e2.jpg",
    address: "г. Стокгольм, ул. Разбитых люстр, д. 8",
    phone: 3332223322,
    weather: {
       title: "Как всегда",
       icon: "wi-day-lightning",
       water: 10,
       temperature: 12
    },
    social_info:{ 
       title: "Плюшкометр",
       img: "https://forum.materinstvo.ru/uploads/1225107331/post-53031-1225209422.jpg",
       followers: 1455,
       following: 598
    }, 
    type: "Город"
 },
 {
    img: "https://www.kidsreview.ru/sites/default/files/styles/card_600_400/public/webform/oreshek.jpg",
    address: "г. Шлиссельбург, третий дом от ворот",
    phone: 5559997788,
    weather: {
       title: "Бодрящая",
       icon: "wi-night-alt-storm-showers",
       water: 12,
       temperature: 16
    },
    social_info:{ 
       title: "Равновесие",
       img: "http://piligrim.com/wp-content/uploads/2019/05/oreshek-367x245.jpg",
       followers: 100,
       following: 101
    }, 
    type: "Крепость"
 }
 
]

export const resorts$: Observable<IResorts[]> = of(resorts).pipe( 
   //delay(3000) 
   );