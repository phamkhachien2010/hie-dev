import React from 'react'

import styleOher from './other.module.css'

export default function ArrayMethods() {
    return (
        <div className={styleOher.other}>
            <div className='grid grid-cols-6'>

                <div className='col-span-5'>
                    <h1 className='text-center text-2xl lg:text-3xl py-3 font-bold'>Các phương thức mảng thường dùng</h1>
                    <section className='w-4/5 m-auto text-sx md:text-md lg:text-base'>
                        <div id='map'>
                            <h3 className='text-xl lg:text-2xl font-bold mb-0 mt-3'>Map()</h3>
                            <p>Duyệt mảng có sẵn trả về mảng mới trong return</p>
                            <pre>
                                <code className=''>
                                    <div className='prism_content'>
                                        <div>
                                            <span className="token keyword">const</span> number <span className="token operator">=</span> <span className="token punctuation">[</span><span className="token number">5</span><span className="token punctuation">,</span> <span className="token number">6</span><span className="token punctuation">,</span> <span className="token number">8</span><span className="token punctuation">,</span> <span className="token number">7</span><span className="token punctuation">]</span><span className="token punctuation">;</span><br />
                                            <span className="token keyword">const</span> increaseNuber <span className="token operator">=</span> number<span className="token punctuation">.</span><span className="token function">map</span><span className="token punctuation">(</span><span className="token punctuation">(</span><span className="token parameter">num<span className="token punctuation">,</span> index</span><span className="token punctuation">)</span> <span className="token operator">=&gt;</span> <span className="token punctuation">{'{'}</span><br />
                                            <span className="token keyword">   return</span> num <span className="token operator">+</span> <span className="token number">1</span><br />
                                            <span className="token punctuation">{'}'}</span><span className="token punctuation">)</span><br />
                                            console<span className="token punctuation">.</span><span className="token function">log</span><span className="token punctuation">(</span>increaseNuber<span className="token punctuation">)</span><span className="token punctuation">;</span><br />
                                            <span className="token comment">//[6, 7, 9, 8]</span><br />
                                        </div>

                                    </div>
                                </code>
                            </pre>
                        </div>

                        <div id='filter'>
                            <h3 className='text-xl lg:text-2xl font-bold mb-0 mt-3'>Filter()</h3>
                            <p>Duyệt mảng có sẵn trả về mảng mới thỏa mãn điều kiện</p>
                            <pre>
                                <code className=''>
                                    <div className='prism_content'>
                                        <div>
                                            <span className="token keyword">const</span> number <span className="token operator">=</span> <span className="token punctuation">[</span><span className="token number">5</span><span className="token punctuation">,</span> <span className="token number">6</span><span className="token punctuation">,</span> <span className="token number">8</span><span className="token punctuation">,</span> <span className="token number">7</span><span className="token punctuation">]</span><span className="token punctuation">;</span><br />
                                            <span className="token keyword">const</span> filter <span className="token operator">=</span> number<span className="token punctuation">.</span><span className="token function">filter</span><span className="token punctuation">(</span><span className="token punctuation">(</span><span className="token parameter">num</span><span className="token punctuation">)</span> <span className="token operator">=&gt;</span> <span className="token punctuation">{'{'}</span><br />
                                            <span className="token keyword">   return</span> num <span className="token operator">%</span> <span className="token number">2</span><span className="token operator">===</span><span className="token number">0</span><br />
                                            <span className="token punctuation">{'}'}</span><span className="token punctuation">)</span><br />
                                            console<span className="token punctuation">.</span><span className="token function">log</span><span className="token punctuation">(</span>filter<span className="token punctuation">)</span><span className="token punctuation">;</span><br />
                                            <span>//[6, 8]</span><br />
                                        </div>
                                    </div>
                                </code>
                            </pre>
                        </div>

                        <div id='reduce'>
                            <h3 className='text-xl lg:text-2xl font-bold mb-0 mt-3'>Reduce()</h3>
                            <p>Thực thi một hàm lên các phần tử của mảng (từ trái qua phải) với 1 biến tích lũy trả về 1 giá trị</p>
                            <pre>
                                <code className=''>
                                    <div className='prism_content'>
                                        <div>
                                            <span className="token keyword">const</span> number <span className="token operator">=</span> <span className="token punctuation">[</span><span className="token number">5</span><span className="token punctuation">,</span> <span className="token number">6</span><span className="token punctuation">,</span> <span className="token number">8</span><span className="token punctuation">,</span> <span className="token number">7</span><span className="token punctuation">]</span><span className="token punctuation">;</span><br />
                                            <span className="token keyword">const</span> total <span className="token operator">=</span> number<span className="token punctuation">.</span><span className="token function">reduce</span><span className="token punctuation">(</span><span className="token punctuation">(</span><span className="token parameter">result<span className="token punctuation">,</span> current</span><span className="token punctuation">)</span> <span className="token operator">=&gt;</span> <span className="token punctuation">{'{'}</span><br />
                                            <span className="token keyword">   return</span> result <span className="token operator">+</span> current <br />
                                            <span className="token punctuation">{'}'}</span><span className="token punctuation">)</span><br />
                                            console<span className="token punctuation">.</span><span className="token function">log</span><span className="token punctuation">(</span>total<span className="token punctuation">)</span><span className="token punctuation">;</span><br />
                                            <span className="token comment">// 26</span><br />
                                        </div>
                                    </div>
                                </code>
                            </pre>
                        </div>

                        <div id='reuce_right'>
                            <h3 className='text-xl lg:text-2xl font-bold mb-0 mt-3'>reduceRight()</h3>
                            <p>Thực thi một hàm lên các phần tử của mảng (từ phải qua trái) với 1 biến tích lũy trả về 1 giá trị</p>
                            <pre>
                                <code className=''>
                                    <div className='prism_content'>
                                        <div>
                                            <span className="token keyword">const</span> number <span className="token operator">=</span> <span className="token punctuation">[</span><span className="token punctuation">[</span><span className="token number">5</span><span className="token punctuation">,</span> <span className="token number">6</span><span className="token punctuation">]</span><span className="token punctuation">,</span> <span className="token punctuation">[</span><span className="token number">8</span><span className="token punctuation">,</span> <span className="token number">7</span><span className="token punctuation">]</span><span className="token punctuation">,</span> <span className="token punctuation">[</span><span className="token number">2</span><span className="token punctuation">,</span> <span className="token number">3</span><span className="token punctuation">]</span><span className="token punctuation">]</span><span className="token punctuation">;</span><br />
                                            <span className="token keyword">const</span> reduceRightNumber <span className="token operator">=</span> number<span className="token punctuation">.</span><span className="token function">reduceRight</span><span className="token punctuation">(</span><span className="token punctuation">(</span><span className="token parameter">result<span className="token punctuation">,</span> current</span><span className="token punctuation">)</span> <span className="token operator">=&gt;</span> <span className="token punctuation">{'{'}</span><br />
                                            <span className="token keyword">   return</span> result<span className="token punctuation">.</span><span className="token function">concat</span><span className="token punctuation">(</span>current<span className="token punctuation">)</span><br />
                                            <span className="token punctuation">{'}'}</span><span className="token punctuation">)</span><br />
                                            console<span className="token punctuation">.</span><span className="token function">log</span><span className="token punctuation">(</span>reduceRightNumber<span className="token punctuation">)</span><span className="token punctuation">;</span><br />
                                            <span className="token comment">//[2, 3, 8, 7, 5, 6]</span><br /> <br />
                                            <span className="token keyword">const</span> reduceNumber <span className="token operator">=</span> number<span className="token punctuation">.</span><span className="token function">reduce</span><span className="token punctuation">(</span><span className="token punctuation">(</span><span className="token parameter">result<span className="token punctuation">,</span> current</span><span className="token punctuation">)</span> <span className="token operator">=&gt;</span> <span className="token punctuation">{'{'}</span><br />
                                            <span className="token keyword">   return</span> result<span className="token punctuation">.</span><span className="token function">concat</span><span className="token punctuation">(</span>current<span className="token punctuation">)</span><br />
                                            <span className="token punctuation">{'}'}</span><span className="token punctuation">)</span><br />
                                            console<span className="token punctuation">.</span><span className="token function">log</span><span className="token punctuation">(</span>reduceNumber<span className="token punctuation">)</span><span className="token punctuation">;</span><br />
                                            <span className="token comment">//[5, 6, 8, 7, 2, 3]</span><br />
                                        </div>
                                    </div>
                                </code>
                            </pre>
                        </div>

                        <div id='pop'>
                            <h3 className='text-xl lg:text-2xl font-bold mb-0 mt-3'>pop()</h3>
                            <p>Giúp xoá phần tử cuối mảng và trả về giá trị của phần tử đó</p>
                            <pre>
                                <code className=''>
                                    <div className='prism_content'>
                                        <div>
                                            <span className="token keyword">const</span> arr <span className="token operator">=</span> <span className="token punctuation">[</span><span className="token number">1</span><span className="token punctuation">,</span> <span className="token number">2</span><span className="token punctuation">,</span> <span className="token number">3</span><span className="token punctuation">,</span> <span className="token number">4</span><span className="token punctuation">,</span> <span className="token number">5</span><span className="token punctuation">]</span><span className="token punctuation">;</span>
                                            <br />
                                            <span className="token keyword">const</span> removeEle <span className="token operator">=</span> arr<span className="token punctuation">.</span><span className="token function">pop</span><span className="token punctuation">(</span><span className="token punctuation">)</span><span className="token punctuation">;</span><br />
                                            console<span className="token punctuation">.</span><span className="token function">log</span><span className="token punctuation">(</span><span className="token string">'arr'</span><span className="token punctuation">,</span> arr<span className="token punctuation">)</span><span className="token punctuation">;</span> <span className="token comment">//arr:[1,2,3,4]</span><br />
                                            console<span className="token punctuation">.</span><span className="token function">log</span><span className="token punctuation">(</span><span className="token string">'remove'</span><span className="token punctuation">,</span> removeEle<span className="token punctuation">)</span><span className="token punctuation">;</span> <span className="token comment">//remove:5</span><br />
                                        </div>

                                    </div>
                                </code>
                            </pre>
                        </div>

                        <div id='unShift'>
                            <h3 className='text-xl lg:text-2xl font-bold mb-0 mt-3'>unShift()</h3>
                            <p>Giúp thêm 1 hay nhiều phần tử vào đầu mảng, trả về độ dài của mảng đó</p>
                            <pre>
                                <code className=''>
                                    <div className='prism_content'>
                                        <div>
                                            <span className="token keyword">const</span> arr <span className="token operator">=</span> <span className="token punctuation">[</span><span className="token number">1</span><span className="token punctuation">,</span> <span className="token number">2</span><span className="token punctuation">,</span> <span className="token number">3</span><span className="token punctuation">,</span> <span className="token number">4</span><span className="token punctuation">,</span> <span className="token number">5</span><span className="token punctuation">]</span><span className="token punctuation">;</span><br />
                                            <span className="token keyword">const</span> length <span className="token operator">=</span> arr<span className="token punctuation">.</span><span className="token function">unshift</span><span className="token punctuation">(</span><span className="token number">0</span><span className="token punctuation">)</span><span className="token punctuation">;</span><br />
                                            console<span className="token punctuation">.</span><span className="token function">log</span><span className="token punctuation">(</span><span className="token string">'arr'</span><span className="token punctuation">,</span> arr<span className="token punctuation">)</span><span className="token punctuation">;</span> <span className="token comment">//arr:[0,1,2,3,4,5]</span><br />
                                            console<span className="token punctuation">.</span><span className="token function">log</span><span className="token punctuation">(</span><span className="token string">'length'</span><span className="token punctuation">,</span> length<span className="token punctuation">)</span><span className="token punctuation">;</span> <span className="token comment">//length:6</span><br />

                                        </div>

                                    </div>
                                </code>
                            </pre>
                        </div>

                        <div id='shift'>
                            <h3 className='text-xl lg:text-2xl font-bold mb-0 mt-3'>shift()</h3>
                            <p>Giúp xoá phần tử đầu mảng và trả về chính phần tử đó</p>
                            <pre>
                                <code className=''>
                                    <div className='prism_content'>
                                        <div>
                                            <span className="token keyword">const</span> arr <span className="token operator">=</span> <span className="token punctuation">[</span><span className="token number">1</span><span className="token punctuation">,</span> <span className="token number">2</span><span className="token punctuation">,</span> <span className="token number">3</span><span className="token punctuation">,</span> <span className="token number">4</span><span className="token punctuation">,</span> <span className="token number">5</span><span className="token punctuation">]</span><span className="token punctuation">;</span>
                                            <br />
                                            <span className="token keyword">const</span> removeEle <span className="token operator">=</span> arr<span className="token punctuation">.</span><span className="token function">shift</span><span className="token punctuation">(</span><span className="token punctuation">)</span><span className="token punctuation">;</span><br />
                                            console<span className="token punctuation">.</span><span className="token function">log</span><span className="token punctuation">(</span><span className="token string">'arr'</span><span className="token punctuation">,</span> arr<span className="token punctuation">)</span><span className="token punctuation">;</span> <span className="token comment">//arr:[2,3,4,5]</span><br />
                                            console<span className="token punctuation">.</span><span className="token function">log</span><span className="token punctuation">(</span><span className="token string">'remove'</span><span className="token punctuation">,</span> removeEle<span className="token punctuation">)</span><span className="token punctuation">;</span> <span className="token comment">//remove:1</span><br />
                                        </div>

                                    </div>
                                </code>
                            </pre>
                        </div>

                        <div id='slice'>
                            <h3 className='text-xl lg:text-2xl font-bold mb-0 mt-3'>slice()</h3>
                            <p>Trả về 1 mảng mới có giá trị từ index start đến index end (không lấy giá trị tại vị trí end), mặc định giá trị start = 0, end = độ dài mảng</p>
                            <pre>
                                <code className=''>
                                    <div className='prism_content'>
                                        <div>
                                            <span className="token keyword">const</span> arr <span className="token operator">=</span> <span className="token punctuation">[</span><span className="token number">1</span><span className="token punctuation">,</span> <span className="token number">2</span><span className="token punctuation">,</span> <span className="token number">3</span><span className="token punctuation">,</span> <span className="token number">4</span><span className="token punctuation">,</span> <span className="token number">5</span><span className="token punctuation">]</span><span className="token punctuation">;</span><br />
                                            console<span className="token punctuation">.</span><span className="token function">log</span><span className="token punctuation">(</span>arr<span className="token punctuation">.</span><span className="token function">slice</span><span className="token punctuation">(</span><span className="token punctuation">)</span><span className="token punctuation">)</span><span className="token punctuation">;</span> <span className="token comment">//[1, 2, 3, 4, 5]</span><br />
                                            console<span className="token punctuation">.</span><span className="token function">log</span><span className="token punctuation">(</span>arr<span className="token punctuation">.</span><span className="token function">slice</span><span className="token punctuation">(</span><span className="token number">1</span><span className="token punctuation">)</span><span className="token punctuation">)</span><span className="token punctuation">;</span> <span className="token comment">//[2, 3, 4, 5]</span><br />
                                            console<span className="token punctuation">.</span><span className="token function">log</span><span className="token punctuation">(</span>arr<span className="token punctuation">.</span><span className="token function">slice</span><span className="token punctuation">(</span><span className="token number">1</span><span className="token punctuation">,</span> <span className="token number">3</span><span className="token punctuation">)</span><span className="token punctuation">)</span><span className="token punctuation">;</span> <span className="token comment">//[2, 3]</span><br />
                                            console<span className="token punctuation">.</span><span className="token function">log</span><span className="token punctuation">(</span>arr<span className="token punctuation">.</span><span className="token function">slice</span><span className="token punctuation">(</span><span className="token operator">-</span><span className="token number">3</span><span className="token punctuation">)</span><span className="token punctuation">)</span><span className="token punctuation">;</span> <span className="token comment">//[3, 4, 5]</span><br />
                                            console<span className="token punctuation">.</span><span className="token function">log</span><span className="token punctuation">(</span>arr<span className="token punctuation">.</span><span className="token function">slice</span><span className="token punctuation">(</span><span className="token operator">-</span><span className="token number">4</span><span className="token punctuation">,</span> <span className="token operator">-</span><span className="token number">1</span><span className="token punctuation">)</span><span className="token punctuation">)</span><span className="token punctuation">;</span><span className="token comment">//[2, 3, 4]</span><br />
                                            console<span className="token punctuation">.</span><span className="token function">log</span><span className="token punctuation">(</span>arr<span className="token punctuation">.</span><span className="token function">slice</span><span className="token punctuation">(</span><span className="token operator">-</span><span className="token number">1</span><span className="token punctuation">,</span> <span className="token number">4</span><span className="token punctuation">)</span><span className="token punctuation">)</span><span className="token punctuation">;</span><span className="token comment">//[]</span><br />
                                        </div>

                                    </div>
                                </code>
                            </pre>
                        </div>

                        <div id='splice'>
                            <h3 className='text-xl lg:text-2xl font-bold mb-0 mt-3'>splice(index, number of item delete, values add at index)</h3>
                            <p>Thêm hoặc xoá 1 hoặc nhiều phần tử tại vị trí xác định</p>
                            <pre>
                                <code className=''>
                                    <div className='prism_content'>
                                        <div>
                                            <span className="token keyword">const</span> arr <span className="token operator">=</span> <span className="token punctuation">[</span><span className="token number">1</span><span className="token punctuation">,</span> <span className="token number">2</span><span className="token punctuation">,</span> <span className="token number">3</span><span className="token punctuation">,</span> <span className="token number">4</span><span className="token punctuation">,</span> <span className="token number">5</span><span className="token punctuation">]</span><span className="token punctuation">;</span><br />
                                            <span className="token comment">//remove 1 element at index 2</span><br />
                                            arr<span className="token punctuation">.</span><span className="token function">splice</span><span className="token punctuation">(</span><span className="token number">2</span><span className="token punctuation">,</span> <span className="token number">1</span><span className="token punctuation">)</span><span className="token punctuation">;</span><br />
                                            console<span className="token punctuation">.</span><span className="token function">log</span><span className="token punctuation">(</span>arr<span className="token punctuation">)</span><span className="token punctuation">;</span> <span className="token comment">// [1, 2, 4, 5]</span><br />
                                            <span className="token comment">//remove 0 element and add 6 at index 1</span><br />
                                            arr<span className="token punctuation">.</span><span className="token function">splice</span><span className="token punctuation">(</span><span className="token number">1</span><span className="token punctuation">,</span> <span className="token number">0</span><span className="token punctuation">,</span> <span className="token number">6</span><span className="token punctuation">)</span><span className="token punctuation">;</span><br />
                                            console<span className="token punctuation">.</span><span className="token function">log</span><span className="token punctuation">(</span>arr<span className="token punctuation">)</span><span className="token punctuation">;</span> <span className="token comment">//[1, 6, 2, 4, 5]</span><br />
                                            <span className="token comment">//remove 2 element and add 7 &amp; 8 at index 1</span><br />
                                            arr<span className="token punctuation">.</span><span className="token function">splice</span><span className="token punctuation">(</span><span className="token number">1</span><span className="token punctuation">,</span> <span className="token number">2</span><span className="token punctuation">,</span> <span className="token number">7</span><span className="token punctuation">,</span> <span className="token number">8</span><span className="token punctuation">)</span><br />
                                            console<span className="token punctuation">.</span><span className="token function">log</span><span className="token punctuation">(</span>arr<span className="token punctuation">)</span><span className="token punctuation">;</span><span className="token comment">//[1, 7, 8, 4, 5]</span><br />
                                        </div>
                                    </div>
                                </code>
                            </pre>
                        </div>

                        <div id='sort'>
                            <h3 className='text-xl lg:text-2xl font-bold mb-0 mt-3'>sort()</h3>
                            <p>Sắp xếp lại mảng và trả về chính mảng đó, Mặc định sẽ sắp theo thứ tự tăng dần</p>
                            <pre>
                                <code className=''>
                                    <div className='prism_content'>
                                        <div>
                                            <span className="token keyword">const</span> arr <span className="token operator">=</span> <span className="token punctuation">[</span><span className="token number">2</span><span className="token punctuation">,</span> <span className="token number">4</span><span className="token punctuation">,</span> <span className="token number">5</span><span className="token punctuation">,</span> <span className="token number">1</span><span className="token punctuation">,</span> <span className="token number">3</span><span className="token punctuation">]</span><span className="token punctuation">;</span><br />
                                            arr<span className="token punctuation">.</span><span className="token function">sort</span><span className="token punctuation">(</span><span className="token punctuation">)</span><span className="token punctuation">;</span><br />
                                            console<span className="token punctuation">.</span><span className="token function">log</span><span className="token punctuation">(</span>arr<span className="token punctuation">)</span><span className="token punctuation">;</span> <span className="token comment">//[1, 2, 3, 4, 5]</span><br />
                                            <span className="token keyword">const</span> student <span className="token operator">=</span> <span className="token punctuation">[</span><br />
                                            <span className="token punctuation">{'{'}</span> <span className="token literal-property property">name</span><span className="token operator">:</span> <span className="token string">'Alex'</span><span className="token punctuation">,</span> <span className="token literal-property property">marks</span><span className="token operator">:</span> <span className="token number">60</span> <span className="token punctuation">{'}'}</span><span className="token punctuation">,</span><br />
                                            <span className="token punctuation">{'{'}</span> <span className="token literal-property property">name</span><span className="token operator">:</span> <span className="token string">"Math"</span><span className="token punctuation">,</span> <span className="token literal-property property">marks</span><span className="token operator">:</span> <span className="token number">42</span> <span className="token punctuation">{'}'}</span><span className="token punctuation">,</span><br />
                                            <span className="token punctuation">{'{'}</span> <span className="token literal-property property">name</span><span className="token operator">:</span> <span className="token string">'Omar'</span><span className="token punctuation">,</span> <span className="token literal-property property">marks</span><span className="token operator">:</span> <span className="token number">75</span> <span className="token punctuation">{'}'}</span><br />
                                            <span className="token punctuation">]</span><span className="token punctuation">;</span><br />
                                            student<span className="token punctuation">.</span><span className="token function">sort</span><span className="token punctuation">(</span><span className="token punctuation">(</span><span className="token parameter">res1<span className="token punctuation">,</span> res2</span><span className="token punctuation">)</span> <span className="token operator">=&gt;</span> res2<span className="token punctuation">.</span>marks <span className="token operator">-</span> res1<span className="token punctuation">.</span>marks<span className="token punctuation">)</span><span className="token punctuation">;</span><br />
                                            console<span className="token punctuation">.</span><span className="token function">log</span><span className="token punctuation">(</span>student<span className="token punctuation">)</span><span className="token punctuation">;</span><br />
                                            <span className="token comment">//  [</span><br />
                                            <span className="token comment">//     {'{'}name: 'Omar', marks: 75{'}'},</span><br />
                                            <span className="token comment">//     {'{'}name: 'Alex', marks: 60{'}'},</span><br />
                                            <span className="token comment">//     {'{'}name: 'Math', marks: 42{'}'}</span><br />
                                            <span className="token comment">//  ]</span><br />
                                        </div>

                                    </div>
                                </code>
                            </pre>
                        </div>

                        <div id='some'>
                            <h3 className='text-xl lg:text-2xl font-bold mb-0 mt-3'>some()</h3>
                            <p>Hàm sẽ duyệt qua tứng phần tử của mảng và truyền giá trị hiện tại vào callback function. Chỉ cần có 1 giá trị giuouos callback function trả về true thì hàm some sẽ trả về true, ngược lại trả về false</p>
                            <pre>
                                <code className=''>
                                    <div className='prism_content'>
                                        <div>
                                            <span className="token keyword">const</span> arr <span className="token operator">=</span> <span className="token punctuation">[</span><span className="token number">1</span><span className="token punctuation">,</span> <span className="token number">2</span><span className="token punctuation">,</span> <span className="token number">3</span><span className="token punctuation">,</span> <span className="token number">4</span><span className="token punctuation">,</span> <span className="token number">5</span><span className="token punctuation">]</span><span className="token punctuation">;</span><br />
                                            <span className="token keyword">let</span> value <span className="token operator">=</span> arr<span className="token punctuation">.</span><span className="token function">some</span><span className="token punctuation">(</span><span className="token parameter">num</span> <span className="token operator">=&gt;</span> num <span className="token operator">&gt;</span> <span className="token number">4</span><span className="token punctuation">)</span><span className="token punctuation">;</span><br />
                                            console<span className="token punctuation">.</span><span className="token function">log</span><span className="token punctuation">(</span><span className="token string">'value1'</span><span className="token punctuation">,</span> value<span className="token punctuation">)</span><span className="token punctuation">;</span> <span className="token comment">//true</span><br />
                                            value <span className="token operator">=</span> arr<span className="token punctuation">.</span><span className="token function">some</span><span className="token punctuation">(</span><span className="token parameter">num</span> <span className="token operator">=&gt;</span> num <span className="token operator">&gt;</span> <span className="token number">5</span><span className="token punctuation">)</span><br />
                                            console<span className="token punctuation">.</span><span className="token function">log</span><span className="token punctuation">(</span><span className="token string">'value2'</span><span className="token punctuation">,</span> value<span className="token punctuation">)</span><span className="token punctuation">;</span> <span className="token comment">//false</span><br />
                                        </div>

                                    </div>
                                </code>
                            </pre>
                        </div>

                        <div id='every'>
                            <h3 className='text-xl lg:text-2xl font-bold mb-0 mt-3'>every()</h3>
                            <p>Trái lại với some(), hàm sẽ trả về true nếu tất cả các phần tử thoả mãn điều kiện. Nếu 1 phần tử không thoả mãn điều kiện thì hàm sẽ trả về false</p>
                            <pre>
                                <code className=''>
                                    <div className='prism_content'>
                                        <div>
                                            <span className="token keyword">const</span> arr <span className="token operator">=</span> <span className="token punctuation">[</span><span className="token number">1</span><span className="token punctuation">,</span> <span className="token number">2</span><span className="token punctuation">,</span> <span className="token number">3</span><span className="token punctuation">,</span> <span className="token number">4</span><span className="token punctuation">,</span> <span className="token number">5</span><span className="token punctuation">]</span><span className="token punctuation">;</span><br />
                                            <span className="token keyword">let</span> value <span className="token operator">=</span> arr<span className="token punctuation">.</span><span className="token function">every</span><span className="token punctuation">(</span><span className="token parameter">num</span> <span className="token operator">=&gt;</span> num <span className="token operator">&lt;</span> <span className="token number">6</span><span className="token punctuation">)</span><span className="token punctuation">;</span><br />
                                            console<span className="token punctuation">.</span><span className="token function">log</span><span className="token punctuation">(</span><span className="token string">'value1'</span><span className="token punctuation">,</span> value<span className="token punctuation">)</span><span className="token punctuation">;</span> <span className="token comment">//true</span>br

                                            value <span className="token operator">=</span> arr<span className="token punctuation">.</span><span className="token function">every</span><span className="token punctuation">(</span><span className="token parameter">num</span> <span className="token operator">=&gt;</span> num <span className="token operator">&gt;</span> <span className="token number">3</span><span className="token punctuation">)</span><br />
                                            console<span className="token punctuation">.</span><span className="token function">log</span><span className="token punctuation">(</span><span className="token string">'value2'</span><span className="token punctuation">,</span> value<span className="token punctuation">)</span><span className="token punctuation">;</span> <span className="token comment">//false</span><br />
                                        </div>

                                    </div>
                                </code>
                            </pre>
                        </div>

                        <div id='includes'>
                            <h3 className='text-xl lg:text-2xl font-bold mb-0 mt-3'>includes()</h3>
                            <p>Trả về giá trị true hoặc false. Hàm kiểm tra các phần tử trong mảng có giá trị truyền vào không</p>
                            <pre>
                                <code>
                                    <div className='prism_content'>
                                        <div>
                                            <span className="token keyword">const</span> arr <span className="token operator">=</span> <span className="token punctuation">[</span><span className="token number">1</span><span className="token punctuation">,</span> <span className="token number">2</span><span className="token punctuation">,</span> <span className="token number">3</span><span className="token punctuation">,</span> <span className="token number">4</span><span className="token punctuation">,</span> <span className="token number">5</span><span className="token punctuation">]</span><span className="token punctuation">;</span><br />
                                            console<span className="token punctuation">.</span><span className="token function">log</span><span className="token punctuation">(</span>arr<span className="token punctuation">.</span><span className="token function">includes</span><span className="token punctuation">(</span><span className="token number">2</span><span className="token punctuation">)</span><span className="token punctuation">)</span><span className="token punctuation">;</span><span className="token comment">//true</span><br />
                                            console<span className="token punctuation">.</span><span className="token function">log</span><span className="token punctuation">(</span>arr<span className="token punctuation">.</span><span className="token function">includes</span><span className="token punctuation">(</span><span className="token number">6</span><span className="token punctuation">)</span><span className="token punctuation">)</span><span className="token punctuation">;</span><span className="token comment">//fasle</span><br />
                                        </div>

                                    </div>
                                </code>
                            </pre>
                        </div>

                        <div id='indexof'>
                            <h3 className='text-xl lg:text-2xl font-bold mb-0 mt-3'>indexOf()</h3>
                            <p>Trả về giá trị index của giá trị cần tìm trong mảng, nếu không tìm thấy sẽ trả về -1</p>
                            <pre>
                                <code>
                                    <div className='prism_content'>
                                        <div>
                                            <span className="token keyword">const</span> arr <span className="token operator">=</span> <span className="token punctuation">[</span><span className="token number">1</span><span className="token punctuation">,</span> <span className="token number">2</span><span className="token punctuation">,</span> <span className="token number">3</span><span className="token punctuation">,</span> <span className="token number">4</span><span className="token punctuation">,</span> <span className="token number">5</span><span className="token punctuation">]</span><span className="token punctuation">;</span><br />
                                            console<span className="token punctuation">.</span><span className="token function">log</span><span className="token punctuation">(</span>arr<span className="token punctuation">.</span><span className="token function">indexOf</span><span className="token punctuation">(</span><span className="token number">2</span><span className="token punctuation">)</span><span className="token punctuation">)</span><span className="token punctuation">;</span><span className="token comment">//1</span><br />
                                            console<span className="token punctuation">.</span><span className="token function">log</span><span className="token punctuation">(</span>arr<span className="token punctuation">.</span><span className="token function">indexOf</span><span className="token punctuation">(</span><span className="token number">6</span><span className="token punctuation">)</span><span className="token punctuation">)</span><span className="token punctuation">;</span><span className="token comment">// -1</span><br />
                                        </div>

                                    </div>
                                </code>
                            </pre>
                        </div>

                        <div id='at'>
                            <h3 className='text-xl lg:text-2xl font-bold mb-0 mt-3'>at()</h3>
                            <p>Hàm trả về gái trị phần tử tại vị trí index truyền vào, nếu index là số âm thì hàm sẽ tính từ cuối mảng</p>
                            <pre>
                                <code>
                                    <div className='prism_content'>
                                        <div>
                                            <span className="token keyword">const</span> arr <span className="token operator">=</span> <span className="token punctuation">[</span><span className="token number">1</span><span className="token punctuation">,</span> <span className="token number">2</span><span className="token punctuation">,</span> <span className="token number">3</span><span className="token punctuation">,</span> <span className="token number">4</span><span className="token punctuation">,</span> <span className="token number">5</span><span className="token punctuation">]</span><span className="token punctuation">;</span><br />
                                            console<span className="token punctuation">.</span><span className="token function">log</span><span className="token punctuation">(</span>arr<span className="token punctuation">.</span><span className="token function">at</span><span className="token punctuation">(</span><span className="token number">1</span><span className="token punctuation">)</span><span className="token punctuation">)</span><span className="token punctuation">;</span><span className="token comment">// 2</span><br />
                                            console<span className="token punctuation">.</span><span className="token function">log</span><span className="token punctuation">(</span>arr<span className="token punctuation">.</span><span className="token function">at</span><span className="token punctuation">(</span><span className="token operator">-</span><span className="token number">2</span><span className="token punctuation">)</span><span className="token punctuation">)</span><span className="token punctuation">;</span><span className="token comment">//4</span><br />
                                            console<span className="token punctuation">.</span><span className="token function">log</span><span className="token punctuation">(</span>arr<span className="token punctuation">.</span><span className="token function">at</span><span className="token punctuation">(</span><span className="token number">6</span><span className="token punctuation">)</span><span className="token punctuation">)</span><span className="token punctuation">;</span><span className="token comment">// undefined</span><br />
                                        </div>

                                    </div>
                                </code>
                            </pre>
                        </div>

                        <div id='join'>
                            <h3 className='text-xl lg:text-2xl font-bold mb-0 mt-3'>join()</h3>
                            <p>Nối tất cả các phần tử trong mảng bằng giá trị truyền vào để trả về 1 chuỗi. Mặc định đầu vào giá trị đầu là dấu '.'. Nếu có 1 phần tử giá trị đầy vào sẽ không được nối</p>
                            <pre>
                                <code>
                                    <div className='prism_content'>
                                        <div>
                                            <span className="token keyword">const</span> arr <span className="token operator">=</span> <span className="token punctuation">[</span><span className="token number">1</span><span className="token punctuation">,</span> <span className="token number">2</span><span className="token punctuation">,</span> <span className="token number">3</span><span className="token punctuation">,</span> <span className="token number">4</span><span className="token punctuation">,</span> <span className="token number">5</span><span className="token punctuation">]</span><span className="token punctuation">;</span><br />
                                            console<span className="token punctuation">.</span><span className="token function">log</span><span className="token punctuation">(</span>arr<span className="token punctuation">.</span><span className="token function">join</span><span className="token punctuation">(</span><span className="token punctuation">)</span><span className="token punctuation">)</span><span className="token punctuation">;</span><span className="token comment">// 1,2,3,4,5</span><br />
                                            console<span className="token punctuation">.</span><span className="token function">log</span><span className="token punctuation">(</span>arr<span className="token punctuation">.</span><span className="token function">join</span><span className="token punctuation">(</span><span className="token string">'-'</span><span className="token punctuation">)</span><span className="token punctuation">)</span><span className="token punctuation">;</span><span className="token comment">//1-2-3-4-5</span><br />
                                            console<span className="token punctuation">.</span><span className="token function">log</span><span className="token punctuation">(</span>arr<span className="token punctuation">.</span><span className="token function">join</span><span className="token punctuation">(</span><span className="token string">''</span><span className="token punctuation">)</span><span className="token punctuation">)</span><span className="token punctuation">;</span><span className="token comment">// 12345</span><br />
                                        </div>

                                    </div>
                                </code>
                            </pre>
                        </div>

                        <div id='flat'>
                            <h3 className='text-xl lg:text-2xl font-bold mb-0 mt-3'>flat()</h3>
                            <p>Tạo ra 1 mảng mới với tất cả các phần tử của mnagr con được liên kết vào nó theo phương thức ddeek quy với độ sâu nhất định</p>
                            <pre>
                                <code>
                                    <div className='prism_content'>
                                        <div>
                                            <span className="token keyword">const</span> arr1 <span className="token operator">=</span> <span className="token punctuation">[</span><span className="token number">1</span><span className="token punctuation">,</span> <span className="token punctuation">[</span><span className="token number">2</span><span className="token punctuation">]</span><span className="token punctuation">,</span> <span className="token number">3</span><span className="token punctuation">,</span> <span className="token punctuation">[</span><span className="token number">4</span><span className="token punctuation">,</span> <span className="token punctuation">[</span><span className="token number">5</span><span className="token punctuation">,</span> <span className="token number">6</span><span className="token punctuation">]</span><span className="token punctuation">,</span> <span className="token number">7</span><span className="token punctuation">]</span><span className="token punctuation">,</span> <span className="token number">8</span><span className="token punctuation">]</span><span className="token punctuation">;</span><br />
                                            console<span className="token punctuation">.</span><span className="token function">log</span><span className="token punctuation">(</span>arr1<span className="token punctuation">.</span><span className="token function">flat</span><span className="token punctuation">(</span><span className="token punctuation">)</span><span className="token punctuation">)</span><span className="token punctuation">;</span><span className="token comment">// [1, 2, 3, 4, [5, 6], 7, 8]</span><br />
                                            console<span className="token punctuation">.</span><span className="token function">log</span><span className="token punctuation">(</span>arr1<span className="token punctuation">.</span><span className="token function">flat</span><span className="token punctuation">(</span><span className="token number">2</span><span className="token punctuation">)</span><span className="token punctuation">)</span><span className="token punctuation">;</span><span className="token comment">//[1, 2, 3, 4, 5, 6, 7, 8]</span><br />
                                            <span className="token keyword">const</span> arr2 <span className="token operator">=</span> <span className="token punctuation">[</span><span className="token number">1</span><span className="token punctuation">,</span> <span className="token punctuation">[</span><span className="token number">2</span><span className="token punctuation">,</span> <span className="token punctuation">[</span><span className="token number">3</span><span className="token punctuation">,</span> <span className="token punctuation">[</span><span className="token number">4</span><span className="token punctuation">,</span> <span className="token punctuation">[</span><span className="token number">5</span><span className="token punctuation">]</span><span className="token punctuation">]</span><span className="token punctuation">,</span> <span className="token number">6</span><span className="token punctuation">]</span><span className="token punctuation">,</span> <span className="token number">7</span><span className="token punctuation">]</span><span className="token punctuation">,</span> <span className="token number">8</span><span className="token punctuation">]</span><span className="token punctuation">;</span><br />
                                            console<span className="token punctuation">.</span><span className="token function">log</span><span className="token punctuation">(</span>arr2<span className="token punctuation">.</span><span className="token function">flat</span><span className="token punctuation">(</span><span className="token number">Infinity</span><span className="token punctuation">)</span><span className="token punctuation">)</span><span className="token punctuation">;</span><span className="token comment">//[1, 2, 3, 4, 5, 6, 7, 8]</span><br />
                                        </div>

                                    </div>
                                </code>
                            </pre>
                        </div>

                    </section>
                </div>



                <div className='bg-teal-400 p-3'>
                    <div className="w-4/5 m-auto fixed">
                        <p className='text-sx sm:text-sm lg:text-base font-bold mb-2'>Mục lục</p>
                        <h2 className='text-sx sm:text-sm lg:text-base'><a className='text-black' href='#map'>Map</a></h2>
                        <h2 className='text-sx sm:text-sm lg:text-base'><a className='text-black' href='#filter'>Filter</a></h2>
                        <h2 className='text-sx sm:text-sm lg:text-base'><a className='text-black' href='#reduce'>Reduce</a></h2>
                        <h2 className='text-sx sm:text-sm lg:text-base'><a className='text-black' href='#reduce_right'>ReduceRight</a></h2>
                        <h2 className='text-sx sm:text-sm lg:text-base'><a className='text-black' href='#pop'>pop</a></h2>
                        <h2 className='text-sx sm:text-sm lg:text-base'><a className='text-black' href='#unShift'>unShift</a></h2>
                        <h2 className='text-sx sm:text-sm lg:text-base'><a className='text-black' href='#shift'>shift</a></h2>
                        <h2 className='text-sx sm:text-sm lg:text-base'><a className='text-black' href='#slice'>slice</a></h2>
                        <h2 className='text-sx sm:text-sm lg:text-base'><a className='text-black' href='#splice'>splice</a></h2>
                        <h2 className='text-sx sm:text-sm lg:text-base'><a className='text-black' href='#sort'>sort</a></h2>
                        <h2 className='text-sx sm:text-sm lg:text-base'><a className='text-black' href='#some'>some</a></h2>
                        <h2 className='text-sx sm:text-sm lg:text-base'><a className='text-black' href='#every'>every</a></h2>
                        <h2 className='text-sx sm:text-sm lg:text-base'><a className='text-black' href='#includes'>includes</a></h2>
                        <h2 className='text-sx sm:text-sm lg:text-base'><a className='text-black' href='#indexof'>indexOf</a></h2>
                        <h2 className='text-sx sm:text-sm lg:text-base'><a className='text-black' href='#at'>at</a></h2>
                        <h2 className='text-sx sm:text-sm lg:text-base'><a className='text-black' href='#join'>join</a></h2>
                        <h2 className='text-sx sm:text-sm lg:text-base'><a className='text-black' href='#flat'>flat</a></h2>
                    </div>
                </div>
            </div>

        </div>
    )
}
