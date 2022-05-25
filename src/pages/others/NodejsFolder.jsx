import React from 'react'

export default function NodejsFolder() {
    return (
        <div style={{ paddingTop: '112px' }}>
            <div className="container">
                <h1 className='text-4xl text-center font-bold pt-5 pb-3'>Cấu trúc thư mục nodeJs</h1>
                <p className='pl-36 text-xl'>Khi đã học qua front-end và back-end là đã biết được đường đi của dữ liệu. Vậy để làm được 1 dự án fullstack cần làm những gì:</p>
                <ul className='pl-5'>
                    <li>
                        <p>Bước 1: Đầu tiên cần phân tích và thiết kế database</p>
                    </li>
                    <li>
                        <p>Bước 2: Tiếp đó cần tạo server để trả API về cho frony-end</p>
                    </li>
                    <li>
                        <p>Bước 3: Xây dựng giao diện</p>
                    </li>
                    <li>
                        <p>Bước 4: Deploy source code lên server</p>
                    </li>
                </ul>

                <h2 className='text-2xl font-bold'>Tạo thư mục để code back-end</h2>
                <ul className='pl-5'>
                    <li>
                        <p>B1. Cần tạo 1 folder để chứa code và khởi tạo trong Vscode</p>
                    </li>
                    <li>
                        <p>B2. Chạy câu lệnh npm init trong terminal để tạo nơi lưu trữ code, đặt tên, version tương ứng.</p>
                    </li>
                    <li>
                        <p>B3. Cài các thư viện cần thiết bao gồm sequelize, express, mysql2, Cài thư viện sequelize trong môi trường dev</p>
                        <p className='text-rose-500 pl-5'>npm i sequelize express mysql2, npm i sequelize-cli --save-dev</p>
                    </li>
                    <li>
                        <p>B4. Tạo các folder cần thiết của sequelize bằng lệnh <span className='text-rose-500'>npx sequelize init</span> . Sau đó sẽ xuất hiện các folder chứa các file cơ bản như sau</p>
                        <ul className='pl-5'>
                            <li>
                                <p>folder config chứa file config.json: Chứa các setup để kết nối với slq, trong file này cần chỉnh sửa thông tin để kết nối với MySQL</p>
                            </li>
                            <li>
                                <p>folder migrations: dùng để chứa những setup cơ bản của model, là nơi chứa các bảng mặc định khi tạo model</p>

                            </li>
                            <li>
                                <p>folder models chứa file index.js: là những thiết lập sequelize cơ bản. Không cần chỉnh sửa gì trong file này. Đây là folder chứa các bảng khi khởi tạo bảng</p>
                                <img src={require('../../assets/img/index-modeljs.jpg')} alt="index model img" />
                            </li>
                            <li>
                                <p>folder seeders: dùng để viết dữ liệu giả, hay dữ liệu mặc định của 1 bảng.</p>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <p>B5. Tạo thêm 1 folder public để chứa những file dữ liệu (ảnh, file pdf...), và tạo thêm 1 file server.js để chứa code chính</p>
                        <p>file server.js có dạng như sau:</p>
                        <img src={require('../../assets/img/backend-server.jpg')} alt="" />
                    </li>
                    <li>
                        <p>B6. Tạo database trong nodejs bằng câu lệnh <span className='text-rose-500'>npx sequelize db:create</span>  trong terminal</p>
                    </li>
                    <li>
                        <p>B7. Tạo bảng trong nodejs bằng câu lệnh <span className='text-rose-500'>npx sequelize model:generate --name Tên-bảng  --attributes thuộc-tính1:kiểu-dữ-liệu</span>  (thuộc tính id sẽ được tạo tự động)</p>
                        <p>Sau khi chạy lệnh xong sữ tự động tạo ra các file model và migrate. Tuy nhiên bảng vẫn chưa được tạo trong database, cần phải chạy tiếp lệnh: <span className='text-rose-500'>npx sequelize db:migrate</span>  để chạy lệnh up (tạo bảng) trong file migrate. Nếu muốn xoá bảng mới tạo dùng lệnh: <span className='text-rose-500'>npx sequelize db:undo</span> </p>
                        <p>Lúc đó sẽ tạo ra 1 file trong folder model dạng như sau:</p>
                        <img src={require('../../assets/img/modeljs.jpg')} alt="" />
                        <p>Và 1 file trong migration có dạng:</p>
                        <img src={require('../../assets/img/migrate.jpg')} alt="migrate" />
                    </li>
                    <li>
                        <p>B8. Tạo ra 1 folder controllers để tạo các tính năng thao tác với req, res. Trong đó tạo các file controller để thao tác với từng bảng khác nhau</p>
                        <img src={require('../../assets/img/controller.jpg')} alt="" />
                    </li>
                    <li>
                        <p>B9. Tạo ra 1 folder routers để tạo các đường dẫn và các phương thức liên kết</p>
                        <p>Trong đó tạo file rootRouter như sau:</p>
                        <img src={require('../../assets/img/rootrouter.jpg')} alt="" />
                        <p>Các file router sẽ tạo như sau:</p>
                        <img src={require('../../assets/img/router.jpg')} alt="" />
                    </li>
                    <li>
                        <p>Có thể tạo thêm các service để viết các code dùng chung của các phương thức controller, gọi hàm dễ dàng</p>
                        <p>Thông thường sẽ cần tạo 1 folder middleware đẻ tạo ra các function nằm giữa nhằm kiểm các điều kiện, nếu thoả mãn thì mới cho liên kết được lưu thông. middleware được gọi trong router</p>
                        <p>middleware có dạng như sau:</p>
                        <img src={require('../../assets/img/middleware.jpg')} alt="" />
                        <p>Sau đó chèn vào router như hình định dạng router vào các phương thức cần thiết.</p>
                    </li>
                </ul>



            </div>
        </div>
    )
}
