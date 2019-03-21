import App from '../App'

const include = (name) => {
  return resolve => require(['pages/' + name], resolve);
}

let lock = false

export default  [{
  
  path: '/',
  component: App,
  children: [{
      path: '',
      redirect: '/home'
    },
    {
      path: '/tabs',
      redirect: {
        path: 'home'
      },
      component: include('tabs'),
      children: [{
          path: '/home',
          component: include('home/home')
        },
        {

          path: '/childcarering',
          component: include('childcarering/childcarering')
        },
        {
          path: '/Information',
          component: include('Information/Information')
        },
        {

          path: '/mine',
          component: include('mine/mine')
        },
      ]
    },
    {
      path: '/mobilelogin',
      name: 'mobilelogin',
      component: include('mobilelogin/mobilelogin'),
    },
    {
      path: '/login',
      name: 'login',
      component: include('login/login'),
    },
    {
      path: '/infminfo',
      name: 'infminfo',
      component: include('infminfo/infminfo'),
    },
    {
      path: '/mobilelogin',
      name: 'mobilelogin',
      component: include('mobilelogin/mobilelogin'),
    },
    {
      path: '/momentdetails',
      name: 'momentdetails',
      component: include('momentdetails/momentdetails'),
    },
    {
      path: '/forgetpassword',
      name: 'forgetpassword',
      component: include('forgetpassword/forgetpassword')
    },
    {
      path: '/register',
      name: 'register',
      component: include('register/register')
    },
    {
      path: '/wxauthlogin',
      name: 'wxauthlogin',
      component: include('wxauthlogin/wxauthlogin')
    },
    {
      path: '/ceshi',
      name: 'ceshi',
      component: include('ceshi/ceshi')
    },
    {
      path: '/share',
      name: 'share',
      component: include('share/share')
    },
    {
      path: '/mine',
      name: 'mine',
      component: include('mine/mine')
    },
    {
      path: '/addbaby',
      name: 'addbaby',
      component: include('addbaby/addbaby')
    },
    {
      path: '/childcarering',
      name: 'childcarering',
      component: include('childcarering/childcarering')
    },
    {
      path: '/Information',
      name: 'Information',
      component: include('Information/Information')
    },
    {
      path: '/realtimedata',
      name: 'realtimedata',
      component: include('realtimedata/realtimedata')
    },
    {
      path: '/Bluetooth',
      name: 'Bluetooth',
      component: include('Bluetooth/Bluetooth')
    },
    {
      path: '/setting',
      name: 'setting',
      component: include('setting/setting')
    },
    {
      path: '/mylike',
      name: 'mylike',
      component: include('mylike/mylike')
    },
    {
      path: '/historydata',
      name: 'historydata',
      component: include('historydata/historydata')
    },
    {
      path: '/mybaby',
      name: 'mybaby',
      component: include('mybaby/mybaby')
    }
  ]
}]