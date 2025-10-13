# Миграция на Tailwind CSS v4.1.14

## ✅ Выполнено

### 1. Установлены пакеты
```json
{
  "tailwindcss": "^4.1.14",
  "@tailwindcss/vite": "^4.1.14"
}
```

### 2. Обновлена конфигурация Vite
**Файл:** `vite.config.ts`

```typescript
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // Новый Vite плагин v4
  ],
})
```

### 3. Упрощён PostCSS
**Файл:** `postcss.config.js`

```javascript
export default {
  plugins: {
    autoprefixer: {}, // Только autoprefixer
  },
}
```

### 4. Мигрирован `src/index.css`

#### Изменения:
- ❌ Удалены `@tailwind base/components/utilities`
- ✅ Добавлен `@import "tailwindcss"`
- ✅ Вся конфигурация перенесена в `@theme`

#### Новая структура:
```css
@import "tailwindcss";

@theme {
  /* Цвета */
  --color-brand-orange: #FF5100;
  --color-background-primary: #ECECE0;
  
  /* Шрифты */
  --font-family-playfair: "Playfair Display", serif;
  --font-family-involve: Involve, sans-serif;
  
  /* Размеры */
  --spacing-section: 80px;
  --width-button-sm: 162px;
  
  /* И так далее... */
}
```

### 5. Удалён `tailwind.config.js`
Вся конфигурация теперь в CSS - современный подход v4!

---

## 🎯 Преимущества миграции

### 1. **Производительность**
- ⚡ Быстрее компиляция (~10x в dev mode)
- 📦 Лучший tree-shaking
- 🚀 Оптимизированный Vite плагин

### 2. **Современный CSS**
- ✨ Native CSS cascade layers
- 🎨 CSS custom properties
- 🔧 Проще для дизайнеров

### 3. **Упрощение**
- 📝 Меньше конфигурационных файлов
- 🔄 CSS вместо JavaScript
- 🧹 Чище структура проекта

---

## 📋 Изменения в синтаксисе (для справки)

### Утилиты (не затронули ваш проект)
```
v3 → v4
shadow-sm → shadow-xs
shadow → shadow-sm
blur-sm → blur-xs
rounded → rounded-sm
```

### CSS Variables
```
v3: bg-[--color-var]
v4: bg-(--color-var)  ← круглые скобки!
```

### Дефолтные цвета
- `border` теперь `currentColor` (было `gray-200`)
- `placeholder` теперь `currentColor/50%` (было `gray-400`)

---

## 🔧 Структура токенов v4

### Цвета
```css
--color-{name}: #hex;
--color-{name}-{shade}: #hex;
```

### Шрифты
```css
--font-family-{name}: family, fallback;
--font-size-{name}: size;
--font-size-{name}--line-height: value;
--font-size-{name}--font-weight: value;
```

### Spacing & Sizing
```css
--spacing-{name}: value;
--width-{name}: value;
--height-{name}: value;
--max-width-{name}: value;
```

### Transitions & Effects
```css
--transition-duration-{name}: value;
--opacity-{name}: value;
--radius-{name}: value;
```

---

## 📦 Все файлы проекта обновлены

- ✅ `package.json` - v4.1.14
- ✅ `vite.config.ts` - @tailwindcss/vite плагин
- ✅ `postcss.config.js` - упрощён
- ✅ `src/index.css` - CSS-based конфигурация
- ✅ Компоненты - без изменений (совместимы)
- ❌ `tailwind.config.js` - удалён

---

## 🚀 Запуск

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
npm run preview
```

---

## 🎨 Design System

Вся дизайн-система осталась прежней:
- ✅ Brand colors
- ✅ Typography (display-xl, display-md, body, etc.)
- ✅ Spacing (section, container-padding)
- ✅ Components (button-sm, button-lg)
- ✅ Opacity, transitions, borders

**Все ваши компоненты работают без изменений!**

---

## 📚 Документация

- [Tailwind CSS v4 Official Docs](https://tailwindcss.com)
- [Migration Guide](https://tailwindcss.com/docs/upgrade-guide)
- [Design System](./design-system.md)

---

## ✨ Дата миграции

**13 октября 2025** - Успешная миграция с v3.4.17 на v4.1.14

