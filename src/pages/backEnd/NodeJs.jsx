import React from 'react'

export default function NodeJs() {
    return (
        <div style={{ paddingTop: '112px' }}>
            <div className="container">
                <h1 className='text-center text-4xl font-bold pt-5 pb-3'>Tìm hiểu về NodeJs</h1>
                <p>NodeJs thực tế là thiết kế 1 server, từ server đó tạo nên các đường dẫn API và từ những API đó front-end có thể lấy dữ liệu về hoặc gửi dữ liệu lên server, thực hiệc các tính năng của 1 trang web một cách trơn tru, mượt mà. </p>
                <p>Nodejs là thiết kế các đoạn code JavaScript tạo ra các api, các phương thức, những luồn đi của dữ liệu.</p>
                <p>Các phương thức chính bắt buộc phải biết là CRUD</p>
                <p>C là create, tạo ra một đối tượng mới</p>
                <p>R là read, rà soát tất cả các đối tượng trong một lớp đối tượng có thể là lấy hết các đối tượng ra, cũng có thể lấy một số đối tượng thông qua 1 điều kiện nào đó.</p>
                <p>U là update, cập nhật những thuộc tính muốn thay đổi của đối tượng</p>
                <p>D là delete, xoá đối tượng.</p>
                <h2 className='text-xl font-bold pl-3 m-0 pt-3'>Cần chú ý 3 môi trường làm việc</h2>
                <p>1 là môi trường development: Là môi trường làm việc của developer, hay là những người viết ra những code, những đường đi của dữ liệu, thiết kế giao diện, tóm lại là front-end và back-end.</p>
                <p>2 là môi trường Staging là môi trường của tester. Ở đây, các tester sẽ kiểm tra code của dev có hoàn gặp lỗi gì không, nếu có thì gửi lại cho dev để fix lỗi, nếu ok rồi thì chuyển sang môi trường tiếp theo.</p>
                <p>3 là môi trường Production: là môi trường người dùng. Bước cuối cùng của 1 app hoặc 1 web là để người dùng hoạt động trên app, web đó.</p>
                <h2>SSR và CSR</h2>
                <p>SSR (Server side rendering) tức là tạo luôn các code html, css ngay tại server, kết nối trực tiếp với dữ liệu tạo server mà không cần thông qua một url ngoài khác nữa.</p>
                <p>CSR (Clientside rendering) tức là tạo các code html, css riêng tại front-end như tạo react-app. Sau đó kết nối với dữ liệu tại server thông qua url bên ngoài.</p>
                <h2 className='text-xl m-0 pl-3 pt-3'>Khác nhau giữa SSR và CSR</h2>
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

                <h2 className='text-xl m-0 pl-3 pt-3'>Nguyên tắc thiết kế API</h2>
                <p>Thiết kế API là thiết kế những đường dẫn để front-end có thể lấy được dữ liệu từ back-end. Tuy nhiên không phải cứ code bừa là được. Thiết kế các API cần những nguyên tắc để có thể dễ dàng trong việc bảo trì, nâng cấp code.</p>
                <p>Thiết kế api cần có ít nhất 2 thuộc tính là url và method, sẽ được quy định dựa trên những phương thức CRUD: Ví dụ:</p>
                <table className="table">
                    <thead>
                        <tr>
                            <th>url</th>
                            <th>method</th>
                            <th>mô tả</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>url/products</td>
                            <td>get</td>
                            <td>Lấy danh sách products</td>
                        </tr>
                        <tr>
                            <td>url/products/:id</td>
                            <td>get</td>
                            <td>Lấy products theo id</td>
                        </tr>
                        <tr>
                            <td>url/products</td>
                            <td>post</td>
                            <td>Lấy thêm 1 product</td>
                        </tr>
                        <tr>
                            <td>url/products/:id</td>
                            <td>put</td>
                            <td>Chỉnh sửa 1 product theo id</td>
                        </tr>
                        <tr>
                            <td>url/products/:id</td>
                            <td>delete</td>
                            <td>Xóa 1 product theo id</td>
                        </tr>
                    </tbody>
                </table>
                <p>Trong đó url là đường dẫn quy định, các method được thống nhất theo quy chuẩn như vậy, mỗi method sẽ có nhiệm vụ khác nhau. Về bản chất thì method get cũng có thể xóa được 1 đối tượng, quan trọng là những định nghĩa bên trong đó. Nhưng quy chuẩn ngữ nghĩa như vậy để những dev khác có thể hiểu phương thức đó là gì, đặc biệt là front-end.</p>

            </div>
        </div>
    )
}
