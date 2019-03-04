import App from '../App'

const include = (name) => {
  return resolve => require(['pages/' + name], resolve);
}

let lock = false

export default [{
  path: '/',
  component: App,
  children: [{
      path: '',
      redirect: '/tabs'
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
        }
      ]
    },
    {
      path: '/mobilelogin',
      name: 'mobilelogin',
      component: include('mobilelogin/mobilelogin'),
    },
    {
      path: '/mybaby',
      name: 'mybaby',
      component: include('mybaby/mybaby'),
    },
    {
      path: '/login',
      name: 'login',
      component: include('login/login'),
    },
    {
      path: '/mobilelogin',
      name: 'mobilelogin',
      component: include('mobilelogin/mobilelogin'),
    },
    {
      path: '/addbaby',
      name: 'addbaby',
      component: include('addbaby/addbaby'),
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
      path: '/momentdetails',
      name: 'momentdetails',
      component: include('momentdetails/momentdetails')
    },
    {
      path: '/share',
      name: 'share',
      component: include('share/share')
    }
  ]
}]