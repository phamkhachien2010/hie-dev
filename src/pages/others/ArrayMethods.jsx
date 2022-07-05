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


                    </section>
                </div>

                <div className='bg-teal-400 p-3'>
                    <div className="w-4/5 m-auto fixed">
                        <p className='text-sx sm:text-sm lg:text-base font-bold mb-2'>Mục lục</p>
                        <h2 className='text-sx sm:text-sm lg:text-base'><a className='text-black' href='#map'>Map</a></h2>
                        <h2 className='text-sx sm:text-sm lg:text-base'><a className='text-black' href='#filter'>Filter</a></h2>
                        <h2 className='text-sx sm:text-sm lg:text-base'><a className='text-black' href='#reduce'>Reduce</a></h2>
                        <h2 className='text-sx sm:text-sm lg:text-base'><a className='text-black' href='#reduce_right'>ReduceRight</a></h2>
                    </div>
                </div>
            </div>

        </div>
    )
}
