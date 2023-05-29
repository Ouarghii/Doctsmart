export const Sidebar=[
    {
        name:'Add Appointments',
        path:'/dash/appointments',
        icon:'fa-solid fa-list'
    },{
        name:' Doctors',
        path:'/dash/doctors',
        icon:'fa-solid fa-user-doctor'
    },{
        name:'Patients',
        path:'/dash/patients',
        icon:'fa-solid fa-user'
    },{
        name:'Add patients',
        path:'/dash/registerp',
        icon:'fa-solid fa-user'
    }
    ,{
        name:'Logout',
        path:'/dash/logout',
        icon:'fa-solid fa-right-from-bracket',
        onClick: () => {
            // delete the token cookie
            document.cookie = 'token=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
            // redirect to /recepauth
            window.location.href = '/logincard';
          }
    }
]