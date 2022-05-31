import React from 'react'
import { NavLink } from 'react-router-dom'

export default function BackEnd(props) {
  return (
    <div style={{paddingTop:'112px'}}>
      <div className='container text-lg w-2/3 m-auto'>
        <h1 className='text-4xl font-bold text-center pt-5'>Back-end</h1>
      
      <section>
        <h2 className='text-2xl pl-5'>Back-end là gì?</h2>
        <p>Nếu như đã đi đến đây rồi thì mọi người chắc phải có hiểu biết về <NavLink className='text-blue-500' to="/dev/frontend">Front-end</NavLink> rồi. Front-end hiểu đơn giản là giao diện của 1 trang web hoặc 1 ứng dụng. Tuy nhiên nếu lưu hết dữ liệu kể cả các text lên trên giao diện thì có nhiều vấn đề xảy ra. Ví dụ như performance (tốc độ của trang web) sẽ bị giảm đi vì phải load hết dẽ liệu mới trả về giao diện hoàn chỉnh, hoặc độ bảo mật của trang web sẽ dễ dàng bị hacker xâm nhập. Để khắc phục những lỗi trên, cần phải tạo ra Back-end để có thể: Lưu trữ dữ liệu, tạo ra các luồng xử lý dữ liệu của trang web đó. Hay nói cách khác, back-end là hậu phương của 1 trang web, cung cấp lương thực thực phẩm cho trang web đó. </p>
      </section>

      <section>
        <h2 className='text-2xl pl-5'>Back-end developer làm những gì?</h2>
        <p>Thường thì back-end developer (BE-dev) sẽ thiết kế các dữ liệu, nơi lưu trữ dữ liệu hay còn gọi là Database. Sau đó BE-dev sẽ thiết kế ra các máy chủ hay còn gọi là server để tạo ra các luồng xử lý dữ liệu, đề Front-end developer có thể lấy được dữ liệu từ database. (Đó là đối với một trang web vừa và nhỏ). </p>
        <p>Còn đối với một trang web lớn thì sẽ có một đội ngũ mà trong đó được phân công rõ ràng ai thiết kế Database, ai là người thiết kế server ... và còn nhiều vị trí khác.</p>
      </section>

      <section>
        <h2 className='text-2xl pl-5'>Những công nghệ phục vụ thiết kế back-end</h2>
        <p>Hiện nay có nhiều loại ngôn ngữ giúp thiết kế ra phần back-end của một trang web. Có thể kể đển nodeJs được viết bằng ngôn ngữ JavaScript, PHP, Java, Ruby..., Và những công cụ giúp tạo database như là: MySQL, Oracle, SQL Server.</p>
        <p>Trong phần này mình chủ yếu viết về nodeJs và MySQL (Vì mình mới chỉ học nodeJs và MySQL thôi)</p>
      </section>

      <section>
        <h2 className='text-2xl pl-5'>NodeJs</h2>
        <p className='text-xl pl-3'>NodeJs là gì?</p>
        <p>NodeJS là một nền tảng được xây dựng trên V8 JavaScript Engine – trình thông dịch thực thi mã JavaScript, giúp xây dựng các ứng dụng web một cách đơn giản và dễ dàng mở rộng.</p>
        <p>NodeJs thực tế là thiết kế 1 server, từ server đó tạo nên các đường dẫn API và từ những API đó front-end có thể lấy dữ liệu về hoặc gửi dữ liệu lên server, thực hiệc các tính năng của 1 trang web một cách trơn tru, mượt mà.</p>
        <p>Viết NodeJs thực chất là thiết kế các đoạn code javaScript, xử lý những luồng đi của dữ liệu trong 1 trang web thông qua những đoạn code javaScript đó.</p>
      </section>
      </div>
    </div>
  )
}
