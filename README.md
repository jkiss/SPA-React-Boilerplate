# React SPA template

> :loudspeaker: 
> 1. GOOD for novices who dig up the principle about react-router and redux, fundamental syntax use of redux, NO highly abstract.
> 2. MOST IMPORTANT: The purpose of this template project is to show you principles of redux & react-router, you can expand it on your demand. Such as writing Actions into a seperate file, integrated with [Ant Design](https://github.com/ant-design/ant-design), [code splitting](https://reacttraining.com/react-router/web/guides/code-splitting) and so on.

### :package: Usage：
> Webpack will bundle files into /build folder
```javascript
npm run dev     // Develop command
npm run build   // Build command

// Build environment
node v14.16.0
webpack v5.26.2
@Babel v7.13.10
```

### :space_invader: Code Base:

1. React v17.0.1
2. Redux v4.0.5
3. React-Router-Dom v5.2.0

### :doughnut: Features:

1. React simple page application;
2. Broswer router;
3. Storage data by redux;
4. Precompile css by [stylus](http://stylus-lang.com);
5. HTTP request using async/await;
6. Arrangement files according to DDD(Domain-Driven Design): all module files used under a URL will be stored in the same folder;
7. Bundled by webpack 4;
8. Support ES6 and ES7;

### :anchor: File Structure:

```javascript
./src
├── fonts
│   └── fonts.styl
│
├── htmlTemplates
│   └── app.ejs
│
├── common     // common module include js, css, component etc.
│   ├── com
│   │   ├── Header
│   │   │   ├── index.js
│   │   │   └── css.styl
│   │   ├── Footer
│   │   │   ├── index.js
│   │   │   └── css.styl
│   │   ├── Sidebar
│   │   │   ├── index.js
│   │   │   └── css.styl
│   │   ├── Loading
│   │       ├── index.js
│   │       └── css.styl
│   ├── res               // static resources
│   │   ├── copy          // copy to /build directly
│   │   │   └── thumb.jpg
│   │   ├── 1.jpg
│   │
│   ├── style
│   │   └── reset.styl
│   └── utils
│       ├── wxShare.js
│       └── index.js
│
├── pages   // DDD(domain drive design)
│   ├── 404       // 404 React component
│   │   ├── css.styl 
│   │   └── index.js
│   │
│   ├── NewsList  // NewsList React component match https://example.com/list
│   │   ├── res/        // resource folder(img etc.)
│   │   ├── api.js
│   │   ├── reducer.js 
│   │   ├── css.styl 
│   │   └── index.js
│   │
│   └── Home      // Home React component match https://example.com/home
│       ├── Component1  // component1 only used by Home component
│       │   ├── index.js
│       │   └── css.styl
│       ├── res/
│       │   └── ajax-loader.gif
│       ├── api.js      // ajax url using async/await
│       ├── reducer.js  // every domain has only one reducer, define state and action
│       ├── css.styl    // main css
│       └── index.js    // Home compoent entry
│
├── vendor
│   └── SplitText.min.js
│
├── app.js       // application entry
└── reducers.js  // assemble all components' reducer


/** 
 * config your app in one file to saving your time and making you happy
 */
/config.js
{
    // Deploy
    public_path: '/home'
    ,port: 8686
    ,plugin_url: ''

    // HTML meta data
    ,page:{
        title: 'NULL'
        ,desc: ''
        ,image: ''
        ,url: 'https://url/article/new-era-for-china.html'
        ,thumb: 'https://url/article/images/thumb.jpg'
    }

    // routes
    ,route:{
        home:{
            path: '/home'
        },
        list: {
            path: '/home/list'
        },
        nav1:{
            path: '/nav1'
        },
        nav2:{
            path: '/nav2'
        }
    }

    // request urls
    ,io:{
        home: {
            news_json: 'https://url/home_data.json'
        },
        list: {
            all_news_list: 'https://url/list_data.json'
        }
    }
}
```
