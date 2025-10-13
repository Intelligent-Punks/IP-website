# Page Template

## Создание новой страницы

### 1. Создайте файл страницы

`src/pages/YourPage.tsx`:

```tsx
import SEO from '../components/SEO'
import Layout from '../components/layout/Layout'
// Импортируйте нужные секции/компоненты

import { yourPageContent } from '../content/your-page'
import { yourPageSeo } from '../content/seo/your-page'

export default function YourPage() {
  return (
    <Layout mainBackground="bg-brand-cream"> {/* Опционально: передайте фон */}
      <SEO
        title={yourPageSeo.title}
        description={yourPageSeo.description}
        canonical={yourPageSeo.canonical}
        openGraph={yourPageSeo.openGraph}
      />

      {/* Ваш контент */}
      <section className="text-text-primary py-section">
        <div className="max-w-container mx-auto px-container-padding">
          <h1>Your Page Content</h1>
        </div>
      </section>
    </Layout>
  )
}
```

### 2. Добавьте контент

`src/content/your-page.ts`:

```ts
export const yourPageContent = {
  title: 'Page Title',
  description: 'Page description',
  // ... другой контент
} as const
```

### 3. Добавьте SEO

`src/content/seo/your-page.ts`:

```ts
export const yourPageSeo = {
  title: 'Page Title | Intelligent Punks',
  description: 'Page meta description',
  canonical: 'https://intelligentpunks.com/your-page',
  openGraph: {
    title: 'Page Title',
    description: 'Page meta description',
    image: '/images/og-your-page.jpg',
  },
}
```

### 4. Добавьте маршрут

`src/routes.ts`:

```ts
export const routes = {
  home: '/',
  yourPage: '/your-page', // Добавьте новый маршрут
  // ...
} as const
```

### 5. Зарегистрируйте в App

`src/App.tsx`:

```tsx
import YourPage from './pages/YourPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.home} element={<HomePageNew />} />
        <Route path={routes.yourPage} element={<YourPage />} /> {/* Добавьте роут */}
      </Routes>
    </BrowserRouter>
  )
}
```

## Выбор фона страницы

### Черный фон (по умолчанию)
```tsx
<Layout>
  {/* Контент на черном фоне */}
</Layout>
```

### Светлый фон
```tsx
<Layout mainBackground="bg-brand-cream">
  {/* Контент на светлом фоне #ECECE0 */}
</Layout>
```

### Кастомный фон
```tsx
<Layout mainBackground="bg-custom-color">
  {/* Контент на кастомном фоне */}
</Layout>
```

## Структура секции

Стандартная секция с контейнером:

```tsx
<section className="text-text-primary py-section">
  <div className="max-w-container mx-auto px-container-padding">
    {/* Контент (чистая ширина 1360px) */}
  </div>
</section>
```

## Важно

1. **Всегда используйте Layout** - он добавляет Header и Footer
2. **Контент храните отдельно** - в `src/content/`
3. **SEO обязательно** - для каждой страницы
4. **Следуйте структуре контейнера** - `max-w-container` + `px-container-padding`

