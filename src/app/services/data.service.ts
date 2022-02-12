import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {first} from "rxjs/operators";
interface ListHeader {
  mother: { name: any, link: any };
  child: { name: any, link: any }[];
}
@Injectable({
  providedIn: 'root'
})
export class DataService {
  public nameComment = [
      'Cường', 'Tùng', 'Thắng', 'Huy', 'Sơn', 'Dũng', 'Hưng', 'Linh',
    'Hiếu', 'Toàn', 'Hiệp', 'Luân', 'Hậu', 'Lộc', 'Nam', 'Long', 'Minh', 'Lâm', 'Đạt', 'Cương'
    , 'Nguyên', 'Duy', 'Tuấn', 'Quang', 'Bảo Nam', 'Trung', 'Anh Tuấn', 'Gia Huy', 'Thành', 'Tuân', 'Hoàng Anh', 'Khải'
    , 'Chiến', 'Đức', 'Vương', 'Khôi ', 'Nguyên', 'Phong', 'Lợi', 'Thuận', 'Hùng', 'Tân', 'Ninh', 'Dương'
    , 'Quyền', 'Thi', 'Khánh Duy', 'Minh Quân', 'Huỳnh', 'An', 'Bảo Long', 'Khiêm', 'Khang', 'Hoàng', 'Tiến', 'Tuyên'
    , 'Khương', 'Quỳnh', 'Minh Hoàng', 'Khánh', 'Hoàng Long', 'Quân', 'Duy Anh', 'Sang', 'Lực', 'Nguyên Khang', 'Hải', 'Lập'
    , 'Hảo', 'Đăng Khôi', 'Thế Anh', 'Minh Khang', 'Hiển', 'Khoa', 'Quốc Huy', 'Quốc Khánh', 'Minh Hiếu', 'Đăng Khoa', 'Việt Anh', 'Kiên'
    , 'Thái', 'Anh', 'Vũ', 'Hoàng Nam', 'Hưởng', 'Hồng Quân', 'Hải Anh', 'Nhật Huy', 'Tuấn Anh', 'Hiền', 'Huy Hoàng', 'Việt'
    , 'Quang Huy', 'Phương', 'Nhật Anh', 'Thịnh', 'Hòa', 'Huân', 'Bách', 'Trường', 'Bình Minh',
  ];
  public lastname = [
    'Nguyễn', 'Trần', 'Lê', 'Phạm', 'Phan', 'Vũ', 'Võ', 'Hoàng', 'Huỳnh', 'Đặng', 'Bùi', 'Đỗ', 'Hồ', 'Ngô', 'Dương', 'Lý'
  ];
  public dataAddCartItem$ = new BehaviorSubject<any>([]);
  public timeWork: string[] = [
    '7h30 - 11h30', '13h30 - 17h30',
  ];
  public copyRight = '©Copyright 2021 | CÔNG TY CỔ PHẦN SẢN XUẤT KT-PACK - Giấy phép kinh doanh: 0901099386 Do sở kế hoạch và đầu tư TP Hà Nội cấp ngày 13/04/2021';
  public infoCompanyList: ListHeader[] = [
    {
      mother: {name: 'Thông tin công ty', link: ''},
      child: [{name: 'Giới thiệu công ty', link: ''},
        {name: 'Cơ hội việc làm', link: ''},
        {name: 'Ý kiến khách hàng', link: ''},
        {name: 'Danh sách đại lí', link: ''},
        {name: 'Đối tác', link: ''}]
    },
    {
      mother: {name: 'Chính sách chung', link: ''},
      child: [{name: 'Chính sách giao nhận', link: ''},
        {name: 'Chính sách bảo hành', link: ''},
        {name: 'Chính sách đổi trả hàng', link: ''},
        {name: '', link: './assets/Storage/Upload/banner/DMCA_logo-grn-btn120w.png'}]
    },
    {
      mother: {name: 'ĐIỀU KHOẢN & QUY ĐỊNH', link: ''},
      child: [{name: 'Quy định bảo mật', link: ''},
        {name: 'Quy định thanh toán', link: ''},
        {name: 'Điều khoản sử dụng', link: ''},
        {name: '', link: './assets/Storage/Upload/banner/da-thong-bao-website-voi-bo-ong-thuong.png'}]
    },
  ];
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
  public dataCart: any[] = [];  // tổng số đơn hàng trong giỏ
  public counter = 0;  // số lượng đơn hàng
  constructor() {
    this.dataAddCartItem$.subscribe((item: any[]) => {
      this.dataCart.splice(0, this.dataCart.length);
      item.forEach((item1: any) => {
        item1.quantity = 1;    // số lượng sản phẩm (mặc định là 1)
        this.dataCart.push(item1);
        this.counter = this.dataCart.length;
        // console.log('---------ii---------');
        // console.log(this.dataCart);
      });
      this.dataCart.forEach(item2 => {
        this.dataCartUnique.push(item2);
      });
      // console.log('----------data--------');
      // console.log(this.dataCartUnique);
      // this.dataCartUnique = this.unique(this.dataCartUnique);
    });
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
  public returnAvatar(fullName: string){
    const arrAvatar: string[] = [];
    // console.log('fullName', fullName);
    fullName.split(' ').forEach(item  => {
      arrAvatar.push(item.charAt(0));
    })
    arrAvatar.join('');
    // console.log('arrAvatar', arrAvatar.join(''), fullName);
    return [fullName, arrAvatar.join('')];
  }

}
