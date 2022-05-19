import React from 'react'
import { NavLink } from 'react-router-dom'

export default function FrontEnd(props) {
  return (
    <div className='container' style={{paddingTop:'112px'}}>
      <h1>Front-end</h1>
      <section>
        <h2>Front-end là gì?</h2>
        <p>Trước hết Front-end được hiểu là giao diện của một trang web. Tất cả những gì bạn có thể nhìn thấy khi truy cập 1 trang web chính là front-end. Front-end có thể coi là tiền tuyến trong 1 cuộc tấn công. Để viết được 1 giao diện của trang web hay 1 ứng dụng thì bạn cần phải biết <a href='https://hocwebchuan.com/tutorial/tutorial_html.php'>HTML</a> và <a href='https://hocwebchuan.com/tutorial/tutorial_css.php'>CSS</a>. Tuy nhiên mới chỉ biết HTML và CSS thì vẫn chưa đủ. Hãy tưởng tượng HTML là một ngôi nhà thì bạn cần CSS để trang cho ngôn nhà đó, như là sơn tường, ốp gạch, thêm bàn ghế... cho phù hợp với ý của mình. Nhưng đó mới chỉ dừng ở mức độ nhìn thấy được. Còn những thứ như điện, nước chạy trong nhà thì chưa có. Tương tự nếu bạn chỉ dùng HTML và CSS thì chỉ thiết kế được 1 trang web tĩnh, chưa có liên kết được với các thành phần, hoạt động trong trang. Để hoạt động được thì cần phải thêm <a href="https://quantrimang.com/javascript-la-gi-155978">JavaScript</a>.</p>
      </section>

      <section>
      <h2>HTML là gì?</h2>
      <p>HTML thực chất là sử dụng những thẻ hay còn gọi là tag và bạn cần điền nội dung cần thể hiện ra giao diện vào những thẻ đó. Thông thường sẽ tạo ra 1 file html để chứa những code html</p>
      <h3>Những thẻ (tag) HTML thường được dử dụng</h3>
      <a href="https://hocwebchuan.com/reference/tag/">Tham khảo những thẻ HTML ở đây -></a>
      <ol>
        <li>
          <h4>
            <a href="https://hocwebchuan.com/reference/tag/tag_div.php">Thẻ div</a></h4>
          <p>Thẻ div thường được dùng để chứa những thẻ khác dùng để nhóm một số thành phần và định dạng chúng một cách dễ dàng hơn </p>
        </li>
        <li>
          <h4><a href="https://hocwebchuan.com/reference/tag/html5/tag_header.php">Header</a></h4>
          <p>Thẻ header dùng để chứa những nội dung được hiển thị trong phần đầu của trang web</p>
        </li>
        <li>
          <h4><a href="https://hocwebchuan.com/reference/tag/html5/tag_footer.php">Footer</a></h4>
          <p>Thẻ footer dùng để chứa những nội dung được hiển thị trong phần cuối của trang web</p>
          <p>Thực chất thì dùng thẻ div có thể hoàn toàn thay thế được thẻ header và thẻ footer. Chỉ có một vấn đề là dùng những thẻ header, footer để định nghĩa tên cho thẻ để người khác biết đó là thành phần gì.</p>
        </li>
        <li>
          <h4><a href="https://hocwebchuan.com/reference/tag/tag_hx.php"> Các thẻ tiêu để h1, h2, h3, h4, h5, h6</a></h4>
          <p>Có 6 thẻ tiêu đề được sử dụng. Dùng thẻ tiêu đề để định nghĩa những tiêu đề cần làm nổi bật lên trong trang web. Thẻ tiêu đề cũng dùng để phân rõ nội dung chính, nội dung phụ trong 1 trang web. Thẻ tiêu đề cũng được dùng như một công cụ hỗ trợ cho việc <a href="https://gtvseo.com/seo-la-gi/">SEO</a></p>
        </li>
        <li>
          <h4><a href="https://hocwebchuan.com/reference/tag/tag_img.php">Thẻ img</a></h4>
          <p>Hầu hết trong các trang web đều sử dụng ảnh nên phải có một thẻ dùng để hiển thị ra ảnh đó. Thẻ img truyền vào một đường dẫn đến thẻ cần được hiển thị ra giao diện.</p>
        </li>
        <li>
          <h4><a href="https://hocwebchuan.com/reference/tag/tag_a.php">Thẻ a</a></h4>
          <p>Thông thường các trang web đều có những liên kết. Có 2 loại liên kết chính là liên kết nội và liên kết ngoại. Liên kết nội cần định nghĩa id cho thành phần được liên kết và truyền vào cho thẻ a thông qua thuộc tính href. Liên kết ngoại thì truyền thằng liên kết của trang web đó cho thẻ a là được.</p>
        </li>
        <li>
          <h4><a href="https://hocwebchuan.com/reference/tag/tag_input.php">Thẻ input</a></h4>
          <p>Thẻ input dùng để tạo một trường nhập dữ liệu</p>
        </li>
        <li>
          <h4><a href="https://hocwebchuan.com/reference/tag/tag_button.php">Thẻ button</a></h4>
          <p>Thẻ button để tạo một nút nhấn thực hiện một thao tác nào đó.</p>
        </li>
        <li>
          <h4><a href="https://hocwebchuan.com/reference/tag/tag_p.php">Thẻ p</a>
          </h4>
          <p>Thẻ p dùng để chèn một đoạn văn bản</p>
        </li>
        <h6><a href="https://hocwebchuan.com/reference/tag/">Và còn nhiều thẻ khác cần tìm hiểu và vận dụng</a></h6>
      </ol>
      </section>

      <section>
      <h2>CSS là gì?</h2>
      <p>Như đã nói ở trên, CSS dùng để thêm định dạng cho trang web, giúp trang web bắt mắt hơn với màu sắc, font chữ, cũng như các animation</p>
      <a href="https://hocwebchuan.com/tutorial/tut_css_basic.php">Tìm hiểu về CSS</a>
      <h5>Có thể dùng 3 loại css cho một trang web</h5>
      <ol>
        <li>
          <h6>Inline CSS</h6>
          <p>Inline css là định nghĩa css ngay trên thẻ html. Chỉ cần thêm thuộc tính style='' và viết những code css định dạng cho thẻ đó ngay trên thẻ đó</p>
        </li>
        <li>
          <h6>Internal css</h6>
          <p>Internal css là phương thức định nghĩa css ngay trong file html. Mình rất ít khi dùng cách này nên không rành lắm.</p>
        </li>
        <li>
          <h6>External css</h6>
          <p>External css là cách tách ra một file css riêng, định nghĩa những code css trong file đó, theo những class hoặc id, hoặc tên thẻ html tương ứng. Để liên kết file html với file css cần dùng thẻ link trong file html và liên kết tới file css cần truyền vào.</p>
        </li>
      </ol>
      <h3>Tuy nhiên, với những công nghệ mới ra đời, bây giờ chúng ta có thể định nghĩa css thông qua 1 loại chương trình đó là <a href="https://topdev.vn/blog/sass-scss-la-gi/">SCSS hoặc có thể gọi là SASS</a>.</h3>
      <h4>Vậy SASS là gì. SASS là một ngôn ngữ tiền xử lý CSS giúp định nghĩa css dễ dàng và thông minh hơn, giúp code css gọn hơn và dễ hiều hơn</h4>
      <a href="#">Chi tiết về SASS</a>
      </section>
      <h2>Vậy lập trình viên Front-end cần làm gì</h2>
    </div>
  )
}
