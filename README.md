# Демонстрация возможностей react-router и роутов nextjs

## React-router 
### Инициализация
```bash
    yarn create vite . --template react-ts
    yarn add react-router-dom
    yarn add -D @types/react-router-dom
```

### Базовое использование:
В основном файле (для vite это main.tsx, для cra - App.tsx) добавляем подключение роутера и описание роутов:
```js
<BrowserRouter>
  <Routes>
    <Route path="/" element={<ViteReactPage />}/>
    <Route path="/vite" element={<VitePage />}/>
    <Route path="/react" element={<ReactPage />}/>
    <Route path="/hello/:name" element={<DynamicRoute />} />
    <Route path="/404" element={ <NotFound /> } />
    <Route path="*" element={ <Navigate to="/404" replace />} />
  </Routes>
</BrowserRouter>
```
В параметре `path` прописывается путь, по которому будет доступна страница.
Компонент для отображения страницы передается в `element`.

Динамический роут - множество адресов, объединенное в один кластер. Например, пути вида `/client/10` и `/client/12` можно объединить в кластер вида `/client/${id}`.
Чтобы такие пути обрабатывались в одном компоненте нужно в качестве параметра `path` указать динамическую часть следующим образом: `:dynamic-part`, например, `/hello/:name`.
В компоненте получить доступ к этой части url можно следующим методом:
```js
  const {name} = useParams();
```

Более подробная информация [здесь](https://reactrouter.com/en/main/start/tutorial)


## Next.js
### Инициализация
```bash
    yarn create next-app . --typescript
```

### Базовое использование:
В директории `pages` создается нужная структура файлов и папок, которая будет соответствовать будущему роутингу.
- директория `pages` соответствует корневому роуту `/`
- файл `index.{jsx,tsx}` не добавляет ничего к роуту директории. Так называемый роут по умолчанию. Например, файл `pages/index.tsx` соответствует пути `/`
- остальные файлы добавляют к роуту свое название, кроме нескольких исключений. Например, файл `pages/deploy` соответствует роуту `/deploy`
- имя директории добавляется к роуту. Например, файл `/pages/documentation/index.tsx` соответствует роуту `/documentation/`
- для создания динамического роута название файла нужно взять в квадратные скобки. Например, `/pages/hello/[name].tsx` соответствует все роутам вида `/hello/${name}`. При этом к параметру `name` можно получить внутри компонент с помощью хука:
```js 
  const {query} = useRouter()
  const {name} = query;
```

Более подробная информация [здесь](https://nextjs.org/docs/api-routes/introduction)