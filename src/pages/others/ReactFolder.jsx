import React from 'react'
import styleOther from './other.module.css'

export default function ReactFolder() {
  return (
    <div className={styleOther.other}>
      <div className='grid grid-cols-6'>
        <div className='w-4/5 m-auto text-xs md:text-sm lg:text-base col-span-5'>
          <div >
            <h1 className='text-xl md:text-2xl lg:text-4xl font-bold pt-3 pb-3 text-center'>Cấu hình các folder ReactJs dùng redux saga:</h1>
            <div >
              <p>Trong folder src cần cấu hình thêm những folder, những file để có thể dễ theo dõi và chỉnh sửa, cập nhật code.</p>
              <p>Tạo thêm 1 folder assets trong đó chứa ảnh hoặc những file không phải code.</p>
              <p>Tạo thêm 1 folder pages để chứa những file jsx về những page trong website ví dụ như homepage ...</p>

              <p>Cần cài đặt thư viện react-router-dom bản version 5.2.0, cài thư viện history version 4.10.0.</p>
              <div id='setup_template'>
                <p>Tạo 1 folder <span className='bg-rose-300 font-bold'>template</span>  để chứa những code định nghĩa thành phần cố định dùng chung của một số pages. Và định nghĩa như sau:</p>
                <pre>
                  <code className=''>
                    <div className='prism_content'>
                      <div>
                        <span className="token keyword">import</span> React<span className="token punctuation">,</span> <span className="token punctuation">{'{'}</span> useEffect <span className="token punctuation">{'}'}</span> <span className="token keyword">from</span> <span className="token string">'react'</span><br />
                        <span className="token keyword">import</span> <span className="token punctuation">{'{'}</span> NavLink <span className="token punctuation">{'}'}</span> <span className="token keyword">from</span> <span className="token string">'react-router-dom'</span><span className="token punctuation">;</span><br />
                        <span className="token keyword">import</span> <span className="token punctuation">{'{'}</span> Route <span className="token punctuation">{'}'}</span> <span className="token keyword">from</span> <span className="token string">'react-router-dom'</span><span className="token punctuation">;</span><br />
                        <span className="token keyword">export</span> <span className="token keyword">default</span> <span className="token keyword">function</span> <span className="token function">UserTemplate</span><span className="token punctuation">(</span><span className="token parameter">props</span><span className="token punctuation">)</span> <span className="token punctuation">{'{'}</span><br />
                        <span className="token function">   useEffect</span><span className="token punctuation">(</span><span className="token punctuation">(</span><span className="token punctuation">)</span> <span className="token operator">=&gt;</span> <span className="token punctuation">{'{'}</span><br />
                        <span>      window </span><span className="token punctuation">.</span><span className="token function">scroll</span><span className="token punctuation">(</span><span className="token number">0</span><span className="token punctuation">,</span> <span className="token number">0</span><span className="token punctuation">)</span><br />
                        <span className="token keyword">      return</span> <span className="token punctuation">(</span><span className="token punctuation">)</span> <span className="token operator">=&gt;</span> <span className="token punctuation">{'{'}</span><br />
                        <span className="token punctuation">      {'}'}</span><br />
                        <span className="token punctuation">   {'}'}</span><span className="token punctuation">,</span> <span className="token punctuation">[</span><span className="token punctuation">]</span><span className="token punctuation">)</span><br /><br />
                        <span className="token keyword">   const</span> <span className="token punctuation">{'{'}</span> Component<span className="token punctuation">,</span> <span className="token operator">...</span>restProps <span className="token punctuation">{'}'}</span> <span className="token operator">=</span> props<span className="token punctuation">;</span><br /><br />
                        <span className="token keyword">   return</span> <span className="token punctuation">(</span><br />
                        <span className="token operator">      &lt;</span>Route <span className="token punctuation">{'{'}</span><span className="token operator">...</span>restProps<span className="token punctuation">{'}'}</span> render<span className="token operator">=</span><span className="token punctuation">{'{'}</span><span className="token punctuation">(</span><span className="token parameter">propsRoute</span><span className="token punctuation">)</span> <span className="token operator">=&gt;</span> <span className="token punctuation">{'{'}</span><br />
                        <span className="token keyword">         return</span> <span className="token operator">&lt;</span>div<span className="token operator">&gt;</span><br />
                        <span>            thành phần dùng chung bên trên Component </span><br /><br />
                        <span className="token operator">            &lt;</span>Component <span className="token punctuation">{'{'}</span><span className="token operator">...</span>propsRoute<span className="token punctuation">{'}'}</span> <span className="token operator">/</span><span className="token operator">&gt;</span><br /><br />
                        <span>            thành phần dùng chung bên dưới Component </span><br />
                        <span className="token operator">         &lt;</span><span className="token operator">/</span>div<span className="token operator">&gt;</span><br />
                        <span className="token punctuation">      {'}'}</span><span className="token punctuation">{'}'}</span><span className="token operator">&gt;</span><span className="token operator">&lt;</span><span className="token operator">/</span>Route<span className="token operator">&gt;</span><br />
                        <span className="token punctuation">   )</span><br />
                        <span className="token punctuation">{'}'}</span><br />
                      </div>
                    </div>
                  </code>
                </pre>
              </div>

              <div id='setup_router_dom'>
                <p>Tại <span className='bg-rose-300 font-bold'>app.js</span> setup router-dom như thế này:</p>
                <img src={require('../../assets/img/appJs.jpg')} alt="" />
                <p>Các file tiếp theo cần gắn template thì đặt trong Switch</p>
              </div>

              <p>Tạo thêm 1 folder redux để chứa những code liên quan đến redux</p>
              <div id='setup_config_store'>
                <p>Trong redux cần tạo 1 file <span className='bg-rose-300 font-bold'>configSrore.jsx</span> chứa setup cơ bản về rootReducer. Cần cài các thư viện: redux 4.2.1, cài đặt react-redux, và cài redux-saga </p>
                <pre>
                  <code className=''>
                    <div className='prism_content'>
                      <div>
                        <span className="token keyword">import</span> <span className="token punctuation">{'{'}</span> applyMiddleware<span className="token punctuation">,</span> combineReducers<span className="token punctuation">,</span> createStore <span className="token punctuation">{'}'}</span> <span className="token keyword">from</span> <span className="token string">'redux'</span><br />
                        <span className="token keyword">import</span> createMiddleWareSaga <span className="token keyword">from</span> <span className="token string">'redux-saga'</span><br />
                        <span className="token keyword">import</span> <span className="token punctuation">{'{'}</span> rootSaga <span className="token punctuation">{'}'}</span> <span className="token keyword">from</span> <span className="token string">'./saga/rootSaga'</span><span className="token punctuation">;</span><br />
                        <span className="token keyword">const</span> middleWareSaga <span className="token operator">=</span> <span className="token function">createMiddleWareSaga</span><span className="token punctuation">(</span><span className="token punctuation">)</span><span className="token punctuation">;</span><br />
                        <span className="token keyword">const</span> rootReducer <span className="token operator">=</span> <span className="token function">combineReducers</span><span className="token punctuation">(</span><span className="token punctuation">{'{'}</span><br />
                        <span className="token comment">     //các file reducer đặt ở đây</span><br />
                        <span className="token punctuation">{'}'}</span><span className="token punctuation">)</span><br />
                        <span className="token keyword">const</span> store <span className="token operator">=</span> <span className="token function">createStore</span><span className="token punctuation">(</span>rootReducer<span className="token punctuation">,</span> <span className="token function">applyMiddleware</span><span className="token punctuation">(</span>middleWareSaga<span className="token punctuation">)</span><span className="token punctuation">)</span><span className="token punctuation">;</span><br />
                        middleWareSaga<span className="token punctuation">.</span><span className="token function">run</span><span className="token punctuation">(</span>rootSaga<span className="token punctuation">)</span><br />
                        <span className="token keyword">export</span> <span className="token keyword">default</span> store<span className="token punctuation">;</span><br />
                      </div>
                    </div>
                  </code>
                </pre>
              </div>

              <div id='create_reducer'>
                <p>Tiếp đó cần tạo thêm 3 folder gồm: reducer để chứa các code reducer, folder constant chứa những hằng số cần dùng, folder saga chứa code saga</p>
                <p>Trong folder reducer tạo ra các file <span className='bg-rose-300 font-bold'>reducer</span> set up lại reducer, dùng switch case để xét các điều kiện để thiết lập lại state:</p>
                <img src={require('../../assets/img/reducer.jpg')} alt="" />

                <p className='mt-3'>Quay lại file <span className='bg-rose-300 font-bold'>index.js</span> cần sửa lại một số chỗ: </p>
                <p>Đầu tiên cần import Provider từ react-redux</p>
                <p>Sau đó import store từ file configStore vừa định nghĩa.</p>
                <p>Trong hàm render cần xoá React.StrictMode và thay thế bằng Provider trong đó có thuộc tính store = store mởi import tương tự như thế này:</p>
                <img src={require('../../assets/img/indexJs.jpg')} alt="" />
              </div>

              <div id='create_root_saga'>
                <p>Trong folder saga cần tạo 1 file <span className='bg-rose-300 font-bold'>rootSaga</span>, định nghĩa rootSaga (saga gốc) và đặt những file saga bên trong hàm yield all()</p>
                <pre>
                  <code className=''>
                    <div className='prism_content'>
                      <div>
                        <span className="token keyword">import</span> <span className="token punctuation">{'{'}</span> all <span className="token punctuation">{'}'}</span> <span className="token keyword">from</span> <span className="token string">'redux-saga/effects'</span><br />
                        <span className="token keyword">export</span> <span className="token keyword">function</span><span className="token operator">*</span> <span className="token function">rootSaga</span><span className="token punctuation">(</span><span className="token punctuation">)</span> <span className="token punctuation">{'{'}</span><br />
                        <span className="token keyword">   yield</span> <span className="token function">all</span><span className="token punctuation">(</span><span className="token punctuation">[</span><br />
                        <span className="token comment">         // các function theo dõi saga</span><br />
                        <span className="token punctuation">   ]</span><span className="token punctuation">)</span><br />
                        <span className="token punctuation">{'}'}</span><br />
                      </div>

                    </div>
                  </code>
                </pre>
              </div>

              <div id='create_base_service'>
                <p>Trước khi setup các file saga cần tạo 1 folder service bên trong folder src để định nghĩa các phương thức gọi api. Trong đó chứa 1 file <span className='bg-rose-300 font-bold'>baseService</span>, định nghĩa lớp service.</p>
                <pre>
                  <code className=''>
                    <div className='prism_content'>
                      <div>
                        <span className="token keyword">import</span> axios <span className="token keyword">from</span> <span className="token string">"axios"</span><br />
                        <span className="token keyword">import</span> <span className="token punctuation">{'{'}</span> <span className="token constant">DOMAIN</span><span className="token punctuation">,</span> <span className="token constant">TOKEN</span> <span className="token punctuation">{'}'}</span> <span className="token keyword">from</span> <span className="token string">"../util/Constant/settingSystem"</span><br />
                        <span className="token keyword">export</span> <span className="token keyword">class</span> <span className="token class-name">baseService</span> <span className="token punctuation">{'{'}</span><br />
                        <span className="token comment">   //put json về phía backend</span><br />
                        <span className="token function-variable function">   put</span> <span className="token operator">=</span> <span className="token punctuation">(</span><span className="token parameter">url<span className="token punctuation">,</span>model</span><span className="token punctuation">)</span> <span className="token operator">=&gt;</span> <span className="token punctuation">{'{'}</span><br />
                        <span className="token keyword">      return</span>  <span className="token function">axios</span><span className="token punctuation">(</span><span className="token punctuation">{'{'}</span><br />
                        <span className="token literal-property property">         url</span><span className="token operator">:</span><span className="token punctuation">`${'{'}<span>DOMAIN</span>{'}'}/${'{'}<span>url</span>{'}'}`,</span><br />
                        <span className="token literal-property property">         method</span><span className="token operator">:</span><span className="token string">'PUT'</span><span className="token punctuation">,</span><br />
                        <span className="token literal-property property">         data</span><span className="token operator">:</span>model<span className="token punctuation">,</span><br />
                        <span className="token literal-property property">         headers</span><span className="token operator">:</span> <span className="token punctuation">{'{'}</span><span className="token string-property property">'Authorization'</span><span className="token operator">:</span> <span className="token string">'Bearer '</span> <span className="token operator">+</span> localStorage<span className="token punctuation">.</span><span className="token function">getItem</span><span className="token punctuation">(</span><span className="token constant">TOKEN</span><span className="token punctuation">)</span><span className="token punctuation">{'}'}</span> <span className="token comment">//JWT</span><br />
                        <span className="token punctuation">      {'}'}</span><span className="token punctuation">)</span><br />
                        <span className="token punctuation">   {'}'}</span><br />
                        <span className="token function-variable function">   post</span> <span className="token operator">=</span> <span className="token punctuation">(</span><span className="token parameter">url<span className="token punctuation">,</span>model</span><span className="token punctuation">)</span> <span className="token operator">=&gt;</span> <span className="token punctuation">{'{'}</span><br />
                        <span className="token keyword">      return</span> <span className="token function">axios</span><span className="token punctuation">(</span><span className="token punctuation">{'{'}</span><br />
                        <span className="token literal-property property">         url</span><span className="token operator">:</span><span className="token punctuation">`${'{'}<span>DOMAIN</span>{'}'}/${'{'}<span>url</span>{'}'}`,</span><br />
                        <span className="token literal-property property">         method</span><span className="token operator">:</span><span className="token string">'POST'</span><span className="token punctuation">,</span><br />
                        <span className="token literal-property property">         data</span><span className="token operator">:</span>model<span className="token punctuation">,</span><br />
                        <span className="token literal-property property">         headers</span><span className="token operator">:</span> <span className="token punctuation">{'{'}</span><span className="token string-property property">'Authorization'</span><span className="token operator">:</span> <span className="token string">'Bearer '</span> <span className="token operator">+</span> localStorage<span className="token punctuation">.</span><span className="token function">getItem</span><span className="token punctuation">(</span><span className="token constant">TOKEN</span><span className="token punctuation">)</span><span className="token punctuation">{'}'}</span> <span className="token comment">//JWT</span><br />
                        <span className="token punctuation">      {'}'}</span><span className="token punctuation">)</span><br />
                        <span className="token punctuation">   {'}'}</span><br />
                        <span className="token function-variable function">   get</span> <span className="token operator">=</span> <span className="token punctuation">(</span><span className="token parameter">url</span><span className="token punctuation">)</span> <span className="token operator">=&gt;</span> <span className="token punctuation">{'{'}</span><br />
                        <span className="token keyword">      return</span> <span className="token function">axios</span><span className="token punctuation">(</span><span className="token punctuation">{'{'}</span><br />
                        <span className="token literal-property property">         url</span><span className="token operator">:</span><span className="token punctuation">`${'{'}<span>DOMAIN</span>{'}'}/${'{'}<span>url</span>{'}'}`,</span><br />
                        <span className="token literal-property property">         method</span><span className="token operator">:</span><span className="token string">'GET'</span><span className="token punctuation">,</span><br />
                        <span className="token literal-property property">         headers</span><span className="token operator">:</span> <span className="token punctuation">{'{'}</span><span className="token string-property property">'Authorization'</span><span className="token operator">:</span> <span className="token string">'Bearer '</span> <span className="token operator">+</span> localStorage<span className="token punctuation">.</span><span className="token function">getItem</span><span className="token punctuation">(</span><span className="token constant">TOKEN</span><span className="token punctuation">)</span><span className="token punctuation">{'}'}</span> <span className="token comment">//token yêu cầu từ backend chứng minh user đã đăng nhập rồi</span><br />
                        <span className="token punctuation">      {'}'}</span><span className="token punctuation">)</span><br />
                        <span className="token punctuation">   {'}'}</span><br />
                        <span className="token function-variable function">   delete</span> <span className="token operator">=</span> <span className="token punctuation">(</span><span className="token parameter">url</span><span className="token punctuation">)</span> <span className="token operator">=&gt;</span> <span className="token punctuation">{'{'}</span><br />
                        <span className="token keyword">      return</span> <span className="token function">axios</span><span className="token punctuation">(</span><span className="token punctuation">{'{'}</span><br />
                        <span className="token literal-property property">         url</span><span className="token operator">:</span><span className="token punctuation">`${'{'}<span>DOMAIN</span>{'}'}/${'{'}<span>url</span>{'}'}`,</span><br />
                        <span className="token literal-property property">         method</span><span className="token operator">:</span><span className="token string">'DELETE'</span><span className="token punctuation">,</span><br />
                        <span className="token literal-property property">         headers</span><span className="token operator">:</span> <span className="token punctuation">{'{'}</span><span className="token string-property property">'Authorization'</span><span className="token operator">:</span> <span className="token string">'Bearer '</span> <span className="token operator">+</span> localStorage<span className="token punctuation">.</span><span className="token function">getItem</span><span className="token punctuation">(</span><span className="token constant">TOKEN</span><span className="token punctuation">)</span><span className="token punctuation">{'}'}</span> <span className="token comment">//token yêu cầu từ backend chứng minh user đã đăng nhập rồi</span><br />
                        <span className="token punctuation">      {'}'}</span><span className="token punctuation">)</span><br />
                        <span className="token punctuation">   {'}'}</span><br />
                        <span className="token punctuation">{'}'}</span><br />
                      </div>
                    </div>
                  </code>
                </pre>
                <p>DOMAIN và TOKEN được setup là hằng số trong file <span className='bg-rose-300 font-bold'>system</span> của folder util</p>
                <img src={require('../../assets/img/ultil.jpg')} alt="" />
                <p>Tiếp theo tạo các file <span className='bg-rose-300 font-bold'>service</span> để định nghĩa những liên kết gọi api</p>
                <img src={require('../../assets/img/Screenshot (85).jpg')} alt="" />
              </div>

              <div id='create_saga_file'>
                <p>Tạo các file <span className='bg-rose-300 font-bold'>saga</span> như sau:</p>
                <img src={require('../../assets/img/saga.jpg')} alt="" />
                <p>Gọi các api được định nghĩa từ service</p>
                <p>Như vậy là hoàn thành 1 setup tương đối đầy đủ về 1 app react sử dụng redux-saga để rest API</p>
              </div>
              <a className='text-blue-500' target='_blank' href="https://github.com/phamkhachien2010/project-frontEnd-saga-co-ban">Có thể tham khảo project tại đây</a>
            </div>
          </div>
        </div>

        <div className='bg-teal-400 p-3'>
          <div className="w-4/5 m-auto fixed">
            <p className='text-sx sm:text-sm lg:text-base font-bold mb-2'>Mục lục</p>
            <h2 className='text-sx sm:text-sm lg:text-base'><a className='text-black' href='#setup_template'>Setup template</a></h2>
            <h2 className='text-sx sm:text-sm lg:text-base'><a className='text-black' href='#setup_router_dom'>Setup router dom</a></h2>
            <h2 className='text-sx sm:text-sm lg:text-base'><a className='text-black' href='#setup_config_store'>Setup configStore của redux</a></h2>
            <h2 className='text-sx sm:text-sm lg:text-base'><a className='text-black' href='#create_reducer'>Tạo các file, folder reducer</a></h2>
            <h2 className='text-sx sm:text-sm lg:text-base'><a className='text-black' href='#create_root_saga'>Định nghĩa rootSaga</a></h2>
            <h2 className='text-sx sm:text-sm lg:text-base'><a className='text-black' href='#create_base_service'>Định nghĩa baseService</a></h2>
            <h2 className='text-sx sm:text-sm lg:text-base'><a className='text-black' href='#create_saga_file'>Định nghĩa các file saga</a></h2>
          </div>
        </div>
      </div>
    </div >
  )
}
