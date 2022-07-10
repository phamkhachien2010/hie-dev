import React from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useFormik } from 'formik';
import parse from 'html-react-parser';


import styleTutorial from './tutorial.module.css'

export default function TutorialOther() {

    const formik = useFormik({
        initialValues: {
            description: ''
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    const handleChangeEditor = (event, editor) => {
        const data = editor.getData();
        console.log(data);
        const desValue = parse(data)
        console.log(desValue.props.children);
        formik.setFieldValue('description', desValue.props.children)
    }

    return (
        <div className={`${styleTutorial.tutorial} text-xs md:text-md mb-3 lg:text-base`}>
            <div className='grid grid-cols-6'>
                <section className='col-span-5 w-4/5 m-auto'>
                    <h1 className='text-center font-bold text-2xl lg:text-4xl py-3'>Một số cài đặt khác</h1>

                    <div id='history'>
                        <h2 className='text-xl lg:text-2xl font-bold mt-3 mb-0'>Set up history</h2>
                        <p>History là 1 thư viện giúp thực hiện các phương thức với đường dẫn url ví dụ như quay thực hiện xong 1 thao tác thì dẫn đến đường dẫn nào</p>
                        <p>Những phương thức hay sử dụng là push('/url') để đẩy đến đường dẫn nào đó, goBack(): quay trở lại trang trước đó</p>
                        <p>Bước 1: Cài đặt history version 4.10.0 vào project</p>
                        <p>Bước 2: Trong component app:</p>
                        <pre>
                            <code>
                                <div className='prism_content'>
                                    <p className='ml-2'>import {'{'}createBrowserHistory{'}'} from 'history'</p>
                                    <p className='ml-2'>export const history = createBrowserHistory();</p>
                                </div>
                            </code>
                        </pre>
                        <div className='ml-2'>
                            trong thẻ Router thêm thuộc tính history:
                            <span className='bg-rose-300'>
                                <span className="token operator"> &lt;</span>Router history<span className="token operator">=</span><span className="token punctuation">{'{'}</span>history<span className="token punctuation">{'}'}</span><span className="token operator">&gt;</span>
                            </span>
                        </div>
                        <p>Rồi import history vào các component cần sử dụng và sử dụng các phương thức của history</p>
                    </div>

                    <div id='ckeditor'>
                        <h2 className='text-xl lg:text-2xl font-bold mt-3 mb-0'>Set up CKEditor </h2>
                        <p>Ví dụ CKEditor</p>
                        <a href="https://www.npmjs.com/package/html-react-parser" className='text-black'>link html-react-parser</a>
                        <form onSubmit={formik.handleSubmit}>
                            <CKEditor
                                editor={ClassicEditor}
                                data="<p>Hello from CKEditor 5!</p>"
                                name='description'
                                onReady={editor => {
                                    // You can store the "editor" and use when it is needed.
                                    console.log('Editor is ready to use!', editor);
                                }}
                                onChange={handleChangeEditor}
                                onBlur={(event, editor) => {
                                    console.log('Blur.', editor);
                                }}
                                onFocus={(event, editor) => {
                                    console.log('Focus.', editor);
                                }}
                            />
                            <button type='submit' className='py-2 px-3 mt-2 bg-green-500 rounded-lg'>Submit</button>
                        </form>
                        <p>Truy cập <a className='text-blue-400' href="https://ckeditor.com/docs/ckeditor5/latest/installation/getting-started/frameworks/react.html#quick-start">trang chủ CKEditor</a> và copy theo ví dụ rồi về customize theo ý</p>
                        <pre>
                            <code>
                                <div className='prism_content'>
                                    <span className="token operator">&lt;</span>form onSubmit<span className="token operator">=</span><span className="token punctuation">{'{'}</span>formik<span className="token punctuation">.</span>handleSubmit<span className="token punctuation">{'}'}</span><span className="token operator">&gt;</span><br />
                                    <span className="token operator">   &lt;</span>CKEditor <br />
                                    <span>      </span>editor<span className="token operator">=</span><span className="token punctuation">{'{'}</span>ClassicEditor<span className="token punctuation">{'}'}</span><br />
                                    <span>      </span>data<span className="token operator">=</span><span className="token string">"&lt;p&gt;Hello from CKEditor 5!&lt;/p&gt;"</span><br />
                                    <span>      </span>name<span className="token operator">=</span><span className="token string">'description'</span><br />
                                    <span>      </span>onReady<span className="token operator">=</span><span className="token punctuation">{'{'}</span><span className="token parameter">editor</span> <span className="token operator">=&gt;</span> <span className="token punctuation">{'{'}</span><br />
                                    <span className="token comment">         // You can store the "editor" and use when it is needed.</span><br />
                                    <span>         </span>console<span className="token punctuation">.</span><span className="token function">log</span><span className="token punctuation">(</span><span className="token string">'Editor is ready to use!'</span><span className="token punctuation">,</span> editor<span className="token punctuation">)</span><span className="token punctuation">;</span><br />
                                    <span className="token punctuation">      {'}'}</span><span className="token punctuation">{'}'}</span><br />
                                    <span>      </span>onChange<span className="token operator">=</span><span className="token punctuation">{'{'}</span>handleChangeEditor<span className="token punctuation">{'}'}</span><br />
                                    <span>      </span>onBlur<span className="token operator">=</span><span className="token punctuation">{'{'}</span><span className="token punctuation">(</span><span className="token parameter">event<span className="token punctuation">,</span> editor</span><span className="token punctuation">)</span> <span className="token operator">=&gt;</span> <span className="token punctuation">{'{'}</span><br />
                                    <span>         </span>console<span className="token punctuation">.</span><span className="token function">log</span><span className="token punctuation">(</span><span className="token string">'Blur.'</span><span className="token punctuation">,</span> editor<span className="token punctuation">)</span><span className="token punctuation">;</span><br />
                                    <span className="token punctuation">      {'}'}</span><span className="token punctuation">{'}'}</span><br />
                                    <span>      </span>onFocus<span className="token operator">=</span><span className="token punctuation">{'{'}</span><span className="token punctuation">(</span><span className="token parameter">event<span className="token punctuation">,</span> editor</span><span className="token punctuation">)</span> <span className="token operator">=&gt;</span> <span className="token punctuation">{'{'}</span><br />
                                    <span>         </span>console<span className="token punctuation">.</span><span className="token function">log</span><span className="token punctuation">(</span><span className="token string">'Focus.'</span><span className="token punctuation">,</span> editor<span className="token punctuation">)</span><span className="token punctuation">;</span><br />
                                    <span className="token punctuation">      {'}'}</span><span className="token punctuation">{'}'}</span><br />
                                    <span className="token operator">   /</span><span className="token operator">&gt;</span><br />
                                    <span className="token operator">   &lt;</span>button type<span className="token operator">=</span><span className="token string">'submit'</span> className<span className="token operator">=</span><span className="token string">'py-2 px-3 mt-2 bg-green-500 rounded-lg'</span><span className="token operator">&gt;</span>Submit<span className="token operator">&lt;</span><span className="token operator">/</span>button<span className="token operator">&gt;</span><br />
                                    <span className="token operator">&lt;</span><span className="token operator">/</span>form<span className="token operator">&gt;</span><br />
                                </div>
                            </code>
                        </pre>


                        <p>Cần set up lại hàm onchange để lấy giá trị của dữ liệu nhập vào. Khi lấy ra giá trị là lấy được thẻ html nên cần sử dụng thư viện <span className='text-green-500'>html-react-parser</span> để lấy được dữ liệu</p>
                        <p>Hàm onchange có dạng như sau: </p>
                        <pre>
                            <code>
                                <div className='prism_content'>
                                    <span className="token keyword">const</span> <span className="token function-variable function">handleChangeEditor</span> <span className="token operator">=</span> <span className="token punctuation">(</span><span className="token parameter">event<span className="token punctuation">,</span> editor</span><span className="token punctuation">)</span> <span className="token operator">=&gt;</span> <span className="token punctuation">{'{'}</span><br />
                                    <span className="token keyword">   const</span> data <span className="token operator">=</span> editor<span className="token punctuation">.</span><span className="token function">getData</span><span className="token punctuation">(</span><span className="token punctuation">)</span><span className="token punctuation">;</span><br />
                                    <span>  </span> console<span className="token punctuation">.</span><span className="token function">log</span><span className="token punctuation">(</span>data<span className="token punctuation">)</span><span className="token punctuation">;</span><br />
                                    <span className="token keyword">   const</span> desValue <span className="token operator">=</span> <span className="token function">parse</span><span className="token punctuation">(</span>data<span className="token punctuation">)</span><br />
                                    <span>   </span>console<span className="token punctuation">.</span><span className="token function">log</span><span className="token punctuation">(</span>desValue<span className="token punctuation">.</span>props<span className="token punctuation">.</span>children<span className="token punctuation">)</span><span className="token punctuation">;</span><br />
                                    <span>  </span> formik<span className="token punctuation">.</span><span className="token function">setFieldValue</span><span className="token punctuation">(</span><span className="token string">'description'</span><span className="token punctuation">,</span> desValue<span className="token punctuation">.</span>props<span className="token punctuation">.</span>children<span className="token punctuation">)</span><br />
                                    <span className="token punctuation">{'}'}</span><br />
                                </div>
                            </code>
                        </pre>
                    </div>

                    <div id='i18'>
                        <h2 className='text-xl lg:text-2xl font-bold mt-3 mb-0'>Setup i18 </h2>
                        <p>i18 next là thư viện giúp đa ngôn ngữ, cần setup từng đoạn ngôn ngữ khi dùng i18</p>
                        <p className='-ml-2'>Bước 1 cài đặt 3 thư viện i18next, react-i18next, i18next-http-backend</p>
                        <div className='prism_content'>
                            <p>npm install i18next react-i18next i18next-http-backend</p>
                        </div>
                        <p className='-ml-2'>Bước 2: Cần tạo 1 folder locals để chứa những dữ liệu thuộc những ngôn ngữ khác nhau thực chất chỉ là những định nghĩa với những loại ngôn ngữ khác nhau</p>
                        <p>Tạo 1 folder en trong locals để chứa định nghĩa tiếng anh, 1 folder vi để chứa định nghĩa tiếng việt. Bên trong tạo 1 file translation.json để chứa những định nghĩa</p>
                        <p>Sau đó setup những đoạn json định nghĩa. ví dụ: </p>
                        <div>
                            <p>Định nghĩa tiếng Anh trong file translation en: </p>
                            <pre>
                                <code>
                                    <div className='prism_content'>
                                        <span>{'{'}</span><br />
                                        <span>  </span>"welcome to hie-dev website": "welcome to hie-dev website" <br />
                                        <span>{'}'}</span>
                                    </div>
                                </code>
                            </pre>

                            <p>Định nghĩa tiếng Việt trong file translation vi: </p>
                            <pre>
                                <code>
                                    <div className='prism_content'>
                                        <span>{'{'}</span><br />
                                        <span>  </span>"welcome to hie-dev website": "Chào mừng đến với trang web hie-dev" <br />
                                        <span>{'}'}</span>
                                    </div>
                                </code>
                            </pre>

                            <p>Lưu ý cùng tên biến!</p>
                            <p className='-ml-2'>Bước 3: Tạo 1 file i18n.js cùng cấp với index.js, định nghĩa như sau:</p>

                            <pre>
                                <code>
                                    <div className='prism_content'>
                                        <span className="token keyword">import</span> i18n <span className="token keyword">from</span> <span className="token string">'i18next'</span><span className="token punctuation">;</span><br />
                                        <span className="token keyword">import</span> <span className="token punctuation">{'{'}</span> initReactI18next <span className="token punctuation">{'}'}</span> <span className="token keyword">from</span> <span className="token string">'react-i18next'</span><span className="token punctuation">;</span><br />
                                        <span className="token keyword">import</span> Backend <span className="token keyword">from</span> <span className="token string">'i18next-http-backend'</span><span className="token punctuation">;</span><br />
                                        <span className="token keyword">import</span> translationEN <span className="token keyword">from</span> <span className="token string">'./locales/en/translation.json'</span><br />
                                        <span className="token keyword">import</span> translationVI <span className="token keyword">from</span> <span className="token string">'./locales/vi/translation.json'</span><br />
                                        <span className="token comment">// don't want to use this?</span><br />
                                        <span className="token comment">// have a look at the Quick start guide </span><br />
                                        <span className="token comment">// for passing in lng and translations on init</span><br />
                                        <span className="token keyword">const</span> resources <span className="token operator">=</span> <span className="token punctuation">{'{'}</span><br />
                                        <span className="token literal-property property">   en</span><span className="token operator">:</span> <span className="token punctuation">{'{'}</span><br />
                                        <span className="token literal-property property">      translation</span><span className="token operator">:</span> translationEN <br />
                                        <span className="token punctuation">   {'}'}</span><span className="token punctuation">,</span><br />
                                        <span className="token literal-property property">   vi</span><span className="token operator">:</span> <span className="token punctuation">{'{'}</span><br />
                                        <span className="token literal-property property">      translation</span><span className="token operator">:</span> translationVI <br />
                                        <span className="token punctuation">   {'}'}</span><br />
                                        <span className="token punctuation">{'}'}</span><br />
                                        i18n <br />
                                        <span className="token punctuation">   .</span><span className="token function">use</span><span className="token punctuation">(</span>Backend<span className="token punctuation">)</span><br />
                                        <span className="token punctuation">   .</span><span className="token function">use</span><span className="token punctuation">(</span>initReactI18next<span className="token punctuation">)</span><br />
                                        <span className="token punctuation">   .</span><span className="token function">init</span><span className="token punctuation">(</span><span className="token punctuation">{'{'}</span><br />
                                        <span>      </span>resources<span className="token punctuation">,</span><br />
                                        <span className="token literal-property property">      fallbackLng</span><span className="token operator">:</span> <span className="token string">'en'</span><span className="token punctuation">,</span><br />
                                        <span className="token literal-property property">      lng</span><span className="token operator">:</span> <span className="token string">"en"</span><span className="token punctuation">,</span><br />
                                        <span className="token literal-property property">      debug</span><span className="token operator">:</span> <span className="token boolean">true</span><span className="token punctuation">,</span><br />
                                        <span className="token literal-property property">      interpolation</span><span className="token operator">:</span> <span className="token punctuation">{'{'}</span><br />
                                        <span className="token literal-property property">      escapeValue</span><span className="token operator">:</span> <span className="token boolean">false</span> <span className="token comment">// not needed for react as it escapes by default</span><br />
                                        <span className="token punctuation">      {'}'}</span><br />
                                        <span className="token punctuation">   {'}'}</span><span className="token punctuation">)</span><span className="token punctuation">;</span><br />
                                        <span className="token keyword">export</span> <span className="token keyword">default</span> i18n<span className="token punctuation">;</span><br />
                                    </div>
                                </code>
                            </pre>

                            <p className='-ml-2'>Bước 4: Tạo nút chuyển ngôn ngữ</p>
                            <p>Tạo ra 1 thẻ select-option</p>
                            <pre>
                                <code>
                                    <div className='prism_content'>
                                        <span className="token operator">&lt;</span>select defaultValue<span className="token operator">=</span><span className="token string">"en"</span> style<span className="token operator">=</span><span className="token punctuation">{'{'}</span><span className="token punctuation">{'{'}</span> <span className="token literal-property property">width</span><span className="token operator">:</span> <span className="token number">70</span> <span className="token punctuation">{'}'}</span><span className="token punctuation">{'}'}</span> onChange<span className="token operator">=</span><span className="token punctuation">{'{'}</span>handleChange<span className="token punctuation">{'}'}</span><span className="token operator">&gt;</span><br />
                                        <span className="token operator">   &lt;</span>option value<span className="token operator">=</span><span className="token string">"en"</span><span className="token operator">&gt;</span>Eng<span className="token operator">&lt;</span><span className="token operator">/</span>option<span className="token operator">&gt;</span><br />
                                        <span className="token operator">   &lt;</span>option value<span className="token operator">=</span><span className="token string">"vi"</span><span className="token operator">&gt;</span>Vie<span className="token operator">&lt;</span><span className="token operator">/</span>option<span className="token operator">&gt;</span><br />
                                        <span className="token operator">&lt;</span><span className="token operator">/</span>select<span className="token operator">&gt;</span><br />
                                    </div>
                                </code>
                            </pre>

                            <p>import những thứ cần thiết và định nghĩa hàm handleChange </p>
                            <pre>
                                <code>
                                    <div className='prism_content'>
                                        <span className="token keyword">import</span> <span className="token punctuation">{'{'}</span> useTranslation <span className="token punctuation">{'}'}</span> <span className="token keyword">from</span> <span className="token string">'react-i18next'</span><span className="token punctuation">;</span><br /><br />
                                        <span className="token keyword">const</span> <span className="token punctuation">{'{'}</span> t<span className="token punctuation">,</span> i18n <span className="token punctuation">{'}'}</span> <span className="token operator">=</span> <span className="token function">useTranslation</span><span className="token punctuation">(</span><span className="token punctuation">)</span><span className="token punctuation">;</span><br /><br />
                                        <span className="token keyword">const</span> <span className="token function-variable function">handleChange</span> <span className="token operator">=</span> <span className="token punctuation">(</span><span className="token parameter">value</span><span className="token punctuation">)</span> <span className="token operator">=&gt;</span> <span className="token punctuation">{'{'}</span><br />
                                        <span>   </span>i18n<span className="token punctuation">.</span><span className="token function">changeLanguage</span><span className="token punctuation">(</span>value<span className="token punctuation">)</span><br />
                                        <span className="token punctuation">{'}'}</span><br />
                                    </div>
                                </code>
                            </pre>
                            <p className='mb-2'>Ở những nơi cần chuyển đổi ngôn ngữ thì dùng <span className='text-sky-600 p-1 bg-rose-200'> <span>{'{'}</span>t('variable')<span>{'}'}</span></span></p>
                            <p>Như ví dụ bến trên thì truyền vào <span className='text-sky-600 p-1 bg-rose-200'> <span>{'{'}</span>t('welcome to hie-dev website')<span>{'}'}</span></span>, tên biến trong json được phép để khoảng cách</p>


                        </div>
                    </div>

                </section>

                <div className='bg-teal-400 p-3'>
                    <div className="w-4/5 m-auto fixed">
                        <p className='text-sx sm:text-sm lg:text-base font-bold mb-2'>Mục lục</p>
                        <h2 className='text-sx sm:text-sm lg:text-base'><a className='text-black' href='#history'>History</a></h2>
                        <h2 className='text-sx sm:text-sm lg:text-base'><a className='text-black' href='#ckeditor'>CKEditor</a></h2>
                        <h2 className='text-sx sm:text-sm lg:text-base'><a className='text-black' href='#i18'>i18next</a></h2>
                    </div>
                </div>
            </div>
        </div>
    )
}
