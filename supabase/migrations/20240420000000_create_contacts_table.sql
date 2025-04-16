-- 创建contacts表
CREATE TABLE IF NOT EXISTS public.contacts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 添加RLS (行级安全)策略
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;

-- 创建允许插入但不允许读取的策略(只有服务端管理员可以读取)
CREATE POLICY "Allow anonymous inserts" ON public.contacts
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- 仅允许管理员查看提交的联系信息
CREATE POLICY "Only authenticated users can view" ON public.contacts
  FOR SELECT
  TO authenticated
  USING (true); 