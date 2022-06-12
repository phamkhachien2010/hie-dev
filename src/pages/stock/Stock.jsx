import { Table } from 'antd';
import React from 'react'
import { NavLink } from 'react-router-dom'

import styleStock from './stock.module.css'

const chonCoPhieu = [
    {
        key: '1',
        name: <p>Cổ phiếu có điểm CANSLIM trên 60, điểm 4M trên 60, hoặc các cổ phiếu có quá trình phục hổi</p>,
        check: <input type='checkbox' />
    },
    {
        key: '2',
        name: <p>Cổ phiếu có mức nợ dài hạn giảm dần theo quý, năm</p>,
        check: <input type='checkbox' />
    },
    {
        key: '3',
        name: <p>Cổ phiếu có lợi nhuận tăng theo quý, năm</p>,
        check: <input type='checkbox' />
    },
    {
        key: '4',
        name: <p>Cổ phiếu có ROE, ROA, ROIC > 10%</p>,
        check: <input type='checkbox' />
    },
    {
        key: '5',
        name: <p>Cổ phiếu có sự tăng trưởng EPS so với cùng kỳ các năm trước, tăng trưởng EPS phải bắt nguồn từ tăng trưởng doanh số. Bên cạnh đó, các cổ phiếu cùng ngành cũng phải cho thấy sự tăng trưởng EPS. Có sự tăng trưởng EPS qua các năm.</p>,
        check: <input type='checkbox' />
    },
];

const mua = [
    {
        key: '1',
        name: <div> <p className='font-bold'>Điều kiện cần và đủ là thị trường chung đang trong xu hướng tăng, và đã xác nhận xu hướng tăng</p>
            <p>Tìm kiếm ngày bùng nổ theo đà. Là ngày giá tăng mạnh đồng thời khối lượng cũng tăng vượt bậc so với khối lượng bình quân</p></div>,
        check: <input type='checkbox' />
    },
    {
        key: '2',
        name: <div>
            <p>Cổ phiếu tạo những mẫu hình nến tin cậy, với sự ủng hộ của khối lượng</p>
            <NavLink className='text-blue-400' to='/stock/nen-nhat'>Đối chiếu những mẫu hình nến tại đây</NavLink>
        </div>,
        check: <input type='checkbox' />
    },
    {
        key: '3',
        name: <p><a href="#chu-y-MA" className='text-black bg-cyan-300'>Cổ phiếu tạo thành những giao cắt vàng giữa các đường MA10, MA20, MA50</a></p>,
        check: <input type='checkbox' />
    },
    {
        key: '4',
        name: <p><a href="#pocket-pivot" className='text-black bg-cyan-300'>Cổ phiếu hình thành điểm pocket pivot</a></p>,
        check: <input type='checkbox' />
    },
    {
        key: '5',
        name: <p>Tìm kiếm điểm spring và test spring trong khung giá tích luỹ</p>,
        check: <input type='checkbox' />
    },
];

const ban = [
    {
        key: '1',
        name:  <div>
        <p>Khi có bất kỳ 3 ngày phân phối trong giai đoạn 4-5 tuần, nên bán 1/2 số lượng cổ phiếu ngắn hạn, khi có 5-6 ngày phân phối bán hết cổ phiếu ngắn hạn, xem xét bán 1/3-1/2 cổ phiếu dài hạn để tối đa hoá lợi nhuận. <span className='font-bold'>Và đặc biệt phải chờ khi xu hướng giảm kết thúc mới quay lại thị trường.</span></p>
        <p>Ngày phân phối là ngày có lực bán nhiều hơn lực mua với khối lượng tăng so với ngày hôm trước</p>
    </div>,
        check: <input type='checkbox' />
    },
    {
        key: '2',
        name:  <div>
        <p>Cổ phiếu tạo những mẫu hình nến đảo chiều giảm tin cậy, với sự ủng hộ của khối lượng</p>
        <NavLink className='text-blue-400' to='/stock/nen-nhat'>Đối chiếu những mẫu hình nến tại đây</NavLink>
    </div>,
        check: <input type='checkbox' />
    },
    {
        key: '3',
        name: <p><a href="#chu-y-MA" className='text-black bg-cyan-300'>Cổ phiếu tạo thành những giao cắt chết chóc giữa các đường MA10, MA20, MA50, và vi phạm các đường MA trên</a></p>,
        check: <input type='checkbox' />
    },
    {
        key: '4',
        name: <p>Khi giá cổ phiếu tăng với khối lượng giảm dần thì nên nghĩ đến việc thoát khỏi cổ phiếu đó.</p>,
        check: <input type='checkbox' />
    },
    {
        key: '5',
        name: <p><a href="#quy-tac-7-tuan" className='text-black bg-cyan-300'> Vi phạm quy tắc 7 tuần.</a></p>,
        check: <input type='checkbox' />
    },
];

const columns = [
    {
        title: 'Tiêu chí',
        dataIndex: 'name',
        key: 'name',
        width: '90%'
    },
    {
        title: 'Check',
        dataIndex: 'check',
        key: 'check',
    }
];

export default function Stock() {
    return (
        <div className={styleStock.stock}>
            <h1 className='font-bold text-2xl md:text-4xl text-center py-3'>Bí kíp giao dịch cổ phiếu</h1>

            <section>
                <h2 className='text-xl md:text-3xl font-bold pl-3'>Chọn cổ phiếu</h2>
                <p className='mb-3'>Cần chọn ra 3 loại cổ phiếu:</p>
                <ul className='list-disc'>
                    <li>
                        <p>Cổ phiếu ngắn hạn (có thể mua khi giá có điểm hồi phục về giá) <span className='font-bold bg-green-500'>20% tổng vốn</span> </p>
                    </li>
                    <li>
                        <p>Cổ phiếu trung hạn (có những thông tin tốt, cổ phiếu hưởng lợi, trong thời gian ngắn vào tháng) <span className='font-bold bg-green-500'>30% tổng vốn</span> </p>
                    </li>
                    <li>
                        <p>Cổ phiếu dài hạn (là cổ phiếu hội tụ nhiều yếu tố cơ bản, về lâu dài không có bất cứ điều gì ảnh hưởng đến đà tăng trưởng của cổ phiếu) <span className='font-bold bg-green-500'>50% tổng vốn</span> </p>
                    </li>
                </ul>
                <Table pagination={false} dataSource={chonCoPhieu} columns={columns} />

            </section>

            <section>
                <h2 className='text-xl md:text-3xl font-bold pl-3'>Mua, tìm điểm mua</h2>
                <Table pagination={false} dataSource={mua} columns={columns} />
                
            </section>

            <section>
                <h2 className='text-xl md:text-3xl font-bold pl-3'>Bán, tìm điểm bán</h2>
                <Table pagination={false} dataSource={ban} columns={columns} />
                
            </section>

            <section>
                <h2 className='text-xl md:text-3xl font-bold pl-3'>Chú ý theo dõi những cổ phiếu:</h2>
                <ul className='list-disc'>
                    <li>
                        <p>Các công ty phục hồi từ khó khăn</p>
                    </li>
                    <li>
                        <p>Các công ty có lãnh đạo mới, thiết lập đỉnh giá mới từ nền giá tốt</p>
                    </li>
                    <li>
                        <p>Các công ty tốt nhất của ngành, tìm những cổ phiếu dẫn dắt trong thị trường điều chỉnh</p>
                    </li>
                </ul>
            </section>

            <section>
                <h2 className='text-xl md:text-3xl font-bold pl-3'>Những giải thích chi tiết</h2>
                <div id='pocket-pivot'>
                    <h3 className='font-bold'>Những tiêu chí đáp ứng điểm pocket pivot</h3>
                    <ul className='list-disc'>
                        <li>
                            <p>Điểm tăng giá với khối lượng lớn. Khi giá vẫn còn đang trong nền giá</p>
                        </li>
                        <li>
                            <p>Khối lượng tại điểm pocket phải lớn hơn khối lượng bất kỳ 10 ngày giảm giá trước đó</p>
                        </li>
                        <li>
                            <p>Trước khi xuất hiện pocket pivot, cổ phiếu nên có nền giá thắt chặt, tức giá giao động nhỏ với khối lượng nhỏ</p>
                        </li>
                        <li>
                            <p>Giá cổ phiếu nên giữ trên đường MA10 ngày hoặc MA50 ngày và lấy MA đó làm chỉ báo giao dịch. Nếu giá đóng cửa nằm dưới MA chỉ báo nên xem xét thoát ra khỏi cổ phiếu.</p>
                        </li>
                        <li>
                            <p>Pocket pivot nên xảy ra sau mọt giai đoạn tích luỹ.</p>
                        </li>
                        <li>
                            <p>Khi xác định pocket pivot nên tránh những điểm đã tăng giá kéo dài (Giá đã tăng và cách xa MA10).</p>
                        </li>
                    </ul>
                </div>

                <div id='quy-tac-7-tuan'>
                    <h3 className='font-bold'>Những tiêu chí đáp ứng quy tắc 7 tuần</h3>
                    <ul className='list-disc'>
                        <li>
                            <p>1 cổ phiếu đã bám đường MA10 hoặc MA 50 tròn vòng 7 tuần hoặc hơn thì nên xem xét bán khi giá vi phạm đường MA đó</p>
                        </li>
                        <li>
                            <p>Nếu cổ phiếu giữ giá ở MA10 thì xem xét bán 1/2 khi giá vi phạm MA10, và bán nốt phần còn lại khi vi phạm MA50</p>
                        </li>
                        <li>
                            <p className='bg-indigo-200 inline-block'>Vi phạm MA tức là có 1 ngày giá đóng cửa dưới MA đó và ngày hôm sau giá có điểm thấp nhất dưới điểm thấp nhất của ngày hôm trước</p>
                        </li>
                    </ul>
                </div>

                <div id='chu-y-MA'>
                    <h3 className='font-bold'>Những tiêu chí cần chú ý với các đường MA</h3>
                    <ul className='list-disc'>
                        <li>
                            <p>Quan sát các điểm cắt nhau giữa MA10, MA20, MA50. </p>
                        </li>
                        <li>
                            <p>Khi MA nhỏ nằm dưới MA lớn và có xu hướng đi lên báo hiệu giá cổ phiếu có thể sẽ tăng</p>
                        </li>
                        <li>
                            <p>Khi MA nhỏ nằm trên MA lớn và có xu hướng đi xuống báo hiệu giá cổ phiếu có thể sẽ giảm</p>
                        </li>
                        <li>
                            <p>Chú ý những ngày mà giá về chạm những đường MA và bật tăng trở lại với khối lượng lớn. Có thể một đợt tăng giá mới bắt đầu</p>
                        </li>
                        <li>
                            <p>Chú ý khoảng cách giữa các đường MA, khi MA nhỏ nằm dưới có thể xem xét mua vào ở những cơ phiếu có yếu tố cơ bản tốt, và ngược lại với MA nhỏ nằm trên MA lớn</p>
                        </li>

                    </ul>
                </div>

                <div>
                    <h3 className='font-bold'>Xác định khung giá theo Wykcoff</h3>
                    <ul className='list-disc'>
                        <li>
                            <p>Khung giá được hình thành từ 2 sự kiện là cao trào và phản ứng kỹ thuật</p>
                            <p>- Sự kiện cao trào là những mẫu hình nến đảo chiều với khối lượng lớn</p>
                            <p>- Phản ứng kỹ thuật là phản ứng giá ngược lại với cao trào với khối lượng giảm dần</p>
                        </li>
                        <li>
                            <p>Xác định điểm spring: là cú rũ bỏ (có thể không có), tại đây giá sẽ thoát khỏi khung giá theo chiều hướng tiêu cực nhưng sẽ nhanh chóng quay lại trong khung giá và sau đó có thể xác nhận một xu hướng tăng mới.</p>
                        </li>
                        <li>
                            <p>Sau mỗi điểm phá vỡ/rũ bỏ, thường sẽ có sự kiện test lại khung giá trước khi xác nhận vào xu hướng mới</p>
                        </li>
                    </ul>
                </div>
            </section>

        </div>
    )
}
