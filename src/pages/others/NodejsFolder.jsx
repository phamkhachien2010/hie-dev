import React from 'react';
import styleOther from './other.module.css'

export default function NodejsFolder() {
    return (
        <div className={styleOther.other}>
            <div className='text-xs md:text-sm lg:text-base'>
                <div className='grid grid-cols-6'>
                    <div className='col-span-5 w-4/5 m-auto '>
                        <h1 className='text-xl md:text-2xl lg:text-4xl text-center font-bold py-3'>Cấu trúc thư mục nodeJs</h1>
                        <section id='common'>
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
                        </section>

                        <section id='back_end_setup'>
                            <h2 className='text-lg md:text-xl lg:text-2xl font-bold'>Tạo thư mục để code back-end</h2>
                            <ul className='pl-5'>
                                <li id='create_project'>
                                    <p>B1. Cần tạo 1 folder để chứa code và khởi tạo trong Vscode</p>
                                </li>
                                <li>
                                    <p>B2. Chạy câu lệnh npm init trong terminal để tạo nơi lưu trữ code, đặt tên, version tương ứng.</p>
                                </li>
                                <li id='library'>
                                    <p>B3. Cài các thư viện cần thiết bao gồm sequelize, express, mysql2, cors, cài thư viện sequelize-cli, nodemon trong môi trường dev</p>
                                    <p className='text-rose-500 pl-5'>npm i sequelize express mysql2, npm install --save-dev sequelize-cli npm install --save-dev nodemon</p>
                                </li>
                                <li id='create_folder'>
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
                                <li id='create_database_model'>
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
                                <li id='create_controller'>
                                    <p>B8. Tạo ra 1 folder <span className='font-bold bg-rose-400'>controllers</span> để tạo các tính năng thao tác với req, res. Trong đó tạo các file controller để thao tác với từng bảng khác nhau</p>
                                    <img src={require('../../assets/img/controller.jpg')} alt="" />
                                </li>
                                <li id='create_router'>
                                    <p>B9. Tạo ra 1 folder <span className='font-bold bg-rose-400'>routers</span> để tạo các đường dẫn và các phương thức liên kết</p>
                                    <p>Các file <span className='font-bold bg-rose-400'>router</span> sẽ tạo như sau:</p>
                                    <img src={require('../../assets/img/router.jpg')} alt="" />
                                    <p>Trong đó tạo file <span className='font-bold bg-rose-400'>rootRouter</span> như sau:</p>
                                    <img src={require('../../assets/img/rootrouter.jpg')} alt="" />
                                    <p>Quay ra file <span className='font-bold bg-rose-400'>server.js</span> và chỉnh sửa như sau:</p>
                                    <img src={require('../../assets/img/backend-server.jpg')} alt="" />
                                </li>
                                <li id='create_middleware'>
                                    <p>Có thể tạo thêm các service để viết các code dùng chung của các phương thức controller, gọi hàm dễ dàng</p>
                                    <p>Thông thường sẽ cần tạo 1 folder <span className='font-bold bg-rose-400'>middleware</span> để tạo ra các function nằm giữa nhằm kiểm các điều kiện, nếu thoả mãn thì mới cho liên kết được lưu thông. middleware được gọi trong router</p>
                                    <p>middleware có dạng như sau:</p>
                                    <img src={require('../../assets/img/middleware.jpg')} alt="" />
                                    <p>Sau đó chèn vào router như hình định dạng router vào các phương thức cần thiết.</p>
                                </li>
                            </ul>
                        </section>

                        <section id='other'>
                            <h3 className='text-xl md:text-2xl mt-3 pl-3 font-bold mb-0'>Những lưu ý khác</h3>
                            <p>Trong chức năng đăng ký tài khoản mà liên quan đến mật khẩu thì cần mã hoá mật khẩu để tránh tình trạng bị hacker xâm nhập. Có thể xem xét dùng thư viện Bcrypt</p>
                            <div id='create_bcrypt_pass'>
                                <p>Định nghĩa 1 hàm mã hoá password truyền vào:</p>
                                <pre>
                                    <code className=''>
                                        <div className='prism_content'>
                                            <div>
                                                <span className="token keyword">const</span> <span className='token property'> bcrypt </span><span className="token operator">=</span> <span className="token function">require</span><span className="token punctuation">(</span><span className="token string">'bcrypt'</span><span className="token punctuation">)</span><span className="token punctuation">;</span><br />
                                                <span className="token keyword">const</span> <span className="token function-variable function">bcryptPassword</span> <span className="token operator">=</span> <span className="token punctuation">(</span><span className="token parameter">password</span><span className="token punctuation">)</span> <span className="token operator">=&gt;</span> <span className="token punctuation">{'{'}</span><br />
                                                <span className="token keyword">    const</span> <span className='token property'>salt</span> <span className="token operator">=</span><span className='token property'> bcrypt</span><span className="token punctuation">.</span><span className="token function">genSaltSync</span><span className="token punctuation">(</span><span className="token parameter">10</span><span className="token punctuation">)</span><span className="token punctuation">;</span><br />
                                                <span className="token keyword">    const</span> <span className='token property'>hashPassword</span> <span className="token operator">=</span> <span className='token property'>bcrypt</span><span className="token punctuation">.</span><span className="token function">hashSync</span><span className="token punctuation">(</span><span className="token parameter">password</span><span className="token punctuation">,</span> <span className="token parameter">salt</span><span className="token punctuation">)</span><span className="token punctuation">;</span><br />
                                                <span className="token keyword">    return</span> hashPassword<span className="token punctuation">;</span><br />
                                                <span className="token punctuation">{'}'}</span><br />
                                                module<span className="token punctuation">.</span>exports <span className="token operator">=</span> <span className="token punctuation">{'{'}</span><br />
                                                <span className="token function">    bcryptPassword</span> <br />
                                                <span className="token punctuation">{'}'}</span><br />
                                            </div>

                                        </div>
                                    </code>
                                </pre>
                            </div>

                            <div id='register'>
                                <p>Sử dụng hàm trên để mã hoá password người dùng khi đăng ký. Lúc đăng nhập thì cần giải mã là được.</p>
                                <pre>
                                    <code className=''>
                                        <div className='prism_content'>
                                            <div>
                                                <span className="token keyword">const</span> <span className="token punctuation">{'{'}</span> bcryptPassword <span className="token punctuation">{'}'}</span> <span className="token operator">=</span> <span className="token function">require</span><span className="token punctuation">(</span><span className="token string">'../service/bcryptPassword/bcryptPassword'</span><span className="token punctuation">)</span><span className="token punctuation">;</span><br /><br />
                                                <span className="token keyword">const</span> <span className="token function-variable function">register</span> <span className="token operator">=</span> <span className="token keyword">async</span><span className="token punctuation">(</span><span className="token parameter">req<span className="token punctuation">,</span> res</span><span className="token punctuation">)</span> <span className="token operator">=&gt;</span> <span className="token punctuation">{'{'}</span><br />
                                                <span className="token keyword">    const</span> <span className="token punctuation">{'{'}</span> userName<span className="token punctuation">,</span> password<span className="token punctuation">,</span> confirmPassword <span className="token punctuation">{'}'}</span> <span className="token operator">=</span> req<span className="token punctuation">.</span>body<span className="token punctuation">;</span><br />
                                                <span className="token keyword">    try</span> <span className="token punctuation">{'{'}</span><br />
                                                <span className="token keyword">        const</span> listUsers <span className="token operator">=</span> <span className="token keyword">await</span> Users<span className="token punctuation">.</span><span className="token function">findAll</span><span className="token punctuation">(</span><span className="token punctuation">)</span><span className="token punctuation">;</span><br />
                                                <span className="token keyword">        const</span> user <span className="token operator">=</span> listUsers<span className="token punctuation">.</span><span className="token function">find</span><span className="token punctuation">(</span><span className="token punctuation">(</span><span className="token parameter">user</span><span className="token punctuation">)</span> <span className="token operator">=&gt;</span> user<span className="token punctuation">.</span>userName <span className="token operator">===</span> userName<span className="token punctuation">)</span><span className="token punctuation">;</span><br />
                                                <span className="token keyword">        if</span> <span className="token punctuation">(</span><span className="token operator">!</span>user<span className="token punctuation">)</span> <span className="token punctuation">{'{'}</span><br />
                                                <span className="token keyword">            if</span> <span className="token punctuation">(</span>password <span className="token operator">===</span> confirmPassword<span className="token punctuation">)</span> <span className="token punctuation">{'{'}</span><br />
                                                <span className="token keyword">                const</span> hashPassword <span className="token operator">=</span> <span className="token function">bcryptPassword</span><span className="token punctuation">(</span>password<span className="token punctuation">)</span><br />
                                                <span className="token keyword">                 const</span> newUser <span className="token operator">=</span> <span className="token keyword">await</span> Users<span className="token punctuation">.</span><span className="token function">create</span><span className="token punctuation">(</span><span className="token punctuation">{'{'}</span> userName<span className="token punctuation">,</span> <span className="token literal-property property">password</span><span className="token operator">:</span> hashPassword <span className="token punctuation">{'}'}</span><span className="token punctuation">)</span><span className="token punctuation">;</span><br />
                                                <span className='token property'>                 res</span><span className="token punctuation">.</span><span className="token function">status</span><span className="token punctuation">(</span><span className="token number">201</span><span className="token punctuation">)</span><span className="token punctuation">.</span><span className="token function">send</span><span className="token punctuation">(</span>newUser<span className="token punctuation">)</span><br />
                                                <span className="token punctuation">              {'}'}</span> <span className="token keyword">else</span> <span className="token punctuation">{'{'}</span><br />
                                                <span className='token property'>                 res</span><span className="token punctuation">.</span><span className="token function">status</span><span className="token punctuation">(</span><span className="token number">500</span><span className="token punctuation">)</span><span className="token punctuation">.</span><span className="token function">send</span><span className="token punctuation">(</span><span className="token punctuation">{'{'}</span> <span className="token literal-property property">message</span><span className="token operator">:</span> <span className="token string">'Nhập lại đúng mật khẩu'</span> <span className="token punctuation">{'}'}</span><span className="token punctuation">)</span><br />
                                                <span className="token punctuation">              {'}'}</span><br />
                                                <span className="token punctuation">         {'}'}</span> <span className="token keyword">else</span> <span className="token punctuation">{'{'}</span><br />
                                                <span className='token property'>             res</span><span className="token punctuation">.</span><span className="token function">status</span><span className="token punctuation">(</span><span className="token number">500</span><span className="token punctuation">)</span><span className="token punctuation">.</span><span className="token function">send</span><span className="token punctuation">(</span><span className="token punctuation">{'{'}</span> <span className="token literal-property property">message</span><span className="token operator">:</span> <span className="token string">'Tài khoản đã tồn tại.'</span> <span className="token punctuation">{'}'}</span><span className="token punctuation">)</span><br />
                                                <span className="token punctuation">         {'}'}</span><br />
                                                <span className="token punctuation">    {'}'}</span> <span className="token keyword">catch</span> <span className="token punctuation">(</span>error<span className="token punctuation">)</span> <span className="token punctuation">{'{'}</span><br />
                                                <span className='token property'>         res</span><span className="token punctuation">.</span><span className="token function">status</span><span className="token punctuation">(</span><span className="token number">500</span><span className="token punctuation">)</span><span className="token punctuation">.</span><span className="token function">send</span><span className="token punctuation">(</span>error<span className="token punctuation">)</span><br />
                                                <span className="token punctuation">    {'}'}</span><br />
                                                <span className="token punctuation">{'}'}</span><br />
                                            </div>

                                        </div>
                                    </code>
                                </pre>
                            </div>

                            <div id='login'>
                                <p>Giải mã và tạo token để lưu thông tin người dùng sau khi đăng nhập thành công. Cần tạo token để khi người dùng thoát ra vào lại trình duyệt đó không bắt đăng nhập lại. Tạo token sử dụng thư viện jwt</p>
                                <pre>
                                    <code className=''>
                                        <div className='prism_content'>
                                            <div>
                                                <span className="token keyword">const</span> <span className="token function-variable function">login</span> <span className="token operator">=</span> <span className="token keyword">async</span><span className="token punctuation">(</span><span className="token parameter">req<span className="token punctuation">,</span> res</span><span className="token punctuation">)</span> <span className="token operator">=&gt;</span> <span className="token punctuation">{'{'}</span><br />
                                                <span className="token keyword">const</span> <span className="token punctuation">{'{'}</span> userName<span className="token punctuation">,</span> password <span className="token punctuation">{'}'}</span> <span className="token operator">=</span> req<span className="token punctuation">.</span>body<span className="token punctuation">;</span><br />
                                                <span className="token keyword">try</span> <span className="token punctuation">{'{'}</span><br />
                                                <span className="token keyword">  const</span> userLogin <span className="token operator">=</span> <span className="token keyword">await</span> Users<span className="token punctuation">.</span><span className="token function">findOne</span><span className="token punctuation">(</span><span className="token punctuation">{'{'}</span><br />
                                                <span className="token literal-property property">    where</span><span className="token operator">:</span> <span className="token punctuation">{'{'}</span><br />
                                                <span className='token property'>      userName</span> <br />
                                                <span className="token punctuation">    {'}'}</span><br />
                                                <span className="token punctuation">  {'}'}</span><span className="token punctuation">)</span><span className="token punctuation">;</span><br />
                                                <span className="token keyword">  if</span> <span className="token punctuation">(</span>userLogin<span className="token punctuation">)</span> <span className="token punctuation">{'{'}</span><br />
                                                <span className="token keyword">    const</span> isAuth <span className="token operator">=</span> bcrypt<span className="token punctuation">.</span><span className="token function">compareSync</span><span className="token punctuation">(</span>password<span className="token punctuation">,</span> userLogin<span className="token punctuation">.</span>password<span className="token punctuation">)</span><span className="token punctuation">;</span> <span className="token comment">// giải mã password</span><br />
                                                <span className="token keyword">    if</span> <span className="token punctuation">(</span>isAuth<span className="token punctuation">)</span> <span className="token punctuation">{'{'}</span><br />
                                                <span className="token keyword">      const</span> token <span className="token operator">=</span> jwt<span className="token punctuation">.</span><span className="token function">sign</span><span className="token punctuation">(</span><span className="token punctuation">{'{'}</span> <span className="token literal-property property">userName</span><span className="token operator">:</span> userLogin<span className="token punctuation">.</span>userName<span className="token punctuation">,</span> <span className="token literal-property property">password</span><span className="token operator">:</span> userLogin<span className="token punctuation">.</span>password<span className="token punctuation">,</span> <span className="token literal-property property">type</span><span className="token operator">:</span> userLogin<span className="token punctuation">.</span>type <span className="token punctuation">{'}'}</span><span className="token punctuation">,</span> <span className="token string">"hien0208"</span><span className="token punctuation">)</span><span className="token punctuation">;</span> <span className="token comment">// tạo token khi đăng nhập</span><br />
                                                <span className='token property'>      res</span><span className="token punctuation">.</span><span className="token function">status</span><span className="token punctuation">(</span><span className="token number">200</span><span className="token punctuation">)</span><span className="token punctuation">.</span><span className="token function">send</span><span className="token punctuation">(</span><span className="token punctuation">{'{'}</span><br />
                                                <span className="token literal-property property">        message</span><span className="token operator">:</span> <span className="token string">"Đăng nhập thành công"</span><span className="token punctuation">,</span><br />
                                                <span className='token property'>        token</span><span className="token punctuation">,</span><br />
                                                <span className="token literal-property property">        content</span><span className="token operator">:</span> userLogin  <br />
                                                <span className="token punctuation">      {'}'}</span><span className="token punctuation">)</span><br />
                                                <span className="token punctuation">    {'}'}</span> <span className="token keyword">else</span> <span className="token punctuation">{'{'}</span><br />
                                                <span className='token property'>        res</span><span className="token punctuation">.</span><span className="token function">status</span><span className="token punctuation">(</span><span className="token number">404</span><span className="token punctuation">)</span><span className="token punctuation">.</span><span className="token function">send</span><span className="token punctuation">(</span><span className="token punctuation">{'{'}</span> <span className="token literal-property property">message</span><span className="token operator">:</span> <span className="token string">"Mật khẩu không đúng"</span> <span className="token punctuation">{'}'}</span><span className="token punctuation">)</span><br />
                                                <span className="token punctuation">      {'}'}</span><br />
                                                <span className="token punctuation">  {'}'}</span> <span className="token keyword">else</span> <span className="token punctuation">{'{'}</span><br />
                                                <span className='token property'>      res</span><span className="token punctuation">.</span><span className="token function">status</span><span className="token punctuation">(</span><span className="token number">404</span><span className="token punctuation">)</span><span className="token punctuation">.</span><span className="token function">send</span><span className="token punctuation">(</span><span className="token punctuation">{'{'}</span> <span className="token literal-property property">message</span><span className="token operator">:</span> <span className="token string">"Tài khoản không đúng hoặc chưa được đăng ký"</span> <span className="token punctuation">{'}'}</span><span className="token punctuation">)</span><br />
                                                <span className="token punctuation">  {'}'}</span><br />
                                                <span className="token punctuation">{'}'}</span> <span className="token keyword">catch</span> <span className="token punctuation">(</span>error<span className="token punctuation">)</span> <span className="token punctuation">{'{'}</span><br />
                                                <span className='token property'>     res</span><span className="token punctuation">.</span><span className="token function">status</span><span className="token punctuation">(</span><span className="token number">500</span><span className="token punctuation">)</span><span className="token punctuation">.</span><span className="token function">send</span><span className="token punctuation">(</span>error<span className="token punctuation">)</span><br />
                                                <span className="token punctuation">  {'}'}</span><br />
                                                <span className="token punctuation">{'}'}</span><br />
                                            </div>
                                        </div>
                                    </code>
                                </pre>
                            </div>

                            <div id='edit_user'>
                                <p>Khi tạo chức năng sửa thông tin user cũng cần sử dụng hàm mã hoá password cùng 1 kiểu để có thể thực hiện lại chức năng đăng nhập.</p>
                                <img src={require('../../assets/nodeFolder/edit-user.jpg')} alt="" />
                            </div>

                            <div id='upload_file'>
                                <h4 className='text-lg md:text-xl mt-3 pl-3 mb-0'>Chức năng upload file (ảnh)</h4>
                                <p>Sử dụng thư viện multer để tạo chức năng upload file.</p>
                                <pre>
                                    <code className=''>
                                        <div className='prism_content'>
                                            <div>
                                                <span className="token keyword">const</span> mkdirp <span className="token operator">=</span> <span className="token function">require</span><span className="token punctuation">(</span><span className="token string">'mkdirp'</span><span className="token punctuation">)</span><span className="token punctuation">;</span><br />
                                                <span className="token keyword">const</span> multer <span className="token operator">=</span> <span className="token function">require</span><span className="token punctuation">(</span><span className="token string">'multer'</span><span className="token punctuation">)</span><span className="token punctuation">;</span><br /><br />
                                                <span className="token keyword">const</span> <span className="token function-variable function">uploadImage</span> <span className="token operator">=</span> <span className="token punctuation">(</span><span className="token parameter">type</span><span className="token punctuation">)</span> <span className="token operator">=&gt;</span> <span className="token punctuation">{'{'}</span><br />
                                                <span className="token keyword">  const</span> made <span className="token operator">=</span> mkdirp<span className="token punctuation">.</span><span className="token function">sync</span><span className="token punctuation">(`</span><span className="token punctuation">.</span><span className="token operator">/</span><span className="token keyword">public</span><span className="token operator">/</span>images<span className="token operator">/</span>${'{'}type{'}'}`<span className="token punctuation">)</span><span className="token punctuation">;</span><br />
                                                <span className="token keyword">  const</span> storage <span className="token operator">=</span> multer<span className="token punctuation">.</span><span className="token function">diskStorage</span><span className="token punctuation">(</span><span className="token punctuation">{'{'}</span><br />
                                                <span className="token function-variable function">    destination</span><span className="token operator">:</span> <span className="token keyword">function</span><span className="token punctuation">(</span><span className="token parameter">req<span className="token punctuation">,</span> file<span className="token punctuation">,</span> cb</span><span className="token punctuation">)</span> <span className="token punctuation">{'{'}</span><br />
                                                <span className="token function">      cb</span><span className="token punctuation">(</span><span className="token keyword">null</span><span className="token punctuation">,</span> made<span className="token punctuation">)</span> <span className="token comment">//set up chỗ lưu file</span><br />
                                                <span className="token punctuation">    {'}'}</span><span className="token punctuation">,</span><br />
                                                <span className="token function-variable function">    filename</span><span className="token operator">:</span> <span className="token keyword">function</span><span className="token punctuation">(</span><span className="token parameter">req<span className="token punctuation">,</span> file<span className="token punctuation">,</span> cb</span><span className="token punctuation">)</span> <span className="token punctuation">{'{'}</span><br />
                                                <span className="token function">      cb</span><span className="token punctuation">(</span><span className="token keyword">null</span><span className="token punctuation">,</span> Date<span className="token punctuation">.</span><span className="token function">now</span><span className="token punctuation">(</span><span className="token punctuation">)</span> <span className="token operator">+</span> <span className="token string">'_'</span> <span className="token operator">+</span> file<span className="token punctuation">.</span>originalname<span className="token punctuation">)</span> <span className="token comment">// đặt lại tên cho file và lấy cả đuôi file</span><br />
                                                <span className="token punctuation">    {'}'}</span><br />
                                                <span className="token punctuation">  {'}'}</span><span className="token punctuation">)</span><br /><br />
                                                <span className="token keyword">  const</span> upload <span className="token operator">=</span> <span className="token function">multer</span><span className="token punctuation">(</span><span className="token punctuation">{'{'}</span><br />
                                                <span className="token literal-property property">    storage</span><span className="token operator">:</span> storage<span className="token punctuation">,</span><br />
                                                <span className="token function-variable function">    fileFilter</span><span className="token operator">:</span> <span className="token keyword">function</span><span className="token punctuation">(</span><span className="token parameter">req<span className="token punctuation">,</span> file<span className="token punctuation">,</span> cb</span><span className="token punctuation">)</span> <span className="token punctuation">{'{'}</span><br />
                                                <span className="token keyword">      const</span> extentionImageList <span className="token operator">=</span> <span className="token punctuation">[</span><span className="token string">'.png'</span><span className="token punctuation">,</span> <span className="token string">'.jpg'</span><span className="token punctuation">]</span><span className="token punctuation">;</span><br />
                                                <span className="token keyword">      const</span> extention <span className="token operator">=</span> file<span className="token punctuation">.</span>originalname<span className="token punctuation">.</span><span className="token function">slice</span><span className="token punctuation">(</span><span className="token operator">-</span><span className="token number">4</span><span className="token punctuation">)</span><span className="token punctuation">;</span><br />
                                                <span className="token keyword">      const</span> check <span className="token operator">=</span> extentionImageList<span className="token punctuation">.</span><span className="token function">includes</span><span className="token punctuation">(</span>extention<span className="token punctuation">)</span><span className="token punctuation">;</span><br />
                                                <span className="token keyword">      if</span> <span className="token punctuation">(</span>check<span className="token punctuation">)</span> <span className="token punctuation">{'{'}</span><br />
                                                <span className="token function">        cb</span><span className="token punctuation">(</span><span className="token keyword">null</span><span className="token punctuation">,</span> <span className="token boolean">true</span><span className="token punctuation">)</span><br />
                                                <span className="token punctuation">      {'}'}</span> <span className="token keyword">else</span> <span className="token punctuation">{'{'}</span><br />
                                                <span className="token function">        cb</span><span className="token punctuation">(</span><span className="token keyword">new</span> <span className="token class-name">Error</span><span className="token punctuation">(</span><span className="token string">'Đuôi file không hợp lệ'</span><span className="token punctuation">)</span><span className="token punctuation">)</span><br />
                                                <span className="token punctuation">      {'}'}</span><br />
                                                <span className="token punctuation">    {'}'}</span><br />
                                                <span className="token punctuation">  {'}'}</span><span className="token punctuation">)</span><span className="token punctuation">;</span><br />
                                                <span className="token keyword">    return</span> upload<span className="token punctuation">.</span><span className="token function">single</span><span className="token punctuation">(</span>type<span className="token punctuation">)</span><br />
                                                <span className="token punctuation">{'}'}</span><br />
                                                module<span className="token punctuation">.</span>exports <span className="token operator">=</span> <span className="token punctuation">{'{'}</span><br />
                                                uploadImage<span className="token punctuation">,</span><br />
                                                <span className="token punctuation">{'}'}</span><br />
                                            </div>

                                        </div>
                                    </code>
                                </pre>

                                <p>Truyền vào router với 1 keyword. (trong ví dụ là <span className='font-bold text-xs md:text-lg'>avatar</span>)</p>
                                <pre>
                                    <code className=''>
                                        <div className='prism_content'>
                                            <div>
                                                userRouter<span className="token punctuation">.</span><span className="token function">post</span><span className="token punctuation">(</span><span className="token string">'/upload-avatar'</span><span className="token punctuation">,</span> authenticate<span className="token punctuation">,</span> <span className="token function">uploadImage</span><span className="token punctuation">(</span><span className="token string">'avatar'</span><span className="token punctuation">)</span><span className="token punctuation">,</span> uploadAvatar<span className="token punctuation">)</span><span className="token punctuation">;</span>
                                            </div>
                                        </div>
                                    </code>
                                </pre>
                                <p>Trong controller truyền vào như sau: (trong đó đường dẫn được hoàn tất sau đó)</p>
                                <pre>
                                    <code className=''>
                                        <div className='prism_content'>
                                            <div>
                                                <span className="token keyword">const</span> <span className="token function-variable function">uploadAvatar</span> <span className="token operator">=</span> <span className="token keyword">async</span><span className="token punctuation">(</span><span className="token parameter">req<span className="token punctuation">,</span> res</span><span className="token punctuation">)</span> <span className="token operator">=&gt;</span> <span className="token punctuation">{'{'}</span><br />
                                                <span className="token keyword">  const</span> <span className="token punctuation">{'{'}</span> file <span className="token punctuation">{'}'}</span> <span className="token operator">=</span> req<span className="token punctuation">;</span><br />
                                                <span className="token keyword">  const</span> urlImage <span className="token operator">=</span> `https<span className="token operator">:</span><span className="token operator">/</span><span className="token operator">/</span>hie<span className="token operator">-</span>dev<span className="token punctuation">.</span>herokuapp<span className="token punctuation">.</span>com<span className="token operator">/</span><span className="token punctuation">${'{'}</span>file<span className="token punctuation">.</span>path<span className="token punctuation">{'}'}`</span><br />
                                                <span className="token keyword">  const</span> <span className="token punctuation">{'{'}</span> user <span className="token punctuation">{'}'}</span> <span className="token operator">=</span> req<span className="token punctuation">;</span><br />
                                                <span className="token keyword">  try</span> <span className="token punctuation">{'{'}</span><br />
                                                <span className="token keyword">    const</span> userFound <span className="token operator">=</span> <span className="token keyword">await</span> Users<span className="token punctuation">.</span><span className="token function">findOne</span><span className="token punctuation">(</span><span className="token punctuation">{'{'}</span><br />
                                                <span className="token literal-property property">      where</span><span className="token operator">:</span> <span className="token punctuation">{'{'}</span><br />
                                                <span className="token literal-property property">        userName</span><span className="token operator">:</span> user<span className="token punctuation">.</span>userName <br />
                                                <span className="token punctuation">      {'}'}</span><br />
                                                <span className="token punctuation">    {'}'}</span><span className="token punctuation">)</span><br />
                                                <span className="token keyword">    if</span> <span className="token punctuation">(</span>userFound<span className="token punctuation">)</span> <span className="token punctuation">{'{'}</span><br />
                                                <span className="token property">      userFound</span><span className="token punctuation">.</span>avatar <span className="token operator">=</span> urlImage<span className="token punctuation">;</span><br />
                                                <span className="token keyword">      await</span> userFound<span className="token punctuation">.</span><span className="token function">save</span><span className="token punctuation">(</span><span className="token punctuation">)</span><span className="token punctuation">;</span><br />
                                                <span className="token property">      res</span><span className="token punctuation">.</span><span className="token function">status</span><span className="token punctuation">(</span><span className="token number">200</span><span className="token punctuation">)</span><span className="token punctuation">.</span><span className="token function">send</span><span className="token punctuation">(</span>userFound<span className="token punctuation">)</span><br />
                                                <span className="token punctuation">    {'}'}</span> <span className="token keyword">else</span> <span className="token punctuation">{'{'}</span><br />
                                                <span className="token property">        res</span><span className="token punctuation">.</span><span className="token function">status</span><span className="token punctuation">(</span><span className="token number">404</span><span className="token punctuation">)</span><span className="token punctuation">.</span><span className="token function">send</span><span className="token punctuation">(</span><span className="token punctuation">{'{'}</span> <span className="token literal-property property">message</span><span className="token operator">:</span> <span className="token string">'Không tìm thấy user'</span> <span className="token punctuation">{'}'}</span><span className="token punctuation">)</span><br />
                                                <span className="token punctuation">    {'}'}</span><br />
                                                <span className="token punctuation">  {'}'}</span> <span className="token keyword">catch</span> <span className="token punctuation">(</span>error<span className="token punctuation">)</span> <span className="token punctuation">{'{'}</span><br />
                                                <span className="token property">      res</span><span className="token punctuation">.</span><span className="token function">status</span><span className="token punctuation">(</span><span className="token number">500</span><span className="token punctuation">)</span><span className="token punctuation">.</span><span className="token function">send</span><span className="token punctuation">(</span>error<span className="token punctuation">)</span><br />
                                                <span className="token punctuation">  {'}'}</span><br />
                                                <span className="token punctuation">{'}'}</span><br />
                                            </div>
                                        </div>
                                    </code>
                                </pre>
                                <p>Lưu ý trong source code front-end cần truyền vào là 1 form-data.</p>
                                <img src={require('../../assets/nodeFolder/front-form-upload.jpg')} alt="" />
                                <p>Và truyền vào đúng keyword (<span className='font-bold text-xs md:text-lg'>avatar</span>), cũng như entype</p>
                                <img src={require('../../assets/nodeFolder/front-end-notifi.jpg')} alt="" />
                            </div>

                            <div id='relationship'>
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
                            </div>

                            <h4 className='text-lg md:text-xl mt-3 pl-3 mb-0'>Một số middleware khác cần dùng</h4>

                            <div id='authenticate'>
                                <p>Kiểm tra đã đăng nhập hay chưa, nếu đã đăng nhập thì trả về đối tượng đăng nhập đó:</p>
                                <pre>
                                    <code className=''>
                                        <div className='prism_content'>
                                            <div>
                                                <span className="token keyword">const</span> jwt <span className="token operator">=</span> <span className="token function">require</span><span className="token punctuation">(</span><span className="token string">'jsonwebtoken'</span><span className="token punctuation">)</span><span className="token punctuation">;</span><br /><br />
                                                <span className="token keyword">const</span> <span className="token function-variable function">authenticate</span> <span className="token operator">=</span> <span className="token punctuation">(</span><span className="token parameter">req<span className="token punctuation">,</span> res<span className="token punctuation">,</span> next</span><span className="token punctuation">)</span> <span className="token operator">=&gt;</span> <span className="token punctuation">{'{'}</span><br />
                                                <span className="token keyword">  const</span> token <span className="token operator">=</span> req<span className="token punctuation">.</span><span className="token function">header</span><span className="token punctuation">(</span><span className="token string">'token'</span><span className="token punctuation">)</span><span className="token punctuation">;</span> <span className="token comment">//keyword yêu cầu nhập để lấy token có thể thay bằng keyword khác ví dụ assessToken</span><br />
                                                <span className="token keyword">  try</span> <span className="token punctuation">{'{'}</span><br />
                                                <span className="token keyword">    const</span> decode <span className="token operator">=</span> jwt<span className="token punctuation">.</span><span className="token function">verify</span><span className="token punctuation">(</span>token<span className="token punctuation">,</span> <span className="token string">'hien0208'</span><span className="token punctuation">)</span><span className="token punctuation">;</span> <span className="token comment">// gán decode vào token được giải mã</span><br />
                                                <span className="token keyword">    if</span> <span className="token punctuation">(</span>decode<span className="token punctuation">)</span> <span className="token punctuation">{'{'}</span><br />
                                                <span className="token property">       req</span><span className="token punctuation">.</span>user <span className="token operator">=</span> decode<span className="token punctuation">;</span><br />
                                                <span className="token keyword">       return</span> <span className="token function">next</span><span className="token punctuation">(</span><span className="token punctuation">)</span><span className="token punctuation">;</span><br />
                                                <span className="token punctuation">    {'}'}</span> <span className="token keyword">else</span> <span className="token punctuation">{'{'}</span><br />
                                                <span className="token property">        res</span><span className="token punctuation">.</span><span className="token function">status</span><span className="token punctuation">(</span><span className="token number">401</span><span className="token punctuation">)</span><span className="token punctuation">.</span><span className="token function">send</span><span className="token punctuation">(</span><span className="token punctuation">{'{'}</span> <span className="token literal-property property">meeage</span><span className="token operator">:</span> <span className="token string">'Bạn chưa đăng nhập!'</span> <span className="token punctuation">{'}'}</span><span className="token punctuation">)</span><br />
                                                <span className="token punctuation">    {'}'}</span><br />
                                                <span className="token punctuation">  {'}'}</span> <span className="token keyword">catch</span> <span className="token punctuation">(</span>error<span className="token punctuation">)</span> <span className="token punctuation">{'{'}</span><br />
                                                <span className="token property">        res</span><span className="token punctuation">.</span><span className="token function">status</span><span className="token punctuation">(</span><span className="token number">401</span><span className="token punctuation">)</span><span className="token punctuation">.</span><span className="token function">send</span><span className="token punctuation">(</span><span className="token punctuation">{'{'}</span> <span className="token literal-property property">meeage</span><span className="token operator">:</span> <span className="token string">'Bạn chưa đăng nhập!'</span> <span className="token punctuation">{'}'}</span><span className="token punctuation">)</span><br />
                                                <span className="token punctuation">  {'}'}</span><br />
                                                <span className="token punctuation">{'}'}</span><br /><br />
                                                module<span className="token punctuation">.</span>exports <span className="token operator">=</span> <span className="token punctuation">{'{'}</span><br />
                                                <span className="token property">   authenticate</span> <br />
                                                <span className="token punctuation">{'}'}</span><br />
                                            </div>

                                        </div>
                                    </code>
                                </pre>
                            </div>

                            <div id='authorize'>
                                <p>Kiểm tra xem người dùng hiện tạo có quyền thực hiện chức năng đó không:</p>
                                <pre>
                                    <code className=''>
                                        <div className='prism_content'>
                                            <div>
                                                <span className="token keyword">const</span> <span className="token function-variable function">authorize</span> <span className="token operator">=</span> <span className="token punctuation">(</span><span className="token parameter">arrType</span><span className="token punctuation">)</span> <span className="token operator">=&gt;</span> <span className="token punctuation">(</span><span className="token parameter">req<span className="token punctuation">,</span> res<span className="token punctuation">,</span> next</span><span className="token punctuation">)</span> <span className="token operator">=&gt;</span> <span className="token punctuation">{'{'}</span> <span className="token comment">//arrType là tập hợp những loại user có quền thực hiện chức năng đó vd artype:[superAdmin, admin]</span><br />
                                                <span className="token keyword">   const</span> <span className="token punctuation">{'{'}</span> user <span className="token punctuation">{'}'}</span> <span className="token operator">=</span> req<span className="token punctuation">;</span><br />
                                                <span className="token keyword">   const</span> index <span className="token operator">=</span> arrType<span className="token punctuation">.</span><span className="token function">findIndex</span><span className="token punctuation">(</span><span className="token punctuation">(</span><span className="token parameter">type</span><span className="token punctuation">)</span> <span className="token operator">=&gt;</span> type <span className="token operator">===</span> user<span className="token punctuation">.</span>type<span className="token punctuation">)</span><span className="token punctuation">;</span><br />
                                                <span className="token keyword">   if</span> <span className="token punctuation">(</span>index <span className="token operator">!==</span> <span className="token operator">-</span><span className="token number">1</span><span className="token punctuation">)</span> <span className="token punctuation">{'{'}</span><br />
                                                <span className="token function">      next</span><span className="token punctuation">(</span><span className="token punctuation">)</span><span className="token punctuation">;</span><br />
                                                <span className="token punctuation">   {'}'}</span> <span className="token keyword">else</span> <span className="token punctuation">{'{'}</span><br />
                                                <span className="token property">      res</span><span className="token punctuation">.</span><span className="token function">status</span><span className="token punctuation">(</span><span className="token number">403</span><span className="token punctuation">)</span><span className="token punctuation">.</span><span className="token function">send</span><span className="token punctuation">(</span><span className="token punctuation">{'{'}</span> <span className="token literal-property property">message</span><span className="token operator">:</span> <span className="token string">'Bạn không có quyền!'</span> <span className="token punctuation">{'}'}</span><span className="token punctuation">)</span><br />
                                                <span className="token punctuation">   {'}'}</span><br />
                                                <span className="token punctuation">{'}'}</span><br /><br />
                                                module<span className="token punctuation">.</span>exports <span className="token operator">=</span> <span className="token punctuation">{'{'}</span><br />
                                                <span className="token property">   authorize</span><br />
                                                <span className="token punctuation">{'}'}</span><br />
                                            </div>

                                        </div>
                                    </code>
                                </pre>
                                <p>Khi muốn thực hiện chức năng này thì cần truyền vào mảng những giá trị có quyền thực hiện trong router.</p>
                            </div>
                        </section>
                    </div>
                    <div className='bg-teal-400 p-3'>
                        <div className="w-4/5 m-auto fixed">
                            <p className='text-sx sm:text-sm lg:text-base font-bold mb-2'>Mục lục</p>
                            <h2 className='text-sx sm:text-sm lg:text-base'><a className='text-black' href='#common'>Các bước làm 1 web fullstack</a></h2>
                            <h2 className='text-sx sm:text-sm lg:text-base  m-0'><a className='text-black' href='#back_end_setup'>Tạo cấu trúc source code back-end</a></h2>
                            <ul>
                                <li className='ml-3'>
                                    <a href="#create_project">Khởi tạo project</a>
                                </li>
                                <li className='ml-3'>
                                    <a href="#library">Cài các thư viện cần thiết</a>
                                </li>
                                <li className='ml-3'>
                                    <a href="#create_folder">Tạo thêm các folder</a>
                                </li>
                                <li className='ml-3'>
                                    <a href="#create_database_model">Tạo database và tạo bảng</a>
                                </li>
                                <li className='ml-3'>
                                    <a href="#create_controller">Tạo các file controller</a>
                                </li>
                                <li className='ml-3'>
                                    <a href="#create_router">Tạo các file router</a>
                                </li>
                                <li className='ml-3'>
                                    <a href="#create_middleware">Tạo các file middleware</a>
                                </li>
                            </ul>
                            <h2 className='text-sx sm:text-sm lg:text-base'><a className='text-black' href='#other'>Lưu ý và cài đặt khác</a></h2>
                            <ul>
                                <li className='ml-3'>
                                    <a href="#create_bcrypt_pass">Định nghĩa service bcryptPassword</a>
                                </li>
                                <li className='ml-3'>
                                    <a href="#register">Chức năng đăng ký</a>
                                </li>
                                <li className='ml-3'>
                                    <a href="#login">Chức năng đăng nhập</a>
                                </li>
                                <li className='ml-3'>
                                    <a href="#edit_user">Chức năng chỉnh sửa</a>
                                </li>
                                <li className='ml-3'>
                                    <a href="#upload_file">Chức năng thêm file</a>
                                </li>
                                <li className='ml-3'>
                                    <a href="#relationship">Định nghĩa quan hệ trong bảng</a>
                                </li>
                                <li className='ml-3'>
                                    <a href="#authenticate">Chức năng kiểm tra đăng nhập</a>
                                </li>
                                <li className='ml-3'>
                                    <a href="#authorize">Chức năng kiểm tra quyền thực hiện</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
