import React, { useState } from 'react'
import _ from 'lodash'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'

import styleTutorial from './tutorial.module.css'


export default function DragDropTutorial() {

    const [state, setState] = useState({
        ToDo: {
            id: 'ToDo',
            items: [
                { id: '1', taskName: 'Task 1' },
                { id: '2', taskName: 'Task 2' },
                { id: '3', taskName: 'Task 3' },
            ]
        },
        InProgress: {
            id: 'InProgress',
            items: [
                { id: '4', taskName: 'Task 4' },
                { id: '5', taskName: 'Task 5' },
                { id: '6', taskName: 'Task 6' },
            ]
        },
        Done: {
            id: 'Done',
            items: [
                { id: '7', taskName: 'Task 7' },
                { id: '8', taskName: 'Task 8' },
                { id: '9', taskName: 'Task 9' },
            ]
        }
    })

    const handleDragEnd = (result) => {
        let { destination, source } = result;
        // console.log({ destination });
        /**
         * destination chứa droppableId (id của dropable) và index (vị trí của phần tử được kéo) của nơi mà phần tử được kéo chuyển đến (to)
         * source chứa droppableId (id của dropable) và index (vị trí của phần tử được kéo) của nơi mà phần tử được kéo chuyển đi (from)
         */

        if (!destination) { //nếu không có nơi nhận thì trả lại đúng chỗ được kéo
            return;
        }

        if (destination.index === source.index && destination.droppableId === source.droppableId) { //nếu kéo thả cùng vị trí thì cũng trả về
            return;
        }

        //tạo ra 1 tag drag copy tag được kéo đi
        let itemCopy = { ...state[source.droppableId].items[source.index] };
        // console.log('itemCopy', itemCopy)

        //Droppable bắt đầu kéo, tìm thành phần được kéo
        let index = state[source.droppableId].items.findIndex(item => item.id == itemCopy.id);

        //xoá thành phần đó trong drop bắt đầu (source)
        state[source.droppableId].items.splice(index, 1);

        //Droppable thả vào
        let dropDestination = state[destination.droppableId].items;

        //thêm drag đó vào drop đến
        dropDestination.splice(destination.index, 0, itemCopy)

        setState(state);

    }

    return (
        <div className={`${styleTutorial.tutorial} w-4/5 text-xs md:text-md lg:text-base m-auto`}>
            <h1 className="text-center text-2xl lg:text-4xl font-bold py-3">Cài đặt và setup kéo thả html</h1>

            <h2 className='text-xl lg:text-2xl font-bold'>Demo kéo thả</h2>
            <DragDropContext onDragEnd={handleDragEnd}>
                <div className="row">
                    {_.map(state, (statusTask, index) => {
                        return <Droppable droppableId={statusTask.id} key={index}>
                            {(provided) => {
                                return <div className="col-4" >

                                    <div className="bg-dark p-5"
                                        key={index}
                                        ref={provided.innerRef}
                                        {...provided.droppableProps}
                                    >
                                        <h3 className="text-white">{statusTask.id}</h3>
                                        {statusTask.items.map((item, index) => {
                                            return <Draggable key={item.id} index={index} draggableId={item.id}>
                                                {(provided) => {
                                                    return <div
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                        className="mt-2 p-2 bg-white text-center">
                                                        {item.taskName}
                                                    </div>
                                                }}
                                            </Draggable>
                                        })}
                                        {provided.placeholder}
                                    </div>
                                </div>
                            }}
                        </Droppable>
                    })}
                </div>
            </DragDropContext>

            <h2 className='text-xl lg:text-2xl font-bold mt-3 mb-0'>Một số thứ cần lưu ý</h2>
            <img src={require('../../assets/img/drag-drop.gif')} alt="" />
            <p>
                <span className="token operator">&lt;</span>DragDropContext<span className="token operator">&gt;</span>  <span className="token operator">&lt;</span><span className="token operator">/</span>DragDropContext<span className="token operator">&gt;</span>
                : là cặp thẻ bao bên ngoài
            </p>
            <p>
                <span className="token operator">&lt;</span>Droppable<span className="token operator">&gt;</span>  <span className="token operator">&lt;</span><span className="token operator">/</span>Droppable<span className="token operator">&gt;</span>
                : là những thành phần cố định, nơi chứa những phần tử được kéo đến, kéo đi
            </p>

            <p>
                <span className="token operator">&lt;</span>Draggable<span className="token operator">&gt;</span>  <span className="token operator">&lt;</span><span className="token operator">/</span>Draggable<span className="token operator">&gt;</span>
                : là những thành phần được kéo đến, kéo đi
            </p>
            <h4 className='text-lg font-bold mt-3 mb-0'>Tạo 1 mảng dữ liệu truyền vào state qua useState</h4>
            <pre>
                <code>
                    <div className='prism_content'>
                        <span className="token keyword">const</span> <span className="token punctuation">[</span>state<span className="token punctuation">,</span> setState<span className="token punctuation">]</span> <span className="token operator">=</span> <span className="token function">useState</span><span className="token punctuation">(</span><span className="token punctuation">{'{'}</span><br />
                        <span className="token literal-property property">   ToDo</span><span className="token operator">:</span> <span className="token punctuation">{'{'}</span><br />
                        <span className="token literal-property property">      id</span><span className="token operator">:</span> <span className="token string">'ToDo'</span><span className="token punctuation">,</span><br />
                        <span className="token literal-property property">      items</span><span className="token operator">:</span> <span className="token punctuation">[</span><br />
                        <span className="token punctuation">         {'{'}</span> <span className="token literal-property property">id</span><span className="token operator">:</span> <span className="token string">'1'</span><span className="token punctuation">,</span> <span className="token literal-property property">taskName</span><span className="token operator">:</span> <span className="token string">'Task 1'</span> <span className="token punctuation">{'}'}</span><span className="token punctuation">,</span><br />
                        <span className="token punctuation">         {'{'}</span> <span className="token literal-property property">id</span><span className="token operator">:</span> <span className="token string">'2'</span><span className="token punctuation">,</span> <span className="token literal-property property">taskName</span><span className="token operator">:</span> <span className="token string">'Task 2'</span> <span className="token punctuation">{'}'}</span><span className="token punctuation">,</span><br />
                        <span className="token punctuation">         {'{'}</span> <span className="token literal-property property">id</span><span className="token operator">:</span> <span className="token string">'3'</span><span className="token punctuation">,</span> <span className="token literal-property property">taskName</span><span className="token operator">:</span> <span className="token string">'Task 3'</span> <span className="token punctuation">{'}'}</span><span className="token punctuation">,</span><br />
                        <span className="token punctuation">      ]</span><br />
                        <span className="token punctuation">   {'}'}</span><span className="token punctuation">,</span><br />
                        <span className="token literal-property property">   InProgress</span><span className="token operator">:</span> <span className="token punctuation">{'{'}</span><br />
                        <span className="token literal-property property">      id</span><span className="token operator">:</span> <span className="token string">'InProgress'</span><span className="token punctuation">,</span><br />
                        <span className="token literal-property property">      items</span><span className="token operator">:</span> <span className="token punctuation">[</span><br />
                        <span className="token punctuation">         {'{'}</span> <span className="token literal-property property">id</span><span className="token operator">:</span> <span className="token string">'4'</span><span className="token punctuation">,</span> <span className="token literal-property property">taskName</span><span className="token operator">:</span> <span className="token string">'Task 4'</span> <span className="token punctuation">{'}'}</span><span className="token punctuation">,</span><br />
                        <span className="token punctuation">         {'{'}</span> <span className="token literal-property property">id</span><span className="token operator">:</span> <span className="token string">'5'</span><span className="token punctuation">,</span> <span className="token literal-property property">taskName</span><span className="token operator">:</span> <span className="token string">'Task 5'</span> <span className="token punctuation">{'}'}</span><span className="token punctuation">,</span><br />
                        <span className="token punctuation">         {'{'}</span> <span className="token literal-property property">id</span><span className="token operator">:</span> <span className="token string">'6'</span><span className="token punctuation">,</span> <span className="token literal-property property">taskName</span><span className="token operator">:</span> <span className="token string">'Task 6'</span> <span className="token punctuation">{'}'}</span><span className="token punctuation">,</span><br />
                        <span className="token punctuation">      ]</span><br />
                        <span className="token punctuation">   {'}'}</span><span className="token punctuation">,</span><br />
                        <span className="token literal-property property">   Done</span><span className="token operator">:</span> <span className="token punctuation">{'{'}</span><br />
                        <span className="token literal-property property">      id</span><span className="token operator">:</span> <span className="token string">'Done'</span><span className="token punctuation">,</span><br />
                        <span className="token literal-property property">      items</span><span className="token operator">:</span> <span className="token punctuation">[</span><br />
                        <span className="token punctuation">         {'{'}</span> <span className="token literal-property property">id</span><span className="token operator">:</span> <span className="token string">'7'</span><span className="token punctuation">,</span> <span className="token literal-property property">taskName</span><span className="token operator">:</span> <span className="token string">'Task 7'</span> <span className="token punctuation">{'}'}</span><span className="token punctuation">,</span><br />
                        <span className="token punctuation">         {'{'}</span> <span className="token literal-property property">id</span><span className="token operator">:</span> <span className="token string">'8'</span><span className="token punctuation">,</span> <span className="token literal-property property">taskName</span><span className="token operator">:</span> <span className="token string">'Task 8'</span> <span className="token punctuation">{'}'}</span><span className="token punctuation">,</span><br />
                        <span className="token punctuation">         {'{'}</span> <span className="token literal-property property">id</span><span className="token operator">:</span> <span className="token string">'9'</span><span className="token punctuation">,</span> <span className="token literal-property property">taskName</span><span className="token operator">:</span> <span className="token string">'Task 9'</span> <span className="token punctuation">{'}'}</span><span className="token punctuation">,</span><br />
                        <span className="token punctuation">      ]</span><br />
                        <span className="token punctuation">   {'}'}</span><br />
                        <span className="token punctuation">{'}'}</span><span className="token punctuation">)</span><br />
                    </div>
                </code>
            </pre>
            <h4 className='text-lg font-bold mt-3 mb-0'>Setup phần return như thế này</h4>

            <pre>
                <code>
                    <div className='prism_content'>
                        <span className="token operator">&lt;</span>DragDropContext onDragEnd<span className="token operator">=</span><span className="token punctuation">{'{'}</span>handleDragEnd<span className="token punctuation">{'}'}</span><span className="token operator">&gt;</span><br />
                        <span className="token operator">   &lt;</span>div className<span className="token operator">=</span><span className="token string">"row"</span><span className="token operator">&gt;</span><br />
                        <span className="token punctuation">      {'{'}</span>_<span className="token punctuation">.</span><span className="token function">map</span><span className="token punctuation">(</span>state<span className="token punctuation">,</span> <span className="token punctuation">(</span><span className="token parameter">statusTask<span className="token punctuation">,</span> index</span><span className="token punctuation">)</span> <span className="token operator">=&gt;</span> <span className="token punctuation">{'{'}</span><br />
                        <span className="token keyword">         return</span> <span className="token operator">&lt;</span>Droppable droppableId<span className="token operator">=</span><span className="token punctuation">{'{'}</span>statusTask<span className="token punctuation">.</span>id<span className="token punctuation">{'}'}</span> key<span className="token operator">=</span><span className="token punctuation">{'{'}</span>index<span className="token punctuation">{'}'}</span><span className="token operator">&gt;</span><br />
                        <span className="token punctuation">            {'{'}</span><span className="token punctuation">(</span><span className="token parameter">provided</span><span className="token punctuation">)</span> <span className="token operator">=&gt;</span> <span className="token punctuation">{'{'}</span><br />
                        <span className="token keyword">               return</span> <span className="token operator">&lt;</span>div className<span className="token operator">=</span><span className="token string">"col-4"</span> <span className="token operator">&gt;</span><br />
                        <span className="token operator">                  &lt;</span>div className<span className="token operator">=</span><span className="token string">"bg-dark p-5"</span><br />
                        <span>                 </span> key<span className="token operator">=</span><span className="token punctuation">{'{'}</span>index<span className="token punctuation">{'}'}</span><br />
                        <span>                 </span> ref<span className="token operator">=</span><span className="token punctuation">{'{'}</span>provided<span className="token punctuation">.</span>innerRef<span className="token punctuation">{'}'}</span><br />
                        <span className="token punctuation">                  {'{'}</span><span className="token operator">...</span>provided<span className="token punctuation">.</span>droppableProps<span className="token punctuation">{'}'}</span><br />
                        <span className="token operator">              &gt;</span><br />
                        <span className="token operator">                 &lt;</span>h3 className<span className="token operator">=</span><span className="token string">"text-white"</span><span className="token operator">&gt;</span><span className="token punctuation">{'{'}</span>statusTask<span className="token punctuation">.</span>id<span className="token punctuation">{'}'}</span><span className="token operator">&lt;</span><span className="token operator">/</span>h3<span className="token operator">&gt;</span><br />
                        <span className="token punctuation">                 {'{'}</span>statusTask<span className="token punctuation">.</span>items<span className="token punctuation">.</span><span className="token function">map</span><span className="token punctuation">(</span><span className="token punctuation">(</span><span className="token parameter">item<span className="token punctuation">,</span> index</span><span className="token punctuation">)</span> <span className="token operator">=&gt;</span> <span className="token punctuation">{'{'}</span><br />
                        <span className="token keyword">                    return</span> <span className="token operator">&lt;</span>Draggable key<span className="token operator">=</span><span className="token punctuation">{'{'}</span>item<span className="token punctuation">.</span>id<span className="token punctuation">{'}'}</span> index<span className="token operator">=</span><span className="token punctuation">{'{'}</span>index<span className="token punctuation">{'}'}</span> draggableId<span className="token operator">=</span><span className="token punctuation">{'{'}</span>item<span className="token punctuation">.</span>id<span className="token punctuation">{'}'}</span><span className="token operator">&gt;</span><br />
                        <span className="token punctuation">                       {'{'}</span><span className="token punctuation">(</span><span className="token parameter">provided</span><span className="token punctuation">)</span> <span className="token operator">=&gt;</span> <span className="token punctuation">{'{'}</span><br />
                        <span className="token keyword">                          return</span> <span className="token operator">&lt;</span>div <br />
                        <span>                             </span> ref<span className="token operator">=</span><span className="token punctuation">{'{'}</span>provided<span className="token punctuation">.</span>innerRef<span className="token punctuation">{'}'}</span><br />
                        <span className="token punctuation">                             {'{'}</span><span className="token operator">...</span>provided<span className="token punctuation">.</span>draggableProps<span className="token punctuation">{'}'}</span><br />
                        <span className="token punctuation">                             {'{'}</span><span className="token operator">...</span>provided<span className="token punctuation">.</span>dragHandleProps<span className="token punctuation">{'}'}</span><br />
                        <span>                             </span>className<span className="token operator">=</span><span className="token string">"mt-2 p-2 bg-white text-center"</span><span className="token operator">&gt;</span><br />
                        <span className="token punctuation">                             {'{'}</span>item<span className="token punctuation">.</span>taskName<span className="token punctuation">{'}'}</span><br />
                        <span className="token operator">                          &lt;</span><span className="token operator">/</span>div<span className="token operator">&gt;</span><br />
                        <span className="token punctuation">                       {'}'}</span><span className="token punctuation">{'}'}</span><br />
                        <span className="token operator">                    &lt;</span><span className="token operator">/</span>Draggable<span className="token operator">&gt;</span><br />
                        <span className="token punctuation">                 {'}'}</span><span className="token punctuation">)</span><span className="token punctuation">{'}'}</span><br />
                        <span className="token punctuation">                 {'{'}</span>provided<span className="token punctuation">.</span>placeholder<span className="token punctuation">{'}'}</span><br />
                        <span className="token operator">                  &lt;</span><span className="token operator">/</span>div<span className="token operator">&gt;</span><br />
                        <span className="token operator">               &lt;</span><span className="token operator">/</span>div<span className="token operator">&gt;</span><br />
                        <span className="token punctuation">            {'}'}</span><span className="token punctuation">{'}'}</span><br />
                        <span className="token operator">         &lt;</span><span className="token operator">/</span>Droppable<span className="token operator">&gt;</span><br />
                        <span className="token punctuation">      {'}'}</span><span className="token punctuation">)</span><span className="token punctuation">{'}'}</span><br />
                        <span className="token operator">   &lt;</span><span className="token operator">/</span>div<span className="token operator">&gt;</span><br />
                        <span className="token operator">&lt;</span><span className="token operator">/</span>DragDropContext<span className="token operator">&gt;</span><br />
                    </div>
                </code>
            </pre>
            <p>Trong đó chú ý tag Droppable dùng provided để render nội dung bên trong</p>
            <p>Thẻ div chứa nội dung cần hiển thị của Droppable cần các thuộc tính key, ref, droppableProps</p>
            <p>Thẻ div chứa nội dung cần hiển thị của Droppable cần các thuộc tính key, ref, droppableProps</p>

            <h4 className='text-lg font-bold mt-3 mb-0'>Setup hàm handleDragEnd</h4>
            <pre>
                <code>
                    <div className='prism_content'>
                        <span className="token keyword">const</span> <span className="token function-variable function">handleDragEnd</span> <span className="token operator">=</span> <span className="token punctuation">(</span><span className="token parameter">result</span><span className="token punctuation">)</span> <span className="token operator">=&gt;</span> <span className="token punctuation">{'{'}</span><br />
                        <span className="token keyword">   let</span> <span className="token punctuation">{'{'}</span> destination<span className="token punctuation">,</span> source <span className="token punctuation">{'}'}</span> <span className="token operator">=</span> result<span className="token punctuation">;</span><br />
                        <span>   </span>console<span className="token punctuation">.</span><span className="token function">log</span><span className="token punctuation">(</span><span className="token punctuation">{'{'}</span> destination <span className="token punctuation">{'}'}</span><span className="token punctuation">)</span><span className="token punctuation">;</span><br />
                        <span className="token comment">   /** <br />
                            <span>   </span>* destination chứa droppableId (id của dropable) và index (vị trí của phần tử được kéo) của nơi mà phần tử được kéo chuyển đến (to) <br />
                            <span>   </span>* source chứa droppableId (id của dropable) và index (vị trí của phần tử được kéo) của nơi mà phần tử được kéo chuyển đi (from) <br />
                            <span>   </span>*/</span><br />
                        <span className="token keyword">   if</span> <span className="token punctuation">(</span><span className="token operator">!</span>destination<span className="token punctuation">)</span> <span className="token punctuation">{'{'}</span> <span className="token comment">//nếu không có nơi nhận thì trả lại đúng chỗ được kéo</span><br />
                        <span className="token keyword">      return</span><span className="token punctuation">;</span><br />
                        <span className="token punctuation">   {'}'}</span><br />
                        <span className="token keyword">   if</span> <span className="token punctuation">(</span>destination<span className="token punctuation">.</span>index <span className="token operator">===</span> source<span className="token punctuation">.</span>index <span className="token operator">&amp;&amp;</span> destination<span className="token punctuation">.</span>droppableId <span className="token operator">===</span> source<span className="token punctuation">.</span>droppableId<span className="token punctuation">)</span> <span className="token punctuation">{'{'}</span> <span className="token comment">//nếu kéo thả cùng vị trí thì cũng trả về</span><br />
                        <span className="token keyword">      return</span><span className="token punctuation">;</span><br />
                        <span className="token punctuation">   {'}'}</span><br />
                        <span className="token comment">   //tạo ra 1 tag drag copy tag được kéo đi</span><br />
                        <span className="token keyword">   let</span> itemCopy <span className="token operator">=</span> <span className="token punctuation">{'{'}</span> <span className="token operator">...</span>state<span className="token punctuation">[</span>source<span className="token punctuation">.</span>droppableId<span className="token punctuation">]</span><span className="token punctuation">.</span>items<span className="token punctuation">[</span>source<span className="token punctuation">.</span>index<span className="token punctuation">]</span> <span className="token punctuation">{'}'}</span><span className="token punctuation">;</span><br />
                        <span>   </span>console<span className="token punctuation">.</span><span className="token function">log</span><span className="token punctuation">(</span><span className="token string">'itemCopy'</span><span className="token punctuation">,</span> itemCopy<span className="token punctuation">)</span><br />
                        <span className="token comment">   //Droppable bắt đầu kéo, tìm thành phần được kéo</span><br />
                        <span className="token keyword">   let</span> index <span className="token operator">=</span> state<span className="token punctuation">[</span>source<span className="token punctuation">.</span>droppableId<span className="token punctuation">]</span><span className="token punctuation">.</span>items<span className="token punctuation">.</span><span className="token function">findIndex</span><span className="token punctuation">(</span><span className="token parameter">item</span> <span className="token operator">=&gt;</span> item<span className="token punctuation">.</span>id <span className="token operator">==</span> itemCopy<span className="token punctuation">.</span>id<span className="token punctuation">)</span><span className="token punctuation">;</span><br />
                        <span className="token comment">   //xoá thành phần đó trong drop bắt đầu (source)</span><br />
                        <span>   </span>state<span className="token punctuation">[</span>source<span className="token punctuation">.</span>droppableId<span className="token punctuation">]</span><span className="token punctuation">.</span>items<span className="token punctuation">.</span><span className="token function">splice</span><span className="token punctuation">(</span>index<span className="token punctuation">,</span> <span className="token number">1</span><span className="token punctuation">)</span><span className="token punctuation">;</span><br />
                        <span className="token comment">   //Droppable thả vào</span><br />
                        <span className="token keyword">   let</span> dropDestination <span className="token operator">=</span> state<span className="token punctuation">[</span>destination<span className="token punctuation">.</span>droppableId<span className="token punctuation">]</span><span className="token punctuation">.</span>items<span className="token punctuation">;</span><br />
                        <span className="token comment">   //thêm drag đó vào drop đến</span><br />
                        <span>   </span>dropDestination<span className="token punctuation">.</span><span className="token function">splice</span><span className="token punctuation">(</span>destination<span className="token punctuation">.</span>index<span className="token punctuation">,</span> <span className="token number">0</span><span className="token punctuation">,</span> itemCopy<span className="token punctuation">)</span><br />
                        <span className="token function">   setState</span><span className="token punctuation">(</span>state<span className="token punctuation">)</span><span className="token punctuation">;</span><br />
                        <span className="token punctuation">{'}'}</span><br />
                    </div>
                </code>
            </pre>

        </div>
    )
}
