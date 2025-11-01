-- Create app_role enum
CREATE TYPE public.app_role AS ENUM ('admin', 'user');

-- Create user_roles table
CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role app_role NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE (user_id, role)
);

ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Create security definer function to check roles
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  )
$$;

-- RLS policies for user_roles
CREATE POLICY "Users can view their own roles"
ON public.user_roles FOR SELECT
USING (auth.uid() = user_id);

CREATE POLICY "Only admins can manage roles"
ON public.user_roles FOR ALL
USING (public.has_role(auth.uid(), 'admin'));

-- Create storage bucket for portfolio images
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'portfolio-images',
  'portfolio-images',
  true,
  10485760,
  ARRAY['image/jpeg', 'image/jpg', 'image/png', 'image/webp']
);

-- Storage policies for portfolio images
CREATE POLICY "Public can view portfolio images"
ON storage.objects FOR SELECT
USING (bucket_id = 'portfolio-images');

CREATE POLICY "Admins can upload portfolio images"
ON storage.objects FOR INSERT
WITH CHECK (
  bucket_id = 'portfolio-images' AND
  public.has_role(auth.uid(), 'admin')
);

CREATE POLICY "Admins can delete portfolio images"
ON storage.objects FOR DELETE
USING (
  bucket_id = 'portfolio-images' AND
  public.has_role(auth.uid(), 'admin')
);

-- Create portfolio_images table
CREATE TABLE public.portfolio_images (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  category TEXT NOT NULL,
  image_url TEXT NOT NULL,
  storage_path TEXT NOT NULL,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE public.portfolio_images ENABLE ROW LEVEL SECURITY;

-- RLS policies for portfolio_images
CREATE POLICY "Anyone can view portfolio images"
ON public.portfolio_images FOR SELECT
USING (true);

CREATE POLICY "Admins can insert portfolio images"
ON public.portfolio_images FOR INSERT
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update portfolio images"
ON public.portfolio_images FOR UPDATE
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete portfolio images"
ON public.portfolio_images FOR DELETE
USING (public.has_role(auth.uid(), 'admin'));

-- Create trigger for updated_at
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_portfolio_images_updated_at
BEFORE UPDATE ON public.portfolio_images
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();