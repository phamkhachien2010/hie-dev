import { Table } from 'antd';
import React, { useEffect } from 'react';
import styleTech from './tech.module.css'

const bgGit = require('../../assets/img/bg-git.jpg')

const dataSource = [
    {
        key: '1',
        name: <p>git clone <span className='font-thin'>url</span></p>,
        desc: <p>Trường hợp chưa có repo ở local, dùng lệnh này để lấy source code từ server về máy tính (url lấy ở trong dropdown code trên server)</p>,
    },
    {
        key: '2',
        name: <p>git init</p>,
        desc: <p>Tạo kho ở local (máy tính)</p>,
    },
    {
        key: '3',
        name: <p>git checkout <span className='font-thin'>branch_name</span></p>,
        desc: <p>Làm việc trên nhánh nào thì checkout nhánh đó</p>,
    },
    {
        key: '4',
        name: <p>git branch</p>,
        desc: <p>Xem có những nhánh nào ở trên local repo. Đang ở nhánh nào thì nhánh đó hiện màu xanh và có dấu *</p>,
    },
    {
        key: '5',
        name: <p>git branch <span className='font-thin'>branch_name</span></p>,
        desc: <p>Tạo một nhánh phụ mới</p>,

    },
    {
        key: '6',
        name: <p>git checkout -b <span className='font-thin'>branch_name</span></p>,
        desc: <p>Tạo một nhánh phụ mới và làm việc luôn trên nhánh đó</p>,
    },
    {
        key: '7',
        name: <p>git add .</p>,
        desc: <p>Cập nhật tất cả những thay đổi đã chỉnh sửa</p>,
    },
    {
        key: '8',
        name: <p>git commit -m <span className='font-thin'>"messdesc"</span></p>,
        desc: <p>Ghi lại việc thay đổi ví dụ: git commit -m "fix all bux"</p>,
    },
    {
        key: '9',
        name: <p>git remote add origin <span className='font-thin'>remote_url</span></p>,
        desc: <p>Tạo liên kết giữa local repo với server repo</p>,
    },
    {
        key: '10',
        name: <p>git push</p>,
        desc: <p>Đẩy source code đã cập nhật lên repo của server</p>,
    },
    {
        key: '11',
        name: <p>git merge <span className='font-thin'>branch_name</span></p>,
        desc: <p>Gộp nhánh vào nhánh chính</p>,
    },
    {
        key: '12',
        name: <p>git fetch <span className='font-thin'>branch_name</span></p>,
        desc: <p>Lấy source code từ server về local nhưng chưa gộp những cập nhật</p>,
    },
    {
        key: '13',
        name: <p>git pull</p>,
        desc: <p>Lấy source code từ server về local thay thế toàn bộ code cũ. pull = fetch + merge</p>,
    },

];

const datagitFirst = [
    {
        key: '1',
        name: <p>git init</p>,
        desc: <p>Tạo kho ở local (máy tính)</p>,
    },
    {
        key: '2',
        name: <p>git add .</p>,
        desc: <p>Cập nhật tất cả những thay đổi đã chỉnh sửa</p>,
    },
    {
        key: '3',
        name: <p>git commit -m <span className='font-thin'>"messdesc"</span></p>,
        desc: <p>Ghi lại việc thay đổi ví dụ: git commit -m "fix all bux"</p>,
    },
    {
        key: '4',
        name: <p>git branch -M master</p>,
        desc: <p>Tạo nhánh chính master</p>,
    },
    {
        key: '5',
        name: <p>git remote add origin <span className='font-thin'>remote_url</span></p>,
        desc: <p>Tạo liên kết giữa local repo với server repo</p>,
    },
    {
        key: '6',
        name: <p>git push -u orrigin master</p>,
        desc: <p>Đẩy source code đã cập nhật lên repo của server</p>,
    },
]

const dataGitSecond = [
    {
        key: '1',
        name: <p>git checkout master</p>,
        desc: <p>Chuyển về làm việc ở nhánh chính</p>,
    },
    {
        key: '2',
        name: <p>git branch <span className='font-thin'>branch_name</span></p>,
        desc: <p>Tạo nhánh mới</p>,
    },
    {
        key: '3',
        name: <p>git checkout <span className='font-thin'>branch_name</span></p>,
        desc: <p>Chuyển về làm việc ở nhánh mới tạo</p>,
    },
    {
        key: '4',
        name: <p>git checkout -b <span className='font-thin'>branch_name</span></p>,
        desc: <p>2 lệnh trên (branch và checkout branch) có thể thay thế bằng lệnh này, và chỉnh sửa code trong nhánh</p>,
    },
    {
        key: '5',
        name: <p>git add .</p>,
        desc: <p>Cập nhật tất cả những thay đổi đã chỉnh sửa</p>,
    },
    {
        key: '6',
        name: <p>git commit -m <span className='font-thin'>"messdesc"</span></p>,
        desc: <p>Ghi lại việc thay đổi ví dụ: git commit -m "fix all bux"</p>,
    },
    {
        key: '7',
        name: <p>git push origin branch_name</p>,
        desc: <p>Đẩy lên server nhánh branch_name</p>,
    },
    {
        key: '8',
        name: <p>git checkout master</p>,
        desc: <p>Quay lại nhánh chính</p>,
    },
    {
        key: '9',
        name: <p>git merge <span className='font-thin'>branch_name</span></p>,
        desc: <p>Gộp nhánh cần gộp vào nhánh chính (nếu đã test ổn)</p>,
    },
    {
        key: '10',
        name: <p>git push origin master</p>,
        desc: <p>Đẩy nhánh chính sau khi merge lên server</p>,
    },
]

const columns = [
    {
        title: 'Lệnh',
        dataIndex: 'name',
        key: 'name',
        width: '30%'
    },
    {
        title: 'Chức năng',
        dataIndex: 'desc',
        key: 'desc',
    },
];


export default function GitBasic() {

    useEffect(() => {
        window.scrollTo(0, 0)

        return () => {

        }
    }, [])
    return (
        <div className={styleTech.tech}>
            <div className='text-white' style={{ backgroundImage: `url(${bgGit})`, backgroundAttachment: 'fixed' }}>
                <div style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>

                    <div className='grid grid-cols-6'>
                        <div className="w-4/5 m-auto text-xs md:text-base col-span-5">
                            <div className='flex justify-center items-center'>
                                <h1 className='text-rose-100 text-3xl md:text-5xl text-center pt-5 pb-3 inline-block'>Tìm hiểu về Git?</h1>
                                <img src={require('../../assets/img/9919.png')} alt="git-logo" style={{ width: '100px' }} className='inline-block' />
                            </div>
                            <p className='pl-3 text-xs sm:text-base' id='define-git'>Git hiểu đơn giản là một hệ thống quản lý source code của dev, giúp dev lưu trữ source code, cập nhật những lần chỉnh sửa và lưu lại lịch sử những lần chỉnh sửa đó để có thể biết rằng đã chỉnh sửa những gì, và có thể quay lại đó fix bugs một cách dễ dàng. Git cho phép lưu trên các nền tảng server của mình đó là Github và Gitlab.</p>
                            <section id='use-git'>
                                <h2 className='text-rose-100 text-xl md:text-2xl pl-4 mt-2 mb-0' >Tại sao phải sử dụng git?</h2>
                                <p>Ngoài tính năng lưu trữ lịch sử dữ liệu, git còn cho phép tạo nhiều nhánh làm việc song song với nhánh chính và có thể merge (lưu nhánh vào nhánh chính). Thông thường trong 1 team sẽ có nhiều dev cùng làm việc, tuy nhiên không thể mỗi dev code trên 1 máy rồi copy paste. Nên sẽ cần có 1 kho lưu trữ trên server, các dev chỉ cần clone (lấy kho từ server và tạo 1 kho tại máy tính) source code về, tạo nhánh mới, làm việc trên nhánh đó. Khi mọi thứ hoàn thành thì sẽ merge vào nhánh chính. Thông thường việc merge sẽ được lead thực hiện.</p>
                                <p>Để làm việc được với git cần tải git về máy <a className='text-blue-300' href="https://git-scm.com/">Tải tại trang chủ của git</a>, và đăng ký một tài khoản git bằng email trên trang <a className='text-blue-300' href="https://github.com/">github</a> </p>
                                <p>Để tạo được 1 repository (kho) cần ấn dấu + trên góc bên phải của trang git sau khi đăng nhập, đặt tên cho repo và đặt chế độ public (công khai để người khác có thể xem, và  tải về) hoặc private (chỉ mình chủ tài khoản có thể xem và tải về), sau đó làm theo hướng dẫn trong trang github. Lưu ý trong git đặt tên nhánh chính mặc định là main, có thể đổi tên nhánh chính tùy thích, nhưng thông thường là đổi thành master.</p>
                            </section>
                            <section id='git-command'>
                                <h2 className='text-rose-100 text-md md:text-xl lg:text-2xl pl-3 pt-2' >Có khá nhiều lệnh git, tuy nhiên có một vài lệnh chính cần chú ý.</h2>
                                <Table pagination={false} dataSource={dataSource} columns={columns} />
                                <p>Ngoài ra có thể xem thêm<a className='text-blue-300' href="https://topdev.vn/blog/git-la-gi/"> ở đây</a> và <a className='text-blue-300' href="https://viblo.asia/p/quy-trinh-lam-viec-chuan-chi-voi-git-eW65G10RZDO">ở đây</a>.</p>
                            </section>

                            <section id='git-work'>
                                <h2 className='text-rose-100 text-md md:text-xl lg:text-2xl pt-3 pl-3' >Quy trình tạo làm việc với github thường như sau:</h2>
                                <h3 className='text-rose-400 text-md md:text-xl lg:text-2xl mb-0 pl-3'>Sau khi hoàn thành source code đầu tiên, cần tạo 1 repository trên github, sau đó thực hiện các lệnh sau trong terminal:</h3>
                                <Table pagination={false} dataSource={datagitFirst} columns={columns} />
                                <p>Và sau đó mỗi lần chỉnh sửa chỉ cần <span className='text-emerald-400'>git add .</span> > <span className='text-emerald-400'>git commit -m "message"</span> > <span className='text-emerald-400'> git push</span></p>

                                <h3 className='text-rose-400 text-md md:text-xl lg:text-2xl pt-3 mb-0 pl-3'>Muốn tạo một nhánh để làm việc không ảnh hưởng đển nhánh chính dùng thêm những lệnh sau:</h3>
                                <Table pagination={false} dataSource={dataGitSecond} columns={columns} />
                                <p className='text-rose-400 text-md md:text-xl lg:text-2xl pl-3 pb-4 m-0'>Lưu ý có thể làm việc trực tiếp trên nhánh master, tuy nhiên trước khi đẩy code lên server cần add và commit.</p>
                            </section>
                        </div>

                        <div className='bg-teal-400 p-3'>
                            <div className="w-4/5 m-auto fixed">
                                <p className='text-sx sm:text-sm lg:text-base font-bold mb-2'>Mục lục</p>
                                <h2 className='text-sx sm:text-sm lg:text-base'><a className='text-black' href='#define-git'> Git là gì?</a></h2>
                                <h2 className='text-sx sm:text-sm lg:text-base'><a className='text-black' href='#use-git'>Sử dụng git</a></h2>
                                <h2 className='text-sx sm:text-sm lg:text-base'><a className='text-black' href='#git-command'>Các lệnh thường dùng với github</a></h2>
                                <h2 className='text-sx sm:text-sm lg:text-base'><a className='text-black' href='#git-work'>Quy trình làm việc với github</a></h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
