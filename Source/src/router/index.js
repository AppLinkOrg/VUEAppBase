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
          path: '/member',
          component: include('member/member')
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
      path: '/mobilelogin',
      name: 'mobilelogin',
      component: include('mobilelogin/mobilelogin'),
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
    }
  ]
}]