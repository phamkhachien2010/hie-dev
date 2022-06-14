import React from 'react'
import { Table } from 'antd';

import styleNen from './stock.module.css'


const candleUp = [
  {
    key: '1',
    name: <img style={{width:'150px'}} src={require('../../assets/candle/nến búa.jpg')} alt="" />,
    desc: <p>Nến búa xuất hiện sau một nhịp giảm giá, có bóng nến dưới dài hơn thân nến từ 1,5 đến 2 lần. Nến búa tạo hỗ trợ tại điểm thấp nhất của nến búa, từ đó xác định điểm dừng lỗ nếu mua theo nến búa</p>
  },
  {
    key: '2',
    name: <img style={{width:'150px'}} src={require('../../assets/candle/nhanChimTang.jpg')} alt="" />,
    desc: <p>Mẫu hình nhấn chìm tăng xuất hiện khi thị trường trong 1 xu hướng giảm rõ ràng. Nến thứ nhất là 1 nến đen, nến thứ 2 là 1 nến trắng dài. Thân nến thứ 2 ôm trọn thân nến thứ nhất. Mẫu hình nhấn chìm tăng xuất hiện sau một đợt giảm giá nhanh và mạnh. Khối lượng tại nến 2 nên lớn hơn bình quân. Điểm thấp nhất của mẫu hình là 1 hỗ trợ.</p>
  },
  {
    key: '3',
    name: <img style={{width:'150px'}} src={require('../../assets/candle/xuyenThau.jpg')} alt="" />,
    desc: <p>Mẫu hình xuyên thấu bao gồm 2 nến. Nến 1 là 1 nến đen tương đối dài, nến 2 là 1 nến trắng mở cửa dưới điểm thấp nhất của nến 1 và đóng cửa vào sâu trong nến 1 nhiểu hơn 50% thân nến 1. Mẫu hình này tạo 1 điểm hỗ trợ tại điểm thấp nhất.</p>
  },
  {
    key: '4',
    name: <img style={{width:'150px'}} src={require('../../assets/candle/nenSaoTang.jpg')} alt="" />,
    desc: <p>Mẫu hình nến sao tăng bao gồm 3 nến. Nến 1 là 1 nến đen dài, nến 2 là một có thân nhỏ, giữa thân nến 1 và thân nến 2 không có sự trùng lắp, nến 3 là 1 nến trắng dài đóng cửa vào sâu trong nến đen 1. Khối lượng tại nến 3 nên lớn hơn bình quân.</p>
  },
  {
    key: '5',
    name: <img style={{width:'150px'}} src={require('../../assets/candle/nenSaoMai.jpg')} alt="" />,
    desc: <p>Mẫu hình nến sao mai bao gồm 3 nến. Nến 1 là 1 nến đen dài, nến 2 là một nến sao, giữa nến 1 và nến 2 không có sự trùng lắp (bao gồm cả bóng nến), nến 3 là 1 nến trắng dài đóng cửa vào sâu trong nến đen 1. Khối lượng tại nến 1 nên thấp, khối lượng tại nến 3 nên lớn hơn bình quân, giá thấp nhất của nến sao mai là 1 hỗ trợ.</p>
  },
  {
    key: '6',
    name: <img style={{width:'150px'}} src={require('../../assets/candle/saoMaiDoji.jpg')} alt="" />,
    desc: <p>Mẫu hình sao mai doji là 1 mẫu hình sao mai, tuy nhiên nến 2 là 1 nến doji, nến doji mở ra 1 cửa sổ (không có bất kỳ sự trùng lắp nào với 2 nến còn lại là 1 tín hiệu mạnh).</p>
  },
  {
    key: '7',
    name: <img style={{width:'150px'}} src={require('../../assets/candle/haramiTang.jpg')} alt="" />,
    desc: <p>Mẫu hình harami tăng là mẫu hình bao gồm 2 nến. Nến 1 là 1 nến đen dài, nến 2 là 1 nến trắng nhỏ với thân nến 2 nằm bao gọn trong thân nến đen 1. Trường hợp đặc biệt là nến 2 là 1 nến doji thì mẫu hình sẽ mạnh hơn.</p>
  },
  {
    key: '8',
    name: <img style={{width:'150px'}} src={require('../../assets/candle/dayNhip.jpg')} alt="" />,
    desc: <p>Mẫu hình đáy nhíp là mẫu hình có 2 hoặc nhiểu cây nến có điểm thấp nhất bằng nhau. Nến đầu tiên nên có thân nến dài, các nến sau nên có thân nến nhỏ hơn</p>
  },
  {
    key: '9',
    name: <img style={{width:'150px'}} src={require('../../assets/candle/phanCongTang.jpg')} alt="" />,
    desc: <p>Mẫu hình phản công tăng là mẫu hình có 2 nến trái màu cùng giá đóng cửa. Nến đầu là nến đen, nến thứ 2 là nến trắng</p>
  },
  {
    key: '10',
    name: <img style={{width:'150px'}} src={require('../../assets/candle/dayChao.jpg')} alt="" />,
    desc: <p>Mẫu hình đáy chảo hình thành bởi cụm nến nhỏ tạo thành vòng cung ở đáy, và kết thúc mẫu hình bởi 1 cửa sổ. Điểm thấp nhất của cửa sổ là 1 hỗ trợ. Nếu có nến đóng cửa dưới điểm này coi như mẫu hình thất bại</p>
  },


];

const candleDown = [
  {
    key: '1',
    name: <img style={{width:'150px'}} src={require('../../assets/candle/nguoiTreoCo.jpg')} alt="" />,
    desc: <p>Nến người treo cổ xuất hiện sau một đợt tăng giá, mẫu hình giống với nến búa, có ý nghĩa trong dài hạn, Nến người treo cổ cần có xác nhận, một nến mở cửa thấp hơn thân nến người treo cổ, và đóng cửa dưới thân nến người treo cổ.</p>
  },
  {
    key: '2',
    name: <img style={{width:'150px'}} src={require('../../assets/candle/nhanChimGiam.jpg')} alt="" />,
    desc: <p>Mẫu hình nhấn chìm giảm xuất hiện khi thị trường trong 1 xu hướng tăng rõ ràng. Nến thứ nhất là 1 nến trắng, nến thứ 2 là 1 nến đen dài. Thân nến thứ 2 ôm trọn thân nến thứ nhất. Mẫu hình nhấn chìm giảm xuất hiện sau một đợt tăng giá nhanh và mạnh. Khối lượng tại nến 2 nên lớn hơn bình quân. Điểm cao nhất của mẫu hình là 1 kháng cự.</p>
  },
  {
    key: '3',
    name: <img style={{width:'150px'}} src={require('../../assets/candle/mayDen.jpg')} alt="" />,
    desc: <p>Mẫu hình mây đen bao phủ bảo gồm 2 nến. Nến thứ nhất là 1 nến trắng tương đối dài, nến thứ 2 là một nến đen mở cửa trên mức cao nhất của nến 1, và đóng cửa vào sâu trong nến 1, ít nhất trên 50% thân nến 1. Điểm cao nhất của mẫu hình mây đen bao phủ là một kháng cự quan trọng. Tuy nhiên mẫu hình cần có sự xác nhận. Nếu sau mẫu hình này mà có 1 cây nến trắng dài đóng cửa trên mức giá cao nhất của nến mây đen thì có thể một đợt tăng giá mới bắt đầu.</p>
  },
  {
    key: '4',
    name: <img style={{width:'150px'}} src={require('../../assets/candle/nenSaoGiam.jpg')} alt="" />,
    desc: <p>Mẫu hình nến sao giảm bao gồm 3 nến. Nến 1 là 1 nến trắng dài, nến 2 là một có thân nhỏ, giữa thân nến 1 và thân nến 2 không có sự trùng lắp, nến 3 là 1 nến đen dài đóng cửa vào sâu trong nến trắng 1. Khối lượng tại nến 3 nên lớn hơn bình quân.</p>
  },
  {
    key: '5',
    name: <img style={{width:'150px'}} src={require('../../assets/candle/nenSaoHom.jpg')} alt="" />,
    desc: <p>Mẫu hình nến sao hôm bao gồm 3 nến. Nến 1 là 1 nến trắng dài, nến 2 là một nến sao, giữa nến 1 và nến 2 không có sự trùng lắp (bao gồm cả bóng nến), nến 3 là 1 nến đen dài đóng cửa vào sâu trong nến trắng 1. Khối lượng tại nến 1 nên thấp, khối lượng tại nến 3 nên lớn hơn bình quân, giá cao nhất của nến sao mai là 1 kháng cự.</p>
  },
  {
    key: '6',
    name: <img style={{width:'150px'}} src={require('../../assets/candle/saoHomDoji.jpg')} alt="" />,
    desc: <p>Mẫu hình sao hôm doji là 1 mẫu hình sao hôm, tuy nhiên nến 2 là 1 nến doji, nến doji mở ra 1 cửa sổ (không có bất kỳ sự trùng lắp nào với 2 nến còn lại là 1 tín hiệu mạnh).</p>
  },
  {
    key: '7',
    name: <img style={{width:'150px'}} src={require('../../assets/candle/saoBang.jpg')} alt="" />,
    desc: <p>Mẫu hình sao băng là mẫu hình xuất hiện ở đỉnh, Sao băng có bóng nến trên dài hơn 2 - 3 lần thân nến, cần có sự xác nhận của nến phía sau (đóng cửa dưới mức giá thấp nhất của nến sao băng).</p>
  },
  {
    key: '8',
    name: <img style={{width:'150px'}} src={require('../../assets/candle/haramiGiam.jpg')} alt="" />,
    desc: <p>Mẫu hình harami giảm là mẫu hình bao gồm 2 nến. Nến 1 là 1 nến trắng dài, nến 2 là 1 nến đen nhỏ với thân nến 2 nằm bao gọn trong thân nến đen 1. Trường hợp đặc biệt là nến 2 là 1 nến doji thì mẫu hình sẽ mạnh hơn.</p>
  },
  {
    key: '9',
    name: <img style={{width:'150px'}} src={require('../../assets/candle/dinhNhip.jpg')} alt="" />,
    desc: <p>Mẫu hình đỉnh nhíp là mẫu hình có 2 hoặc nhiểu cây nến có điểm cao nhất bằng nhau. Nến đầu tiên nên có thân nến dài, các nến sau nên có thân nến nhỏ hơn</p>
  },
  {
    key: '10',
    name: <img style={{width:'150px'}} src={require('../../assets/candle/phanCongGiam.jpg')} alt="" />,
    desc: <p>Mẫu hình phản công giảm là mẫu hình có 2 nến trái màu cùng giá đóng cửa. Nến đầu là nến trắng, nến thứ 2 là nến đen</p>
  },
  {
    key: '11',
    name: <img style={{width:'150px'}} src={require('../../assets/candle/dinhBanhBao.jpg')} alt="" />,
    desc: <p>Mẫu hình đỉnh bánh bao hình thành bởi cụm nến nhỏ tạo thành vòng cung ở đỉnh, và kết thúc mẫu hình bởi 1 cửa sổ. Điểm cao nhất của cửa sổ là 1 kháng cự. Nếu có nến đóng cửa trên điểm này coi như mẫu hình thất bại</p>
  },


];

const candleContinue = [
  {
    key: '1',
    name: <img style={{width:'150px'}} src={require('../../assets/candle/cuaSoTang.jpg')} alt="" />,
    desc: <p>Mẫu hình cửa sổ tăng là một mẫu hình báo hiệu xu hướng có thể tiếp tục tăng. Điểm thấp nhất của cửa sổ là 1 hỗ trợ, nếu có 1 nến sau đó giá đóng cửa dưới điểm này coi như mẫu hình thất bại</p>
  },
  {
    key: '2',
    name: <img style={{width:'150px'}} src={require('../../assets/candle/cuaSoGiam.jpg')} alt="" />,
    desc: <p>Mẫu hình cửa sổ giảm là một mẫu hình báo hiệu xu hướng có thể tiếp tục giảm. Điểm cao nhất của cửa sổ là 1 kháng cự, nếu có 1 nến sau đó giá đóng cửa trên điểm này coi như mẫu hình thất bại</p>
  },
  {
    key: '3',
    name: <img style={{width:'150px'}} src={require('../../assets/candle/3BuocTangGia.jpg')} alt="" />,
    desc: <p>Mẫu hình 3 bước tăng giá bắt đầu bằng 1 nến trắng dài, tiếp theo là cụm nến đen (2-5 nến) cả bóng nến và thân nến nằm trong phạm vi của bóng nến trắng 1, nến cuối cùng là 1 nến trắng dài đóng cửa trên mức đóng cửa của nến trắng 1. Tốt nhất là nến trắng dài cuối mở cửa trên mức mở cửa của nến trước đó.</p>
  },
  {
    key: '4',
    name: <img style={{width:'150px'}} src={require('../../assets/candle/3BuocGiamGia.jpg')} alt="" />,
    desc: <p>Mẫu hình 3 bước giảm giá bắt đầu bằng 1 nến đen dài, tiếp theo là cụm nến trắng (2-5 nến) cả bóng nến và thân nến nằm trong phạm vi của bóng nến đen 1, nến cuối cùng là 1 nến đen dài đóng cửa dưới mức đóng cửa của nến đen 1. Tốt nhất là nến đen dài cuối mở cửa dưới mức mở cửa của nến trước đó.</p>
  },
];

const columns = [
  {
    title: 'Mẫu hình',
    dataIndex: 'name',
    key: 'name',
    width: '20%',
    align:'center'
  },
  {
    title: 'Giải thích',
    dataIndex: 'desc',
    key: 'desc',
  }
];

export default function NenNhat() {
  return (
    <div className={styleNen.stock}>
      <h1 className='text-center text-2xl md:text-4xl font-bold py-4'>Các mẫu hình nến quan trọng</h1>
      <p>Những mẫu hình nến chỉ ra tín hiệu khi thị trường, hoặc giá cổ phiếu đã đi theo 1 xu hướng rõ ràng, xuất hiện mẫu hình thì mẫu hình đó mới có tác dụng. Chú ý những cụm nến có bóng trên dài. Có thể đó là dấu hiệu đảo chiều ở đỉnh.</p>
      <h2 className='text-xl md:text-3xl font-bold pb-2 ml-4'>Những mẫu hình nến đảo chiều</h2>
      <h3 className='text-xl md:text-2xl ml-3'>Đảo chiều tăng</h3>
      <Table pagination={false} dataSource={candleUp} columns={columns} />
      <h3 className='text-xl md:text-2xl ml-3 mt-5'>Đảo chiều giảm</h3>
      <Table pagination={false} dataSource={candleDown} columns={columns} />
      <h3 className='text-xl md:text-2xl ml-3 mt-5'>Tiếp tục xu hướng</h3>
      <Table pagination={false} dataSource={candleContinue} columns={columns} />
      <p>Nến doji là những nến đặc biệt, báo hiệu xu hướng trước đó có thể dừng lại (không hẳn là sẽ đảo chiều ngay mà có thể chuyển sang sideway đi ngang) do sự lưỡng lự của các bên mua, bán. Nến doji báo hiệu đỉnh tốt hơn báo hiệu đáy. Nến doji cũng như hầu hết các mẫu hình nến nhật báo hiệu khi thị trương hoặc giá cổ phiếu đang trong 1 xu hướng rõ ràng. Trong vùng giá đi ngang, nến nhật, đặc biệt là nến doji không có nhiều ý nghĩa. Trong đò thị ít nến doji thì doji mới phát huy tác dụng. Đồ thị nhiều nến doji thì doji không có tác dụng.</p>
    </div>
  )
}
