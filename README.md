This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Supabase 设置

项目使用Supabase作为后端服务，用于存储用户咨询信息。

### 方法一：使用Supabase CLI（推荐）

1. 安装 [Supabase CLI](https://supabase.com/docs/guides/cli)
   ```bash
   # 使用Homebrew (macOS)
   brew install supabase/tap/supabase

   # 使用NPM
   npm install -g supabase
   ```

2. 登录您的Supabase账户
   ```bash
   supabase login
   ```

3. 本地开发时，启动本地Supabase容器
   ```bash
   pnpm db:start
   ```

4. 运行数据库迁移
   ```bash
   pnpm db:migrate
   ```

5. 如需创建新的迁移，可以使用：
   ```bash
   pnpm db:new migration_name
   ```
   这将在`supabase/migrations`目录下创建一个新的迁移文件。

6. 将本地更改推送到远程Supabase项目：
   ```bash
   # 链接到远程项目(仅首次需要)
   supabase link --project-ref your-project-ref
   
   # 推送迁移到远程数据库
   pnpm db:push
   ```

   > 注意: `your-project-ref` 是您的Supabase项目ID，可以从Supabase URL中找到: `https://<project-ref>.supabase.co`

### 方法二：手动设置

如果不使用CLI，请按照以下步骤手动设置：

1. 在 [Supabase](https://supabase.io) 创建一个新项目
2. 创建一个名为 `contacts` 的新表，包含以下字段:
   - `id`: uuid (主键，默认生成)
   - `name`: text (非空)
   - `email`: text (非空)
   - `phone`: text (非空)
   - `message`: text (非空)
   - `created_at`: timestamp with timezone (默认: now())
3. 在项目的 "Settings > API" 页面找到API URL和anon key
4. 将这些值添加到 `.env` 文件中:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

完成这些步骤后，项目中的咨询表单将保存用户咨询到Supabase数据库中。

## 咨询表单使用指南

项目中已集成了一个联系表单组件 `ContactDialog`，它允许访问者提交咨询请求并存储在Supabase数据库中。

### 基本用法

```tsx
import { ContactDialog } from '@/components/ContactDialog';

// 基本用法
<ContactDialog />
```

### 属性选项

组件接受以下属性:

- `variant`: 按钮的显示样式
  - `default`: 蓝色标准按钮
  - `prominent`: 红色大号按钮，更加醒目
  - `flat`: 文本样式，适用于导航菜单和页脚
- `className`: 自定义CSS类
- `showIcon`: 是否在flat模式下显示外部链接图标（默认为false）

### 示例

标准按钮:
```tsx
<ContactDialog />
```

醒目按钮:
```tsx
<ContactDialog variant="prominent" />
```

导航菜单中的文本链接:
```tsx
<ContactDialog 
  variant="flat" 
  className="hover:text-sya-red border-b-2 border-transparent hover:border-sya-red cursor-pointer" 
/>
```

页脚中的文本链接（带图标）:
```tsx
<ContactDialog 
  variant="flat" 
  className="group inline-flex items-center text-gray-200 hover:text-white transition-colors cursor-pointer" 
  showIcon={true}
/>
```

自定义样式:
```tsx
<ContactDialog variant="prominent" className="bg-green-500 hover:bg-green-400" />
```

### 管理联系请求

提交的联系表单会存储在Supabase的`contacts`表中。您可以通过Supabase仪表板查看和管理这些请求。
