import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'

export default function FrontEnd(props) {

  useEffect(() => {
    window.scroll(0, 0)

    return () => {

    }
  }, [])

  return (
    <div style={{ paddingTop: '112px' }}>
      <div style={{ backgroundImage: 'url(https://nentang.vn/wp-content/uploads/2018/07/html-css-js-course-intro.jpeg)', backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'center' }}>
        <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', height: 350 }}>
          <div className='container'>
            <h1 className='text-7xl text-white font-bold text-center' style={{ lineHeight: '350px' }}>FRONT-END</h1>
          </div>
        </div>
      </div>
      <section>
        <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
          <div className='container pt-5 pb-3'>
            <h2 className='text-3xl'>Front-end là gì?</h2>
            <img className='w-100' src="http://iviettech.vn/wp-content/uploads/2017/05/FRONT-END.jpg" alt="" />
            <p className='text-lg'>Trước hết Front-end được hiểu là giao diện của một trang web. Tất cả những gì bạn có thể nhìn thấy khi truy cập 1 trang web chính là front-end. Front-end có thể coi là tiền tuyến của trang web đó. Để viết được 1 giao diện của trang web hay 1 ứng dụng thì bạn cần phải biết <a target='_blank' href='https://hocwebchuan.com/tutorial/tutorial_html.php'>HTML</a> và <a target='_blank' href='https://hocwebchuan.com/tutorial/tutorial_css.php'>CSS</a>. Tuy nhiên mới chỉ biết HTML và CSS thì vẫn chưa đủ. Hãy tưởng tượng bạn cần thiết kế, xây dựng một ngôi nhà thì HTML là nền móng, tường, cửa, mái,... CSS để trang cho cho những phần cứng mà HTML tạo nên, như là sơn tường, ốp gạch, thêm bàn ghế... cho phù hợp với ý của mình. Nhưng đó mới chỉ dừng ở mức độ nhìn thấy được. Còn những thứ như điện, nước chạy trong nhà thì chưa có. Tương tự nếu bạn chỉ dùng HTML và CSS thì chỉ thiết kế được 1 trang web tĩnh, chưa có liên kết được với các thành phần, hoạt động trong trang. Để hoạt động được thì cần phải thêm <a target='_blank' href="https://quantrimang.com/javascript-la-gi-155978">JavaScript</a>.</p>
          </div>
        </div>
      </section>

      <section>
        <div className='pt-5 pb-3 container text-lg'>
          <h2 className='text-3xl inline-block mr-5 font-bold'>HTML là gì?</h2>
          <img style={{ width: '70px' }} className='inline' src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/HTML5_logo_resized.svg/1200px-HTML5_logo_resized.svg.png" alt="html_image" />
          <p>HTML thực chất là sử dụng những thẻ hay còn gọi là tag và bạn cần điền nội dung cần thể hiện ra giao diện vào những thẻ đó. Thông thường sẽ tạo ra 1 file html để chứa những code html</p>
          <h3>Những thẻ (tag) HTML thường được dử dụng</h3>
          <a target='_blank' className='text-blue-500' href="https://hocwebchuan.com/reference/tag/">Tham khảo những thẻ HTML ở đây <i className="fa fa-arrow-right"></i></a>
          <ol className='mb-0'>
            <li>
              <h4><a target='_blank' className='text-blue-500 font-bold' href="https://hocwebchuan.com/reference/tag/tag_div.php">Thẻ div</a></h4>
              <p>Thẻ div thường được dùng để chứa những thẻ khác dùng để nhóm một số thành phần và định dạng chúng một cách dễ dàng hơn </p>
            </li>
            <li>
              <h4><a target='_blank' className='text-blue-500 font-bold' href="https://hocwebchuan.com/reference/tag/html5/tag_header.php">Header</a></h4>
              <p>Thẻ header dùng để chứa những nội dung được hiển thị trong phần đầu của trang web</p>
            </li>
            <li>
              <h4><a target='_blank' className='text-blue-500 font-bold' href="https://hocwebchuan.com/reference/tag/html5/tag_footer.php">Footer</a></h4>
              <p>Đã có đầu thì sẽ có cuối. Thẻ footer dùng để chứa những nội dung được hiển thị trong phần cuối của trang web</p>
              <p>Thực chất thì dùng thẻ div có thể hoàn toàn thay thế được thẻ header và thẻ footer. Chỉ có một vấn đề là dùng những thẻ header, footer để định nghĩa tên cho thẻ, để người khác biết đó là thành phần gì.</p>
            </li>
            <li>
              <h4><a target='_blank' className='text-blue-500 font-bold' href="https://hocwebchuan.com/reference/tag/tag_hx.php"> Các thẻ tiêu đề h1, h2, h3, h4, h5, h6</a></h4>
              <p>Có 6 thẻ tiêu đề được sử dụng theo mức độ quan trong của tiêu đề. Dùng thẻ tiêu đề để định nghĩa những tiêu đề cần làm nổi bật lên trong trang web. Thẻ tiêu đề cũng dùng để phân rõ nội dung chính, nội dung phụ trong 1 trang web. Thẻ tiêu đề cũng được dùng như một công cụ hỗ trợ cho việc <a href="https://gtvseo.com/seo-la-gi/">SEO</a></p>
            </li>
            <li>
              <h4><a target='_blank' className='text-blue-500 font-bold' href="https://hocwebchuan.com/reference/tag/tag_img.php">Thẻ img</a></h4>
              <p>Hầu hết trong các trang web đều sử dụng ảnh nên phải có một thẻ dùng để hiển thị ra ảnh đó. Thẻ img truyền vào một đường dẫn đến ảnh cần được hiển thị ra giao diện.</p>
            </li>
            <li>
              <h4><a target='_blank' className='text-blue-500 font-bold' href="https://hocwebchuan.com/reference/tag/tag_a.php">Thẻ a</a></h4>
              <p>Thông thường các trang web đều có những liên kết. Có 2 loại liên kết chính là liên kết nội và liên kết ngoại. Liên kết nội cần định nghĩa id cho thành phần được liên kết và truyền vào cho thẻ a thông qua thuộc tính href. Liên kết ngoại thì truyền thằng liên kết của trang web đó cho thẻ a là được.</p>
            </li>
            <li>
              <h4><a target='_blank' className='text-blue-500 font-bold' href="https://hocwebchuan.com/reference/tag/tag_input.php">Thẻ input</a></h4>
              <p>Thẻ input dùng để tạo một trường nhập dữ liệu.</p>
            </li>
            <li>
              <h4><a target='_blank' className='text-blue-500 font-bold' href="https://hocwebchuan.com/reference/tag/tag_button.php">Thẻ button</a></h4>
              <p>Thẻ button để tạo một nút nhấn thực hiện một thao tác nào đó.</p>
            </li>
            <li>
              <h4><a target='_blank' className='text-blue-500 font-bold' href="https://hocwebchuan.com/reference/tag/tag_p.php">Thẻ p</a>
              </h4>
              <p>Thẻ p dùng để chèn một đoạn văn bản</p>
            </li>
            <h6><a target='_blank' className='text-blue-500 font-bold' href="https://hocwebchuan.com/reference/tag/">Và còn nhiều thẻ khác cần tìm hiểu và vận dụng</a></h6>
          </ol>
        </div>
      </section>

      <section className='pt-5 pb-3' style={{ backgroundColor: '#9e9e9e' }}>
        <div className='container text-lg'>
          <h2 className='text-3xl inline-block mr-5 font-bold'>CSS là gì?</h2>
          <img className='inline-block' style={{ width: '70px' }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png" alt="cssimg" />
          <p>Như đã nói ở trên, CSS dùng để thêm định dạng cho trang web, giúp trang web bắt mắt hơn với màu sắc, font chữ, cũng như các animation</p>
          <a target='_blank' href="https://hocwebchuan.com/tutorial/tut_css_basic.php">Tìm hiểu về CSS</a>
          <h5 className='text-xl'>Có thể dùng 3 loại css cho một trang web</h5>
          <ol>
            <li>
              <h6 className='text-lg font-bold'>Inline CSS</h6>
              <p>Inline css là định nghĩa css ngay trên thẻ html. Chỉ cần thêm thuộc tính style='' và viết những code css định dạng cho thẻ đó ngay trên thẻ đó</p>
            </li>
            <li>
              <h6 className='text-lg font-bold'>Internal CSS</h6>
              <p>Internal css là phương thức định nghĩa css ngay trong file html. Mình rất ít khi dùng cách này nên không rành lắm.</p>
            </li>
            <li>
              <h6 className='text-lg font-bold'>External CSS</h6>
              <p>External css là cách tách ra một file css riêng, định nghĩa những code css trong file đó, theo những class hoặc id, hoặc tên thẻ html tương ứng. Để liên kết file html với file css cần dùng thẻ link trong file html và liên kết tới file css cần truyền vào.</p>
            </li>
          </ol>
          <h3>Tuy nhiên, với những công nghệ mới ra đời, bây giờ chúng ta có thể định nghĩa css thông qua 1 loại chương trình đó là: <a href="https://topdev.vn/blog/sass-scss-la-gi/">SCSS hoặc có thể gọi là SASS</a>.</h3>
          <h4>Vậy SASS là gì. SASS là một ngôn ngữ tiền xử lý CSS giúp định nghĩa css dễ dàng và thông minh hơn, giúp code css gọn hơn và dễ hiều hơn</h4>
          <a href="#">Chi tiết về SASS</a>
          <p>Trên thực tế có nhiều công nghệ giúp dev có thể tạo ra những file html có gắn css một cách đơn giản hơn. Ở đây mình muốn nói về công thư viện Bootstrap.</p>
          <p>Bootstrap là gì. Bootstrap là một thư viện giúp FE-dev dễ dàng code html và css. Bootstrap giúp tạo ra những tên class custom sẵn css. FE-dev chỉ cần thêm những tên class đó vào các thẻ thích hợp là sử dụng được. Ngoài ra, bootstrap còn giúp tạo những khung html-css sẵn, FE-dev chỉ cần sửa lại một chút theo ý của mình là được.</p>
        <a target='_blank' href="https://getbootstrap.com/docs/5.2/getting-started/introduction/">Tìm hiểu về Bootstrap <i className="fa fa-arrow-right"></i></a>
        </div>
        
      </section>

      <section className='pt-5 pb-3' style={{ backgroundColor: '#cfcfcf' }}>
        <div className='container text-lg'>
          <h2 className='text-3xl inline-block mr-5 font-bold'>JS là gì?</h2>
          <img className='inline-block' src='https://thienanblog.com/wp-content/uploads/2015/04/javascript_logo.png' style={{ width: '70px' }} alt='' />
          <a target='_blank' className='block text-blue-400' href="https://quantrimang.com/javascript-la-gi-155978">Tìm hiểu về JS</a>
          <p>JS là viết tắt của JavaScript. Như đã nói ở phần đầu, HTML là khung, CSS là trang trí vậy thì JS chính là cách thức hoạt động của 1 trang web. Nôm na là khi bạn tác động vào một phần nào đó của một trang web thì nó sẽ hoạt động ra sao. Ví dự như khi thực hiện nhập thông tin vào 1 form đăng ký và bạn ấn nút <button className='bg-emerald-500 rounded-lg px-2 py-1 hover:text-white hover:bg-emerald-400'>Đăng ký</button> trang web sẽ thực hiện chức năng đăng ký cho bạn một tài khoản.</p>
          <p>
            Viết code js bình thường khá phức tạp và rườm rà, vì vậy người ta đã tạo ra những libraries và các framework giúp viết code js đơn giản và dễ dàng hơn.
          </p>
          <p>Mình giải thích một cách đơn giản libraries và framework là gì. Library là những thư viện bạn cần cài những thư viện cần dùng vào source code của mình và ứng dụng nó một cách linh hoạt. Framework thì cơ bản cũng giống như thư viện. Chỉ có điều Framework bắt người dùng phải viết code theo chuẩn mực mà framework đó quy định, nên frameword sử dụng khắt khe hơn thư viện</p>
          <p>
            Các thư viện được nhiều người dùng là <a target='_blank' className='text-blue-500' href="https://hocwebchuan.com/tutorial/jquery/">Jquery</a> và <a target='_blank' className='text-blue-500' href="https://topdev.vn/blog/bi-kip-toan-thu-ve-react-ma-ban-can-phai-biet-phan-1/">React</a> 
          </p>
          <p>Các framework thường được sử dụng là: <a className='text-blue-500' href="https://freetuts.net/vuejs-la-gi-871.html">Vuejs</a> và <a target='_blank' className='text-blue-500' href="https://itviec.com/blog/angular-la-gi/">Angular</a></p>
          
        </div>

      </section>

      <section className='pt-5 pb-3'>
        <div className='container text-lg'>
          <h2 className='text-3xl inline-block mr-5 font-bold'>Vậy Front-end developer cần phải làm những gì?</h2>
          <p>Theo như nguyên tắc thì Front-end developer cần tạo những file <span className='font-bold'>html</span> để tạo nội dung cho trang web, tiếp đó tạo những file <span className='font-bold'>css</span> để trang trí cho trang web, và tạo những file <span className='font-bold'>js</span> để tạo các phương thức hoạt động cho trang web.</p>
          <p>Tuy nhiên, đó là nếu thiết kế tạo web tĩnh, trong thực tế thì không phải lúc nào cũng tạo ra những trang web tĩnh như vậy.</p>
          <p>FE-dev thường ứng dụng những thư viện hoặc các framework để tạo động ra những tag html và chèn luôn css theo các tag html đó. Và dùng những thư viện/framework đó để tạo ra các phương thức hoạt động của trang web.</p>          
          <p>Ở đây mình sẽ chia sẻ về kiến thức của React đặc biệt là <NavLink className='text-blue-500' to='/reactjs'>ReactJs</NavLink></p>
         <NavLink className='text-teal-700' to="/dev/frontend/react">Xem chi tiết về ReactJs</NavLink>
        </div>
      </section>
    </div>
  )
}
