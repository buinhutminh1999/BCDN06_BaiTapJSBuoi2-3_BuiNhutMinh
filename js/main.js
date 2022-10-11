/**
 * Bài 1: Viết chương trình tính lương nhân viên
 * Khối 1: oneSalary = 100.000, numDay
 * Khối 2: Các bước xử lý
 *  B1: Tạo hàm
 *  B2: Khai báo biến và lưu giá trị input
 *  B3: Lập công thức tính toán
 *      salary = Number(oneSalary) * Number(numDay); 
 *  B4: Thay đổi kết quả ra thẻ innerHTML
 *  B5: Click button để gọi hàm
 * Khối 3: Tổng lương nhân viên
 * oneSalery * numDay
 * Khối 3: salary
 */

 function luongNV() {
    var oneSalary = document.getElementById('oneSalary').value;
    var numDay = document.getElementById('numDay').value
    var result = Number(oneSalary) * Number(numDay)
    document.getElementById('rsSalary').innerHTML = 'Lương một ngày làm là: ' + result + ' ' + 'VND';
}

document.getElementById('btnSalary').onclick = luongNV

/**
 * Bài 2: Viết chương trình nhập vào 5 số thực tùy ý
 * Khối 1: soThuc1, soThuc2, soThuc3, soThuc4, soThuc5
 * Khối 2: Các bước xử lý
 *  B1: Tạo hàm
 *  B2: Khai báo biến và lưu giá trị input
 *  B3: Lập công thức tính toán 
 *  (soThuc1 + soThuc2 + soThuc3 + soThuc4 + soThuc5 ) / 5
 *  B3: Thông báo kết quả ra thẻ innerHTML
 *  B4: Click button để gọi hàm
 * Khối 3: Gía trị trung bình
 */

function tinhTB() {
    var soThuc1 = document.getElementById('soThuc1').value;
    var soThuc2 = document.getElementById('soThuc2').value;
    var soThuc3 = document.getElementById('soThuc3').value;
    var soThuc4 = document.getElementById('soThuc4').value;
    var soThuc5 = document.getElementById('soThuc5').value;
    var rsTB = (Number(soThuc1) + Number(soThuc2) + Number(soThuc3) + Number(soThuc4) + Number(soThuc5)) / 5;
    document.getElementById('rsTB').innerHTML = 'Gía trị trung bình là: ' + rsTB;
}

document.getElementById('btnTB').onclick = tinhTB;
/**
 * Bài 3: Quy đổi tiền
 * Khối 1: 1 USD = 23.500 vnd
 * Khối 2: Các bước xử lý
 *  B1: Tạo hàm
 *  B2: Khai báo giá biến và lưu giá trị input 
 *  B3: Lập công thức tính toán
 *  usdtovnd = vnd * USD
 *  B4: Thông báo kết quả ra thẻ innerHTML
 * Khối 3: số tiền sau khi quy đổi
 */
function chuyenDoi() {
    var usd = 23500;
    var vnd = document.getElementById('us').value
    var coverVND = Number(vnd) * Number(usd);
    document.getElementById('rsCover').innerHTML = 'Số tiền USD sau khi quy đổi là:' + ' ' + coverVND + ' ' + 'VND';
}

document.getElementById('btnCover').onclick = chuyenDoi;
/**
 * Bài 4: Tính diện tích, chu vi hình chữ nhật
 * Khối 1: chiều dài, chiều rộng 
 * Khối 2: Các bước xử lý
 *  B1: Tạo hàm
 *  B2: Khai báo giá biến và lưu giá trị input 
 *  B3: Lập công thức tính toán   
 *  dienTich = dai * rong, chuVi = (dai + rong ) * 2
 *  B4: Thông báo kết quả ra thẻ innerHTML
 * Khối 3: dientich, chuvi
 */

function tinhDTCV() {
    var chieuDai = document.getElementById('chieuDai').value;
    var chieuRong = document.getElementById('chieuRong').value;
    var dienTich = Number(chieuDai) * Number(chieuRong);
    var chuVi = (Number(chieuDai) + Number(chieuRong))*2
    document.getElementById('rsDTCV').innerHTML = 'Diện tích là: ' + ' ' + dienTich + '<br>' + 'Chu vi là:' + ' ' + chuVi;
}

document.getElementById('btnDTCV').onclick = tinhDTCV;
/**
 * Bài 5: Tính tổng 2 ký số
 * Khối 1: so
 * Khối 2: Các bước xử lý
 *  B1: Tạo hàm
 *  B2: Khai báo giá biến và lưu giá trị input 
 *  B3: Lập công thức tính toán
 *  sohangDV= num % 10 
 *  sohangChuc = num / 10 
 *  B4: Thông báo kết quả ra thẻ innerHTML
 * Khối 3: Tổng 2 ký số
 */

function tinhTong2KySo() {
    var so = document.getElementById('so').value;
    var soHangChuc = Math.floor(so) / 10;
    var soHangDV = Number(so) % 10;
    var tongHaiKySo = Number(soHangChuc) + Number(soHangDV);
    document.getElementById('rsSO').innerHTML = 'Tổng 2 ký số là: ' + ' ' + Math.floor(tongHaiKySo);
}

document.getElementById('btnSo').onclick = tinhTong2KySo;