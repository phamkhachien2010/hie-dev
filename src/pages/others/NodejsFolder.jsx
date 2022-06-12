import React from 'react';
import styleOther from './other.module.css'

export default function NodejsFolder() {
    return (
        <div className={styleOther.other}>
            <div className='w-4/5 m-auto text-xs md:text-sm lg:text-base'>
                <h1 className='text-xl md:text-2xl lg:text-4xl text-center font-bold py-3'>Cấu trúc thư mục nodeJs</h1>
                <p className='pl-3 text-sm md:text-lg lg:text-xl'>Khi đã học qua front-end và back-end là đã biết được đường đi của dữ liệu. Vậy để làm được 1 dự án fullstack cần làm những gì:</p>
                <ul className='pl-4'>
                    <li>
                        <p>Bước 1: Đầu tiên cần phân tích và thiết kế database</p>
                    </li>
                    <li>
                        <p>Bước 2: Tiếp đó cần tạo server để trả API về cho front-end</p>
                    </li>
                    <li>
                        <p>Bước 3: Xây dựng giao diện</p>
                    </li>
                    <li>
                        <p>Bước 4: Deploy source code lên server</p>
                    </li>
                </ul>

                <h2 className='text-lg md:text-xl lg:text-2xl font-bold'>Tạo thư mục để code back-end</h2>
                <ul className='pl-5'>
                    <li>
                        <p>B1. Cần tạo 1 folder để chứa code và khởi tạo trong Vscode</p>
                    </li>
                    <li>
                        <p>B2. Chạy câu lệnh npm init trong terminal để tạo nơi lưu trữ code, đặt tên, version tương ứng.</p>
                    </li>
                    <li>
                        <p>B3. Cài các thư viện cần thiết bao gồm sequelize, express, mysql2, cors, cài thư viện sequelize-cli, nodemon trong môi trường dev</p>
                        <p className='text-rose-500 pl-5'>npm i sequelize express mysql2, npm install --save-dev sequelize-cli npm install --save-dev nodemon</p>
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
                                <p> <span className='font-bold bg-rose-400'> folder models</span> chứa file <span className='font-bold bg-rose-400'> index.js</span>: là những thiết lập sequelize cơ bản. Không cần chỉnh sửa gì trong file này. Đây là folder chứa các bảng khi khởi tạo bảng</p>
                                <img src={require('../../assets/img/index-modeljs.jpg')} alt="index model img" />
                            </li>
                            <li>
                                <p> <span className='font-bold bg-rose-400'>folder seeders</span>: dùng để viết dữ liệu giả, hay dữ liệu mặc định của 1 bảng.</p>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <p>B5. Tạo thêm 1 <span className='font-bold bg-rose-400'>folder public</span> để chứa những file dữ liệu (ảnh, file pdf...), và tạo thêm 1 file <span className='font-bold bg-rose-400'>server.js</span> để chứa code chính</p>

                    </li>
                    <li>
                        <p>B6. Tạo database trong nodejs bằng câu lệnh <span className='text-rose-500'>npx sequelize db:create</span>  trong terminal</p>
                    </li>
                    <li>
                        <p>B7. Tạo bảng trong nodejs bằng câu lệnh <span className='text-rose-500'>npx sequelize model:generate --name Tên-bảng  --attributes thuộc-tính1:kiểu-dữ-liệu</span>  (thuộc tính id sẽ được tạo tự động)</p>
                        <p>Sau khi chạy lệnh xong sẽ tự động tạo ra các file model và migrate. Tuy nhiên bảng vẫn chưa được tạo trong database, cần phải chạy tiếp lệnh: <span className='text-rose-500'>npx sequelize db:migrate</span>  để chạy lệnh up (tạo bảng) trong file migrate. Nếu muốn xoá bảng mới tạo dùng lệnh: <span className='text-rose-500'>npx sequelize db:migrate:undo</span> </p>
                        <p>Lúc đó sẽ tạo ra 1 file trong <span className='font-bold bg-rose-400'>folder model</span> dạng như sau:</p>
                        <img src={require('../../assets/img/modeljs.jpg')} alt="" />
                        <p>Và 1 file trong <span className='font-bold bg-rose-400'>migration</span> có dạng:</p>
                        <img src={require('../../assets/img/migrate.jpg')} alt="migrate" />
                    </li>
                    <li>
                        <p>B8. Tạo ra 1 folder <span className='font-bold bg-rose-400'>controllers</span> để tạo các tính năng thao tác với req, res. Trong đó tạo các file controller để thao tác với từng bảng khác nhau</p>
                        <img src={require('../../assets/img/controller.jpg')} alt="" />
                    </li>
                    <li>
                        <p>B9. Tạo ra 1 folder <span className='font-bold bg-rose-400'>routers</span> để tạo các đường dẫn và các phương thức liên kết</p>
                        <p>Các file <span className='font-bold bg-rose-400'>router</span> sẽ tạo như sau:</p>
                        <img src={require('../../assets/img/router.jpg')} alt="" />
                        <p>Trong đó tạo file <span className='font-bold bg-rose-400'>rootRouter</span> như sau:</p>
                        <img src={require('../../assets/img/rootrouter.jpg')} alt="" />
                        <p>Quay ra file <span className='font-bold bg-rose-400'>server.js</span> và chỉnh sửa như sau:</p>
                        <img src={require('../../assets/img/backend-server.jpg')} alt="" />
                    </li>
                    <li>
                        <p>Có thể tạo thêm các service để viết các code dùng chung của các phương thức controller, gọi hàm dễ dàng</p>
                        <p>Thông thường sẽ cần tạo 1 folder <span className='font-bold bg-rose-400'>middleware</span> để tạo ra các function nằm giữa nhằm kiểm các điều kiện, nếu thoả mãn thì mới cho liên kết được lưu thông. middleware được gọi trong router</p>
                        <p>middleware có dạng như sau:</p>
                        <img src={require('../../assets/img/middleware.jpg')} alt="" />
                        <p>Sau đó chèn vào router như hình định dạng router vào các phương thức cần thiết.</p>
                    </li>
                </ul>

                <h3 className='text-xl md:text-2xl mt-3 pl-3 font-bold mb-0'>Những lưu ý khác</h3>
                <p>Trong chức năng đăng ký tài khoản mà liên quan đến mật khẩu thì cần mã hoá mật khẩu để tránh tình trạng bị hacker xâm nhập. Có thể xem xét dùng thư viện Bcrypt</p>
                <p>Định nghĩa 1 hàm mã hoá password truyền vào:</p>
                <img src={require('../../assets/nodeFolder/bcrypt-service.jpg')} className='mb-2' alt="" />
                <p>Sử dụng hàm trên để mã hoá password người dùng khi đăng ký. Lúc đăng nhập thì cần giải mã là được.</p>
                <img src={require('../../assets/nodeFolder/register.jpg')} alt="" />
                <p>Giải mã và tạo token để lưu thông tin người dùng sau khi đăng nhập thành công. Cần tạo token để khi người dùng thoát ra vào lại trình duyệt đó không bắt đăng nhập lại. Tạo token sử dụng thư viện jwt</p>
                <img src={require('../../assets/nodeFolder/login.jpg')} alt="" />
                <p>Khi tạo chức năng sửa thông tin user cũng cần sử dụng hàm mã hoá password cùng 1 kiểu để có thể thực hiện lại chức năng đăng nhập.</p>
                <img src={require('../../assets/nodeFolder/edit-user.jpg')} alt="" />

                <h4 className='text-lg md:text-xl mt-3 pl-3 mb-0'>Chức năng upload file (ảnh)</h4>
                <p>Sử dụng thư viện multer để tạo chức năng upload file.</p>
                <img src={require('../../assets/nodeFolder/upload-multer.jpg')} alt="" />
                <p>Truyền vào router với 1 keyword. (trong ví dụ là <span className='font-bold text-xs md:text-lg'>avatar</span>)</p>
                <img src={require('../../assets/nodeFolder/router-upload.jpg')} alt="" />
                <p>Trong controller truyền vào như sau: (trong đó đường dẫn được hoàn tất sau đó)</p>
                <img src={require('../../assets/nodeFolder/upload-avatar.jpg')} alt="" />
                <p>Lưu ý trong source code front-end cần truyền vào là 1 form-data.</p>
                <img src={require('../../assets/nodeFolder/front-form-upload.jpg')} alt="" />
                <p>Và truyền vào đúng keyword (<span className='font-bold text-xs md:text-lg'>avatar</span>), cũng như entype</p>
                <img src={require('../../assets/nodeFolder/front-end-notifi.jpg')} alt="" />

                <h4 className='text-lg md:text-xl mt-3 pl-3 mb-0'>Lưu ý với những quan hệ trong bảng</h4>
                <p>Tạo ra các quan hệ trong file model của bảng 1 và bảng nhiều trong phần associate, truyền vào bảng cần liên kết, định nghĩa foreignKey trong cả 2 bảng giống nhau.</p>
                <p>Trong bảng 1:</p>
                <img src={require('../../assets/nodeFolder/model-relation-1.jpg')} alt="" />
                <p>Trong bảng nhiều:</p>
                <img src={require('../../assets/nodeFolder/model-relation.jpg')} alt="" />
                <p>Trong file migrate của bảng nhiều cần định nghĩa foreignKey:</p>
                <img src={require('../../assets/nodeFolder/migrate-forenkey.jpg')} alt="" />
                <p>Lưu ý khi xoá đối tượng có quan hệ. Khi xoá đối tượng có quan hệ cần xoá hết các quan hệ của đối tượng đó trước.</p>
                <img src={require('../../assets/nodeFolder/delete-relation.jpg')} alt="" />

                <h4 className='text-lg md:text-xl mt-3 pl-3 mb-0'>Một số middleware khác cần dùng</h4>
                <p>Kiểm tra đã đăng nhập hay chưa, nếu đã đăng nhập thì trả về đối tượng đăng nhập đó:</p>
                <img src={require('../../assets/nodeFolder/authenticate.jpg')} alt="" />
                <p>Kiểm tra xem người dùng hiện tạo có quyền thực hiện chức năng đó không:</p>
                <img src={require('../../assets/nodeFolder/authorize.jpg')} alt="" />
                <p>Khi muốn thực hiện chức năng này thì cần truyền vào mảng những giá trị có quyền thực hiện trong router.</p>

            </div>
        </div>
    )
}
