import React from 'react'
import styleTutorial from './tutorial.module.css'

export default function ReduxSagaTutorial() {
    return (
        <div className={`text-xs md:text-md lg:text-base w-4/5 m-auto ${styleTutorial.tutorial}`}>
            <h1 className='text-center font-bold text-2xl lg:text-4xl py-3'>Cài đặt, setup redux saga</h1>
            <p>Redux-saga là 1 middleware giúp thực hiện các hàm bất đồng bộ một cách có hệ thống, dễ hiểu</p>
            <p>Redux-saga ứng dụng nhiều nhất cho các phương thức kết nối api với back-end</p>
            <h2 className='mt-3 mb-0 text-xl lg:text-2xl'>Các bước cài đặt redux-saga</h2>
            <p>Bước 1: sau khi cài đặt redux-saga, tạo 1 foler saga để chứa những code saga</p>
            <pre>
                <code>
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
            <p>Bước 2: Setup lại file configStore</p>
            <pre>
                <code>
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
            <p>Bước 3: Tạo các phương thức kết nối với back-end bằng những genderator function</p>
            <pre>
                <code>
                    <div className='prism_content'>
                        <div>
                            <span className="token keyword">import</span> <span className="token punctuation">{'{'}</span> call<span className="token punctuation">,</span> put<span className="token punctuation">,</span> takeLatest <span className="token punctuation">{'}'}</span> <span className="token keyword">from</span> <span className="token string">'redux-saga/effects'</span><br />
                            <span className="token keyword">import</span> <span className="token punctuation">{'{'}</span> functionService <span className="token punctuation">{'}'}</span> <span className="token keyword">from</span> <span className="token string">'../../services/QuanLyPhimService'</span><span className="token punctuation">;</span><br />
                            <span className="token keyword">function</span><span className="token operator">*</span> <span className="token function">functionNameSaga</span> <span className="token punctuation">(</span><span className="token parameter">action</span><span className="token punctuation">)</span><span className="token punctuation">{'{'}</span><br />
                            <span className="token keyword">   try</span> <span className="token punctuation">{'{'}</span><br />
                            <span className="token keyword">      const</span> <span className="token punctuation">{'{'}</span>data<span className="token punctuation">,</span> status<span className="token punctuation">{'}'}</span><span className="token operator">=</span> <span className="token keyword">yield</span> <span className="token function">call</span><span className="token punctuation">(</span><span className="token punctuation">(</span><span className="token punctuation">)</span><span className="token operator">=&gt;</span>fileService<span className="token punctuation">.</span><span className="token function">functionService</span><span className="token punctuation">(</span>params<span className="token punctuation">)</span><span className="token punctuation">)</span><span className="token punctuation">;</span><br /><br />
                            <span className="token punctuation">   {'}'}</span> <span className="token keyword">catch</span> <span className="token punctuation">(</span>error<span className="token punctuation">)</span> <span className="token punctuation">{'{'}</span><br /><br />
                            <span className="token punctuation">   {'}'}</span><br />
                            <span className="token punctuation">{'}'}</span><br />
                            <span className="token keyword">export</span> <span className="token keyword">function</span><span className="token operator">*</span> <span className="token function">theoDoiFunctionName</span><span className="token punctuation">(</span><span className="token punctuation">)</span><span className="token punctuation">{'{'}</span><br />
                            <span className="token keyword">   yield</span> <span className="token function">taskLastest</span><span className="token punctuation">(</span><span className="token constant">NAME_CONST_API</span><span className="token punctuation">,</span> functionNameSaga<span className="token punctuation">)</span><br />
                            <span className="token punctuation">{'}'}</span>
                        </div>
                    </div>
                </code>
            </pre>
            <p>Bước 4: Thêm những function theo dõi vào trong rootSaga</p>
            <pre>
                <code className=''>
                    <div className='prism_content'>
                        <div>
                            <span className="token keyword">import</span> <span className="token punctuation">{'{'}</span> all <span className="token punctuation">{'}'}</span> <span className="token keyword">from</span> <span className="token string">'redux-saga/effects'</span><br />
                            <span className="token keyword">import</span> <span className="token operator">*</span> <span className="token keyword">as</span> UserSaga <span className="token keyword">from</span> <span className="token string">'./UserSaga'</span><br />
                            <span className="token keyword">export</span> <span className="token keyword">function</span><span className="token operator">*</span> <span className="token function">rootSaga</span><span className="token punctuation">(</span><span className="token punctuation">)</span> <span className="token punctuation">{'{'}</span><br />
                            <span className="token keyword">   yield</span> <span className="token function">all</span><span className="token punctuation">(</span><span className="token punctuation">[</span><br />
                            <span>     </span> UserSaga<span className="token punctuation">.</span><span className="token function">theoDoiLoginSaga</span><span className="token punctuation">(</span><span className="token punctuation">)</span><span className="token punctuation">,</span><br />
                            <span className="token punctuation">   ]</span><span className="token punctuation">)</span><br />
                            <span className="token punctuation">{'}'}</span>
                        </div>

                    </div>
                </code>
            </pre>
            <p>Bước 5: Gọi những phương thức này tại những nơi cần</p>

        </div>
    )
}
