import React from 'react'
import styleBan from './stock.module.css'

export default function BanKhac() {
  return (
    <div className={styleBan.stock}>
        <h1 className='text-2xl md:text-4xl text-center py-5 font-bold'>Một số cách bán, tìm điểm bán cần chú ý</h1>
        <h2 className='text-xl md:text-2xl font-bold uppercase'>cách chốt lời</h2>
        <h3 className='text-xl md:text-2xl font-bold mt-2 mb-0'>1. Chốt lãi khi xác nhận phiên phân phối đỉnh</h3>
        <p>Sau 1 quãng thời gian tăng nóng, thanh khoản của cổ phiếu trong vài ngày vẫn ở mức cao nhưng đà tăng đã chững lại và giá đóng cửa không phải mức cao nhất trong phiên. Lúc này lực cầu vẫn mua vào mạnh nhưng đang có lượng cung khá lớn được đẩy ra 1 cách tinh tế. Sau đó thường sẽ xuất hiện 1 phiên phân phối đỉnh với đặc điểm là phiên giao dịch thanh khoản rất lớn, tăng vọt so với những phiên trước đó. Giá cổ phiếu được đẩy mạnh ở đầu phiên nhưng nhanh chóng suy yếu và đảo chiều giảm điểm. Cổ phiếu có thể sàn hàng loạt. Biểu đồ kỹ thuật cho thấy 1 cây nến đặc dài, đóng cửa tại mức thấp nhất hoặc gần thấp nhất. Xu hướng tăng có thể bị bẻ gãy sau một đoạn phân phối và xác nhận bởi phiên phân phối tạo đỉnh. Cổ phiếu có thể rơi vào nhịp điều chỉnh sâu.</p>
        <h3 className='text-xl md:text-2xl font-bold mt-3 mb-0'>2. Chốt lãi khi đạt mục tiêu đề ra</h3>
        <h3 className='text-xl md:text-2xl font-bold mt-3 mb-0'>3. Chốt lãi khi đạt tỷ lệ lợi nhuận 20-25%</h3>
        <h3 className='text-xl md:text-2xl font-bold mt-3 mb-0'>4. Chốt lãi theo quy tắc 8 tuần</h3>
        <p>Nếu cổ phiếu đã tăng hơn 20% từ điểm mua lý tưởng trong vòng 3 tuần kể từ điểm phá vỡ nền giá, hãy giữ trong ít nhất 8 tuần. Quy tắc nên được áp dụng cho các cổ phiếu dẫn dắt thị trường thực sự, chứ không phải những cổ phiếu già cỗi. Công ty có yếu tố cơ bản mạnh và những đặc điểm CANSLIM khác.</p>
        <h3 className='text-xl md:text-2xl font-bold mt-3 mb-0'>5. Chốt lãi theo đường MA</h3>
        <p>Khi cổ phiếu đã thể hiện sự tăng giá tốt theo đường MA (giá nằm trên MA10 khá cao, MA10 nằm trên MA20, MA20 nằm trên MA50), thì nên xem xét bán khi cổ phiếu phá thủng MA10. Bán 1/2 khi giá vi phạm đường MA10 (giá đóng cửa dưới MA10, ngày tiếp theo, cổ phiếu đóng cửa dưới mức đày thấp nhất ngày trước đó). Tiếp tục bán nốt phần còn lại nếu vi phạm MA50</p>
    </div>
  )
}
