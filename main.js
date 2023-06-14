/*const isVuKOdeptrai = true
console.log('Vu co dep trai khong', isVuKOdeptrai)
const isDongKOdeptrai = false
console.log('Dong co dep trai khong', isDongKOdeptrai)
console.log('Kieudu lieu tren la', typeof isVuKOdeptrai, typeof isDongKOdeptrai)
//Phân biệt đâu là ture, đâu là false => đi tìm falsy
/**
 * Những giá trị falsy: 
 * 0; "", null; undefined; NaN; false; -0; On, 
 */
/**Toán tử so sánh
 * >; >=; <=, ==, ===
*/
/*let diemToan1 = +prompt('Diem toan vao lop 10 la:')
let diemToan2 = +prompt('Diem toan vao lop 10 la:')
let result = diemToan1 === diemToan2
console.log('Điểm toán 1 có cao hơn điểm toán 2 không', result);
console.log('Kieu du lieu của result', typeof result);
console.log(5 == '5')
console.log(5 === '5')*/
/**Toán tử logic, biểu thức điều kiện
 * || (or) => tương đối, một bên đúng thì trả về kết quả cuối cùng là true
 * && (and) => tuyệt đối, cả hai bên phải đúng thì mới trả về kết quả cuối cùng là true
 * !true; !false (not) => trả về giá trị ngược lại true thì trả về false, false thì trả về true 
 /* CÓ 3 CÁCH KHAI BÁO BIẾN
 1. Var toàn cục 
 2. Let cục bộ
 3. Const cục bộ 
/*let isHanhIT = false 
let isHanhE = true 
console.log('chị Hạnh có thu nhập cao hay không', isHanhIT || isHanhE)
console.log('Chị Hạnh có thu nhập cao không', isHanhE && isHanhIT)
console.log('Chị Hạnh có mua được biệt thự không', !isHanhE)
console.log('Chị Hạnh có mua được đất hay không', !isHanhIT)
/**
 * Biểu thức điều kiện
 * ví dụ: a>b && b==1
 * Luôn trả về kiểu giá trị boolean có hai giá trị true hoặc false 
 */
/**
 * CẤU TRÚC CÂU ĐIỀU KIỆN MỆNH ĐỀ IF ELSE
 * IF ==> nếu
 * () ==> biểu thức điều kiện chỉ trả về kết quả boolean
 * {} ==> thực hiện các thao tác, logic ở bên trong khi mà biểu thức điều kiện trả về TRUE
 * ESLE ==> thực hiện những logic khi biểu thức điều kiện trên không thỏa mãn 
 */
/*let inputNumber = +prompt('Nhập từ 1 đến 10 để tìm số may mắn:')
if (inputNumber == 5) { alert('Nhất bạn ròiiii')} else {alert('Thua rầu má ơiiii') }*/
// lấy thông tin người dùng nhập vào nếu tuổi lớn hơn 18 thì mói được kết hôn nếu không thì vào tù
/*let inputYear = +prompt('Nhập vào số tuổi của bạn:')
if (inputYear >= 18) { alert('Duoc phep ket hon') } else { alert('Khong duoc phep ket hon') }
// nhap vao mot so so chan hay le 
let inputNumber = +prompt('Nhap vao mot so bat ky')
let r = inputNumber % 2
if (r == 0) { alert('So chan') } else { alert('So le') }
/**
 * CÁC DẠNG IF ELSE 
 * Chỉ có 1 IF
 * Nhiều IF, IF-ELSE 
 */
/*let a = +prompt('Nhap vao a de tinh phuong trinh bac nhat:')
let b = +prompt('Nhap vao so b de tinh phupng trinh bac nhat:')
let x=(-b)/a 
if (a == 0 && b == 0) { alert('Phuong trinh vo so nghiem') }
else if (a == 0 && b != 0) { alert('Phuong trinh vo nghiem') }
else if (a != 0) { alert('Phuong trinh co nghiem la'+ x) }
else { alert('Khong co nghia') }*/
// cho phep nguoi dung nhap vao gioi tinh tuoi => neu tren 18 tuoi thi nguoi dan ong truong thanh, phu nu quyen ru, tieu thit tuoi, be gai
/*let gender = prompt('Nhap vao gioi tinh cua ban:')
let age = +prompt('Nhap vao tuoi cua ban: ')
if (gender == 'nam' && age >= 18) { alert('Dan ong truong thanh') }
else if (gender == 'nam' && age < 18) { alert('Tieu thit tuoi') }
else if (gender == 'nu' && age >= 18) { alert('Phu nu truong thanh') }
else if (gender == 'nu' && age < 18) { alert('Be gai xinh xan') }
else { alert('Tím lịm xìm xiêm kìa mấy ba mấy má ưiiiiii') }*/
/*let height = +prompt('Nhap vao chieu cao cua ban:')
let weight = +prompt('Nhap vao can nang cua ban:')
let BMI = weight / (height * height)
if (BMI < 18.5) { alert('Gay') }
else if (BMI > 18.5 && BMI < 24.9) { alert('Binh thuong') }
else if (BMI >= 25 && BMI <29.9) { alert('Thua can') }
else if (BMI > 25 && BMI <= 29.9) { alert('Tien beo phi') }
else if (BMI > 30 && BMI < 34.9) { alert('Beo phi do I') }
else if (BMI > 35 && BMI < 39.9) { alert('Beo phi do II') }
else  {alert('Beo phi do III')}*/
/*let year = +prompt('Nhập vao nam bat ky')
let r=year%4
if (r == 0) {
    if ((year % 100) != 0) { alert('Day la nam nhuan') }
    else if ((year % 100) == 0 && (year % 400) == 0) { alert('Day la nam nhuan') }
    else if ((year%100)==0 && (year%400)!=0) {alert('Day khong phai nam nhuan')}
}
else {alert('Day khong phai la nam nhuan')}*/
// kiểm tra số đó phải số chẵn không nếu là số chẵn thì có chia hết cho 5 và 10 không
/*let inputNumber = +prompt('Nhap vao mot so bat ky')
let r = inputNumber % 2
let r1 = inputNumber % 5 
let r2 = inputNumber%10
if (r == 0) {
    if (r1 == 0 && r2 == 0) { alert('So chia het cho 5 va 10') }
    else if (r1 == 0 && r2 != 0) { alert('So chia het cho 5') }
    else if (r1 != 0 || r2 != 0) { alert('Day la so chan') }
}
else {alert('Day khong la so chan')}*/
// CÂU LỆNH IF ELSE




