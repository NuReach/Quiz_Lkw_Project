import { useSelector ,useDispatch  } from 'react-redux';
import { deleteQuestion } from '../../Slice/functionSlice';


export default function SelectedQuestion() {
    const selectedQuestion = useSelector((state)=>state.function.selectedQuestion);
    const dispatch = useDispatch();
    const removeQuestion = (e,id)=>{
        e.preventDefault();
        dispatch(deleteQuestion({deletedItemId:id}));
    }
  return (
    <div>
        <p className='font-semibold text-xs'>Selectd Question</p>
        {
            selectedQuestion.length === 0 ? <p className=' text-xs text-black'>No selected item</p> : ""
        }
        <div>
          {
                selectedQuestion.map((item,i)=>(
                    <div className=' flex justify-between my-6' key={i}>
                        <div  className='font-bold w-full text-sm flex flex-wrap  items-center border-b-2 pb-3 gap-3 cursor-pointer '>
                            <p className='w-6'>{i+1}</p>
                            <div className=''>
                            <p className=' font-medium text-gray-600 line-clamp-1 w-64 capitalize'>{item.question_prompt}</p>
                            </div>
                            <p className='  font-medium text-gray-600 line-clamp-1 w-24 capitalize'>{item.question_type}</p>
                            <p className=' font-medium text-gray-600 line-clamp-1 capitalize'>{item.question_level}</p>
                        </div>
                        <div>
                        <svg onClick={(e)=>removeQuestion(e,item.id)}  className='cursor-pointer items-end' xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="m6.4 18.308l-.708-.708l5.6-5.6l-5.6-5.6l.708-.708l5.6 5.6l5.6-5.6l.708.708l-5.6 5.6l5.6 5.6l-.708.708l-5.6-5.6z"/></svg>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
