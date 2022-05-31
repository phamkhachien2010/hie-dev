import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'

export default function ReactFrontend() {

  const reactImgPath = require('../../assets/img/react-img.jpeg')
  const bgSection = require('../../assets/img/bg-section-react.jpg');

  // useEffect(() => {
  //   window.scroll(0, 0)

  //   return () => {

  //   }
  // }, [])

  return (
    <div style={{ paddingTop: '112px' }}>
      <div className='py-5' style={{ backgroundImage: `url('${reactImgPath}')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPositionY: 'center' }}>
        <div className="container w-2/3 m-auto">
          <h1 className='text-4xl text-white font-bold'>Tìm hiểu về React</h1>
          <h2 className='text-2xl'><a href='#reactLaGi'> React là gì?</a></h2>
          <h2 className='text-2xl'><a href='#ungdungreact'>Ứng dụng react như thế nào?</a></h2>
          <h2 className='text-2xl'><a href='#thuvienreact'>Các thư viện hỗ trợ react app</a></h2>
          <h2 className='text-2xl'><a href='#thietkethumucreact'>Thiết kế thư mục react app</a></h2>
          <h2 className='text-2xl'><a href='#deployreactapp'>Deploy react app như thế nào?</a></h2>
          <h2 className='text-2xl'><a href='#loithuonggap'>Các lỗi thường gặp khi dùng react</a></h2>
        </div>
      </div>

      <section style={{ backgroundImage: `url('${bgSection}')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPositionY: 'center', backgroundAttachment: 'fixed' }}>
        <div className='text-teal-200 w-2/3 m-auto' style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <section id='reactLaGi' className='container'>
            <h2 className='text-2xl text-pink-300 pt-5'>React là gì</h2>
            <div className='pl-4'>
              <p>React là 1 thư viện giúp xây dựng giao diện web sử dụng ngôn ngữ lập trình JavaScript. React sử dụng 2 component chính là React Class Component, React Functional Component.</p>
              <p>Các Components giúp chia nhỏ nội dung để dễ quản lý các thành phần của 1 trang web. Mục đích chia nhỏ các component là để đóng gói chức năng ứng với giao diện để tổ chức thư mục, có thể dễ dàng tái sử dụng và bảo trì nâng cấp.</p>
              <p>React có thể tạo ra các thẻ html ngay trong components do react có thể dùng cơ chế jsx</p>
              <p>Jsx là 1 cơ chế kết hợp html với javaScript, tức là tạo ra các thẻ html ngay trong file javaScript. Lưu ý Tên commponent bắt đầu bằng chữ hoa Uppercase, sử dụng className và htmlFor thay vì class và for.</p>
              <p>React dùng nhiều đến props và state. Props và state là 2 kiểu dữ liệu trong React. State chỉ được thay đổi bên trong bản thân component. Props không bị kiểm soát bởi bản thân component.</p>
              <h3 className='text-xl text-lightBlue-600 underline font-bold'>Props</h3>
              <p className='pl-3'>Props là viết tắt của properties. Chúng là các giá trị của component cha được truyền vào. Props chỉ được dùng để đọc và sử dụng trong component chứ không thay đổi được giá trị trong component đó. Muốn thay đổi giá trị props thì phải thay đổ ở component cha.</p>
              <h3 className='text-xl text-lightBlue-600 underline font-bold'>State</h3>
              <p className='pl-3'>Khác với props là bất biến thì state có thể thay đổi. State là một thuộc tính mặc định của class, kế thừa từ class component để quản lý trạng thái của component. State được quản lý chỉ bởi duy nhất 1 component, nó cũng không thể truyền xuống cho component con.</p>
              <p>Đi kèm với state là lifecycle.</p>
              <h4 className='text-xl text-pink-400 underline font-bold'>Lifecycle</h4>
              <p className='pl-3'>Hiểu đơn giản lifecycle là vòng đời của 1 component. Vòng đời thì sẽ có tạo ra, phát triển và mất đi. Tức là trong quá trình đó sẽ có tạo ra component, update component và delete component. Lifecycle ứng dụng nhiều trong reactJs.</p>
            </div>
          </section>

          <section className='container' id='ungdungreact'>
            <h2 className='text-2xl text-pink-300'>Ứng dụng react như thế nào</h2>
            <div className="pl-4">
              <p>Như đã giới thiệu ở trên, React sử dụng ngôn ngư JavaScript và dùng cơ chế jsx để tạo ra các thẻ html. Trong mỗi component sẽ dùng cơ chế đó để tạo ra các pages, các templates, các component nhỏ có thể được gọi trong component khác.</p>
              <p>Sau đó, có thể dùng những <NavLink to='/' className='text-teal-500 font-bold text-lg'> thư viện</NavLink> hỗ trợ để link qua lại giữa các page với nhau. Về bản chất là tạo ra các giao diện của 1 website thì react hỗ trợ tương đối tốt.</p>
            </div>
          </section>

          <section className='container' id='thuvienreact'>
            <h2 className='text-2xl text-pink-300'>Các thư viện hỗ trợ react</h2>
            <div className='pl-4'>
              <p>Dưới đây là một vài thư viện hỗ trợ reactJs trong quá trình tạo ra giao diện mà mình thường hay sử dụng.</p>
            </div>
          </section>

          <section className='container' id='thietkethumucreact'>
            <h2 className='text-2xl text-pink-300'>Thiết kế thư mục react như thế nào.</h2>
            <div className="pl-4">
              <p>Có nhiều kiểu thiết kế thư mục và không phải ở đâu cũng giống nhau. Căn bản là mình làm sao cho gọn code để dễ bảo trì, sửa code, dễ tìm ra vị trí của bug, từ đó tiết kiệm thời gian cho dev.</p>
              <p>Đầu tiên để tạo 1 react app mình cần cài <a className='text-teal-500 font-bold text-lg' href="https://nodejs.org/en/">nodeJs</a> phiên bản mới nhất, (Chú ý cài bản LTS, bản Curent là bản đang thử nghiệm và sớm phát hành. Nếu gặp lỗi khi tạo app, cần xem lại version của nodeJs).</p>
              <p>Sau đó bạn vào thư mục cần tạo 1 react app click chuột vào đường dẫn của thư mục gõ cmd để khởi tạo cmd. Sau đó thực hiện câu lệnh: <span className='text-lime-400'>npx create-react-app app_name</span>, thay thể tên app bạn muốn đặt vào chỗ app_name.</p>
              <p>Sau khi chạy xong sẽ tạo ra một tập thư mục cơ bản bao gồm: </p>
              <ul>
                <li><p>
                  1 folder <span className='font-bold text-lime-300'>node_modules</span>: chứa những code của những thư viện được cài vào khi cài app và những code của những thư viện cài ngoài. </p></li>
                <li>
                  <p>1 folder <span className='font-bold text-lime-300'>public</span>: chứa những file cơ bản như html, ico (định nghĩa icon của trang web), các hình logo của react. Để cài thêm bootstrap và fontawesome thì cần link những cdn vào trong file index.html của phần này.</p>
                </li>
                <li>
                  <p>1 folder <span className='font-bold text-lime-300'>src</span>: chứa những file source code cơ bản. Và những file, folder mới sẽ được tạo trong folder này. Ngoài ra, cần lưu ý chính những file app.js, index.js trong folder src đây là những file mà luồng dẽ liệu xử lý đầu tiên. Khi render lên giao diện, luồng dữ liệu sẽ đi vào file index.js trước tiên và từ đó chạy đến file app.js và chạy vào những component sẽ được định nghĩa trong app.js</p>
                </li>
                <li>
                  <p>Ngoài ra có những file khác như <span className='font-bold text-lime-300'>.gitignore</span> để định nghĩa những thành phần không được đóng gói và đẩy lên git, <span className='font-bold text-lime-300'>pakage-lock.json</span> là nơi chứa những định nghĩa của các thư viện được cài vào, <span className='font-bold text-lime-300'>package.json</span> chứa những định nghĩa của app, chứa những tên và version của những thư viện đang được sử dụng trong app của mình. 1 file <span className='font-bold text-lime-300'>README.md</span> là nơi giới thiệu về các lệnh trong terminal hay còn gọi là hướng dẫn sử dụng.</p>
                </li>
              </ul>
              <p>Trên đây là những folder cơ bản mà khi setup 1 react-app. Để có thể hoàn thiện được 1 app hoàn chỉnh cần thêm những folder và những file source khác nữa.</p>
              <p>Để có thể chạy một cách trơn tru, cần cài các thư viện cần thiết, bao gồm:</p>
              <ul>
                <li><p><span className='font-bold text-lime-300'>react-router-dom</span> : để có thể link qua lại giữa các component dễ dàng, và thiết lập các template dễ dàng hơn.</p></li>
                <li><p><span className='font-bold text-lime-300'>redux, react-redux</span> là các middleware phục vụ tái thiết lại state dễ dàng.</p></li>
                <li><p>Ngoài ra còn cần: <span className='font-bold text-lime-300'>redux-saga hoặc redux-thunk</span> để kết nối với back-end lấy dữ liệu về, và các thư viện cần thiết theo từng nhu cầu của trang web</p></li>
              </ul>
              <p>Tiếp theo cần tạo ra các thư mục trong folder src bao gồm</p>
              <ul>
                <li><p><span className='font-bold text-lime-300'>assets: </span>để chứa những file ngoài code ví dụ hình ảnh...</p></li>
                <li><p><span className='font-bold text-lime-300'>component: </span>để chứa code định nghĩa thành phần dùng chung cho cả trang web ví dụ như định nghĩa button...</p></li>
                <li><p><span className='font-bold text-lime-300'>pages: </span>để chứa các component định nghĩa các trang cần render ví dụ như homepage, about, contact...</p></li>
                <li><p><span className='font-bold text-lime-300'>redux: </span>Để chứa các file liên quan đến thư viện redux, bao gồm: file config: chứa khai báo chung cho redux, redux-saga hoặc redux-thunk, constant: chứa các định nghĩa hằng số, reducer: chứa các code reducer để xác định lại giá trị của state</p></li>
                <p>Ngoài ra còn có các folder khác như: <span className='font-bold text-lime-300'>service</span> chứa các code định nghĩa phương thức lấy dữ liệu từ back-end, <span className='font-bold text-lime-300'>templates</span> định nghĩa các thành phần dùng chung của các pages khác nhau, ví dụ như homepage và aboutpage có chung phần header, footer thì cần định nghĩa header và footer trong file này. <span className='font-bold text-lime-300'>util</span> chứa các code định nghĩa hằng số cho cả website ví dụ như domain của back-end cung cấp...</p>
              </ul>
              <NavLink className='text-teal-500 font-bold text-lg' to='/other/cau-hinh-folder-react'>Cách setup từng folder và từng file.</NavLink>
            </div>
          </section>

          <section className='container' id='deployreactapp'>
            <h2 className='text-2xl text-pink-300'>Deploy react app.</h2>
            <div className="pl-4">
              <p>Sau mỗi dự án hoàn thành, chạy ổn định tại localhost thì cần deploy lên internet. Có nhiều cách để deploy 1 react-app free như deploy lên sure, lên một site của github. Ở đây minh sẽ hướng dẫn deploy lên github để có thể cập nhật code một cách dễ dàng.</p>
              <a className='text-teal-500 font-bold text-lg' href="https://github.com/gitname/react-gh-pages">Xem hướng dẫn của github tại đây</a>
              <p>Để deploy react-app lên Github page chắc chắn bạn phải cần kiến thức về git. <NavLink className='text-teal-500 font-bold text-lg' to='/tech/github'>Ấn vào đây</NavLink></p>
              <p>Trước hết phải cài thư viện gh-pages bằng câu lệnh <span className='text-lime-300'>npm install gh-pages --save-dev</span> trong termonal</p>
              <p>Mở file packet.json trong phần khai báo đầu tiên (gồm có name, version, private) thêm 1 thuộc tính là homepage như sau: <span className='text-lime-300'>"homepage": "https://gitname.github.io/react-gh-pages",</span> trong đó phần <span className='font-bold'>gitname</span>  và phần <span className='font-bold'>react-gh-pages</span> là do bạn tự đặt. </p>
              <p>Sau đó trong phần <span className='font-bold'>scripts</span> thêm 2 thuộc tính nữa là predeploy và deploy như sau: <span className='text-lime-300'>"predeploy": "npm run build",</span> và <span className='text-lime-300'>"deploy": "gh-pages -d build",</span> </p>
              <p>Tiếp đó cần khởi tạo 1 git repo trên git hub và làm theo các bước để tạo 1 repo chứa source code của mình.</p>
              <p>Cuổi cùng khởi chạy lệnh <span className='text-lime-300'>npm run deloy</span> trong terminal. Đợi chạy xong là bạn đã có 1 website với đường dẫn đã lưu ở phần đầu của packet.json được định nghĩa trong phần "homepage". Chỉ việc copy đường dẫn và khởi chạy trên trình duyệt.</p>
            </div>
          </section>

          <section className='container' id='loithuonggap'>
            <h2 className='text-2xl text-pink-300'>Các lỗi thường gặp của react.</h2>
            <div className="pl-4">
              <p>Trong quá trình sử dụng react chắc chẳn sẽ gặp một số lỗi không thể tránh khỏi.</p>
              <p>Lỗi đầu tiên có thể gặp là không khởi tạo được react-app. Nguyên nhân là do phiên bản nodeJs trong máy đã cũ, không hỗ trợ. Cách khắc phục lỗi là cập nhật nodeJs hoặc tải bản mới.</p>
            </div>
          </section>

          <section className='container'>
            <h2 className='text-2xl text-pink-300'>Một số vấn đề khác của ReactJs.</h2>
            <div className="pl-4">
              <h3 className='text-xl text-fuchsia-200 pl-3'>Pure component</h3>
              <p>Trong một vài trường hợp, dù props của component không hề thay đổi nhưng vẫn bị update, dẫn tới ảnh hưởng performace của app (những component không cần setState lại nhưng vẫn bị setState lại), tức là giao diện không cần thiết phải thay đổi nhưng khi load lại trang trình duyệt vẫn đi load lại toàn bộ dữ liệu của trang web đó.</p>
              <p>Chỉ cần thay thể cụm từ Component thành PureComponent là vấn đề được giải quyết</p>
              <p>Vậy PureComponent giải quyết vấn đề gì? PureComponent giải quyết vấn đề khi không cần setState (tức là mặt giao diện của web không cần thay đổi khi load lại trang thì không cần phải tải lại toàn bộ dữ liệu). Không nên lạm dụng PureComponent. Bản chất PureComponent là tự động kiểm tra xem nếu props và state thay đổi thì sẽ render lại giao diện. Tuy nhiên sự so sánh của react là so sánh tham chiếu (tức là so sánh kiểu dữ liệu nguyên thuỷ), nếu như kiểu dữ liệu của props và state là những kiểu dữ liệu nguyên thuỷ thì không sao, nhưng nếu là object hoặc array thì sẽ khác. Thay đổi thuộc tính của object hoặc mảng thì react sẽ không phát hiện ra thay đổi nên sẽ không render lại trang.</p>
              <h3 className='text-xl text-fuchsia-200 pl-3'>Redux</h3>
              <p>Bình thường khi truyền props sẽ truyền từ component cha để component con sau đó truyền qua các component cháu đằng sau. Từ đó mới lấy được giá trị của state render ra component đang thực hiện. Đó là vấn đề, như vậy sẽ rất khó quản lý được props là của component nào, và phải truyền đi qua rất nhiều component khác nhau. Redux sinh ra để giải quyết vấn đề đó. Chỉ cần lưu lại states trên một reducer, và các component nào muốn gọi state đó ra thì gọi đến reducer của redux là giải quyết được vấn đề.</p>
              <h3 className='text-xl text-fuchsia-200 pl-3'>Lifecycle react</h3>
              <img src="https://images.viblo.asia/c3c37d71-9a8f-4250-b7a3-d01cb1cc525e.png" alt="" />
              <p className='font-bold text-lg mb-0 mt-3'>Lifecycle có 3 phần chính là Mouting, Updating và Unmount</p>
              <p className='text-violet-400 font-bold'>Mounting có 3 thành phần chính là CompponentWillMonut, render và ComponentDidMount.</p>
              <p>ComponentWillMount() là hàm Hàm chạy ngay khi component được hiển thị lên giao diện (nơi thường được dùng để tạo thuộc tính state và props</p>
              <p>Render() là hàm dùng dữ liệu đã có để tạo ra giao diện của trang.</p>
              <p>ComponentDidMount() sẽ được gọi sau khi render ra giao diện, ở đây là nơi thực hiện các phương thức kết nối với back-end, update state.</p>
              <p className='text-violet-400 font-bold'>Updating có những thành phần như sau:</p>
              <p>componentWillReceiveProps(newProps): được thực thi ngay khi props component nhận và 1 props mới. (component thay đổi, props chạy)</p>
              <p>shouldComponentUpdate (newProps, newState): tự chạy sau CWRP và trước render => chạy khi props hoặc state thay đổi. Trả về true hoặc false (true cho phép render chạy, false không render) thường dùng thay thế Pure component</p>
              <p>ComponentWillUpdate(newProps, newState): chạy sau render. Tuy nhiên tránh setState ở component này vì đôi lúc ảnh hưởng đển shouldComponentUpdate thường dùng để xử lý JS ngoài react</p>
              <p>ComponentDidUpdate(prevProps, prevState): nhận vào 2 tham số là props trước khi render và state trước khỉ render thường dùng để gán props vào state hoặc để xử ký các param mới từ url</p>
              <p className='text-violet-400 font-bold'>Unmounting:</p>
              <p>ComponentWillUnmount: sẽ được gọi trước khi 1 component bị remove khỏi 1 dom. Nếu 1 component khởi tạo bất kỳ 1 method nào mà method đó yêu cầu phải clean up thì componentWillUnmount là nơi nên đặt clean up</p>
              <a className='text-blue-300' href="https://viblo.asia/p/lifecycle-component-trong-reactjs-gGJ59jzxKX2" target='_blank'>Xem thêm lifecycle tại đây</a>
              <p className='mt-2'>Tuy nhiên lifecycle được sử dụng trong react class compponent. Khi sử dụng react functional components thì sẽ sử dụng các hooks để thay thế.</p>

              <h3 className='text-xl text-fuchsia-200 pl-3 mt-3'>Hooks</h3>
              <p>Hooks áp dụng cho react version 16.8 trở đi. Hooks cho phép sử dụng state và props trong react functional component, hooks thay thế cho lifecycle trong class component.</p>
              <p>Chỉ gọi hooks ở trên cùng, không gọi các hooks ở trong những vòng lặp, câu điều kiện hay các function lồng nhau, và đương nhiên là chỉ sử dụng hooks với react functional component.</p>
              <p className='text-violet-400 font-bold'>Các hooks thường được sử dụng:</p>
              <p>useState hook: thay thế cho state trong class component. kết quả trả về là một state và một hàm setState. useState được dùng để thay thế thuộc tính this.state trong class component. Khai báo như sau</p>
              <p>useEffect hook: cho phép thực hiện thay đổi các state ngoài hàm, 1 useEffect hoàn thiện ứng với 3 lifecycle là ComponentDidMount, didUpdate, ComponentWillUnmount</p>
              <img src={require('../../assets/img/useEffect.jpg')} alt="" />
              <p>Khi viết useEffect cơ bản sẽ cần truyền các hàm và tham số. hàm first là  hàm thực thi khi cập nhật state, giống hàm ComponentDidMount tức chạy 1 lần đầu tiên sau khi render giao diện thành công. Hàm second là hàm thực thi sau khi remove một component tương đương với ComponentWillUnmount. Ngoài ra còn truyền vào các tham số ở third, là điều kiện để chạy hàm first, tức là hàm first chỉ thực thi khi các tham số ở third thay đổi.</p>
              <p>useRef: dùng để DOM đến 1 các component để lấy các giá trị và các thuộc tính cả component đó (thường là input), dùng để lưu giá trị (mỗi lần setState thì giá trị của useRef giữ nguyên, lấy giá trị thông qua thuộc tính current)</p>
              <p>useSelector và useDispatch: 2 thư viện này không phải của react core cung cấp mà thuộc redux cho phép truy cập đến reducer dễ dàng và ngắn gọn. useSelector giúp lấy được state trong file reducer của redux, useDispatch giúp dispatch 1 action lên reducer để thay đổi giá trị của state, props</p>
              <a className='text-blue-300' href="https://viblo.asia/p/cung-tim-hieu-ve-cac-hook-trong-react-hooks-Ljy5VYgjlra" target='_blank'>Xem thêm react hooks tại đây</a>

              <h3 className='text-xl text-fuchsia-200 pl-3 mt-3'>React-router-dom</h3>
              <p>React-router-dom là cơ chế trong single page giúp chuyển đổi qua lại giữa các component, phân các component theo đường dẫn dựa trên url </p>
              <p>React-router-dom dùng thẻ NavLink có thuộc tính to thay thế thẻ a có thuộc tính href dùng để link qua lại giữa các pages</p>
              <p>Khi component được định nghĩa trong thẻ Route thì các component đó có những thuộc tính như sau:</p>
              <p>history: Giúp di chuyển qua lại giũa các route. Bằng nhiều phương thức khác nhau như push hay goBack, Ngoài ra nó còn hỗ trợ lấy các giá trị tham số thông qua thuộc tính search</p>
              <p>history.goback(): dùng để quay lại trang trước khi thực hiện thao tác</p>
              <p>history.push('/path'): khi thực hiện xong thao tác sẽ quay lại trang chỉ định trong push (chuyển hướng đến trang tương ứng) khi back lại sẽ quay lại trang thao tác</p>
              <p>match cung cấp một số thuộc tính hỗ trợ như: path hiện tại, các tham số được truyền qua url, ... chỉ cần console.log(props.match) là sẽ biết được thuộc tính match có những thuộc tính con nào.</p>
              <p>location: cung cấp key là thuộc tính được tạo ngẫu nhiên, path là đường dẫn, search là phần phía sau của pathname trên thanh url</p>
              <p>Và một số thuộc tính khác</p>
            </div>
          </section>
        </div>
      </section>

    </div>
  )
}
