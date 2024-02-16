import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Sidebar from '../Components/Sidebar/Sidebar'
import Footer from '../Components/Footer/Footer'
import ProfileCard from '../Components/Card/ProfileCard'

export default function Home() {
  return (
    <div>
        <Navbar />
        <div className='flex '>
            <Sidebar />
            <div className=' flex flex-wrap w-full justify-center'>
                <section className='md:w-72 m-6'>
                    <ProfileCard />
                    <div className='border rounded-lg shadow-lg p-3 mt-3'>
                        <div className='text-sm uppercase font-bold'>
                            <p className='text-orange-500'>Your Quizes</p>
                            <p className='text-gray-500 text-xs'>6 quizes created</p>
                        </div>
                        <div className='my-3 border-b pb-3 flex space-x-3 items-center'>
                            <img className='w-9' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzpfF9JQ8S-3yextczkPpYtj7yi660mfH9kBLtj564KgPfq2_DrAbayHSI8XtqUTiI9T8&usqp=CAU" alt="" />
                            <div className='text-xs font-bold'>
                                <p>Math Limit</p>
                                <p className='text-gray-500'>Total : 20 Question</p>
                            </div>
                        </div>
                        <div className='my-3 border-b pb-3 flex space-x-3 items-center'>
                            <img className='w-9' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzpfF9JQ8S-3yextczkPpYtj7yi660mfH9kBLtj564KgPfq2_DrAbayHSI8XtqUTiI9T8&usqp=CAU" alt="" />
                            <div className='text-xs font-bold'>
                                <p>Math Limit</p>
                                <p className='text-gray-500'>Total : 20 Question</p>
                            </div>
                        </div>
                        <div className='my-3 border-b pb-3 flex space-x-3 items-center'>
                            <img className='w-9' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzpfF9JQ8S-3yextczkPpYtj7yi660mfH9kBLtj564KgPfq2_DrAbayHSI8XtqUTiI9T8&usqp=CAU" alt="" />
                            <div className='text-xs font-bold'>
                                <p>Math Limit</p>
                                <p className='text-gray-500'>Total : 20 Question</p>
                            </div>
                        </div>
                        
                    </div>
                </section>
                <section className='md:w-72 m-6 w-full'>
                    <div className='border rounded-lg shadow-lg p-3 '>
                        <div className='text-sm uppercase font-bold'>
                            <p className='text-blue-500'>Total Participants</p>
                            <p className='text-gray-500 text-xs'>120 Students</p>
                        </div>
                    </div>
                    <div className='border rounded-lg shadow-lg p-3 mt-3'>
                        <div className='text-sm uppercase font-bold'>
                            <p className='text-pink-500'>Last Quiz</p>
                            <p className='text-gray-500 text-xs'>Updated at : 2024-15-02</p>
                        </div>
                        <div className='my-3 border-b pb-3 flex space-x-3 items-center'>
                            <img className='w-9' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzpfF9JQ8S-3yextczkPpYtj7yi660mfH9kBLtj564KgPfq2_DrAbayHSI8XtqUTiI9T8&usqp=CAU" alt="" />
                            <div className='text-xs font-bold'>
                                <p>Math Limit</p>
                                <p className='text-gray-500'>Total : 20 Question</p>
                            </div>
                        </div>
                        <div className='my-3 border-b pb-3 flex space-x-3 items-center'>
                            <img className='w-9' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzpfF9JQ8S-3yextczkPpYtj7yi660mfH9kBLtj564KgPfq2_DrAbayHSI8XtqUTiI9T8&usqp=CAU" alt="" />
                            <div className='text-xs font-bold'>
                                <p>Math Limit</p>
                                <p className='text-gray-500'>Total : 20 Question</p>
                            </div>
                        </div>
                        <div className='my-3 border-b pb-3 flex space-x-3 items-center'>
                            <img className='w-9' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzpfF9JQ8S-3yextczkPpYtj7yi660mfH9kBLtj564KgPfq2_DrAbayHSI8XtqUTiI9T8&usqp=CAU" alt="" />
                            <div className='text-xs font-bold'>
                                <p>Math Limit</p>
                                <p className='text-gray-500'>Total : 20 Question</p>
                            </div>
                        </div>
                    </div>
                    <div className='border rounded-lg shadow-lg p-3 mt-3'>
                        <div className='text-sm uppercase font-bold'>
                            <p className='text-green-500'>Your Questios</p>
                            <p className='text-gray-500 text-xs'>120 Questions created</p>
                        </div>
                        <div className='my-3 border-b pb-3 flex space-x-3 items-center'>
                            <img className='w-12 ' src="https://kahoot.com/files/2020/01/OpenEndedBiz-01-2020-Blog.png" alt="" />
                            <div className='text-xs font-bold'>
                                <p>True or False</p>
                                <p className='text-gray-500'>Total : 20 Question</p>
                            </div>
                        </div>
                        <div className='my-3 border-b pb-3 flex space-x-3 items-center'>
                            <img className='w-12' src="https://kahoot.com/files/2020/01/OpenEndedBiz-01-2020-Blog.png" alt="" />
                            <div className='text-xs font-bold'>
                                <p>QCM</p>
                                <p className='text-gray-500'>Total : 20 Question</p>
                            </div>
                        </div>
                        <div className='my-3 border-b pb-3 flex space-x-3 items-center'>
                            <img className='w-12' src="https://kahoot.com/files/2020/01/OpenEndedBiz-01-2020-Blog.png" alt="" />
                            <div className='text-xs font-bold'>
                                <p>Asnwer Question</p>
                                <p className='text-gray-500'>Total : 20 Question</p>
                            </div>
                        </div>
                    </div>
                    {/* <div className='border rounded-lg shadow-lg p-3 mt-3'>
                        <div className='text-sm uppercase font-bold'>
                            <p className='text-purple-700'>News</p>
                            <p className='text-gray-500 text-xs line-clamp-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis unde voluptate, magni laudantium cum voluptatum maxime ab 
                            soluta molestiae quaerat repellat error id accusamus nostrum assumenda iusto veniam quo velit.</p>
                        </div>
                        <div>
                            <img className='w-full max-h-72 object-contain' src="/pic/news1.jpg" alt="" />
                        </div>
                    </div>
                    <div className='border rounded-lg shadow-lg p-3 mt-3'>
                        <div className='text-sm uppercase font-bold'>
                            <p className='text-purple-700'>News</p>
                            <p className='text-gray-500 text-xs line-clamp-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis unde voluptate, magni laudantium cum voluptatum maxime ab 
                            soluta molestiae quaerat repellat error id accusamus nostrum assumenda iusto veniam quo velit.</p>
                        </div>
                        <div>
                            <img className='w-full max-h-72 object-contain' src="/pic/news2.jpg" alt="" />
                        </div>
                    </div> */}
                </section>
                <section className='m-6 mid' >
                    <div>
                        <img className='rounded-lg w-full object-cover'  src="https://vulcanpost.com/wp-content/uploads/2021/06/lim-kok-wing-death-001.jpg" alt="" />
                    </div>
                    <div>
                        <img className='rounded-lg w-full object-cover mt-3'  src="https://scontent.fpnh1-2.fna.fbcdn.net/v/t39.30808-6/301793262_451790450314142_6913448207814855704_n.png?_nc_cat=110&ccb=1-7&_nc_sid=783fdb&_nc_eui2=AeFaw_KIUuUxLN_eEqeQe0Yl89jk26Eawi7z2OTboRrCLl_maxsCO0CKAwPg924b-9b_B3ehh2okrkoOgM1AOZpF&_nc_ohc=DUBCnXOzfzsAX9AUSQO&_nc_ht=scontent.fpnh1-2.fna&oh=00_AfDRakzOPC2yPsS04HjsTCDYmIDnWysegMir_YswjlKpnQ&oe=65BCA84F" alt="" />
                    </div>
                    <div>
                        <img className=" w-full object-cover mt-3 rounded-lg" src="/pic/cover2.jpg" alt="" />
                    </div>
                </section>
            </div>
        </div>
        <Footer />
    </div>
  )
}
