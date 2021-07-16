import { MockMethod } from 'vite-plugin-mock'
import Mock from 'mockjs'

const title = ['推荐', '热门', '排行榜', '收藏最多']

const linkTitle = ['标签集', '留言', '日志', '关于']

const feeds: MockMethod = {
  url: '/feeds',
  method: 'get',
  response: () => {
    return Mock.mock({
      code: 20000,
      msg: 'success',
      'data|4-10': [
        {
          'id|+1': 1,
          'image|1': '/images/@integer(1,15).png',
          url: '#/go',
          title: '@cword(4,8)',
          desc: '@cword(20)',
          'tags|1-3': [
            {
              title: '@cword(3,5)',
              url: '#/tag',
            },
          ],
          updateTime: '@date @time'
        },
      ],
    })
  },
}

const links: MockMethod = {
  url: '/links',
  method: 'get',
  response: () => {
    return Mock.mock({
      code: 20000,
      msg: 'success',
      data: [
        {
          name: '标签集',
          url: '#/tag',
        },
        {
          name: '留言',
          url: '#/comment',
        },
        {
          name: '日志',
          url: '#/log',
        },
        {
          name: '关于',
          url: '#/about',
        },
      ],
    })
  },
}

const icp: MockMethod = {
  url: '/icp',
  method: 'get',
  response: () => {
    return Mock.mock({
      code: 20000,
      msg: 'success',
      'data|1': [
        [
          {
            name: 'Desigin by Niudana',
            url: '#/target?url=https://niudana.com'
          },
          // {
          //   name: '粤ICP备XXXXXXX-1号',
          //   url: '@url',
          // }
        ],
      ],
    })
  },
}

const tags: MockMethod = {
  url: '/tags',
  method: 'get',
  response: () => {
    return Mock.mock({
      code: 20000,
      msg: 'success',
      'data|12-25': [
        {
          'id|1': 1,
          url: '/',
          name: '@cword(2,6)',
          tag: '@string("upper", 5, 10)',
          'count|1-100': 100,
        },
      ],
    })
  },
}

const logs: MockMethod = {
  url: '/logs',
  method: 'get',
  response: () => {
    return {
      code: 20000,
      msg: 'success',
      data: [
        `<p><strong>Version 5.0</strong>@date("yyyy年MM月dd日")</p><blockquote><p>@cword(10,15)
        <br>@cword(10,15)，@cword(10,15)；<br>@cword(10,15)，@cword(10,15)；<br>@cword(10,15)，@cword(10,15)；
        <br>@cword(10,15)。</p></blockquote><hr><p><strong>5.0 FAQ</strong></p>
        <p>@cword(10,15)？</p>
        <p><em>@cword(10,15)，@cword(10,15)，@cword(10,15)，@cword(10,15)，@cword(10,15) 
        <a href="/">@cword(10,15)</a>。</em></p><p>@cword(7,15)？</p><p><em>@cword(10,25)，@cword(7,15)，@cword(15,25)。
        </em></p><p>@cword(7,15)？</p><p><em>@cword(15,25)，@cword(4,7)，@cword(7,15)。
        </em></p><p>@cword(7,15)、@cword(3,4)、@cword(2,3)、@cword(2,3)？</p><p><em><a href="/">@cword(7,15)</a>
        </em></p><hr><p><strong>Version 4.4</strong>@date(yy年mm月dd日)</p><blockquote>
        <p>@cword(15,20)，@cword(7,15)。（@cword(7,15)，@cword(7,15)）</p></blockquote><p><strong>Version 4.3</p>
        </blockquote><hr><p><strong>@string('upper',1)@word(5,7) @number().@number()
        </strong>@date(yyyy年MM月dd日) ( <a href="@url()">@string('upper',1)@word(5,7) @string('upper',1)@number()@cword(2,3)</a> )
        </p><blockquote><p>@cword(7,15);<br>@cword(7,15);<br>@cword(7,15);<br>@cword(7,15).</p>
        </blockquote><hr><p><strong>Version 2.1</strong>@date(yyyy年MM月dd日)</p><blockquote>
        <p>@cword(7,15).</p></blockquote>
        <p><strong>Version 2.0</strong>@date(yyyy年MM月dd日) ( <a href="@url()">@string('upper',1)@word(3,5) @string('upper',1)@number(1)@cword(2)</a> )</p>
        <blockquote><p>@cword(4,5)@string('upper',2,5);<br>@cword(7,15)，@cword(7,15).</p></blockquote><hr>
        <p><strong>Version 1.0</strong>@date(yyyy年MM月dd日) ( <a href="/">@word(7,15) @word(2,4)@cword(2,4)</a> )</p>
        <blockquote><p>@cword(2,4) @word(4,7).@word(3) @cword(2);<br>@cword(4).</p></blockquote>
        <p><a href="/"></a> @date("yyyy-MM-dd") @time()</p>`,
      ],
    }
  },
}

export default [feeds, links, icp, tags, logs] as MockMethod[]
