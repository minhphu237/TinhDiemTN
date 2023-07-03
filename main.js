function tinhDiem() {

  var diemToan = document.getElementById("diemToan").value.trim();
  var diemVan = document.getElementById("diemVan").value.trim();
  var diemAnh = document.getElementById("diemAnh").value.trim();
  var diemLy = document.getElementById("diemLy").value.trim();
  var diemHoa = document.getElementById("diemHoa").value.trim();
  var diemSinh = document.getElementById("diemSinh").value.trim();
  var tongDiemKhuyenKhich = document.getElementById("tongDiemKhuyenKhich").value.trim();
  var diemTrungBinh = document.getElementById("diemTrungBinh").value.trim();
  var diemUuTien = document.getElementById("diemUuTien").value.trim();


  if (!diemToan || !diemVan || !diemAnh || !diemLy || !diemHoa || !diemSinh || !tongDiemKhuyenKhich || !diemTrungBinh || !diemUuTien) {
    alert("Vui lòng nhập đầy đủ thông tin.");
    document.getElementById("ketQua").innerHTML = "";
    return;
  }

  diemToan = parseFloat(diemToan);
  diemVan = parseFloat(diemVan);
  diemAnh = parseFloat(diemAnh);
  diemLy = parseFloat(diemLy);
  diemHoa = parseFloat(diemHoa);
  diemSinh = parseFloat(diemSinh);
  tongDiemKhuyenKhich = parseFloat(tongDiemKhuyenKhich);
  diemTrungBinh = parseFloat(diemTrungBinh);
  diemUuTien = parseFloat(diemUuTien);

  var MaxDiemToan = parseFloat(document.getElementById("diemToan").max);
  var MaxDiemVan = parseFloat(document.getElementById("diemVan").max);
  var MaxDiemAnh = parseFloat(document.getElementById("diemAnh").max);
  var MaxDiemLy = parseFloat(document.getElementById("diemLy").max);
  var MaxDiemHoa = parseFloat(document.getElementById("diemHoa").max);
  var MaxDiemSinh = parseFloat(document.getElementById("diemSinh").max);

  var maxTongDiemKhuyenKhich = parseFloat(document.getElementById("tongDiemKhuyenKhich").max);
  var maxDiemTrungBinh = parseFloat(document.getElementById("diemTrungBinh").max);
  var maxDiemUuTien = parseFloat(document.getElementById("diemUuTien").max);

  var errorMessage = ""; // Biến lưu thông báo lỗi

  //Kiểm tra điểm toán nhập vào
  if (isNaN(diemToan) || diemToan > MaxDiemToan) {
    errorMessage += "Vui lòng nhập điểm môn Toán hợp lệ.\n";
    document.getElementById("ketQua").innerHTML = "";
  }

  //Kiểm tra điểm văn nhập vào
  if (isNaN(diemVan) || diemVan > MaxDiemVan) {
    errorMessage += "Vui lòng nhập điểm môn Văn hợp lệ.\n";
    document.getElementById("ketQua").innerHTML = "";
  }

  //Kiểm tra điểm ngoại ngữ nhập vào
  if (isNaN(diemAnh) || diemAnh > MaxDiemAnh) {
    errorMessage += "Vui lòng nhập điểm ngoại ngữ hợp lệ.\n";
    document.getElementById("ketQua").innerHTML = "";
  }

  //Kiểm tra điểm lý/sử nhập vào
  if (isNaN(diemLy) || diemLy > MaxDiemLy) {
    errorMessage += "Vui lòng nhập điểm môn Lý hoặc Sử hợp lệ.\n";
    document.getElementById("ketQua").innerHTML = "";
  }

  //Kiểm tra điểm môn hóa/ địa nhập vào
  if (isNaN(diemHoa) || diemHoa > MaxDiemHoa) {
    errorMessage += "Vui lòng nhập điểm môn Hóa hoặc Địa hợp lệ.\n";
    document.getElementById("ketQua").innerHTML = "";
  }

  //Kiểm tra điểm môn sinh/gd nhập vào
  if (isNaN(diemSinh) || diemSinh > MaxDiemSinh) {
    errorMessage += "Vui lòng nhập điểm môn Sinh hoặc GDCD hợp lệ.\n";
    document.getElementById("ketQua").innerHTML = "";
  }

  //Kiểm tra tổng điểm kk nhập vào
  if (isNaN(tongDiemKhuyenKhich) || tongDiemKhuyenKhich > maxTongDiemKhuyenKhich) {
    errorMessage += "Vui lòng nhập tổng điểm khuyến khích hợp lệ (nhập 0 nếu không có).\n";
    document.getElementById("ketQua").innerHTML = "";
  }

  //Kiểm tra điểm TB cả năm 12 nhập vào
  if (isNaN(diemTrungBinh) || diemTrungBinh > maxDiemTrungBinh) {
    errorMessage += "Vui lòng nhập điểm TB cả năm 12 hợp lệ.\n";
    document.getElementById("ketQua").innerHTML = "";
  }

  //Kiểm tra điểm ưu tiên nhập vào
  if (isNaN(diemUuTien) || diemUuTien > maxDiemUuTien) {
    errorMessage += "Vui lòng nhập điểm ưu tiên KV,DT hợp lệ (nhập 0 nếu không có).\n";
    document.getElementById("ketQua").innerHTML = "";
  }

  if (errorMessage !== "") {
    alert(errorMessage); // Hiển thị thông báo lỗi
    return;
  }

  var diemThiTotNghiep = (((diemToan + diemVan + diemAnh + ((diemLy + diemHoa + diemSinh) / 3) + tongDiemKhuyenKhich) / 4) * 7 + (diemTrungBinh * 3)) / 10 + diemUuTien;

  document.getElementById("ketQua").innerHTML = "Điểm thi TN của bạn là: " + diemThiTotNghiep.toFixed(2);

}