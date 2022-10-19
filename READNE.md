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