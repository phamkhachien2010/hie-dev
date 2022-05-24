import React from 'react'

export default function ReactFolder() {
  return (
    <div style={{ paddingTop: '112px' }}>
      <div className='container'>
        <h1 className='text-4xl font-bold pt-5 pb-3 text-center'>Cấu hình các folder ReactJs dùng redux saga:</h1>
        <div >
          <p>Trong folder src cần cấu hình thêm những folder, những file để có thể dễ theo dõi và chỉnh sửa, cập nhật code.</p>
          <p>Tạo thêm 1 folder assets trong đó chứa ảnh hoặc những file không phải code.</p>
          <p>Tạo thêm 1 folder pages để chứa những file jsx về những page trong website ví dụ như homepage ...</p>

          <p>Cần cài đặt thư viện react-router-dom bản version 5.2.0, cài thư viện history version 4.10.0.</p>
          <p>Tạo 1 folder template để chứa những code định nghĩa thành phần cố định dùng chung của một số pages. Và định nghĩa như sau:</p>
          <img src={require('../../assets/img/templateImg.jpg')} alt="" />
          <p>Tại app.js setup router-dom như thế này:</p>
          <img src={require('../../assets/img/appJs.jpg')} alt="" />
          <p>Các file tiếp theo cần gắn template thì đặt trong Switch</p>

          <p>Tạo thêm 1 folder redux để chứa những code liên quan đến redux</p>
          <p>Trong redux cần tạo 1 file configSrore.jsx chứa setup cơ bản về rootReducer. Cần cài các thư viện: redux 4.2.1, cài đặt react-redux, và cài redux-saga </p>
          <img src={require('../../assets/img/configstore.jpg')} alt="" />

          <p>Tiếp đó cần tạo thêm 3 folder gồm: reducer để chứa các code reducer, folder constant chứa những hằng số cần dùng, folder saga chứa code saga</p>
          <p>Trong folder reducer tạo ra các file reducer set up lại reducer, dùng switch case để xét các điều kiện để thiết lập lại state:</p>
          <img src={require('../../assets/img/reducer.jpg')} alt="" />

          <p>Quay lại file index.js cần sửa lại một số chỗ: </p>
          <p>Đầu tiên cần import Provider từ react-redux</p>
          <p>Sau đó import store từ file configStore vừa định nghĩa.</p>
          <p>Trong hàm render cần xoá React.StrictMode và thay thế bằng Provider trong đó có thuộc tính store = store mởi import tương tự như thế này:</p>
          <img src={require('../../assets/img/indexJs.jpg')} alt="" />

          <p>Trong folder saga cần tạo 1 file rootSaga, định nghĩa rootSaga (saga gốc) và đặt những file saga bên trong hàm yield all()</p>
          <img src={require('../../assets/img/rootsaga.jpg')} alt="" />

          <p>Trước khi setup các file saga cần tạo 1 folder service bên trong folder src để định nghĩa các phương thức gọi api. Trong đó chứa 1 file baseService, định nghĩa lớp service.</p>
          <img src={require('../../assets/img/baseservice.jpg')} alt="" />
          <p>DOMAIN và TOKEN được setup là hằng số trong file system của folder util</p>
          <img src={require('../../assets/img/ultil.jpg')} alt="" />
          <p>Tiếp theo tạo các file service để định nghĩa những liên kết gọi api</p>
          <img src={require('../../assets/img/Screenshot (85).jpg')} alt="" />
          <p>Tạo các file saga như sau:</p>
          <img src={require('../../assets/img/saga.jpg')} alt="" />
          <p>Gọi các api được định nghĩa từ service</p>
          <p>Như vậy là hoàn thành 1 setup tương đối đầy đủ về 1 app react sử dụng redux-saga để rest API</p>
          <a className='text-fuchsia-800' target='_blank' href="https://github.com/phamkhachien2010/project-frontEnd-saga-co-ban">Có thể tham khảo project tại đây</a>
        </div>
      </div>
      <div className="container">
      </div>
    </div>
  )
}
