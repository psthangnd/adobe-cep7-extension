Version1:
- CEP Version 4.0.0
- Giao diện cơ bản, clone từ honban
- Search giả lập, lấy tất cả dữ liệu (90 data)
- Nodejs không enable được

Các bước chạy:
- Bật VPN Client, để có thể truy vấn được Anama API http://amanaimages.com/webtools/corporate/search.aspx
- Chạy server bằng lệnh
	node service.js
Kiểm tra file search-data.xml được tạo ra ở cùng thư mục
- Chạy client để test trên browser bằng lệnh
	node client.js
Vào bằng browser, theo url: http://localhost:2101/amanaimages.com/data để test
- Chạy file search.html để test dữ liệu được load từ API, hoặc chạy trong plugin và search.


Version2:
- CEP Verrsion 7.0
- Nodejs gọi được
- Search thực bằng cách dùng Nodejs làm server
