
export const SidebarMenu=[
    // {
    //     name:'Home',
    //     path:'/doctorapp',
    //     icon:'fa-sharp fa-solid fa-house'
    // },
    {
        name:'Appointments',
        path:'/doctorapp/appointments',
        icon:'fa-solid fa-list'
    },{
        name:'Patients',
        path:'/doctorapp/patients',
        icon:'fa-solid fa-user'
    },{
        name:'Statistics',
        path:'/doctorapp/statistics',
        icon:'fa fa-bar-chart'
    }
    ,{
        name:'Logout',
        path:'/doctorapp/logout',
        icon:'fa-solid fa-right-from-bracket',
        onClick: () => {
            // delete the token cookie
            document.cookie = 'token=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
            // redirect to /doctorauth
            window.location.href = '/logincard';
          }
    }
]
//adminmenu
export const adminMenu=[
    {
        name:'Home',
        path:'/doctorapp',
        icon:'fa-sharp fa-solid fa-house'
    },{
        name:' Doctors',
        path:'/doctorapp/doctors',
        icon:'fa-solid fa-user-doctor'
    },{
        name:'Users',
        path:'/doctorapp/users',
        icon:'fa-solid fa-user'
    },
    {
        name:'Profile',
        path:'/doctorapp/profiles',
        icon:'fa-solid fa-user'
    }
    
    ,{
        name:'Logout',
        path:'/doctorapp/logout',
        icon:'fa-solid fa-right-from-bracket',
        onClick: () => {
            // delete the token cookie
            document.cookie = 'token=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
            // redirect to /recepauth
            window.location.href = '/doctorauth';
          }
    }
]