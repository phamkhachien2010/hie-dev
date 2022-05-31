import React from 'react'

export default function GitBasic() {

    const bgGit = require('../../assets/img/bg-git.jpg')

    return (
        <div style={{ paddingTop: '112px' }}>
            <div className='text-white' style={{ backgroundImage: `url(${bgGit})`, backgroundAttachment: 'fixed' }}>
                <div style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <div className='w-2/3 m-auto'></div>
                    <div className='flex justify-center items-center'>
                    <h1 className='text-rose-100 text-5xl text-center pt-5 pb-3 inline-block'>Git là gì?</h1>
                        <img src={require('../../assets/img/9919.png')} alt="git-logo" style={{ width: '100px' }} className='inline-block' />
                    </div>
                    <div className="container">
                        <p className='pl-5'>Git hiểu đơn giản là một hệ thống quản lý source code của dev, giúp dev lưu trữ source code, cập nhật những lần chỉnh sửa và lưu lại lịch sử những lần chỉnh sửa đó để có thể biết rằng đã chỉnh sửa những gì, và có thể quay lại đó fix bugs một cách dễ dàng. Git cho phép lưu trên các nền tảng server của mình đó là Github và Gitlab.</p>
                        <h2 className='text-rose-100 text-2xl pl-5' >Tại sao phải sử dụng git?</h2>
                        <p>Ngoài tính năng lưu trữ lịch sử dữ liệu, git còn cho phép tạo nhiều nhánh làm việc song song với nhánh chính và có thể merge (lưu nhánh vào nhánh chính). Thông thường trong 1 team sẽ có nhiều dev cùng làm việc, tuy nhiên không thể mỗi dev code trên 1 máy rồi copy paste. Nên sẽ cần có 1 kho lưu trữ trên server, các dev chỉ cần clone (lấy kho từ server và tạo 1 kho tại máy tính) source code về, tạo nhánh mới, làm việc trên nhánh đó. Khi mọi thứ hoàn thành thì sẽ merge vào nhánh chính. Thông thường việc merge sẽ được lead thực hiện.</p>
                        <p>Để làm việc được với git cần tải git về máy <a className='text-blue-300' href="https://git-scm.com/">Tải tại trang chủ của git</a>, và đăng ký một tài khoản git bằng email trên trang <a className='text-blue-300' href="https://github.com/">github</a> </p>
                        <p>Để tạo được 1 repository (kho) cần ấn dấu + trên góc bên phải của trang git sau khi đăng nhập, đặt tên cho repo và đặt chế độ public (công khai để người khác có thể xem, và  tải về) hoặc private (chỉ mình chủ tài khoản có thể xem và tải về), sau đó làm theo hướng dẫn trong trang github. Lưu ý trong git đặt tên nhánh chính mặc định là main, có thể đổi tên nhánh chính tùy thích, nhưng thông thường là đổi thành master.</p>
                        <h2 className='text-rose-100 text-2xl pl-5' >Có khá nhiều lệnh git, tuy nhiên có một vài lệnh chính cần chú ý.</h2>
                        <div className='row'>
                            <div className='col-2'>
                                <p>git init</p>
                                <p>git clone <span className='font-thin'>url</span></p>
                                <p>git checkout <span className='font-thin'>branch_name</span></p>
                                <p>git branch</p>
                                <p>git branch <span className='font-thin'>branch_name</span></p>
                                <p>git checkout -b <span className='font-thin'>branch_name</span></p>
                                <p>git add .</p>
                                <p>git commit -m <span className='font-thin'>"message"</span></p>
                                <p>git remote add origin <span className='font-thin'>remote_url</span></p>
                                <p>git push</p>
                                <p>git merge <span className='font-thin'>branch_name</span></p>
                                <p>git fetch <span className='font-thin'>branch_name</span></p>
                                <p>git pull</p>
                            </div>
                            <div className='col-10'>
                                <p>Tạo kho ở local (máy tính)</p>
                                <p>Trường hợp chưa có repo ở local, dùng lệnh này để lấy source code từ server về máy tính (url lấy ở trong dropdown code trên server)</p>
                                <p>Làm việc trên nhánh nào thì checkout nhánh đó</p>
                                <p>Xem có những nhánh nào ở trên local repo. Đang ở nhánh nào thì nhánh đó hiện màu xanh và có dấu *</p>
                                <p>Tạo một nhánh phụ mới</p>
                                <p>Tạo một nhánh phụ mới và làm việc luôn trên nhánh đó</p>
                                <p>Cập nhật tất cả những thay đổi đã chỉnh sửa</p>
                                <p>Ghi lại việc thay đổi ví dụ: git commit -m "fix all bux"</p>
                                <p>Tạo liên kết giữa local repo với server repo</p>
                                <p>Đẩy source code đã cập nhật lên repo của server</p>
                                <p>Gộp nhánh vào nhánh chính</p>
                                <p>Lấy source code từ server về local nhưng chưa gộp những cập nhật</p>
                                <p>Lấy source code từ server về local thay thế toàn bộ code cũ. pull = fetch + merge</p>
                            </div>
                        </div>
                        <p>Ngoài ra có thể xem thêm<a className='text-blue-300' href="https://topdev.vn/blog/git-la-gi/"> ở đây</a> và <a className='text-blue-300' href="https://viblo.asia/p/quy-trinh-lam-viec-chuan-chi-voi-git-eW65G10RZDO">ở đây</a>.</p>

                        <h2 className='text-rose-100 text-2xl pl-5' >Quy trình tạo làm việc với github thường như sau:</h2>
                        <h3 className='text-rose-400 text-xl pl-3'>Đầu tiên tạo 1 repository trên github, sau đó thực hiện các lệnh sau trong terminal:</h3>
                        <div className='row'>
                            <div className='col-2'>
                                <p>git init</p>
                                <p>git add .</p>
                                <p>git commit -m <span className='font-thin'>"message"</span></p>
                                <p>git branch -M master</p>
                                <p>git remote add origin <span className='font-thin'>remote_url</span></p>
                                <p>git push -u orrigin master</p>
                            </div>
                            <div className='col-10'>
                                <p>Tạo kho ở local (máy tính)</p>
                                <p>Cập nhật tất cả những thay đổi đã chỉnh sửa</p>
                                <p>Ghi lại việc thay đổi ví dụ: git commit -m "fix all bux"</p>
                                <p>Tạo nhánh chính master</p>
                                <p>Tạo liên kết giữa local repo với server repo</p>
                                <p>Đẩy source code đã cập nhật lên repo của server</p>
                            </div>
                        </div>
                        <h3 className='text-rose-400 text-xl pl-3'>Muốn tạo một nhánh để làm việc không ảnh hưởng đển nhánh chính dùng thêm những lệnh sau:</h3>
                        <div className='row'>
                            <div className='col-2'>
                                <p>git checkout master</p>
                                <p>git branch <span className='font-thin'>branch_name</span></p>
                                <p>git checkout <span className='font-thin'>branch_name</span></p>
                                <p>git checkout -b <span className='font-thin'>branch_name</span></p>
                                <p>git add .</p>
                                <p>git commit -m <span className='font-thin'>"message"</span></p>
                                <p>git merge <span className='font-thin'>branch_name</span></p>
                                <p>git push</p>
                            </div>
                            <div className='col-10'>
                                <p>Chuyển về làm việc ở nhánh chính</p>
                                <p>Tạo nhánh mới</p>
                                <p>Chuyển về làm việc ở nhánh mới tạo</p>
                                <p>2 lệnh trên (branch và checkout branch) có thể thay thế bằng lệnh này, và chỉnh sửa code trong nhánh</p>
                                <p>Cập nhật tất cả những thay đổi đã chỉnh sửa</p>
                                <p>Ghi lại việc thay đổi ví dụ: git commit -m "fix all bux"</p>
                                <p>Gộp nhánh cần gộp vào nhánh chính (nếu đã test ổn)</p>
                                <p>Đẩy lên server</p>
                            </div>
                        </div>
                        <p className='text-rose-400 text-xl pl-3 pb-4 m-0'>Lưu ý có thể làm việc trực tiếp trên nhánh master, tuy nhiên trước khi đẩy code lên server cần add và commit.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
