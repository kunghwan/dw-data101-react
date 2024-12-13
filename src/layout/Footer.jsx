import React from 'react'
import "./Footer.css"
import LangButton from './LangButton'

const Footer = () => {
  return (
    <footer>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, quam. Exercitationem tenetur vel laudantium fugiat dolorum, at placeat nihil reprehenderit consequatur, quae sunt delectus esse. Tempora quod reprehenderit quae placeat.</p>
     
      <ul>
        <li><button>자주 묻는 질문</button></li>
        <li><button>자주 묻는 질문</button></li>
        <li><button>자주 묻는 질문</button></li>
        <li><button>자주 묻는 질문</button></li>
        <li><button>자주 묻는 질문</button></li>
        <li><button>자주 묻는 질문</button></li>
        <li><button>자주 묻는 질문</button></li>
        <li><button>자주 묻는 질문</button></li>
        <li><button>자주 묻는 질문</button></li>
        <li><button>자주 묻는 질문</button></li>
        <li><button>자주 묻는 질문</button></li>
        <li><button>자주 묻는 질문</button></li>
      </ul>
      
     <div className='wrap'>
       <LangButton /
       ></div>
    
   <div className='last'>
    <p>넷플릭스 코리아</p>
    <p className='last_l'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda placeat ab beatae culpa dicta, corporis voluptas facilis dolor voluptatem officiis earum quas sunt quibusdam vero eius itaque laborum delectus neque.</p>
   </div>
    </footer>
  )
}

export default Footer
