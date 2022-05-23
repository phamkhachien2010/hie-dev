import React from 'react'
import { NavLink } from 'react-router-dom'

export default function BackEnd(props) {
  return (
    <div>
      <div>
        <h1>Back-end</h1>
      </div>
      <section>
        <h2>Back-end là gì?</h2>
        <p>Nếu như đã đi đến đây rồi thì mọi người chắc phải có hiểu biết về <NavLink to="#">Front-end</NavLink> rồi. Front-end hiểu đơn giản là giao diện của 1 trang web hoặc 1 ứng dụng. Tuy nhiên nếu lưu hết dẽ liệu kể cả các text lên trên giao diện thì có nhiều vấn đề xảy ra. Ví dụ như performance (tốc độ của trang web) sẽ bị giảm đi vì phải load hết dẽ liệu mới trả về giao diện hoàn chỉnh, hoặc độ bảo mật của trang web sẽ dễ dàng bị hacker xâm nhập. Để khắc phục những lỗi trên, cần phải tạo ra Back-end để có thể: Lưu trữ dữ liệu, tạo ra các luồng xử lý dữ liệu của trang web đó. Hay nói cách khác, back-end là hậu phương của 1 trang web, cung cấp lương thực thực phẩm cho trang web đó. </p>
      </section>

      <section>
        <h2>Back-end developer làm những gì?</h2>
        <p>Thường thì back-end developer (BE-dev) sẽ thiết kế các dữ liệu, nơi lưu trữ dữ liệu hay còn gọi là Database. Sau đó BE-dev sẽ thiết kế ra các máy chủ hay còn gọi là server để tạo ra các luồng xử lý dữ liệu, đề Front-end developer có thể lấy được dữ liệu từ database. (Đó là đối với một trang web vừa và nhỏ). </p>
        <p>Còn đối với một trang web lớn thì sẽ có một đội ngũ mà trong đó được phân công rõ ràng ai thiết kế Database, ai là người thiết kế server ... và còn nhiều vị trí khác</p>
      </section>

      <section>
        <h2>Những công nghệ phục vụ thiết kế back-end</h2>
        <p>Hiện nay có nhiều loại ngôn ngữ giúp thiết kế ra phần back-end của một trang web. Có thể kể đển nodeJs được viết bằng ngôn ngữ JavaScript, PHP, Java, Ruby..., Và những công cụ giúp tạo database như là: MySQL, Oracle, SQL Server.</p>
        <p>Trong phần này mình chủ yếu viết về nodeJs và MySQL (Vì mình mới chỉ học nodeJs và MySQL thôi)</p>
      </section>

      <section>
        <h2>NodeJs</h2>
        <p>NodeJs là gì?</p>
        <p>NodeJs là ...</p>
      </section>
    </div>
  )
}
