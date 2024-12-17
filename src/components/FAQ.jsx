import React from 'react'
import "./FAQ.css"
import { Md18Mp } from "react-icons/md";
const qs = [
    "넷플릭스에서 어떤 콘텐츠를 시청할 수 있나요?",
    "넷플릭스란 무엇인가요?",
    "넷플릭스 요금은 얼마인가요?",
    "어디에서 시청할 수 있나요?",
    "멤버십을 해지하려면 어떻게 하나요?",
    "아이들이 넷플릭스를 봐도 좋을까요?",
];
const nqs =[
  {
    q:"넷플릭스에서 어떤 콘텐츠를 시청할 수 있나요?",
    a: 'Lorem'
  },
  {
    q:"넷플릭스란 무엇인가요?",
    
  },
  {
    q:"넷플릭스 요금은 얼마인가요?",
    
  },
  {
    q:"어디에서 시청할 수 있나요?",
    
  },
  {
    q:"멤버십을 해지하려면 어떻게 하나요?",
    
  },
  {
    q:"아이들이 넷플릭스를 봐도 좋을까요?",
    
  },

]
const title = '자주 묻는 질문'
const FAQ = () => {

  return (
    <div className='faq'>
      <h3>{title}</h3>
      
      <ul>
        {nqs.map(
            (q,i) => {
                return(
         <li>
                        <button key={i}>{q.q}<span>+</span></button>
                   
                        {q.a && (
                <div>
                  <p>{q.a}</p>
                  <a href="">ㄱㄱㅅ</a>
                </div>
              )}
                    
         </li>
                    
          
                )
            }
        )}
      </ul>
    </div>
            
           
                
            
                
            
                
               
            
            
               
           
            
                
            
  )
}

export default FAQ
            
{/* <div>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae amet quasi facere vitae id incidunt in nemo quam consectetur numquam, et consequatur voluptates ullam eligendi deleniti sunt natus, vero molestias!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut molestiae neque aliquam ex deleniti atque dolorum, expedita cupiditate aperiam eveniet omnis. Soluta qui dicta autem error in saepe, placeat a?
                    </p>
                    <a href="">넷플릭스에서 어떤 콘텐츠를 시청할수 있나요?</a>
                </div>         */}
