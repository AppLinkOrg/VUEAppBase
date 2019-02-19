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
          component: include('member/member'),
          meta: {
            getUser: true,
          }
        },
      ]
    },
    {
      path: '/mintexample',
      name: 'mintexample',
      component: include('mintexample/mintexample'),
    }
  ]
}]