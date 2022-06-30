import React, { useState } from 'react'
import styleCanslim from './stock.module.css'

export default function Canslim() {

  const [displayC, setDisplayC] = useState('hidden');
  const [displayA, setDisplayA] = useState('hidden')
  const [displayN, setDisplayN] = useState('hidden')
  const [displayS, setDisplayS] = useState('hidden')
  const [displayL, setDisplayL] = useState('hidden')
  const [displayI, setDisplayI] = useState('hidden')
  const [displayM, setDisplayM] = useState('hidden')
  const [dinh, setDinh] = useState('hidden');
  const [day, setDay] = useState('hidden')

  return (
    <div className={styleCanslim.stock}>
      <h1 className='py-5 text-2xl md:text-4xl text-center font-bold'>Hệ thống đầu tư CANSLIM</h1>
      <p className='font-bold'>Những yêu cầu tối thiểu trong hệ thống đầu tư CANSLIM</p>
      <ul className='list-disc'>
        <li>Mua cổ phiếu trong xu hướng tăng giá</li>
        <li>Chỉ mua thêm khi cổ phiếu đã tăng giá trừ điểm mua</li>
        <li>Cắt lỗ nhanh với những khoản đầu tư không hiệu quả 7-8% và không có ngoại lệ</li>
        <li>Chú ý, cổ phiếu phải đạt những tiêu chí cơ bản về EPS, tăng trưởng EPS, doanh số</li>
        <li>Chú ý khi có sự xác nhận của hành động giá và khối lượng mới mua thêm.</li>
      </ul>

      <section>
        <h2 className='text-xl md:text-2xl'>CANSLIM</h2>
        <div className='p-2 bg-sky-800 text-white cursor-pointer mb-2 rounded-lg' onClick={() => {
          if (displayC === 'hidden') {
            setDisplayC('block')
          }
          if (displayC === 'block') {
            setDisplayC('hidden')
          }
        }}><span className='text-xl font-bold text-green-500'>C</span> : Tăng trường doanh số và EPS quý hiện tại càng cao càng tốt</div>
        <ul className={`list-disc ${displayC}`}>
          <li>Mức tăng trường EPS quý hiện tại nên trên 20%</li>
          <li>Tìm kiếm sự tăng tốc và đột biến trong tăng trưởng EPS</li>
          <li>Tăng trưởng EPS phải đến từ doanh số</li>
          <li>Có sự tăng tốc trong tăng trưởng EPS, tăng trưởng doanh số và có sự mở rộng của lợi nhuận biên trong 3 quý liên tiếp</li>
        </ul>

        <div className='p-2 bg-sky-800 text-white cursor-pointer mb-2 rounded-lg' onClick={() => {
          if (displayA === 'hidden') {
            setDisplayA('block')
          }
          if (displayA === 'block') {
            setDisplayA('hidden')
          }
        }}><span className='text-xl font-bold text-green-500'>A</span> : Tăng trường EPS 3 năm gần nhất cao: Tìm những công ty có mức độ tăng trưởng này cao nhất</div>
        <ul className={`list-disc ${displayA}`}>
          <li>Tốc độ tăng trưởng EPS hàng năm cao</li>
          <li>Tìm kiếm sự tăng tốc và đột biến trong tăng trưởng EPS</li>
          <li>EPS hàng năm tăng dần ít nhất trong 3 năm, EPS năm 2 giảm rồi năm 3 tăng đột biến là 1 điểm trừ</li>
          <li>Chú ý những công ty phục hồi từ khó khăn: Tốc độ tằn trưởng EPS hàng năm 5-10%, 2 quý liên tiếp lơi nhuận phục hồi mạnh, tỷ lệ vay dài hạn cải thiện qua các quý, năm</li>
        </ul>

        <div className='p-2 bg-sky-800 text-white cursor-pointer mb-2 rounded-lg' onClick={() => {
          if (displayN === 'hidden') {
            setDisplayN('block')
          }
          if (displayN === 'block') {
            setDisplayN('hidden')
          }
        }}><span className='text-xl font-bold text-green-500'>N</span>ew : Công ty trẻ, có sản phẩm mới, lãnh đạo mới đỉnh giá mới, mua tại thời điểm hợp lý</div>
        <ul className={`list-disc ${displayN}`}>
          <li>Các công ty trẻ, có sản phẩm mới</li>
          <li>Có lãnh đạo mới, năng động</li>
          <li>Thiết lập đỉnh giá mới từ nền giá tốt</li>
        </ul>

        <div className='p-2 bg-sky-800 text-white cursor-pointer mb-2 rounded-lg' onClick={() => {
          if (displayS === 'hidden') {
            setDisplayS('block')
          }
          if (displayS === 'block') {
            setDisplayS('hidden')
          }
        }}><span className='text-xl font-bold text-green-500'>S</span> : Quy luật cung, cầu: Số lượng cổ phiếu đang lưu hành ít, xuất hiện lực cầu mạnh với khối lượng lớn</div>
        <ul className={`list-disc ${displayS}`}>
          <li>Chọn cổ phiếu có nguồn cung cổ phiếu nhỏ, vì chỉ cần một lực cầu nhỏ cũng có thể đẩy giá cổ phiếu đi lên. Tuy nhiên cũng không nên chọn những cổ phiếu có lục cầu quá nhỏ, vì không có thanh khoản nên không dễ thoát khỏi cổ phiếu khi cần thiết</li>
          <li>Chọn ban lãnh đạo năng động hơn là thủ cựu, ban lãnh đạo nên nắm lượng lớn cổ phần của công ty</li>
        </ul>

        <div className='p-2 bg-sky-800 text-white cursor-pointer mb-2 rounded-lg' onClick={() => {
          if (displayL === 'hidden') {
            setDisplayL('block')
          }
          if (displayL === 'block') {
            setDisplayL('hidden')
          }
        }}><span className='text-xl font-bold text-green-500'>L</span>ead : Chọn cổ phiếu dẫn dắt chứ không phải cổ phiếu bị thị trường lãng quên</div>
        <ul className={`list-disc ${displayL}`}>
          <li>Chọn những ngành tốt nhất, từ đó chọn những công ty tốt nhất trong ngành</li>
          <li>Chọn những công ty có mức tăng trưởng EPS hàng quý và hàng năm tốt nhất</li>
          <li>Chọn những công ty có ROE, ROA, ROIC, lợi nhuận biên cao nhất</li>
          <li>Chọn những công ty có tăng trưởng doanh số nhanh nhất</li>
          <li>Chọn những công ty có hành động giá năng động nhất</li>
          <li>Chọn những công ty có lợi thế cạnh tranh hơn hẳn các công ty còn lại trong ngành</li>
        </ul>

        <div className='p-2 bg-sky-800 text-white cursor-pointer mb-2 rounded-lg' onClick={() => {
          if (displayI === 'hidden') {
            setDisplayI('block')
          }
          if (displayI === 'block') {
            setDisplayI('hidden')
          }
        }}><span className='text-xl font-bold text-green-500'>I</span> : Có sự bảo trợ của các nhà đầu tư tổ chức</div>
        <ul className={`list-disc ${displayI}`}>
          <li>Nên chọn những cổ phiếu có sự bảo trợ của một số nhà đầu tư tổ chức có thành tích tốt</li>
          <li>Chú ý những cổ phiếu được các nhà đầu tư tổ chức bắt đầu thu gom, tạo nền giá tốt</li>
        </ul>
        <div className='p-2 bg-sky-800 text-white cursor-pointer mb-2 rounded-lg' onClick={() => {
          if (displayM === 'hidden') {
            setDisplayM('block')
          }
          if (displayM === 'block') {
            setDisplayM('hidden')
          }
        }}><span className='text-xl font-bold text-green-500'>M</span>arket : Đi theo xu hướng của thị trường chung</div>
        <ul className={`list-disc ${displayM}`}>
          <li>Quan sát đồ thị ngày của thị trường chung, hiểu được đồ thị nói lên điều gì thông qua hành động giá và khối lượng</li>
          <li>Bán khi có 5-6 ngày phân phối trong bất kỳ giai đoạn 4-5 tuần nào</li>
          <li>Trước khi thị trường đảo chiều thường sẽ có 2-3 cũ kéo ngược</li>
          <li>Trong thị trường con gấu, tìm kiếm những ngày bùng nổ theo đà, có thể đó là xác nhận xu hướng thị trường chuyển thừ giảm sang tăng</li>
          <li>Các thị trường con Gấu thường kết thúc trong khi nền kinh tế vẫn tiếp tục chìm sâu và suy thoái</li>
          <li>Trong thị trường con gấu: Các cổ phiếu tăng giá đầu phiên nhưng giảm cuối phiên (những cây nến đỏ có bóng nến trên)</li>
          <li>Trong đầu thị trường Bò tót: cổ phiếu thường giảm giá đầu phiên và tăng giá cuối phiên (cây nến xanh có bóng nến dưới)</li>
          <li>Trong số những ngày tăng giá, khối lượng tăng mạnh nhưng giá không tăng nhiều -> cảnh báo thị trường lập đỉnh</li>
          <li>Sau khi có đủ số ngày phân phối với khối lượng tăng, và đợt giảm giá mạnh đầu tiên xảy ra, hãy xem xét xem liệu có nỗ lực hồi phục yếu ớt hay ngày bùng nổ theo đà xuất hiện.
            <p>Nếu xuất hiện nỗ lực hồi phục yếu ớt, (giá tăng với khối lượng thấp) thì khả năng cao đó chỉ là cú hồi để tiếp tục giảm điểm</p>
            <p>Nếu xuất hiện ngày bùng nổ theo đà thì có thể thị trường con Gấu chuẩn bị chấm dứt</p>
          </li>
          <li>
            <p>Dấu hiệu cho thấy đợt hồi phục đầu tiên thất bại:</p>
            <p>- Sau ngày hồi phục đầu tiên, ngày giao dịch thứ 2 mở cửa tăng giá nhưng bất ngờ đảo chiều giảm giá vào cuối phiên</p>
            <p>- Giá tăng từ 3 - 5 ngày nhưng với khối lượng giảm dần</p>
            <p>- Chỉ số thị trường có mức tăng giá ít hơn ngày hôm trước</p>
          </li>          
          <li>Trong quá khứ, 3 lần tăng mạnh lãi suất liên tiếp của FED thường đánh dấu cho sự khởi đầu của thị trường con Gấu và suy thoái kinh tế</li>
          <li>Các thị trường con gấu thường kết thúc khi lãi suất cuối cùng bị hạ xuống mức thấp nhất</li>
        </ul>

        <h3 className='mt-3 font-bold'>Những lưu ý</h3>
        <div className='p-2 bg-sky-800 text-white cursor-pointer mb-2 rounded-lg' onClick={() => {
          if (dinh === 'hidden') {
            setDinh('block')
          }
          if (dinh === 'block') {
            setDinh('hidden')
          }
        }}>Nhận diện đỉnh</div>
        <ul className={`list-disc ${dinh}`}>
        <li>
            <p>Dấu hiệu thị trường đạt đỉnh: </p>
            <p>- Khi các cổ phiêu dẫn dắt tạo điểm phá vỡ từ nền giá thứ 3-4 nến giá rộng lỏng, biến động hỗn loạn</p>
            <p>- Cổ phiếu dẫn dắt tạo những phiên Climaxtop</p>
            <p>- Cổ phiếu giảm điểm mạnh bất thường từ đỉnh với khối lượng lớn nhưng tăng giá rất ít từ đáy</p>
            <p>- Nhiều cổ phiếu xuất hiện điểm mua tiềm năng nhưng thất bại</p>
            <p>- Cổ phiếu xuất hiện đỉnh giá mới từ nền giá rộng lỏng</p>
          </li>
          <li className='font-bold'>Trong giai đoạn đầu thị trường con gấu, một số cổ phiếu dẫn dắt nhất định vẫn tăng giá tốt khiến các nhà giao dịch phải ấn tượng với sức mạnh của nó</li>
          <li>Các cổ phiêu dẫn dắt bắt đầu suy yếu, các cổ phiếu thị giá thấp, nền tảng yếu bắt đầu tăng giá, Hãy thận trọng. Thị trường đang ở giai đoạn tăng giá cuối cùng. (xem lại các cổ phiếu penny giai đoạn cuối năm 2021)</li>
          <li>Trong một số trường hợp, sau khi thị trường giảm điểm từ 1 đỉnh quan trọng, sẽ có 1 đợt tăng giá kéo dài trong vài tháng đẩy chỉ số thị trường quay lại đỉnh cũ hoặc vượt đỉnh cũ, trước khi bắt đầu sụp đổ</li>
        </ul>

        <div className='p-2 bg-sky-800 text-white cursor-pointer mb-2 rounded-lg' onClick={() => {
          if (day === 'hidden') {
            setDay('block')
          }
          if (day === 'block') {
            setDay('hidden')
          }
        }}>Nhận diện đáy</div>
        <ul className={`list-disc ${day}`}>
        <li>Tìm ở đáy thị trường những ngày mà đầu phiên giảm điểm, cuối phiên đảo chiều tăng điểm với khối lượng lớn.</li>
        <li>Bắt đầu từ ngày thứ 4 sau nỗ lực hồi phục -> tìm những ngày bùng nổ theo đà</li>
        <li>Đỉnh phiên giao dịch sau luôn cao hơn đỉnh phiên giao dịch trước</li>
        </ul>
        
        <ul className='list-disc'>
          <li>Cổ phiếu giảm từ 1 đến 1,3 lần so với mức độ giảm điểm của thị trường chung nên được chú ý</li>
          <li>Mục tiêu của phương pháp CANSLIM không phải là mua tại đáy, mà là mua đúng thời điểm, lúc mà giá bắt đầu thoát khỏi nền giá, hình thành điểm phá vỡ</li>
          <li>Những lúc thị trường điều chỉnh là những lúc tạo nên nền giá tốt, cần theo dõi sát sao những cổ phiếu đáp ứng được tiêu chí chọn cổ phiếu</li>
          <li>Chú ý những cổ phiếu có khối lượng lớn nhưng giá không giảm nhiều ở gần đáy, cho thấy có lực cầu xuất hiện để nâng đỡ giá cổ phiếu</li>
          <li>Chú ý những ngày, tuần mà giá hồi phục từ MA10 và đóng cửa trên MA10. Đây có thể tạo 1 điểm mua lý tưởng trong thị trường tăng giá mới bắt đầu</li>
          <li>Chú ý những cổ phiếu điều chỉnh ít nhất so với sự điều chỉnh chung của thị trường </li>
          <li>Khi đợt sụt giảm của thị trường chung kết thúc, cổ phiếu đầu tiên trở lại đỉnh giá cao nhất gần như là cổ phiếu dẫ dắt</li>
          <li>Tìm những cổ phiếu mạnh bất thường trong thị trường giảm giá</li>
          <li className='fonr-bold'>Học cách đọc hành động giá và sự thay đổi khối lượng của các chỉ số thị trường chung, cũng như hành động giá của các cổ phiếu dẫn dắt.</li>
          <li>Quan sát nguồn cung, cầu thay đổi như thế nào mỗi ngày</li>
          <li>Khi bắt đầu mu cổ phiếu, đặt điểm dừng lỗ từ 7-8%, khi cổ phiếu đã tăng giá và có một khoản lãi, nên nâng lệnh dừng lỗ từ 10-15% để hấp thụ những đợt điều chỉnh bình thường của cổ phiếu</li>
        </ul>
      </section>

      <section>
        <h2 className='text-xl md:text-2xl'>NHỮNG MẪU HÌNH ĐÁNG XEM XÉT</h2>
        <h3 className='text-lg md:text-xl'>Mẫu hình cốc tay cầm</h3>
        <ul className='list-disc'>
          <li>Mẫu hình cốc tay cầm thường kéo dài từ 3 tuần đến khoảng 6 tháng</li>
          <li>Có phần thân cốc là phần cổ phiếu điều chỉnh, khoảng 12-30%</li>
          <li>Trước khi hình thành cốc là một xu hướng tăng, ít nhất tăng 30%</li>
          <li>Phần tay cầm thường hình thành trong hơn 1-2 tuần và có những phiên rũ bỏ (những cây nến có bóng nến dài), Khối lượng ở phần tay cầm giảm mạnh, giá điều chỉnh nhẹ tại phần tay cầm và nên có hành động giá thắt chặt</li>
          <li>Phần tay cầm nên được hình thành ở nửa trên của cốc, phần tay cầm nên nằm trên MA50</li>
          <li>Thanh khoản phần đáy cốc cũng cần thấy được sự cạn kiệt, ở phần đáy cốc cũng nên có một vài phiên với thanh khoản tăng đột biến, cho thấy sự tham gia của một số tổ chức</li>
          <li>Điểm phá vỡ là điểm ngang với đỉnh bên phải cốc sau khi trải qua giai đoạn tay cầm, khối lượng tại điểm phá vỡ phải lớn (tăng ít nhất 40-50%) của những phiên bình thường</li>
          <li>Tại điểm phá vỡ sẽ có những thông tin tốt đi kèm để xác nhận đà tăng</li>
        </ul>

        <h3 className='text-lg md:text-xl'>Mẫu hình hai đáy</h3>
        <ul className='list-disc'>
          <li>Mẫu hình 2 đáy nên có đáy 2 thấp hơn đáy thứ nhất tạo thành 1 cú rũ bỏ</li>
          <li>Điểm pivot là đỉnh giữa đáy 1 và đáy 2 trên đà tăng từ đáy 2</li>
          <li>Khối lượng tại đáy 2 tăng đột biến, thể hiện khi rũ bỏ được hầu hết nhà đầu tư yếu, xuất hiện lực cầu lớn tham gia đẩy giá cổ phiếu đi lên</li>
        </ul>
      </section>
    </div>
  )
}
