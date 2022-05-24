import React from 'react'

export default function NodeJs() {
    return (
        <div style={{ paddingTop: '112px' }}>
            <h1>Tìm hiểu về NodeJs</h1>
            <p>NodeJs thực tế là thiết kế 1 server, từ server đó tạo nên các đường dẫn API và từ những API đó front-end có thể lấy dữ liệu về hoặc gửi dữ liệu lên server, thực hiệc các tính năng của 1 trang web một cách trơn tru, mượt mà. </p>
            <p>Nodejs là thiết kế các đoạn code JavaScript tạo ra các api, các phương thức, những luồn đi của dữ liệu.</p>
            <p>Các phương thức chính bắt buộc phải biết là CRUD</p>
            <p>C là create, tạo ra một đối tượng mới</p>
            <p>R là read, rà soát tất cả các đối tượng trong một lớp đối tượng có thể là lấy hết các đối tượng ra, cũng có thể lấy một số đối tượng thông qua 1 điều kiện nào đó.</p>
            <p>U là update, cập nhật những thuộc tính muốn thay đổi của đối tượng</p>
            <p>D là delete, xoá đối tượng.</p>
            <h2>Cần chú ý 3 môi trường làm việc</h2>
            <p>1 là môi trường development: Là môi trường làm việc của developer, hay là những người viết ra những code, những đường đi của dữ liệu, thiết kế giao diện, tóm lại là front-end và back-end.</p>
            <p>2 là môi trường Staging là môi trường của tester. Ở đây, các tester sẽ kiểm tra code của dev có hoàn gặp lỗi gì không, nếu có thì gửi lại cho dev để fix lỗi, nếu ok rồi thì chuyển sang môi trường tiếp theo.</p>
            <p>3 là môi trường Production: là môi trường người dùng. Bước cuối cùng của 1 app hoặc 1 web là để người dùng hoạt động trên app, web đó.</p>
            <h2>SSR và CSR</h2>
            <p>SSR (Server side rendering) tức là tạo luôn các code html, css ngay tại server, kết nối trực tiếp với dữ liệu tạo server mà không cần thông qua một url ngoài khác nữa.</p>
            <p>CSR (Clientside rendering) tức là tạo các code html, css riêng tại front-end như tạo react-app. Sau đó kết nối với dữ liệu tại server thông qua url bên ngoài.</p>
            <p>Khác nhau giữa SSR và CSR</p>
            <table className="table">
                <thead>
                    <tr>
                        <th>So sánh</th>
                        <th>SEO</th>
                        <th>Tốc độ tải lần đầu</th>
                        <th>Hiệu năng</th>
                        <th>Trang tĩnh</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>SSR</td>
                        <td>Tốt hơn</td>
                        <td>Tốt hơn</td>
                        <td>Không tốt bằng</td>
                        <td>Tốt hơn</td>
                    </tr>
                    <tr>
                        <td>CSR</td>
                        <td>Không tốt bằng</td>
                        <td>Tốt hơn</td>
                        <td>Không tốt bằng</td>
                        <td>Không tốt bằng</td>
                    </tr>
                </tbody>
            </table>
            <p>Ứng dụng dùng SSR hay CSR. Tuỳ thuộc vào mục đích của trang, mếu cần maketing thì SSR tốt hơn vì SEO tốt hơn, còn mục đích là quản lý thì dùng CSR vì hiệu năng của CSR sẽ tốt hơn</p>

            <h2>MySQL, làm việc với MySQL </h2>
            <p>MySQL là một hệ thống quản trị cơ sở dữ liệu mã nguồn mở (Relational Database Management System, viết tắt là RDBMS) hoạt động theo mô hình client-server. MySQL dùng để lưu trữ cơ sở dữ liệu. </p>
            <p>Nói cách khác MySQL dùng để tạo những bảng đại diện cho 1 đối tượng có những thuộc tính của đối tượng đó. Khi client cần dữ liệu thì phải gửi cho MySQL một yêu cầu, và MySQL sẽ trả về dữ liệu nếu thoả mãn các điều kiện.</p>
            <p>Trước hết cần download mySQL workbench <a href="https://dev.mysql.com/downloads/workbench/" className='text-blue-400 ' target='_blank' >tại đây</a></p>
            <p>Sau đó tạo các database và các bảng, và làm việc với các bảng đó. Các thao tác căn bản với database và bảng:</p>
            <table className="table">
                <thead>
                    <tr>
                        <th>Thao tác</th>
                        <th>Câu lệnh</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Tạo 1 database</td>
                        <td>create database database_name</td>
                    </tr>
                    <tr>
                        <td>Xoá database</td>
                        <td>drop database if exists database_name</td>
                    </tr>
                    <tr>
                        <td>Sử dụng database</td>
                        <td>use database_name</td>
                    </tr>
                    <tr>
                        <td>Tạo 1 bảng</td>
                        <td>create table table_name (column_name1 data_type, column_name2 data_type ...</td>
                    </tr>
                    <tr>
                        <td>Chỉnh data-type, sửa cột</td>
                        <td>alter table table_name modify column column_name data_type</td>
                    </tr>
                    <tr>
                        <td>Thêm cột</td>
                        <td>alter table table_name add column column_name data_type</td>
                    </tr>
                    <tr>
                        <td>Xoá bảng</td>
                        <td>drop database if exists database_name</td>
                    </tr>
                    <tr>
                        <td>Thêm dữ liệu vào bảng</td>
                        <td>insert into table_name(Các tên cột mới đặt) values( Giá trị của các cột tương ứng)</td>
                    </tr>
                    <tr>
                        <td>Tạo khoá chính cho bảng (thường là id)</td>
                        <td>alter table table_name modify column column_name data_type primary key auto_increment;</td>
                    </tr>
                    <tr>
                        <td>Ràng buộc null</td>
                        <td>alter table table_name modify column column_name data_type not null;</td>
                    </tr>
                    <tr>
                        <td>Ràng buộc giá trị mặc định</td>
                        <td>alter table table_name modify column column_name data_type default "default_value";</td>
                    </tr>
                </tbody>
            </table>

            <h4>CRUD trong MySQL</h4>
            <table className="table">
                <thead>
                    <tr>
                        <th>Thao tác</th>
                        <th>Câu lệnh</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Thêm dữ liệu</td>
                        <td>insert into table_name(tên các cột) <br />
                            value(giá trị của các ô tương ứng)
                        </td>
                    </tr>
                    <tr>
                        <td>Đọc dữ liệu</td>
                        <td>select * from table_name (lấy ra tất cả các thuộc tính) <br />
                            select column_name1, colum_name2 from table_name (lấy ra những thuộc tính được gọi) <br />
                            select column_name as ten_cot from table_name (Lấy giá trị của cột được gọi và đổi tên cột từ column_name thành ten_cot) <br />
                            where column_name điều kiện  (Lấy những giá trị đã gọi trên theo 1 điều kiện nào đó của 1 cột nào đó)
                        </td>
                    </tr>
                    <tr>
                        <td>Update dữ liệu</td>
                        <td>update table_name set column_name1=value <br />
                            where column_name2=value;
                        </td>
                    </tr>
                    <tr>
                        <td>Xoá dữ liệu</td>
                        <td>delete from table_name <br />
                            where column_name (điều kiện)
                        </td>
                    </tr>
                </tbody>
            </table>

            <h4></h4>


            <a className='text-blue-500' target='_blank' href="https://www.hostinger.vn/huong-dan/mysql-la-gi/">Tìm hiểu sâu về MySQL</a>
        </div>
    )
}
