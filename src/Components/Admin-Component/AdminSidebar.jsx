import { useQueryClient } from '@tanstack/react-query';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function AdminSiderbar({path}) {
    const location = useLocation();
    const route = location.pathname;
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const menu = [
        {
            title:"Notification",
            link:"/admin/notification/page",
            icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M4 21q-.825 0-1.412-.587T2 19V5q0-.825.588-1.412T4 3h16q.825 0 1.413.588T22 5v14q0 .825-.587 1.413T20 21zm2-4h5v-2H6zm0-4h5v-2H6zm0-4h5V7H6zm10 8h2v-2h-2zm0-4h2V7h-2z"/></svg>',
        },
      {
          title:"User",
          link:"/admin/user/page",
          icon:'<svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M4 21V9l8-6l8 6v12h-6v-7h-4v7z"/></svg>',
      },
      {
          title:"Profile",
          link:"/teacher/profile",
          icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M5.85 17.1q1.275-.975 2.85-1.537T12 15q1.725 0 3.3.563t2.85 1.537q.875-1.025 1.363-2.325T20 12q0-3.325-2.337-5.663T12 4Q8.675 4 6.337 6.338T4 12q0 1.475.488 2.775T5.85 17.1M12 13q-1.475 0-2.488-1.012T8.5 9.5q0-1.475 1.013-2.488T12 6q1.475 0 2.488 1.013T15.5 9.5q0 1.475-1.012 2.488T12 13m0 9q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22"/></svg>',
      },   
    ];
    const channels = [
        {
            title:"Facebook",
            link:"https://www.facebook.com/LimkokwingCambodia",
            icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"/></svg>',
        },
        {
            title:"Youtube",
            link:"https://www.youtube.com/@LimkokwingUniversityOfficial",
            icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16"><path fill="currentColor" d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104l.022.26l.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105l-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006l-.087-.004l-.171-.007l-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103l.003-.052l.008-.104l.022-.26l.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007l.172-.006l.086-.003l.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/></svg>',
        },
        {
            title:"Website",
            link:"https://www.limkokwing.net/cambodia/",
            icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm0-2h10.5v-3.5H4zm12.5 0H20V9h-3.5zM4 12.5h10.5V9H4z"/></svg>',
        },
      
    ]
    return (
      <div className=' border w-fit p-3 shadow-lg flex flex-col md:min-w-48 h-auto pb-24  z-30'>
          <section className='flex flex-col space-y-6 border-b-2 pb-6 mt-2'>
              {
                  menu.map((item,i)=>(
                      <Link to={item.link} key={i} className={ (route==item.link || path==item.link) ?'text-white bg-black p-3 rounded-md md:justify-normal justify-center font-bold flex space-x-3 items-center text-sm cursor-pointer':'text-gray-600 font-bold md:justify-normal justify-center flex space-x-3 items-center text-sm cursor-pointer'}>
                          <div dangerouslySetInnerHTML={{ __html: item.icon }} />
                          <p className='hidden md:block'>{item.title}</p>
                      </Link>
                  ))
              }
          </section>
          <section className='flex flex-col space-y-6 border-b-2 pb-6 '>
          <p className='font-bold text-gray-500 text-sm hidden md:block mt-3'>Channels</p>
              {
                  channels.map((item,i)=>(
                      <a href={item.link} target='_blank' key={i} className={ route==item.link ?'text-white bg-black p-3 rounded-md font-bold flex space-x-3 justify-center md:justify-normal items-center text-sm cursor-pointer':'text-gray-600 justify-center md:justify-normal font-bold flex space-x-3 items-center text-sm cursor-pointer'}>
                          <div dangerouslySetInnerHTML={{ __html: item.icon }} />
                          <p  className='hidden md:block'>{item.title}</p>
                      </a>
                  ))
              }
          </section>
          <section onClick={()=>{
            localStorage.removeItem("userData");
            queryClient.invalidateQueries(['user']);
            navigate("/login")
          }}  className='text-gray-600 font-bold md:justify-normal justify-center flex space-x-3 items-center text-sm cursor-pointer mt-3'>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M6 2h9a2 2 0 0 1 2 2v2h-2V4H6v16h9v-2h2v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2"/><path fill="currentColor" d="M16.09 15.59L17.5 17l5-5l-5-5l-1.41 1.41L18.67 11H9v2h9.67z"/></svg>
            <p className='hidden md:block'>Log out</p>
          </section>
      </div>
    )
  }
