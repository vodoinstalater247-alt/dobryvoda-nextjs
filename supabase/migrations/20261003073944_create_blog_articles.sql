create table public.blog_articles (
  id bigint generated always as identity primary key,
  title text not null check (char_length(trim(title)) between 1 and 240),
  slug text not null unique check (slug ~ '^[a-z0-9]+(?:-[a-z0-9]+)*$'),
  excerpt text,
  content_html text not null,
  cover_image_url text,
  seo_title text,
  seo_description text,
  status text not null default 'published' check (status in ('draft', 'published')),
  source text not null default 'manual' check (source in ('manual', 'autoseo')),
  source_id text not null,
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint blog_articles_source_source_id_key unique (source, source_id)
);

create index blog_articles_published_at_idx
  on public.blog_articles (published_at desc) where status = 'published';

alter table public.blog_articles enable row level security;
revoke all on table public.blog_articles from anon, authenticated;
grant select on table public.blog_articles to anon, authenticated;

create policy "Published articles are publicly readable"
  on public.blog_articles for select to anon, authenticated
  using (status = 'published' and published_at is not null and published_at <= now());

create or replace function public.set_blog_article_updated_at()
returns trigger language plpgsql set search_path = '' as $$
begin new.updated_at = now(); return new; end;
$$;

revoke all on function public.set_blog_article_updated_at() from public;
create trigger blog_articles_set_updated_at before update on public.blog_articles
for each row execute function public.set_blog_article_updated_at();
