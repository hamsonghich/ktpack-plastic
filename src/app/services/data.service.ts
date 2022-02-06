import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // public dataHeader = [
  //   {mother: {name: 'TRANG CHỦ', link: '/trang-chu'}, child: [{name: '', link: ''}, ]},
  //   {mother: {name: 'GIỚI THIỆU', link: '/gioi-thieu'}, child: [{name: '', link: ''}, ]},
  //   {
  //     mother: {name: 'THÙNG NHỰA DANPLA', link: '/thung-nhua-danpla'},
  //     child: [],
  //   },
  //   {
  //     mother: {name: 'VÁCH NHỰA DANPLA', link: '/vach-nhua-danpla'},
  //     child: [],
  //   },
  //   {
  //     mother: {name: 'XỐP EVA - XỐP PE FOAM', link: '/xop-eva-pe-foam'},
  //     child: [],
  //   },
  //   {
  //     mother: {name: 'XỐP BÓNG KHÍ', link: '/xop-bong-khi'},
  //     child: [],
  //   },
  //   {mother: {name: 'TIN TỨC', link: '/tin-tuc'}, child: [{name: '', link: ''}, ]},
  //   {mother: {name: 'LIÊN HỆ', link: '/lien-he'}, child: [{name: '', link: ''}, ]},
  // ];
  public dataCartUnique:any[] = [];
  public dataTotalProductDetails = [
    {
      productMain: {name:'thùng nhựa danpla', link: 'thung-nhua-danpla'},
      productMainBrand: {name: 'thùng nhựa danpla 1', link: 'thung-nhua-danpla-1'},
      productDetails: {name: 'thùng nhựa danpla 1.1', link: 'thung-nhua-danpla-1.1'},
      addCart: false,
      img: [
        {
          name: 'thùng nhựa danpla 1.1',
          link: 'thùng nhựa danpla 1.1'
        },
        {name: 'thùng nhựa danpla 1.1', link: 'thùng nhựa danpla 1.1'},
        {name: 'thùng nhựa danpla 1.1', link: 'thùng nhựa danpla 1.1'},
        {name: 'thùng nhựa danpla 1.1', link: ''},
        {name: 'thùng nhựa danpla 1.1', link: ''},
        {name: 'thùng nhựa danpla 1.1', link: ''},
      ],
      address: {name: 'Hưng Yên'},
      price: {name: 'Liên hệ'},
      sellNumber: {number: 0},
      like: false,
      star: {number: 0},
      discount: {number: 0},
      evaluate: {number: 0},
      description: [
        {title:'', content: ''},
        {title:'', content: ''},
        {title:'', content: ''},
        {title:'', content: ''},
      ],
    },
    {
      productMain: {name:'thùng nhựa danpla', link: 'thung-nhua-danpla'},
      productMainBrand: {name: 'thùng nhựa danpla 1', link: 'thung-nhua-danpla-1'},
      productDetails: {name: 'thùng nhựa danpla 1.2', link: 'thung-nhua-danpla-1.2'},
      addCart: false,
      img: [
        {
          name: 'thùng nhựa danpla 1.1',
          link: 'thùng nhựa danpla 1.1'
        },
        {name: 'thùng nhựa danpla 1.1', link: 'thùng nhựa danpla 1.1'},
        {name: 'thùng nhựa danpla 1.1', link: 'thùng nhựa danpla 1.1'},
        {name: 'thùng nhựa danpla 1.1', link: ''},
        {name: 'thùng nhựa danpla 1.1', link: ''},
        {name: 'thùng nhựa danpla 1.1', link: ''},
      ],
      address: {name: 'Hưng Yên'},
      price: {name: 'Liên hệ'},
      sellNumber: {number: 0},
      like: false,
      star: {number: 0},
      discount: {number: 0},
      evaluate: {number: 0},
      description: [
        {title:'', content: ''},
        {title:'', content: ''},
        {title:'', content: ''},
        {title:'', content: ''},
      ],
    },
    {
      productMain: {name:'thùng nhựa danpla', link: 'thung-nhua-danpla'},
      productMainBrand: {name: 'thùng nhựa danpla 2', link: 'thung-nhua-danpla-2'},
      productDetails: {name: 'thùng nhựa danpla 2', link: 'thung-nhua-danpla-2'},
      addCart: false,
      img: [
        {
          name: 'thùng nhựa danpla 1.1',
          link: 'thùng nhựa danpla 1.1'
        },
        {name: 'thùng nhựa danpla 1.1', link: 'thùng nhựa danpla 1.1'},
        {name: 'thùng nhựa danpla 1.1', link: 'thùng nhựa danpla 1.1'},
        {name: 'thùng nhựa danpla 1.1', link: ''},
        {name: 'thùng nhựa danpla 1.1', link: ''},
        {name: 'thùng nhựa danpla 1.1', link: ''},
      ],
      address: {name: 'Hưng Yên'},
      price: {name: 'Liên hệ'},
      sellNumber: {number: 0},
      like: false,
      star: {number: 0},
      discount: {number: 0},
      evaluate: {number: 0},
      description: [
        {title:'', content: ''},
        {title:'', content: ''},
        {title:'', content: ''},
        {title:'', content: ''},
      ],
    },
    {
      productMain: {name:'thùng nhựa danpla', link: 'thung-nhua-danpla'},
      productMainBrand: {name: 'thùng nhựa danpla 2', link: 'thung-nhua-danpla-2'},
      productDetails: {name: 'thùng nhựa danpla 2.2', link: 'thung-nhua-danpla-2.2'},
      addCart: false,
      img: [
        {
          name: 'thùng nhựa danpla 1.1',
          link: 'thùng nhựa danpla 1.1'
        },
        {name: 'thùng nhựa danpla 1.1', link: 'thùng nhựa danpla 1.1'},
        {name: 'thùng nhựa danpla 1.1', link: 'thùng nhựa danpla 1.1'},
        {name: 'thùng nhựa danpla 1.1', link: ''},
        {name: 'thùng nhựa danpla 1.1', link: ''},
        {name: 'thùng nhựa danpla 1.1', link: ''},
      ],
      address: {name: 'Hưng Yên'},
      price: {name: 'Liên hệ'},
      sellNumber: {number: 0},
      like: false,
      star: {number: 0},
      discount: {number: 0},
      evaluate: {number: 0},
      description: [
        {title:'', content: ''},
        {title:'', content: ''},
        {title:'', content: ''},
        {title:'', content: ''},
      ],
    },
    {
      productMain: {name:'thùng nhựa danpla', link: 'thung-nhua-danpla'},
      productMainBrand: {name: 'thùng nhựa danpla 3', link: 'thung-nhua-danpla-3'},
      productDetails: {name: 'thùng nhựa danpla 3.1', link: 'thung-nhua-danpla-3.1'},
      addCart: false,
      img: [
        {
          name: 'thùng nhựa danpla 1.1',
          link: 'thùng nhựa danpla 1.1'
        },
        {name: 'thùng nhựa danpla 1.1', link: 'thùng nhựa danpla 1.1'},
        {name: 'thùng nhựa danpla 1.1', link: 'thùng nhựa danpla 1.1'},
        {name: 'thùng nhựa danpla 1.1', link: ''},
        {name: 'thùng nhựa danpla 1.1', link: ''},
        {name: 'thùng nhựa danpla 1.1', link: ''},
      ],
      address: {name: 'Hưng Yên'},
      price: {name: 'Liên hệ'},
      sellNumber: {number: 0},
      like: false,
      star: {number: 0},
      discount: {number: 0},
      evaluate: {number: 0},
      description: [
        {title:'', content: ''},
        {title:'', content: ''},
        {title:'', content: ''},
        {title:'', content: ''},
      ],
    },
    {
      productMain: {name:'thùng nhựa danpla', link: 'thung-nhua-danpla'},
      productMainBrand: {name: 'thùng nhựa danpla 4', link: 'thung-nhua-danpla-4'},
      productDetails: {name: 'thùng nhựa danpla 4.1', link: 'thung-nhua-danpla-4.1'},
      addCart: false,
      img: [
        {
          name: 'thùng nhựa danpla 1.1',
          link: 'thùng nhựa danpla 1.1'
        },
        {name: 'thùng nhựa danpla 1.1', link: 'thùng nhựa danpla 1.1'},
        {name: 'thùng nhựa danpla 1.1', link: 'thùng nhựa danpla 1.1'},
        {name: 'thùng nhựa danpla 1.1', link: ''},
        {name: 'thùng nhựa danpla 1.1', link: ''},
        {name: 'thùng nhựa danpla 1.1', link: ''},
      ],
      address: {name: 'Hưng Yên'},
      price: {name: 'Liên hệ'},
      sellNumber: {number: 0},
      like: false,
      star: {number: 0},
      discount: {number: 0},
      evaluate: {number: 0},
      description: [
        {title:'', content: ''},
        {title:'', content: ''},
        {title:'', content: ''},
        {title:'', content: ''},
      ],
    },
  ]

  constructor() {
  }
  public getRandomInt(min: number, max: number): any {
    min = Math.ceil(min);
    max = Math.floor(max);
    return (Math.random() * (max - min) + min).toFixed(2);
  }

  public getRandomInt1(min: number, max: number): any {
    min = Math.ceil(min);
    max = Math.floor(max);
    return (Math.random() * (max - min) + min).toFixed(0);
  }

  public removeDauTV(str: string): any {
    str = str.toString().replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
    str = str.toString().replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
    str = str.toString().replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
    str = str.toString().replace(/ì|í|ị|ỉ|ĩ/g, 'i');
    str = str.toString().replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
    str = str.toString().replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
    str = str.toString().replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
    str = str.toString().replace(/đ/g, 'd');
    str = str.toString().replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, 'A');
    str = str.toString().replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, 'E');
    str = str.toString().replace(/Ì|Í|Ị|Ỉ|Ĩ/g, 'I');
    str = str.toString().replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, 'O');
    str = str.toString().replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, 'U');
    str = str.toString().replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, 'Y');
    str = str.toString().replace(/Đ/g, 'D');
    // Combining Diacritical Marks
    str = str.toString().replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ''); // huyền, sắc, hỏi, ngã, nặng
    str = str.toString().replace(/\u02C6|\u0306|\u031B/g, ''); // mũ â (ê), mũ ă, mũ ơ (ư)
    return str.toLowerCase();
  }

  public unique(arr: any[]): any {
    const newArr: any[] = [];
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < arr.length; i++) {
      if (!newArr.includes(arr[i])) {
        newArr.push(arr[i]);
      }
    }
    return newArr;
  }

  public checkUrl(): boolean {
    if (window.location.href.includes('admin')) {
      return true;
    }
    return false;
  }
}
