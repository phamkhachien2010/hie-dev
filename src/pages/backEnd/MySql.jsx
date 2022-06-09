import React from 'react'
import styleMysql from './backend.module.css'

export default function MySql() {
    return (
        <div className={styleMysql.back__end}>
            <div className="w-4/5 m-auto text-xs md:text-base">
                <h1 className='text-xl md:text-2xl lg:text-4xl text-center font-bold pt-3 pb-3'>MySQL, làm việc với MySQL </h1>
                <p>MySQL là một hệ thống quản trị cơ sở dữ liệu mã nguồn mở (Relational Database Management System, viết tắt là RDBMS) hoạt động theo mô hình client-server. MySQL dùng để lưu trữ cơ sở dữ liệu. </p>
                <p>Nói cách khác MySQL dùng để tạo những bảng đại diện cho 1 đối tượng có những thuộc tính của đối tượng đó. Khi client cần dữ liệu thì phải gửi cho MySQL một yêu cầu, và MySQL sẽ trả về dữ liệu nếu thoả mãn các điều kiện.</p>
                <p>Trước hết cần download mySQL workbench <a href="https://dev.mysql.com/downloads/workbench/" className='text-blue-400 ' target='_blank' >tại đây</a></p>
                <p>Sau đó tạo các database và các bảng, và làm việc với các bảng đó. Các thao tác căn bản với database và bảng:</p>
                <table className="table text-xs md:text-sm lg:text-base">
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

                <h2  className='text-lg md:text-xl lg:text-2xl font-bold pl-4 m-0'>CRUD trong MySQL</h2>
                <table className="table text-xs md:text-sm lg:text-base">
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

                <h2  className='text-2xl font-bold pl-4 mb-0 mt-3'>Những hàm, câu lệnh thường dùng trong MySQL</h2>
                <table className="table text-xs md:text-sm lg:text-base">
                    <thead>
                        <tr>
                            <th>Tên hàm</th>
                            <th>Câu lệnh</th>
                            <th>Mục đích</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Concat</td>
                            <td>select concat (những tham số cần nối) as paramName from table_name</td>
                            <td>Nối chuỗi, tạo cột mới với giá trị là chuỗi được nối đồng thời đặt tên cho cột mới</td>
                        </tr>
                        <tr>
                            <td>substr</td>
                            <td>select substr(chuỗi cần cắt, vị trí bắt đầu, số lượng ký tự cần cắt) as pram_name from table_name</td>
                            <td>Cắt chuỗi, tạo cột mới với giá trị là chuỗi được cắt đồng thời đặt tên cho cột mới</td>
                        </tr>
                        <tr>
                            <td>replace</td>
                            <td>select replace(column_name , giá trị cần thay thế, giá trị thay thế) as param_name from table_name</td>
                            <td>Thay thế chuỗi</td>
                        </tr>
                        <tr>
                            <td>reverve</td>
                            <td>select reserve(column_name) as param_name from table_name</td>
                            <td>Đảo ngược chuỗi</td>
                        </tr>
                        <tr>
                            <td>count</td>
                            <td>select count (*) as param from table_name where điều kiện;</td>
                            <td>Đếm số lượng các thành phần theo một điều kiện nào đó, nếu muốn đếm tất cả chỉ cần bỏ điều kiện where</td>
                        </tr>
                        <tr>
                            <td>max min</td>
                            <td>select max(min) (column_name) from table_name;</td>
                            <td>tìm giá trị max hoặc min của cột</td>
                        </tr>
                        <tr>
                            <td>group by</td>
                            <td>select * from table_name group by column_name;</td>
                            <td>Gom nhóm </td>
                        </tr>
                        <tr>
                            <td>distinct</td>
                            <td>select distinct colum_name from table_name;</td>
                            <td>Lấy ra những giá trị khác nhau trong 1 cột</td>
                        </tr>
                        <tr>
                            <td>order by</td>
                            <td>select * from table_name order by column_name asc;</td>
                            <td>Sắp xếp tăng dần giá trị của 1 cột (giảm dần thì dùng desc thay cho asc)</td>
                        </tr>
                        <tr>
                            <td>limit</td>
                            <td>select * from table_name limit số-lượng-muốn-lấy</td>
                            <td>Lấy bao nhiêu phần tử từ cột (lấy từ trên xuống)</td>
                        </tr>
                        <tr>
                            <td>like</td>
                            <td>select * from table_name where column_name like '%key%';</td>
                            <td>Tìm kiếm những chuỗi có chứa key</td>
                        </tr>
                    </tbody>
                </table>
                <p>Ngoài ra còn nhiều hàm khác, có thể xem thêm <a href="https://viblo.asia/p/cac-function-trong-mysql-phan-1-yMnKMnODZ7P" target='_blank' className='text-blue-400'>tại đây</a> và <a href="https://viblo.asia/p/cac-function-trong-mysql-phan-2-GrLZDvD35k0" target='_blank' className='text-blue-400'>tại đây</a></p>

                <h2  className='text-lg md:text-xl lg:text-2xl font-bold pl-4 mb-0 mt-3'>Quan hệ giữa các bảng</h2>
                <p>Trong một database không phải chỉ có một bảng, mà có nhiều bảng, và trong những bảng đó có những bảng có mối quan hệ với nhau, vậy làm thế nào để kết nối những bảng đó lại? Từ đó sinh ra những cách mà từ 1 thành phần của bảng này liên kết được với bảng khác.</p>
                <p>Có 2 loại quan hệ chính giữa các bảng: Quan hệ 1-nhiều và quan hệ nhiều-nhiều. Quan hệ 1 nhiều tức là một đối tượng này có thể có nhiều thuộc tính của đối tượng khác, và đối tượng đó chỉ thuộc về 1 đối tượng còn lại. Ví dụ 1 người và 1 xe máy là 2 đối tượng, 1 người có thể có nhiều xe máy, nhưng 1 xe máy thì chỉ đứng tên 1 người. Quan hệ nhiều-nhiều là 1 đối tượng này có thể có nhiều đối tượng kia và đối tượng kia cũng có thể có nhiều đối tượng còn lại. Ví dụ 1 người trên 1 chuyến đi thì người là 1 đối tượng, chuyến đi là 1 đối tượng. 1 người có thể có nhiều chuyến đi khác nhau, và một chuyến đi cũng có thể có nhiều người khác nhau.</p>
                <p>Như đã nói ở bên trên, mỗi bảng nên có 1 khóa chính (thường là id) để phân biệt các đối tượng. Bên cạnh đó, những bảng nhiều cần phải thêm khóa phụ (lấy luôn id của bảng 1) để biết đối tượng đó thuộc về đối tượng nào trong bảng 1. Còn với quan hệ nhiều-nhiều thì không thể tạo như vậy được, mà cần phải tạo 1 bảng phụ để chứa 2 khóa phụ của 2 bảng nhiều, đưa về mối quan hệ 1-nhiều.</p>
                <p>Trong bảng phụ cần định nghĩa những khóa phụ bằng câu lệnh: foreign key (column_name) references table_name1 (column_name)</p>
                <h2  className='text-lg md:text-xl lg:text-2xl font-bold pl-4 m-0 mt-3'>Cách truy xuất giữa các bảng quan hệ 1-nhiều</h2>
                <img src={require('../../assets/img/sql-joins-4213.jpg')} alt="" />

                <table className="table">
                    <thead>
                        <tr>
                            <th>Cách truy xuất</th>
                            <th>Cách thực hiện</th>
                            <th>Mô tả</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>inner join</td>
                            <td>select * from bảng-1 <br />
                                inner join bảng-nhiều <br />
                                on khoá-chính-bảng-1 = khoá-phụ-bảng-nhiều <br />
                                where điều-kiện-xét;
                            </td>
                            <td>Lấy những thành phần chung giữa 2 bảng</td>
                        </tr>
                        <tr>
                            <td>left join</td>
                            <td>select * from bảng-1 <br />
                                left join bảng-nhiều <br />
                                on khoá-chính-bảng-1 = khoá-phụ-bảng-nhiều <br />
                                where điều-kiện-xét;
                            </td>
                            <td>Lấy tất cả phần tử thuộc bảng select kể cả những phần tử chưa có dữ liệu trong bảng join (chưa xét điều kiện)</td>
                        </tr>
                        <tr>
                            <td>right join</td>
                            <td>select * from bảng-1 <br />
                                right join bảng-nhiều <br />
                                on khoá-chính-bảng-1 = khoá-phụ-bảng-nhiều <br />
                                where điều-kiện-xét;
                            </td>
                            <td>Lấy tất cả phần tử thuộc bảng join kể cả những phần tử chưa có dữ liệu trong bảng select (chưa xét điều kiện)</td>
                        </tr>
                        <tr>
                            <td>full join</td>
                            <td>dùng cú pháp left join union cú pháp right join</td>
                            <td>Lấy tất cả các phần tử: ít dùng</td>
                        </tr>
                    </tbody>
                </table>

                <p>Với quan hệ nhiều-nhiều cũng dùng những cú pháp join như trên tuy nhiên phải join đến 3 bảng. Ví dụ:</p>
                <div className='pl-5'>
                    select * from bảng-nhiều-1 <br />
                    inner join bảng-phụ <br />
                    on khoá-chính-bảng-nhiều-1 = khoá-phụ1-bảng-phụ <br />
                    inner join bảng-nhiều-2 <br />
                    on khoá-chính-bảng-nhiều-2 = khoá-phụ2-bảng-phụ <br />
                    where điều-kiện-xét;
                </div>

                <a className='text-blue-500' target='_blank' href="https://www.hostinger.vn/huong-dan/mysql-la-gi/">Tìm hiểu thêm về MySQL</a>
            </div>
        </div>
    )
}
